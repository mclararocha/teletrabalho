/* =========================================================
   PROMOVE – Teletrabalho · dados do Modo Demonstração
   Objeto único com o cenário de exemplo (persona Maria da Silva /
   João Ferreira / Gerência de Saúde / SEAD) hoje espalhado pelo HTML
   das 13 telas. Consumido por assets/js/store.js.

   Cada bloco "telaNN" reproduz os dados já existentes na tela
   correspondente — nenhum dado novo foi inventado (ver CLAUDE.md,
   "Consistência dos dados de exemplo"). Onde a mesma pessoa aparece em
   telas diferentes, os blocos "servidor" e "chefia" evitam repetir os
   campos de identificação.
   ========================================================= */
var DEMO_DATA = (function () {
  "use strict";

  var servidor = {
    nome: "Maria da Silva",
    cpf: "123.456.789-10",
    vinculo: "12365",
    cargo: "Assistente Técnico de Saúde",
    orgaoOrigem: "SES",
    orgaoLotacao: "SEAD",
    unidade: "Gerência de Saúde",
    chefiaImediata: "João Ferreira",
    regime: "Teletrabalho parcial · 3×2"
  };

  var chefia = {
    nome: "João Ferreira",
    cargo: "Gerente de Saúde",
    unidade: "Gerência de Saúde",
    orgao: "SEAD",
    servidoresSobGestao: 6
  };

  return {
    servidor: servidor,
    chefia: chefia,

    /* Tela 01 · Mapeamento de entregas e atividades (titular da unidade) */
    tela01: {
      unidade: "Gerência de Saúde", orgao: "SEAD", titular: "João Ferreira",
      status: "Em elaboração",
      ultimaHomologacao: "14/08/2026",
      revisao: "Iniciada em 20/10/2026 por João Ferreira",
      metricas: { entregasMapeadas: 6, atividades: 21, elegiveis: 14, semJustificativa: 2 },
      entregas: [
        {
          nome: "fiscalização de contratos e convênios",
          atividades: [
            { nome: "Conferência das prestações de contas de repasse", statusChip: "Elegível", chipClasse: "green",
              nivelComplexidade: "Média", incp: "0,8", tempoPresencial: 5, unidadeTempo: "horas por unidade",
              qtdReferencia: 6, unidadeQtd: "instrumentos",
              justificativa: "Executável integralmente por acesso remoto ao SEI e ao SISLOG" },
            { nome: "Notificação de contratadas com pendência documental", statusChip: "Elegível", chipClasse: "green",
              nivelComplexidade: "Baixa", incp: "0,7", tempoPresencial: 3, unidadeTempo: "horas por unidade",
              qtdReferencia: 5, unidadeQtd: "notificações",
              justificativa: "Emissão e envio por meio eletrônico, sem necessidade de presença física" },
            { nome: "Vistoria presencial em unidade de acolhimento", statusChip: "Não elegível", chipClasse: "gray",
              nivelComplexidade: "Muito alta", incp: "1,0", tempoPresencial: 8, unidadeTempo: "horas por unidade",
              qtdReferencia: 2, unidadeQtd: "vistorias",
              justificativa: "Exige deslocamento e inspeção in loco, nos termos do art. 7º, I da minuta" }
          ]
        },
        {
          nome: "instrução de processos de repasse",
          atividades: [
            { nome: "Análise da documentação das entidades proponentes", statusChip: "Sem justificativa", chipClasse: "amber",
              nivelComplexidade: "Baixa", incp: "0,7", tempoPresencial: 4, unidadeTempo: "horas por unidade",
              qtdReferencia: 9, unidadeQtd: "processos",
              justificativaPlaceholder: "Obrigatória para a homologação do mapeamento" },
            { nome: "Emissão de despacho de instrução", statusChip: "Elegível", chipClasse: "green",
              nivelComplexidade: "Média", incp: "0,8", tempoPresencial: 4, unidadeTempo: "horas por unidade",
              qtdReferencia: 9, unidadeQtd: "despachos",
              justificativa: "Redação e assinatura eletrônica no SEI, sem manuseio de autos físicos" }
          ]
        }
      ]
    },

    /* Tela 02 · Requerimento de adesão (servidor) — persona Rose Margarida */
    tela02: {
      protocoloEm: "08/10/2026",
      unidade: "Gerência de Saúde", orgao: "SEAD",
      statusChip: "Aguardando assinatura do gestor",
      identificacao: {
        nome: "Rose Margarida", cpf: "987.123.456-00", vinculo: "20874",
        cargo: "Analista de Gestão Governamental", orgaoOrigem: "SEAD", orgaoLotacao: "SEAD",
        unidade: "Gerência de Saúde", chefiaImediata: "João Ferreira"
      },
      condicoes: { localExecucao: "Goiânia, GO" },
      atividadesMetas: [
        { nome: "Conferência das prestações de contas de repasse", referenciaPresencial: "6 instrumentos por mês", metaPlaceholder: 8 },
        { nome: "Análise da documentação das entidades proponentes", referenciaPresencial: "9 processos por mês", metaPlaceholder: 12 }
      ],
      requisitos: [
        { texto: "Unidade autorizada pelo titular da Pasta", detalhe: "Portaria nº 412, de 15/08/2026", status: "Atendido" },
        { texto: "Unidade com mapeamento homologado", status: "Atendido" },
        { texto: "Atividades elegíveis à execução remota", status: "Atendido" },
        { texto: "Ausência de penalidade disciplinar nos últimos 2 anos", detalhe: "Consulta ao RHNet em 08/10/2026", status: "Atendido" },
        { texto: "Ausência de desligamento anterior por não atingimento de metas", status: "Atendido" },
        { texto: "Vaga disponível no órgão", detalhe: "286 de 300 servidores em regime · 5º na ordem apurada, dentro das 14 vagas remanescentes", status: "Atendido" }
      ],
      assinaturas: [
        { pessoa: "Rose Margarida · servidora", detalhe: "Assinado em 08/10/2026", statusChip: "Assinado", chipClasse: "green" },
        { pessoa: "João Ferreira · chefia imediata", detalhe: "Assinado em 09/10/2026", statusChip: "Assinado", chipClasse: "green" },
        { pessoa: "Titular da Gerência de Saúde · gestor da unidade", detalhe: "Aguardando assinatura", statusChip: "Pendente", chipClasse: "amber" }
      ]
    },

    /* Tela 03 · Pactuação do plano de trabalho (servidor e chefia) */
    tela03: {
      vigenciaPlano: "01/11/2026 a 31/12/2026",
      regime: "Teletrabalho parcial",
      comparecimentoPresencial: "2 dias por semana",
      situacao: "Proposta enviada em 28/10 · ajustada pela chefia em 30/10 · aceite até 04/11/2026",
      entregas: [
        {
          nome: "fiscalização de contratos e convênios", prioridade: "1 — muito alta",
          atividades: [
            { nome: "Conferência das prestações de contas de repasse", statusChip: "Validada", chipClasse: "green",
              finalizada: true,
              origem: "Proposta pelo servidor em 28/10/2026", tipoAtividade: "Estruturante", regime: "Teletrabalho",
              inicioPactuado: "03/11/2026 08:00", conclusaoPactuada: "17/11/2026 17:00",
              qtdPactuada: 8, unidadeQtd: "instrumentos", referenciaPresencial: "6 instrumentos, conforme mapeamento da unidade",
              impacto: "Médio", dificuldade: "Média", nivelComplexidade: "Média", incp: "0,8",
              actsOc: ["Reabrir para ajuste", "Excluir do plano"] },
            { nome: "Notificação de contratadas com pendência documental", statusChip: "Ajustada pela chefia", chipClasse: "amber",
              origem: "Proposta pelo servidor em 28/10/2026", tipoAtividade: "Estruturante", regime: "Teletrabalho",
              inicioPactuado: "10/11/2026 08:00", conclusaoPactuada: "24/11/2026 17:00",
              qtdPactuada: 6, unidadeQtd: "notificações", referenciaPresencial: "5 notificações, conforme mapeamento da unidade",
              impacto: "Baixo", dificuldade: "Média", nivelComplexidade: "Baixa", incp: "0,7",
              log: "Quantidade alterada de 4 para 6 por João Ferreira em 30/10/2026.",
              actsOs: ["Registrar discordância"], actsOc: ["Validar atividade", "Excluir do plano"] }
          ]
        },
        {
          nome: "instrução de processos de repasse", prioridade: "2 — alta",
          alteradaPelaChefia: true, chipClasse: "amber", log: "Prioridade alterada de 3 para 2 por João Ferreira em 30/10/2026.",
          entActsOs: ["Registrar discordância quanto à prioridade"],
          atividades: [
            { nome: "Análise da documentação das entidades proponentes", statusChip: "Aguardando validação", chipClasse: "gray",
              origem: "Proposta pelo servidor em 28/10/2026", tipoAtividade: "Finalística", regime: "Teletrabalho",
              inicioPactuado: "03/11/2026 08:00", conclusaoPactuada: "14/11/2026 17:00",
              qtdPactuada: 12, unidadeQtd: "processos", referenciaPresencial: "9 processos, conforme mapeamento da unidade",
              impacto: null, dificuldade: null, nivelComplexidade: null,
              pendenteDefinicaoChefia: true, actsOc: ["Validar atividade", "Excluir do plano"] },
            { nome: "Consolidação do relatório trimestral de convênios", statusChip: "Incluída pela chefia", chipClasse: "blue",
              origem: "Incluída por João Ferreira em 30/10/2026", tipoAtividade: "Finalística", regime: "Teletrabalho",
              inicioPactuado: "16/11/2026 08:00", conclusaoPactuada: "30/11/2026 17:00",
              qtdPactuada: 1, unidadeQtd: "relatório", referenciaPresencial: "1 relatório, conforme mapeamento da unidade",
              impacto: "Alto", dificuldade: "Média", nivelComplexidade: "Alta", incp: "0,9",
              log: "Atividade acrescentada pela chefia em 30/10/2026.",
              actsOs: ["Registrar discordância"], actsOc: ["Validar atividade", "Excluir do plano"] }
          ]
        },
        {
          nome: "atualização do cadastro de convenentes no SISLOG", prioridade: null,
          rascunhoDoServidor: true, chipClasse: "gray", reversedRoles: true,
          log: "Acrescentada por Maria da Silva em 02/11/2026. Ainda não enviada para validação.",
          entActsOs: ["Enviar entrega para validação", "Excluir entrega"],
          atividades: [
            { nome: "Conferência e atualização dos dados cadastrais das entidades", statusChip: "Rascunho do servidor", chipClasse: "gray",
              origem: "Acrescentada por Maria da Silva em 02/11/2026", tipoAtividade: "Estruturante", regime: "Teletrabalho",
              inicioPactuado: "09/11/2026 08:00", conclusaoPactuada: "20/11/2026 17:00",
              qtdPactuada: 30, unidadeQtd: "cadastros", referenciaPresencial: "24 cadastros, conforme mapeamento da unidade",
              impacto: null, dificuldade: null, nivelComplexidade: null, pendenteDefinicaoChefia: true,
              actsOs: ["Excluir atividade"], actsOcCalc: "Aguardando envio pelo servidor" }
          ]
        }
      ],
      atividadeExcluida: {
        nome: "Atualização do painel de vigências contratuais",
        detalhe: "retirada por João Ferreira em 30/10/2026, por sobreposição com a consolidação do relatório trimestral."
      }
    },

    /* Tela 04 · Meu plano de trabalho (servidor) */
    tela04: {
      vigencia: "01/09 a 31/10/2026",
      regime: "Teletrabalho parcial · 3×2",
      semanas: [
        { rotulo: "S1", status: "done" }, { rotulo: "S2", status: "done" },
        { rotulo: "S3", status: "done" }, { rotulo: "S4", status: "done" },
        { rotulo: "S5", status: "open" }, { rotulo: "S6", status: "next" },
        { rotulo: "S7", status: "next" }, { rotulo: "S8", status: "next" }, { rotulo: "S9", status: "next" }
      ],
      semanaAtual: {
        rotulo: "Semana 5 · 29/09 a 03/10/2026", prazoSubmissao: "03/10",
        resumo: "Relatório composto automaticamente a partir das evidências registradas: 2 atividades com evidência, 2 atividades em andamento sem evidência e 2 dias de comparecimento presencial cumpridos."
      },
      entregas: [
        {
          nome: "Fiscalização de contratos e convênios da Gerência de Saúde",
          meta: "Demanda processual · 3 atividades · teletrabalho", prioridadeChip: "Prioridade 1 · muito alta", chipClasse: "red",
          atividades: [
            { nome: "Conferência das prestações de contas de repasse", statusChip: "Concluída",
              tipoAtividade: "Estruturante", impacto: "Médio", dificuldade: "Média", nivelComplexidade: "Média",
              inicioPactuado: "01/09/2026 08:00", conclusaoPactuada: "15/09/2026 17:00", conclusaoRealizada: "15/09/2026 17:00",
              qtdPactuada: "8 instrumentos", qtdRealizada: "8 instrumentos", evidencia: "SEI 89778368" },
            { nome: "Elaboração de relatórios de fiscalização no SEI", statusChip: "Concluída",
              tipoAtividade: "Estruturante", impacto: "Alto", dificuldade: "Média", nivelComplexidade: "Alta",
              inicioPactuado: "08/09/2026 08:00", conclusaoPactuada: "25/09/2026 17:00", conclusaoRealizada: "23/09/2026 17:00",
              qtdPactuada: "8 relatórios", qtdRealizada: "8 relatórios", evidencia: "SEI 89778450" },
            { nome: "Notificação de contratadas com pendência documental", statusChip: "Sem evidência",
              tipoAtividade: "Estruturante", impacto: "Baixo", dificuldade: "Média", nivelComplexidade: "Baixa",
              inicioPactuado: "15/09/2026 08:00", conclusaoPactuada: "25/09/2026 17:00", conclusaoRealizada: null,
              qtdPactuada: "4 notificações", qtdRealizadaPlaceholder: 3, unidadeQtd: "notificações",
              evidenciaAcao: "registrar", evidenciaLink: true }
          ]
        },
        {
          nome: "Instrução de processos de repasse a instituições de longa permanência",
          meta: "Demanda processual · 2 atividades · teletrabalho", prioridadeChip: "Prioridade 2 · alta", chipClasse: "amber",
          atividades: [
            { nome: "Análise da documentação das entidades proponentes", statusChip: "Concluída",
              tipoAtividade: "Finalística", impacto: "Médio", dificuldade: "Baixa", nivelComplexidade: "Baixa",
              inicioPactuado: "01/09/2026 08:00", conclusaoPactuada: "12/09/2026 17:00", conclusaoRealizada: "12/09/2026 17:00",
              qtdPactuada: "12 processos", qtdRealizada: "12 processos", evidencia: "SEI 90612001" },
            { nome: "Emissão de despacho de instrução", statusChip: "Sem evidência",
              tipoAtividade: "Finalística", impacto: "Médio", dificuldade: "Média", nivelComplexidade: "Média",
              inicioPactuado: "15/09/2026 08:00", conclusaoPactuada: "26/09/2026 17:00", conclusaoRealizada: null,
              qtdPactuada: "12 despachos", qtdRealizadaPlaceholder: 10, unidadeQtd: "despachos",
              evidenciaAcao: "registrar",
              log: "Alteração registrada: conclusão pactuada de 22/09/2026 para 26/09/2026, por João Ferreira em 18/09/2026." }
          ]
        },
        {
          nome: "Atendimento presencial às unidades de saúde",
          meta: "Demanda de rotina · 1 atividade · presencial", prioridadeChip: "Prioridade 3 · média", chipClasse: "gray",
          atividades: [
            { nome: "Recebimento e triagem de documentos físicos", statusChip: "Concluída",
              tipoAtividade: "Estruturante", impacto: "Baixo", dificuldade: "Baixa", nivelComplexidade: "Muito baixa",
              inicioPactuado: "01/09/2026 08:00", conclusaoPactuada: "30/10/2026 17:00", conclusaoRealizada: "30/10/2026 17:00",
              qtdPactuada: "40 atendimentos", qtdRealizada: "40 atendimentos", evidencia: "SEI 90631244" }
          ]
        }
      ]
    },

    /* Tela 05 · Avaliação do plano de trabalho (chefia) */
    tela05: {
      pessoas: [
        { iniciais: "MS", nome: "Maria da Silva", info: "Plano 01/09 a 31/10/2026 · teletrabalho parcial 3×2", statusChip: "Avaliar até 10/11", chipClasse: "white", selecionada: true },
        { iniciais: "AC", nome: "Antônio César", info: "Plano 01/09 a 31/10/2026 · teletrabalho parcial 2×3", statusChip: "Resultado 9,1", chipClasse: "gray" },
        { iniciais: "RM", nome: "Rose Margarida", info: "Aguardando adesão · sem plano vigente", statusChip: "—", chipClasse: "gray" }
      ],
      entregas: [
        {
          nome: "fiscalização de contratos e convênios", meta: "Demanda processual · prioridade 1, muito alta · resultado da entrega 9,0",
          atividades: [
            { nome: "Conferência das prestações de contas", nota: "9,3", impacto: "Médio", dificuldade: "Média", nivelComplexidade: "Média", incp: "0,8",
              inicioPactuado: "01/09/2026 08:00", conclusaoPactuada: "15/09/2026 17:00",
              conclusaoRealizada: "15/09/2026 17:00 · 15 dias · desvio 0% · InPr 10",
              qtdPactuada: 8, qtdApurada: "8 · 100% · InQt 10",
              qualidadeOpcoes: [{v:"10",l:"5 — precisa · 10"},{v:"0",l:"1 — inaceitável · 0"},{v:"4",l:"2 — ruim · 4"},{v:"6",l:"3 — regular · 6"},{v:"8",l:"4 — boa · 8"},{v:"12",l:"6 — excepcional · 12"}],
              qualidadeAjustada: "10 × 0,8 = 8,0", resultado: "média de 10, 10 e 8,0 = 9,3" },
            { nome: "Elaboração de relatórios de fiscalização no SEI", nota: "10,6", impacto: "Alto", dificuldade: "Média", nivelComplexidade: "Alta", incp: "0,9",
              inicioPactuado: "08/09/2026 08:00", conclusaoPactuada: "25/09/2026 17:00",
              conclusaoRealizada: "23/09/2026 17:00 · 16 dias · antecipado 11,1% · InPr 11",
              qtdPactuada: 8, qtdApurada: "8 · 100% · InQt 10",
              qualidadeOpcoes: [{v:"12",l:"6 — excepcional · 12"},{v:"0",l:"1 — inaceitável · 0"},{v:"4",l:"2 — ruim · 4"},{v:"6",l:"3 — regular · 6"},{v:"8",l:"4 — boa · 8"},{v:"10",l:"5 — precisa · 10"}],
              qualidadeAjustada: "12 × 0,9 = 10,8", resultado: "média de 11, 10 e 10,8 = 10,6" },
            { nome: "Notificação de contratadas com pendência", nota: "7,2", impacto: "Baixo", dificuldade: "Média", nivelComplexidade: "Baixa", incp: "0,7",
              inicioPactuado: "15/09/2026 08:00", conclusaoPactuada: "25/09/2026 17:00",
              conclusaoRealizada: "27/09/2026 17:00 · 13 dias · atraso 18,2% · InPr 8",
              qtdPactuada: 4, qtdApurada: "3 · 75% · InQt 8",
              qualidadeOpcoes: [{v:"8",l:"4 — boa · 8"},{v:"0",l:"1 — inaceitável · 0"},{v:"4",l:"2 — ruim · 4"},{v:"6",l:"3 — regular · 6"},{v:"10",l:"5 — precisa · 10"},{v:"12",l:"6 — excepcional · 12"}],
              qualidadeAjustada: "8 × 0,7 = 5,6", resultado: "média de 8, 8 e 5,6 = 7,2" }
          ]
        },
        {
          nome: "instrução de processos de repasse", meta: "Demanda processual · prioridade 2, alta · resultado da entrega 8,1",
          atividades: [
            { nome: "Análise da documentação das entidades", nota: "9,0", impacto: "Médio", dificuldade: "Baixa", nivelComplexidade: "Baixa", incp: "0,7",
              inicioPactuado: "01/09/2026 08:00", conclusaoPactuada: "12/09/2026 17:00",
              conclusaoRealizada: "12/09/2026 17:00 · 12 dias · desvio 0% · InPr 10",
              qtdPactuada: 12, qtdApurada: "12 · 100% · InQt 10",
              qualidadeOpcoes: [{v:"10",l:"5 — precisa · 10"},{v:"0",l:"1 — inaceitável · 0"},{v:"4",l:"2 — ruim · 4"},{v:"6",l:"3 — regular · 6"},{v:"8",l:"4 — boa · 8"},{v:"12",l:"6 — excepcional · 12"}],
              qualidadeAjustada: "10 × 0,7 = 7,0", resultado: "média de 10, 10 e 7,0 = 9,0" },
            { nome: "Emissão de despacho de instrução", nota: "7,1", impacto: "Médio", dificuldade: "Média", nivelComplexidade: "Média", incp: "0,8",
              inicioPactuado: "15/09/2026 08:00", conclusaoPactuada: "26/09/2026 17:00",
              conclusaoRealizada: "29/09/2026 17:00 · 15 dias · atraso 25,0% · InPr 7",
              qtdPactuada: 12, qtdApurada: "10 · 83,3% · InQt 8",
              qualidadeOpcoes: [{v:"8",l:"4 — boa · 8"},{v:"0",l:"1 — inaceitável · 0"},{v:"4",l:"2 — ruim · 4"},{v:"6",l:"3 — regular · 6"},{v:"10",l:"5 — precisa · 10"},{v:"12",l:"6 — excepcional · 12"}],
              qualidadeAjustada: "8 × 0,8 = 6,4", resultado: "média de 7, 8 e 6,4 = 7,1",
              log: "Alteração registrada: conclusão pactuada de 22/09/2026 para 26/09/2026, por João Ferreira em 18/09/2026." }
          ]
        },
        {
          nome: "atendimento presencial às unidades", meta: "Demanda de rotina · prioridade 3, média · resultado da entrega 8,7",
          atividades: [
            { nome: "Recebimento e triagem de documentos", nota: "8,7", impacto: "Baixo", dificuldade: "Baixa", nivelComplexidade: "Muito baixa", incp: "0,6",
              inicioPactuado: "01/09/2026 08:00", conclusaoPactuada: "30/10/2026 17:00",
              conclusaoRealizada: "30/10/2026 17:00 · 60 dias · desvio 0% · InPr 10",
              qtdPactuada: 40, qtdApurada: "40 · 100% · InQt 10",
              qualidadeOpcoes: [{v:"10",l:"5 — precisa · 10"},{v:"0",l:"1 — inaceitável · 0"},{v:"4",l:"2 — ruim · 4"},{v:"6",l:"3 — regular · 6"},{v:"8",l:"4 — boa · 8"},{v:"12",l:"6 — excepcional · 12"}],
              qualidadeAjustada: "10 × 0,6 = 6,0", resultado: "média de 10, 10 e 6,0 = 8,7" }
          ]
        }
      ],
      resultadoPlano: { valor: "8,7", nota: "Média das 6 atividades avaliadas, em escala de 0 a 12. Pode servir de parâmetro para a manutenção no regime de teletrabalho e, mediante conversão a ser definida em ato próprio, para o requisito de desempenho." }
    },

    /* Tela 06 · Painel da unidade setorial (titular/RH setorial) */
    tela06: {
      subtitulo: "Superintendência de Gestão Integrada · SEAD",
      metricas: { servidoresTeletrabalho: "286 de 300", unidadesAutorizadas: "7 de 11", requerimentosPendentes: 42, desligamentosCiclo: 9 },
      limite: {
        ato: "Portaria nº 412, de 15/08/2026", maximoOrgao: 300, servidoresRegime: 286,
        vagasRemanescentes: 14, unidadesAutorizadas: "7 de 11"
      },
      unidades: [
        { nome: "Gerência de Saúde", statusChip: "Apta", chipClasse: "green",
          autorizada: "Sim, pela Portaria nº 412/2026", situacaoMapeamento: "Em revisão desde 20/10/2026",
          ultimaHomologacao: "14/08/2026", servidoresRegime: 38, requerimentosAguardandoVaga: 12, titular: "João Ferreira" },
        { nome: "Gerência de Normas e Critérios de Produtividade", statusChip: "Apta", chipClasse: "green",
          autorizada: "Sim, pela Portaria nº 412/2026", situacaoMapeamento: "Validado",
          ultimaHomologacao: "02/09/2026", servidoresRegime: 22, requerimentosAguardandoVaga: 5, titular: "Ana Fonseca" },
        { nome: "Gerência de Contratos", statusChip: "Não apta", chipClasse: "amber",
          autorizada: "Sim, pela Portaria nº 412/2026", situacaoMapeamento: "Aguardando homologação do mapeamento desde 12/10/2026",
          ultimaHomologacao: "Sem validação anterior", servidoresRegime: 0, requerimentosAguardandoVaga: 9, titular: "Eduardo Moreira" },
        { nome: "Gerência de Atendimento ao Cidadão", statusChip: "Não autorizada", chipClasse: "gray",
          autorizada: "Não, unidade fora do rol da Portaria nº 412/2026", situacaoMapeamento: "Sem mapeamento cadastrado",
          ultimaHomologacao: "Sem validação anterior", servidoresRegime: 0, requerimentosAguardandoVaga: 16, titular: "Ricardo Santos" }
      ],
      ordemPrioridade: {
        requerimentosAptos: 17, vagasRemanescentes: 14, comCriterioPreferencia: 6,
        ordenadosPorResultado: 11, requerimentosRetidos: 25, apuracaoPublicadaEm: "20/10/2026"
      },
      desligamentosPorUnidade: [
        { nome: "Gerência de Saúde", total: 4, deOficio: 1, porResultado: 2, aPedido: 1, porExcesso: 0 },
        { nome: "Gerência de Contratos", total: 3, deOficio: 2, porResultado: 0, aPedido: 1, porExcesso: 0 },
        { nome: "Gerência de Normas e Critérios de Produtividade", total: 2, deOficio: 0, porResultado: 0, aPedido: 2, porExcesso: 0 }
      ]
    },

    /* Tela 07 · Ordem apurada do órgão (titular/RH setorial) */
    tela07: {
      subtitulo: "Superintendência de Gestão Integrada · SEAD · publicada em 20/10/2026",
      requerimentosAptos: 17, vagasRemanescentes: 14,
      ordem: [
        { posicao: 1, nome: "Larissa Prado", dentroDasVagas: true, unidade: "Gerência de Saúde", criterio: "Inciso II — servidora gestante", comprovacao: "Atestado médico anexado em 02/10/2026", protocolo: "02/10/2026", tempoServico: "14 anos", resultadoMedio: "8,6" },
        { posicao: 2, nome: "Bruno Dantas", dentroDasVagas: true, unidade: "Gerência de Saúde", criterio: "Inciso II — pai de criança de 14 meses", comprovacao: "Certidão de nascimento anexada em 09/10/2026", protocolo: "09/10/2026", tempoServico: "9 anos", resultadoMedio: "8,7" },
        { posicao: 3, nome: "Tânia Barros", dentroDasVagas: true, unidade: "Gerência de Normas e Critérios de Produtividade", criterio: "Inciso II — mãe de criança de 8 meses", comprovacao: "Certidão de nascimento anexada em 05/10/2026", protocolo: "05/10/2026", tempoServico: "7 anos", resultadoMedio: "8,5" },
        { posicao: 4, nome: "Carlos Aragão", dentroDasVagas: true, unidade: "Gerência de Saúde", criterio: "Inciso III — pessoa com deficiência", comprovacao: "Avaliação da Junta Médica Oficial em 06/10/2026", protocolo: "01/10/2026", tempoServico: "17 anos", resultadoMedio: "8,2" },
        { posicao: 5, nome: "Rose Margarida", dentroDasVagas: true, unidade: "Gerência de Saúde", criterio: "Inciso III — responsável por dependente com deficiência", comprovacao: "Avaliação da Junta Médica Oficial em 12/10/2026", protocolo: "08/10/2026", tempoServico: "11 anos", resultadoMedio: "9,0" },
        { posicao: 6, nome: "Helena Rocha", dentroDasVagas: true, unidade: "Gerência de Saúde", criterio: "Inciso III — responsável por dependente com deficiência", comprovacao: "Avaliação da Junta Médica Oficial em 09/10/2026", protocolo: "07/10/2026", tempoServico: "8 anos", resultadoMedio: "8,8" },
        { posicao: 7, nome: "Daniela Silva", dentroDasVagas: true, unidade: "Gerência de Saúde", criterio: null, comprovacao: null, protocolo: "06/10/2026", tempoServico: "6 anos", resultadoMedio: "8,4" },
        { posicao: 8, nome: "Roberto Alves", dentroDasVagas: true, unidade: "Gerência de Normas e Critérios de Produtividade", criterio: null, comprovacao: null, protocolo: "03/10/2026", tempoServico: "12 anos", resultadoMedio: "8,3" },
        { posicao: 9, nome: "Fernanda Luz", dentroDasVagas: true, unidade: "Gerência de Saúde", criterio: null, comprovacao: null, protocolo: "10/10/2026", tempoServico: "5 anos", resultadoMedio: "8,2" },
        { posicao: 10, nome: "Marina Castro", dentroDasVagas: true, unidade: "Gerência de Saúde", criterio: null, comprovacao: null, protocolo: "04/10/2026", tempoServico: "9 anos", resultadoMedio: "8,1" },
        { posicao: 11, nome: "Gustavo Pires", dentroDasVagas: true, unidade: "Gerência de Normas e Critérios de Produtividade", criterio: null, comprovacao: null, protocolo: "11/10/2026", tempoServico: "7 anos", resultadoMedio: "8,0" },
        { posicao: 12, nome: "Sandra Melo", dentroDasVagas: true, unidade: "Gerência de Saúde", criterio: null, comprovacao: null, protocolo: "08/10/2026", tempoServico: "15 anos", resultadoMedio: "7,9" },
        { posicao: 13, nome: "Ricardo Braga", dentroDasVagas: true, unidade: "Gerência de Normas e Critérios de Produtividade", criterio: null, comprovacao: null, protocolo: "02/10/2026", tempoServico: "10 anos", resultadoMedio: "7,8" },
        { posicao: 14, nome: "Juliana Torres", dentroDasVagas: true, unidade: "Gerência de Saúde", criterio: null, comprovacao: null, protocolo: "13/10/2026", tempoServico: "3 anos", resultadoMedio: "7,7" },
        { posicao: 15, nome: "Paulo Rezende", dentroDasVagas: false, unidade: "Gerência de Saúde", criterio: null, comprovacao: null, protocolo: "14/10/2026", tempoServico: "4 anos", resultadoMedio: "7,6" },
        { posicao: 16, nome: "Vinícius Amaral", dentroDasVagas: false, unidade: "Gerência de Normas e Critérios de Produtividade", criterio: null, comprovacao: null, protocolo: "12/10/2026", tempoServico: "6 anos", resultadoMedio: "7,5" },
        { posicao: 17, nome: "Camila Freitas", dentroDasVagas: false, unidade: "Gerência de Saúde", criterio: null, comprovacao: null, protocolo: "15/10/2026", tempoServico: "2 anos", resultadoMedio: "7,4" }
      ]
    },

    /* Tela 08 · Desligamentos da unidade (titular/RH setorial) */
    tela08: {
      unidade: "Gerência de Saúde", orgao: "SEAD", titular: "João Ferreira",
      desligamentos: [
        { nome: "Sérgio Lima", tipoChip: "De ofício", chipClasse: "gray",
          fundamento: "Art. 23, IV, \"c\" — licença superior a 30 dias consecutivos",
          ato: "Despacho nº 1.104/2026", data: "12/09/2026", retorno: "14/09/2026", ciencia: "12/09/2026" },
        { nome: "Eduardo Moreira", tipoChip: "Por resultado", chipClasse: "amber",
          fundamento: "Art. 23, IV, \"b\" — resultado insuficiente no plano encerrado",
          planoAvaliado: "01/07 a 31/08/2026 · resultado 5,4",
          ato: "Despacho nº 1.098/2026", data: "10/09/2026", retorno: "11/09/2026" },
        { nome: "Patrícia Nunes", tipoChip: "Por resultado", chipClasse: "amber",
          fundamento: "Art. 23, IV, \"b\" — resultado insuficiente no plano encerrado",
          planoAvaliado: "01/07 a 31/08/2026 · resultado 6,1",
          ato: "Despacho nº 1.099/2026", data: "10/09/2026", retorno: "11/09/2026" },
        { nome: "Marcelo Dias", tipoChip: "A pedido", chipClasse: "gray",
          fundamento: "Art. 23, V — solicitação formal do servidor",
          ato: "Despacho nº 1.117/2026", data: "28/09/2026", retorno: "29/09/2026", ciencia: "28/09/2026" }
      ]
    },

    /* Tela 09 · Painel do órgão central (SEAD) */
    tela09: {
      subtitulo: "Subsecretaria de Gestão e Desenvolvimento de Pessoas · SEAD",
      metricas: { orgaosImplantados: "18 de 31", unidadesAptas: "214 de 1.284", servidoresTeletrabalho: "2.417", desligamentosBimestre: 71 },
      evolucaoImplantacao: { labels: ["jan–fev", "mar–abr", "mai–jun", "jul–ago", "set–out"], dados: [4, 8, 12, 16, 18], totalOrgaos: 31 },
      orgaos: [
        { sigla: "SES", nome: "Secretaria de Estado da Saúde", statusChip: "Implantado", chipClasse: "green",
          implantacao: "Concluída em 01/07/2026", unidadesAptas: 62, unidadesTotal: 148, servidores: 1104,
          relatoriosEmDiaPct: 81, avaliacoesNoPrazoPct: 87, resultadoMedio: "8,3", desligamentosBimestre: 26 },
        { sigla: "DETRAN", nome: "Departamento Estadual de Trânsito", statusChip: "Implantado", chipClasse: "green",
          implantacao: "Concluída em 01/08/2026", unidadesAptas: 19, unidadesTotal: 34, servidores: 212,
          relatoriosEmDiaPct: 88, avaliacoesNoPrazoPct: 92, resultadoMedio: "8,5", desligamentosBimestre: 4 },
        { sigla: "SEINFRA", nome: "Secretaria de Estado de Infraestrutura", statusChip: "Atenção", chipClasse: "amber",
          implantacao: "Concluída em 01/07/2026", unidadesAptas: 12, unidadesTotal: 27, servidores: 96,
          relatoriosEmDiaPct: 76, avaliacoesNoPrazoPct: 71, resultadoMedio: "8,1", desligamentosBimestre: 5 },
        { sigla: "SEAD", nome: "Secretaria de Estado da Administração", statusChip: "Implantado", chipClasse: "green",
          implantacao: "Concluída em 01/06/2026", unidadesAptas: 7, unidadesTotal: 11, servidores: 286,
          relatoriosEmDiaPct: 94, avaliacoesNoPrazoPct: 100, resultadoMedio: "8,7", desligamentosBimestre: 9 },
        { sigla: "SEDUC", nome: "Secretaria de Estado da Educação", statusChip: "Não implantado", chipClasse: "gray",
          implantacao: "Prevista para 01/12/2026", unidadesAptas: 0, unidadesTotal: 96, servidores: 0,
          relatoriosEmDiaPct: null, avaliacoesNoPrazoPct: null, resultadoMedio: null, desligamentosBimestre: 0 }
      ],
      pendencias: {
        foraCronograma: [
          { nome: "Secretaria de Estado de Desenvolvimento Social · SEDS", prazo: "01/08/2026", atrasoDias: 92, etapa: "Mapeamento das unidades" },
          { nome: "Universidade Estadual de Goiás · UEG", prazo: "01/09/2026", atrasoDias: 61, etapa: "Integração do sistema próprio de produtividade" },
          { nome: "Agência Goiana de Regulação · AGR", prazo: "01/09/2026", atrasoDias: 61, etapa: "Capacitação das chefias" },
          { nome: "Instituto Mauro Borges · IMB", prazo: "01/10/2026", atrasoDias: 31, etapa: "Mapeamento das unidades" }
        ],
        mapeamentosAguardandoHomologacao: 11,
        avaliacoesForaPrazo: 3,
        mapeamentoForaValidade: 2,
        designacoesExcepcionais: 6
      },
      desligamentosPorMotivo: {
        labels: ["De ofício", "Por resultado insuficiente", "A pedido do servidor", "Movimentação ou nova lotação"],
        dados: [28, 19, 17, 7],
        cores: ["#2a78d6", "#eb6834", "#1baf7a", "#eda100"]
      },
      sistemasProprios: [
        { nome: "Universidade Estadual de Goiás · UEG", detalhe: "Comunicação recebida em 18/06/2026 · integração pendente", statusChip: "Pendente" }
      ]
    },

    /* Tela 11 · Registro de evidência (servidor) */
    tela11: {
      contexto: {
        entrega: "Fiscalização de contratos e convênios da Gerência de Saúde",
        tipoAtividade: "Estruturante",
        inicioPactuado: "15/09/2026 08:00", conclusaoPactuada: "25/09/2026 17:00",
        qtdPactuada: "4 notificações", qtdRealizada: "3 notificações"
      },
      registradoPor: "Maria da Silva · 03/10/2026"
    },

    /* Tela 12 · Relatório semanal (servidor) */
    tela12: {
      semana: "Semana 5 · 29/09 a 03/10/2026 · Maria da Silva",
      statusChip: "Aguardando submissão · prazo 03/10",
      metricas: { comEvidencia: 2, semEvidencia: 2, comparecimento: "2 de 2" },
      atividades: [
        { nome: "Conferência das prestações de contas de repasse", detalhe: "Evidência registrada nesta semana · SEI 89778368", statusChip: "Com evidência", chipClasse: "green" },
        { nome: "Elaboração de relatórios de fiscalização no SEI", detalhe: "Evidência registrada nesta semana · SEI 89778450", statusChip: "Com evidência", chipClasse: "green" },
        { nome: "Notificação de contratadas com pendência documental", detalhe: "3 de 4 notificações realizadas · sem evidência registrada", statusChip: "Sem evidência", chipClasse: "amber" },
        { nome: "Emissão de despacho de instrução", detalhe: "10 de 12 despachos realizados · sem evidência registrada", statusChip: "Sem evidência", chipClasse: "amber" }
      ],
      comparecimento: [
        { dia: "Terça-feira · 29/09/2026", horario: "Entrada 08:00 · saída 18:00", statusChip: "Cumprido" },
        { dia: "Quinta-feira · 01/10/2026", horario: "Entrada 08:00 · saída 18:00", statusChip: "Cumprido" }
      ]
    },

    /* Tela 13 · Solicitação de repactuação (servidor) */
    tela13: {
      planoVigente: "01/09 a 31/10/2026",
      statusChip: "Aguardando validação da chefia",
      alteracao: {
        entrega: "Fiscalização de contratos e convênios da Gerência de Saúde",
        atividade: "Notificação de contratadas com pendência documental",
        conclusaoPactuadaAtual: "25/09/2026 17:00", novaConclusaoPlaceholder: "10/10/2026 17:00",
        qtdPactuadaAtual: "4 notificações", novaQtdPlaceholder: 3
      },
      justificativaPlaceholder: "Duas das quatro contratadas notificadas encontram-se com o processo suspenso por decisão judicial, o que impede a notificação da terceira dentro do prazo pactuado."
    }
  };
})();
