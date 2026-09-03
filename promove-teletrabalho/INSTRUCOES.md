# INSTRUCOES.md

Fila de tarefas do protótipo. Execute uma por vez, de cima para baixo.
Marque `[x]` ao concluir e pare para revisão antes de seguir.

---

## Tarefa 1 — Migrar as telas para o CSS compartilhado

**Estado:** [ ] pendente

Hoje cada tela em `telas/` carrega sua própria cópia do CSS, no `<style>` do cabeçalho.
Isso funciona, mas qualquer ajuste visual precisa ser repetido dez vezes.

Faça, **uma tela por vez, começando pela 07**:

1. Substituir o bloco `<style>` por
   `<link rel="stylesheet" href="../assets/css/promove.css">`.
2. Trocar as classes locais pelas equivalentes de `promove.css`
   (`.at` vira `.acc`, `.at-h` vira `.acc-h`, `.at-b` vira `.acc-b`, e assim por diante).
3. Manter no `<style>` da própria tela apenas o que for exclusivo dela.
4. Abrir a tela no navegador e comparar com a versão anterior antes de commitar.

Não avance para a tela seguinte sem confirmação.

---

## Tarefa 2 — Padronizar o rodapé de norma

**Estado:** [ ] pendente

Algumas telas citam os artigos no rodapé, outras não. Padronizar: toda seção que exibe
prazo, percentual, faixa ou consequência recebe a remissão ao dispositivo, no mesmo
estilo já usado na tela 10.

---

## Tarefa 3 — Navegação entre telas

**Estado:** [ ] pendente

Acrescentar ao topo de cada tela uma barra discreta com o retorno ao `index.html` e o
nome do perfil correspondente. Sem menu completo: o protótipo se navega pelo hub.

---

## Tarefa 4 — Alinhar as telas à minuta vigente

**Estado:** [ ] pendente

As telas 07 a 15 foram desenhadas sobre uma versão anterior da minuta. A versão em
`docs/` traz diferenças que precisam ser conferidas uma a uma:

- só existe teletrabalho parcial, sem modalidade integral;
- o limite é de 40% do quantitativo da lotação, definido por unidade;
- as metas são superiores em 15% às presenciais, percentual antes não fixado;
- o requerimento é subscrito pelo servidor e pela chefia, sem a terceira assinatura;
- a ordem de prioridade do art. 41 difere da que está na tela 11.

Levantar o impacto em cada tela **antes** de alterar qualquer arquivo.

---

## Tarefa 5 — Telas que ainda faltam

**Estado:** [ ] pendente

- Registro de evidência, acionado pelo botão da tela 07.
- Relatório semanal montado, acionado pelo botão da tela 07.
- Repactuação do plano, hoje apenas mencionada na tela 09.
