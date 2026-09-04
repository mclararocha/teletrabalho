# CLAUDE.md

Regras permanentes deste repositório. Leia antes de qualquer alteração.

## O que é este projeto

Protótipo navegável do módulo de teletrabalho do Sistema PROMOVE, da Secretaria de
Estado da Administração de Goiás. Serve para validar regras de negócio com a área
técnica e para especificar o sistema à empresa desenvolvedora.

**Não é software de produção.** Não há back-end, banco de dados nem autenticação. Os
dados exibidos são fictícios.

## Repositório público

Este repositório é público. As normas em `normas/` já foram publicadas no Diário Oficial
e podem ficar aqui.

**A minuta de decreto do teletrabalho não está no repositório e não deve ser commitada**,
porque ainda está em elaboração. Quando uma tarefa depender do texto dela, peça que o
trecho seja colado na conversa. O mesmo vale para qualquer análise que aponte falhas de
redação da minuta.

## Norma de referência

Toda regra implementada deve ser rastreável a um dispositivo normativo. Quando uma tela
exibir número, prazo, percentual ou faixa, o artigo correspondente deve aparecer no
rodapé da seção ou em comentário no HTML. aqui estão normas que servem de referência para a avaliação de desempenho dos servidores em telebrabalho.

Disponíveis em `normas/`:

- `Decreto_Nº_10_802_2025.pdf` — evolução funcional, aplicação supletiva
- `Lei_nº_23_241_2025.pdf` — lei que estabele o que conta e o que não conta como tempo de efetivo exercício
- `IN_007_2025.pdf` — complexidade e quantidade de contratos


**Nunca invente regra.** Se a norma não responder, pare e pergunte.

## Pilha técnica

HTML, CSS e JavaScript sem dependências, sem build, sem framework. Cada tela é um arquivo
servível diretamente pelo GitHub Pages.

Única exceção: a tela do painel central carrega o Chart.js por CDN. Nenhuma outra
biblioteca deve ser introduzida sem combinar antes.

## Persistência local (localStorage)

A regra original deste arquivo proibia `localStorage` porque o protótipo, na fase
inicial, era puramente visual — cada tela um retrato estático, sem estado entre
navegações. A partir da Experiência por Perfis (seletor de perfil + sidebar), o
protótipo passa a simular sessão e um mini banco de dados de demonstração no
navegador, e isso exige persistência entre as telas. Não há back-end nem banco de
dados real: `localStorage` é o substituto de ambos só para efeito de demonstração.

Uso permitido:

- Perfil ativo selecionado no seletor de perfis, para persistir a escolha ao navegar
  entre telas.
