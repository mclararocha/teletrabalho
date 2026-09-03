# INSTRUCOES.md

Fila de tarefas do protótipo. Execute uma por vez, de cima para baixo.
Marque `[x]` ao concluir e pare para revisão antes de seguir.

---

## Tarefa 1 — Conferir e padronizar os nomes dos arquivos

**Estado:** [x] concluída

Duas coisas a resolver em `telas/`:

1. A calculadora está numerada como 16, fora da sequência. Renomear para `10`.
2. Conferir se os nomes conferem com a tabela do `CLAUDE.md` e corrigir onde divergir.

Ao renomear, atualizar os links do `index.html` e a tabela do `CLAUDE.md`.
Usar `git mv` em vez de apagar e recriar, para o histórico não se perder.

---

## Tarefa 2 — Migrar as telas para o CSS compartilhado

**Estado:** [ ] pendente

Hoje cada tela carrega sua própria cópia do CSS, no `<style>` do cabeçalho. Funciona, mas
qualquer ajuste visual precisa ser repetido dez vezes.

Faça, **uma tela por vez, começando pelo mapeamento**:

1. Substituir o bloco `<style>` por
   `<link rel="stylesheet" href="../assets/css/promove.css">`.
2. Trocar as classes locais pelas equivalentes de `promove.css`
   (`.at` vira `.acc`, `.at-h` vira `.acc-h`, `.at-b` vira `.acc-b`, e assim por diante).
3. Manter no `<style>` da própria tela apenas o que for exclusivo dela.
4. Abrir a tela no navegador e comparar com a versão anterior antes de commitar.

Não avance para a tela seguinte sem confirmação.

---

## Tarefa 3 — Navegação entre telas

**Estado:** [ ] pendente

Acrescentar ao topo de cada tela uma barra discreta com o retorno ao `index.html` e o
nome do perfil correspondente. Sem menu completo: o protótipo se navega pelo hub.

---

## Tarefa 4 — Padronizar o rodapé de norma

**Estado:** [ ] pendente

Algumas telas citam os artigos no rodapé, outras não. Padronizar: toda seção que exibe
prazo, percentual, faixa ou consequência recebe a remissão ao dispositivo, no mesmo
estilo já usado na tela de mapeamento.

---

## Tarefa 5 — Alinhar as telas à minuta vigente

**Estado:** [ ] pendente

As telas foram desenhadas sobre uma versão anterior da minuta. A versão atual traz
diferenças que precisam ser conferidas uma a uma. Como a minuta não está no repositório,
peça que o trecho pertinente seja colado na conversa antes de alterar qualquer arquivo.

Pontos já identificados:

- só existe teletrabalho parcial, sem modalidade integral;
- o limite é de 40% do quantitativo da lotação, definido por unidade;
- as metas são superiores em 15% às presenciais, percentual antes não fixado;
- o requerimento é subscrito pelo servidor e pela chefia, sem a terceira assinatura;
- a ordem de prioridade difere da que está no painel setorial.

Levantar o impacto em cada tela **antes** de alterar qualquer arquivo.

---

## Tarefa 6 — Telas que ainda faltam

**Estado:** [ ] pendente

- Registro de evidência, acionado pelo botão da tela do servidor.
- Relatório semanal montado, acionado pelo botão da tela do servidor.
- Repactuação do plano, hoje apenas mencionada na tela de pactuação.
