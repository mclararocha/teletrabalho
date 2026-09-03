# Teletrabalho · protótipo de telas do Sistema PROMOVE

Protótipo navegável do módulo de teletrabalho do Sistema PROMOVE, do Poder Executivo do
Estado de Goiás. Reúne as telas dos perfis servidor, chefia imediata, titular de unidade,
unidade setorial e órgão central, além da calculadora que demonstra o cálculo da nota.

Serve para validar regras com a área técnica e para especificar o sistema à empresa
desenvolvedora. Não é software de produção, e os dados exibidos são fictícios.

## Como abrir

Não há build nem dependência. Abra `index.html` no navegador, ou publique o repositório
no GitHub Pages e acesse pela URL gerada.

## Telas

| Nº | Tela | Perfil |
|----|------|--------|
| 01 | Mapeamento de entregas e atividades | Titular da unidade |
| 02 | Requerimento de adesão | Servidor e chefia |
| 03 | Pactuação do plano de trabalho | Servidor e chefia |
| 04 | Plano de trabalho do servidor | Servidor |
| 05 | Verificação dos resultados | Chefia imediata |
| 06 | Painel da unidade setorial | Unidade setorial |
| 07 | Ordem apurada do órgão | Unidade setorial |
| 08 | Desligamentos da unidade | Unidade setorial |
| 09 | Painel do órgão central | Órgão central |
| 16 | Cálculo da nota da atividade | Demonstração |

## Estrutura

```
index.html              hub de navegação
telas/                  uma tela por arquivo
normas/                 legislação publicada, em PDF
assets/css/promove.css  folha compartilhada
docs/                   decisões de projeto
CLAUDE.md               regras permanentes para o assistente
INSTRUCOES.md           fila de tarefas
```

## Referência normativa

As normas publicadas ficam em `normas/`. A minuta de decreto do teletrabalho está em
elaboração e, por isso, não integra este repositório.

## Aviso

Repositório mantido pela Gerência de Normas e Critérios de Produtividade da Secretaria de
Estado da Administração. As telas são material de trabalho e não representam a interface
final do sistema.