- Cenário de exemplo carregado pelo Modo Demonstração (ver seção abaixo).
- Mapeamento de entregas e atividades que a chefia cria na tela 01 (ver "Mapeamento
  interativo (tela 01)" abaixo).
- Outro estado de demonstração explicitamente pedido em uma tarefa.

Continua valendo: não usar `localStorage` para nada que não tenha sido pedido, e
manter os dados simulados consistentes com a persona única (ver "Consistência dos
dados de exemplo").

## Modo Demonstração / Modo Limpo

O protótipo abre por padrão em **Modo Limpo**: sem nada em `localStorage["promove_dados"]`,
cada tela mostra listas e tabelas vazias (classe `.vazio`, com uma mensagem orientando o
próximo passo) e métricas zeradas. Os botões "Carregar Demonstração" e "Modo Limpo (Novo
Caso)", fixos no rodapé da sidebar (`navigation.js`), alternam esse estado — carregar
grava o cenário de exemplo inteiro em `localStorage` e recarrega a página; limpar remove
a chave e recarrega.

- `assets/js/demo-data.js` — objeto `DEMO_DATA`, com o cenário de exemplo (persona
  Maria da Silva / João Ferreira / Gerência de Saúde / SEAD) hoje espalhado pelas 13
  telas. Organizado por tela (`tela01`, `tela02`, ...), com os blocos `servidor` e
  `chefia` compartilhados onde o dado realmente coincide entre telas. **Não existe
  um array único de entregas/atividades reaproveitado por todas as telas** — o
  cenário atual já conta versões ligeiramente diferentes da mesma entrega em telas
  diferentes (ex.: a Entrega 3 da pactuação é um rascunho ainda não enviado; a
  Entrega 3 do plano de trabalho do servidor é outra), e forçar um array único
  exigiria inventar qual versão é a "certa" — o que fere a regra de não inventar
  dado novo.
- `assets/js/store.js` — `PromoveStore.carregarDemo()` / `.limpar()` / `.dados()` /
  `.modoAtivo()`. `dados()` retorna o objeto salvo ou `null`; a presença da chave
  `localStorage["promove_dados"]` é o único critério de modo, não há uma chave
  separada para "modo".
- Cada tela carrega `demo-data.js` e `store.js` antes de `navigation.js` no
  `<head>`, e no fim do arquivo lê `PromoveStore.dados()` para montar o HTML das
  listas/tabelas/gráficos — vazio quando `null`, a partir do bloco `dados.telaNN`
  quando houver. Os cliques em `.acc-h`/`.ent-h` (acordeão) usam delegação de
  evento em `document`, não mais `querySelectorAll` no carregamento da página,
  porque o conteúdo agora é montado depois que o script original rodaria.
- Campos de formulário (inputs/selects já em "Modo Limpo" desde a tarefa anterior)
  não mudam com o Modo Demonstração/Limpo — continuam sempre em branco, com
  `placeholder` extraído do cenário quando fizer sentido. O que os dois modos
  alternam é o conteúdo somente leitura (listas, tabelas, chips, métricas,
  gráficos), não os campos que o usuário preenche.
- A tela 10 (Calculadora) fica fora do `DEMO_DATA`: `COMPLEX`/`ICOMP`/`PRESETS` são
  regras do decreto, não dado de exemplo, e o simulador já funciona em branco.

## Mapeamento interativo (tela 01)

A tela 01 (perfil Chefia da Unidade) tem um fluxo de "Acrescentar entrega e
atividades" que grava dado real digitado pela chefia, não um cenário de exemplo —
por isso usa uma chave própria, `localStorage["promove_mapeamento"]`, separada de
`promove_dados`. Gravar aí não pode reaproveitar a chave do Modo Demonstração
porque as outras 12 telas assumem que, se `promove_dados` existe, o objeto inteiro
(`dados.tela02`, `dados.tela03`, ...) existe também.

- `PromoveStore.salvarMapeamento(entregas)` / `.mapeamentoUsuario()` — gravam e lêem
  o array de entregas próprias da unidade. `PromoveStore.limpar()` (o botão "Modo
  Limpo (Novo Caso)") apaga as duas chaves juntas, porque "novo caso" inclui
  descartar um mapeamento em andamento.
- Ordem de exibição da tela 01: mapeamento do usuário (se existir) → cenário do
  Modo Demonstração (só leitura, como já era) → estado vazio. Um mapeamento
  próprio sempre tem prioridade sobre o cenário de demonstração, mesmo com os
  dois carregados ao mesmo tempo.
- O formulário de nova entrega fica em dois blocos que se renderizam
  separadamente: o cabeçalho (nome/tipo da entrega) é montado uma única vez ao
  clicar em "Acrescentar entrega"; só a lista de atividades e o formulário de
  atividade dentro dele se re-renderizam a cada "Salvar atividade" — se o
  cabeçalho fosse refeito junto, o texto já digitado se perderia a cada atividade
  incluída.
- A tabela de complexidade (`COMPLEX`/InCp) usada no cálculo ao vivo do formulário
  é a mesma da tela 10, duplicada ali porque cada tela é um HTML autossuficiente
  (sem build, sem módulo JS compartilhado de regra de negócio). Se a tabela mudar,
  precisa mudar nas duas telas.
- "Esforço estimado (horas/mês)" — tempo unitário × quantidade × ocorrências médias
  da periodicidade escolhida por mês — é conveniência de planejamento, não cálculo
  normativo da nota (não tem artigo correspondente): serve só para a chefia ter
  noção de carga de trabalho ao cadastrar, não é usado na nota da atividade nem na
  Calculadora.

## Estrutura

```
index.html                hub de navegação, com o seletor de perfil
telas/                    uma tela por arquivo, numeradas
normas/                   legislação publicada, em PDF
assets/css/promove.css    folha compartilhada, fonte única da verdade visual
assets/js/navigation.js   fonte única da sidebar e do seletor de perfil
assets/js/demo-data.js    cenário de exemplo do Modo Demonstração
assets/js/store.js        leitura/escrita do cenário de exemplo em localStorage
docs/                     decisões de projeto
INSTRUCOES.md             fila de tarefas
```

## Navegação por perfil

`assets/js/navigation.js` é a fonte única de quais telas pertencem a cada perfil
(Chefia da Unidade, Servidor, Titular/RH Setorial, Órgão Central) e com que rótulo —
a mesma tela pode ter um rótulo diferente por perfil (ex.: a tela 03 é "Elaboração e
Validação pela Chefia" para a chefia e "Visualização e Aceite do Servidor" para o
servidor). Ao acrescentar ou remover uma tela de um perfil, altere `PERFIS` nesse
arquivo — nunca duplique a lista em HTML.

O perfil **Órgão Central (SEAD)** enxerga todas as telas do fluxo, agrupadas por
fase, e é o **perfil padrão**: sem escolha salva em `localStorage`, `index.html` e
a sidebar de qualquer tela partem dessa visão completa. Não existe mais um perfil
"Visão Completa" separado — o Órgão Central acumula esse papel.

Cada tela carrega esse script e chama `PromoveNav.init({ atual: "NN", raiz: "" })`
(no `index.html`, `raiz: "telas/"` e `atual: null`). O script renderiza:

- a sidebar (`#sidebar`, dentro de `.app-shell`), agrupada por fase para os perfis
  que seguem o fluxo completo, com a Calculadora fixada ao final;
- o seletor de perfil (`#seletor-perfil`), que grava a escolha em `localStorage`
  (chave `promove_perfil`) e não redireciona a tela atual;
- no `index.html`, o filtro dos grupos de card por `data-perfis` no `.grupo`.

Toda tela nova precisa: do `<script src=".../navigation.js">`, do `<div class="app-shell">`
com `<aside id="sidebar" class="sidebar"></aside>` seguido do contêiner de conteúdo
(`<div class="wrap">`/`<div class="wrap wrap-wide">`, ou `<main class="wrap wrap-wide">`
no caso do `index.html`), do contêiner `<div id="seletor-perfil"></div>` no lugar do
antigo `<span class="nav-role">`, e da chamada `PromoveNav.init(...)` antes de
`</body>`.

## Formulários sem dado de exemplo ("Modo Limpo")

Campos de formulário (`<input>`, `<select>`, `<textarea>`) não carregam mais valor
de exemplo chumbado no HTML — usam `placeholder` (texto/número) ou ficam vazios
(data/hora, que não renderizam placeholder de forma confiável em todos os
navegadores). `<select>` ganha uma primeira opção neutra "Selecionar" no lugar do
antigo `<option selected>`. O objetivo é permitir popular os campos via JavaScript
no futuro (um eventual `store.js`), sem dado fictício sobrando na marcação.

Isso vale só para **campos editáveis**. Texto de exibição somente leitura (spans
`.v`, `.calc`, `.os v`/`.oc v` etc.) continua usando os dados da persona única —
ver "Consistência dos dados de exemplo".

Exceção: o `<select id="carga">` (carga diária) da calculadora (tela 10) mantém o
valor padrão de 8 horas, porque é parâmetro operacional do simulador — sem ele,
`montaPresets()` quebra ao indexar `PRESETS[""]`. A função `calc()` da mesma tela
trata a ausência de impacto/dificuldade/qualidade apurada com uma verificação de
guarda no início (retorna cedo com mensagem "Selecione..." em vez de tentar montar
o resultado com valores indefinidos).

## Telas

| Arquivo | Tela | Perfil |
|---------|------|--------|
| `01_-_Teletrabalho_-_Mapeamento.html` | Mapeamento de entregas e atividades | Titular da unidade |
| `02_-_Teletrabalho_-_Adesao.html` | Requerimento de adesão | Servidor e chefia |
| `03_-_Teletrabalho_-_Pactuacao.html` | Pactuação do plano de trabalho | Servidor e chefia |
| `04_-_Teletrabalho_-_Servidor.html` | Plano de trabalho do servidor | Servidor |
| `05_-_Teletrabalho_-_Chefia.html` | Verificação dos resultados | Chefia imediata |
| `06_-_Teletrabalho_-_Painel_Setorial.html` | Painel da unidade setorial | Unidade setorial |
| `07_-_Teletrabalho_-_Ordem_Apurada.html` | Ordem apurada do órgão | Unidade setorial |
| `08_-_Teletrabalho_-_Desligamentos_Unidade.html` | Desligamentos da unidade | Unidade setorial |
| `09_-_Teletrabalho_-_Painel_Central.html` | Painel do órgão central | Órgão central |
| `10_-_Teletrabalho_-_Calculadora_Resultado.html` | Cálculo da nota da atividade | Demonstração |
| `11_-_Teletrabalho_-_Registro_de_Evidencia.html` | Registro de evidência | Servidor |
| `12_-_Teletrabalho_-_Relatorio_Semanal.html` | Relatório semanal montado | Servidor |
| `13_-_Teletrabalho_-_Repactuacao.html` | Repactuação do plano de trabalho | Servidor e chefia |

## Convenções

- **Idioma:** português do Brasil em tudo, inclusive nomes de classe e comentários.
- **Versões:** o histórico é o Git. Não crie `-v2`, `-v3` no nome do arquivo.
- **Tokens:** cores, raios e espaçamentos vêm sempre de variáveis CSS de `promove.css`.
  Nenhum valor hexadecimal solto no HTML, exceto na escala da matriz da calculadora.
- **Acordeão:** use o padrão `.acc` / `.acc-h` / `.acc-b` / `.col` definido em
  `promove.css`. Não crie um quarto padrão.
- **Visões por perfil:** `body.rs` para servidor e `body.rc` para chefia; elementos com
  `.os` e `.oc`. As regras de ocultação usam `!important` porque estilos inline as
  sobrescreveriam.

## Consistência dos dados de exemplo

O protótipo usa uma persona única, e os números precisam fechar entre as telas:

- **Maria da Silva** · CPF 123.456.789-10 · vínculo 12365 · Assistente Técnico de Saúde ·
  origem SES · lotação SEAD · Gerência de Saúde · chefia João Ferreira ·
  teletrabalho parcial 3×2 · jornada de 8h, das 8h às 12h e das 14h às 18h.
- **João Ferreira**, gerente de saúde, é a chefia imediata e o titular da unidade.
- Outros nomes em uso: Antônio César, Rose Margarida, Ana Fonseca, Eduardo Moreira,
  Ricardo Santos, Bruno Dantas, Daniela Silva, Larissa Prado, Carlos Aragão.

Ao alterar um número em uma tela, verifique se ele aparece em outra. As referências
presenciais do mapeamento alimentam a pactuação e a adesão; as notas das atividades na
tela da chefia seguem as faixas da calculadora.

## Cálculo da nota

Implementado na calculadora e refletido na tela da chefia:

```
nota da atividade  = (PrAp + QtAp + QlAp) / 3        QlAp = InQl × InCp
nota da entrega    = média das notas de suas atividades
verificação mensal = média das notas das entregas concluídas e avaliadas no mês
```

Zero em PrAp, QtAp ou QlAp zera a nota da entrega inteira. As faixas de PrAp e QtAp são
as das Tabelas 4 e 5 do Anexo II, e o InCp é da **atividade**, não da entrega.

## Como trabalhar

1. Leia `INSTRUCOES.md` e execute apenas a tarefa indicada.
2. Antes de gerar ou alterar HTML, descreva a estrutura proposta e aguarde confirmação.
3. Faça um commit por tarefa, com mensagem em português no imperativo.
4. Ao terminar, marque a tarefa como concluída em `INSTRUCOES.md`.

## O que não fazer

- Não refatorar telas que não estão na tarefa.
- Não trocar a paleta, a tipografia ou o espaçamento por conta própria.
- Não acrescentar campo, botão ou regra que não tenha sido pedido.
- Não gerar dados de exemplo novos sem conferir os já existentes.
- Não commitar a minuta nem análises do texto dela.
