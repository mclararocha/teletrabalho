# Decisões de projeto

Registro das escolhas tomadas na construção das telas, com o motivo. Serve para não
refazer discussão já vencida e para a empresa desenvolvedora entender o porquê.

## Cálculo da nota

- A nota é apurada por atividade, agregada por entrega e depois pelo mês.
- O InCp é da atividade, não da entrega.
- Zero em qualquer um dos três índices zera a nota da entrega inteira.
- As faixas de prazo e de quantidade seguem as Tabelas 4 e 5 do Anexo II.
- O prazo é apurado em horas úteis dentro da jornada cadastrada do servidor, de segunda a
  sexta. Feriados ainda não são descontados no protótipo, o que exigirá a tabela de
  feriados no sistema definitivo.

## Jornada

- Só cargas de 8 ou 6 horas diárias.
- Intervalo mínimo de 1 hora entre turnos; a carga de 8 horas exige dois turnos.
- Os horários de pactuação e de conclusão ficam limitados às janelas da jornada, em
  intervalos de 30 minutos.
- A jornada precisa ser dado cadastral do servidor, congelado no momento da pactuação.
  Alterá-la na avaliação muda o resultado sem que nada tenha mudado no trabalho.

## Pactuação

- Tela única, operada por servidor e chefia, com visões distintas.
- Campos editados diretamente, sem botão de "ajustar".
- Excluir item do plano é ação da chefia; enquanto em rascunho, o servidor exclui o que
  ele próprio incluiu.
- O aceite é do plano inteiro, no rodapé. A discordância é registrada no item alterado.
- Item já validado fica somente leitura nas duas visões; alterá-lo exige repactuação.
- Toda alteração de campo pactuado fica registrada com valor anterior, autor e data,
  visível ao servidor.

## Vagas e prioridade

- O limite alcança o órgão como um todo, e a autorização é por unidade. São condições
  distintas: unidade autorizada sem mapeamento validado continua inapta.
- A ordem de prioridade é única para a Pasta, porque o limite é do órgão. O painel
  setorial mostra o agregado por unidade; a lista nominal fica no detalhamento.

## Painéis

- O painel central não traz nota média como indicador de topo: é média de médias
  calculada com escalas calibradas por chefias diferentes, e no topo viraria ranking
  entre secretarias.
- A aptidão da unidade vem antes da contagem de vagas, porque unidade sem mapeamento
  validado não abre vaga.

## Evidências

- A evidência é registrada por atividade, não por entrega.
- A conclusão realizada não é digitada: fica em branco e é preenchida no momento do
  registro da evidência.
- O relatório semanal é montado pelo sistema a partir das evidências da semana, cabendo
  ao servidor conferir e submeter.
