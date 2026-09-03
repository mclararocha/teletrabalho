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

## Estrutura

```
index.html              hub de navegação
telas/                  uma tela por arquivo, numeradas
normas/                 legislação publicada, em PDF
assets/css/promove.css  folha compartilhada, fonte única da verdade visual
docs/                   decisões de projeto
INSTRUCOES.md           fila de tarefas
```

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
- Não usar `localStorage` nem qualquer armazenamento do navegador.
- Não gerar dados de exemplo novos sem conferir os já existentes.
- Não commitar a minuta nem análises do texto dela.
