# CLAUDE.md

Regras permanentes deste repositório. Leia antes de qualquer alteração.

## O que é este projeto

Protótipo navegável do módulo de teletrabalho do Sistema PROMOVE, da Secretaria de
Estado da Administração de Goiás. Serve para validar regras de negócio com a área
técnica e para especificar o sistema à empresa desenvolvedora. **Não é software de
produção**: não há back-end, banco de dados nem autenticação.

## Norma de referência

Toda regra implementada deve ser rastreável a um dispositivo da minuta de decreto do
teletrabalho, cuja cópia de trabalho fica em `docs/`. Quando uma tela exibir um número,
prazo, percentual ou faixa, o artigo correspondente deve aparecer no rodapé da seção ou
em comentário no HTML.

Onde a minuta for omissa, o Decreto nº 10.802/2025 é usado de forma supletiva, e isso
precisa ser dito explicitamente no comentário.

**Nunca invente regra.** Se a norma não responder, pare e pergunte.

## Pilha técnica

HTML, CSS e JavaScript sem dependências, sem build, sem framework. Cada tela é um
arquivo servível diretamente pelo GitHub Pages.

Única exceção: a tela 12 carrega o Chart.js por CDN. Nenhuma outra biblioteca deve ser
introduzida sem combinar antes.

## Estrutura

```
index.html              hub de navegação
telas/                  uma tela por arquivo, numeradas
assets/css/promove.css  folha compartilhada, fonte única da verdade visual
docs/                   minuta, tabelas do Anexo II e decisões de projeto
INSTRUCOES.md           fila de tarefas
```

## Convenções

- **Idioma:** português do Brasil em tudo, inclusive nomes de classe e comentários.
- **Nomes de arquivo:** minúsculas, sem acento, separados por hífen, prefixados pelo
  número da tela. Exemplo: `telas/09-pactuacao.html`.
- **Versões:** o histórico é o Git. Não crie `-v2`, `-v3` no nome do arquivo.
- **Tokens:** cores, raios e espaçamentos vêm sempre de variáveis CSS de `promove.css`.
  Nenhum valor hexadecimal solto no HTML, exceto na escala da matriz da tela 16.
- **Acordeão:** use o padrão `.acc` / `.acc-h` / `.acc-b` / `.col` definido em
  `promove.css`. Não crie um quarto padrão.
- **Visões por perfil:** `body.rs` para servidor e `body.rc` para chefia; elementos com
  `.os` e `.oc`. As regras de ocultação usam `!important` porque estilos inline as
  sobrescreveriam.

## Consistência dos dados de exemplo

O protótipo usa uma persona única, e os números precisam fechar entre as telas:

- **Maria da Silva** · CPF 123.456.789-10 · vínculo 12365 · Assistente Técnico de Saúde ·
  origem SES · lotação SEAD · Gerência de Saúde · chefia João Ferreira ·
  teletrabalho parcial 3×2 · jornada 8h, das 8h às 12h e das 14h às 18h.
- **João Ferreira**, gerente de saúde, é a chefia imediata e o titular da unidade.
- Outros nomes em uso: Antônio César, Rose Margarida, Ana Fonseca, Eduardo Moreira,
  Ricardo Santos, Bruno Dantas, Daniela Silva.

Ao alterar um número em uma tela, verifique se ele aparece em outra. As referências
presenciais do mapeamento (tela 10) alimentam a pactuação (tela 09) e a adesão (tela 15);
as notas das atividades (tela 08) seguem as faixas da calculadora (tela 16).

## Cálculo da nota

Implementado na tela 16 e refletido na tela 08:

```
nota da atividade = (PrAp + QtAp + QlAp) / 3        QlAp = InQl × InCp
nota da entrega   = média das notas de suas atividades
verificação mensal = média das notas das entregas concluídas e avaliadas no mês
```

Zero em PrAp, QtAp ou QlAp zera a nota da entrega inteira. As faixas de PrAp e QtAp são
as das Tabelas 4 e 5 do Anexo II, e o InCp é da **atividade**, não da entrega.

## Como trabalhar

1. Leia `INSTRUCOES.md` e execute apenas a tarefa indicada.
2. Antes de gerar HTML, descreva a estrutura proposta e aguarde confirmação.
3. Faça um commit por tarefa, com mensagem em português no imperativo.
4. Ao terminar, marque a tarefa como concluída em `INSTRUCOES.md`.

## O que não fazer

- Não refatorar telas que não estão na tarefa.
- Não trocar a paleta, a tipografia ou o espaçamento por conta própria.
- Não acrescentar campo, botão ou regra que não tenha sido pedido.
- Não usar `localStorage` nem qualquer armazenamento do navegador.
- Não gerar dados de exemplo novos sem conferir os já existentes.
