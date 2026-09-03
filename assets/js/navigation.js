/* =========================================================
   PROMOVE – Teletrabalho · navegação por perfil
   Fonte única da sidebar e do seletor de perfil. Perfil ativo
   persistido em localStorage só para simular sessão nesta
   demonstração — ver "Persistência local" no CLAUDE.md.
   ========================================================= */
var PromoveNav = (function () {
  "use strict";

  var CHAVE_PERFIL = "promove_perfil";

  var TELAS = {
    "01": "01_-_Teletrabalho_-_Mapeamento.html",
    "02": "02_-_Teletrabalho_-_Adesao.html",
    "03": "03_-_Teletrabalho_-_Pactuacao.html",
    "04": "04_-_Teletrabalho_-_Servidor.html",
    "05": "05_-_Teletrabalho_-_Chefia.html",
    "06": "06_-_Teletrabalho_-_Painel_Setorial.html",
    "07": "07_-_Teletrabalho_-_Ordem_Apurada.html",
    "08": "08_-_Teletrabalho_-_Desligamentos_Unidade.html",
    "09": "09_-_Teletrabalho_-_Painel_Central.html",
    "10": "10_-_Teletrabalho_-_Calculadora_Resultado.html",
    "11": "11_-_Teletrabalho_-_Registro_de_Evidencia.html",
    "12": "12_-_Teletrabalho_-_Relatorio_Semanal.html",
    "13": "13_-_Teletrabalho_-_Repactuacao.html"
  };

  var UTILITARIO = { id: "10", rotulo: "Calculadora" };

  var PERFIS = {
    chefia: {
      rotulo: "Chefia da Unidade",
      fases: [
        { nome: "Mapeamento", telas: [
          { id: "01", rotulo: "Mapeamento de Entregas e Atividades da Unidade" }
        ]},
        { nome: "Adesão", telas: [
          { id: "02", rotulo: "Análise de Adesão" }
        ]},
        { nome: "Pactuação", telas: [
          { id: "03", rotulo: "Pactuação do Plano de Trabalho" },
          { id: "13", rotulo: "Análise e Validação de Repactuação" }
        ]},
        { nome: "Avaliação", telas: [
          { id: "05", rotulo: "Avaliação e Verificação de Resultados" }
        ]}
      ]
    },
    servidor: {
      rotulo: "Servidor",
      fases: [
        { nome: "Adesão", telas: [
          { id: "02", rotulo: "Requerimento Inicial de Adesão" }
        ]},
        { nome: "Pactuação", telas: [
          { id: "03", rotulo: "Pactuação do Plano de Trabalho" },
          { id: "13", rotulo: "Solicitação de Ajuste / Repactuação" }
        ]},
        { nome: "Execução & Evidências", telas: [
          { id: "04", rotulo: "Meu Plano de Trabalho" },
          { id: "11", rotulo: "Registro de Evidências" },
          { id: "12", rotulo: "Submissão do Relatório Semanal" }
        ]}
      ]
    },
    titular_rh: {
      rotulo: "Titular / RH Setorial",
      fases: [
        { nome: "Painéis e classificação", telas: [
          { id: "06", rotulo: "Painel Setorial da Unidade" },
          { id: "07", rotulo: "Ordem Apurada de Classificação" },
          { id: "08", rotulo: "Desligamentos da Unidade" }
        ]}
      ]
    },
    central: {
      rotulo: "Órgão Central (SEAD)",
      fases: [
        { nome: "Mapeamento", telas: [
          { id: "01", rotulo: "Mapeamento de entregas e atividades" }
        ]},
        { nome: "Adesão", telas: [
          { id: "02", rotulo: "Requerimento de adesão" }
        ]},
        { nome: "Pactuação", telas: [
          { id: "03", rotulo: "Pactuação do plano de trabalho" },
          { id: "13", rotulo: "Repactuação do plano de trabalho" }
        ]},
        { nome: "Execução & Evidências", telas: [
          { id: "04", rotulo: "Plano de trabalho do servidor" },
          { id: "11", rotulo: "Registro de evidência" },
          { id: "12", rotulo: "Relatório semanal montado" }
        ]},
        { nome: "Avaliação", telas: [
          { id: "05", rotulo: "Verificação dos resultados" }
        ]},
        { nome: "Painéis e classificação", telas: [
          { id: "06", rotulo: "Painel da unidade setorial" },
          { id: "07", rotulo: "Ordem apurada do órgão" },
          { id: "08", rotulo: "Desligamentos da unidade" }
        ]},
        { nome: "Painel central", telas: [
          { id: "09", rotulo: "Painel do órgão central" }
        ]}
      ]
    }
  };

  var ORDEM_PERFIS = ["chefia", "servidor", "titular_rh", "central"];

  function perfilAtivo() {
    try {
      var v = window.localStorage.getItem(CHAVE_PERFIL);
      return PERFIS[v] ? v : "central";
    } catch (e) {
      return "central";
    }
  }

  function definirPerfil(id) {
    if (!PERFIS[id]) return;
    try { window.localStorage.setItem(CHAVE_PERFIL, id); } catch (e) {}
    renderizarTudo();
  }

  function caminho(id, raiz) {
    return raiz + TELAS[id];
  }

  function linkHtml(id, rotulo, raiz, atual) {
    var ativa = id === atual ? " ativa" : "";
    return '<a class="sb-link' + ativa + '" href="' + caminho(id, raiz) + '">' +
      '<span class="sb-num">' + id + '</span>' + rotulo + '</a>';
  }

  function renderizarSidebar(el, raiz, atual) {
    if (!el) return;
    var perfil = PERFIS[perfilAtivo()];
    var html = '<div class="sb-perfil">' + perfil.rotulo + '</div>';
    perfil.fases.forEach(function (fase) {
      html += '<div class="sb-fase">' + fase.nome + '</div>';
      fase.telas.forEach(function (t) {
        html += linkHtml(t.id, t.rotulo, raiz, atual);
      });
    });
    html += '<div class="sb-fixo">' + linkHtml(UTILITARIO.id, UTILITARIO.rotulo, raiz, atual) + '</div>';
    el.innerHTML = html;
  }

  function renderizarSeletor(el) {
    if (!el) return;
    var ativo = perfilAtivo();
    var html = '';
    ORDEM_PERFIS.forEach(function (id) {
      var on = id === ativo ? " on" : "";
      html += '<button type="button" class="perfil-btn' + on + '" data-perfil="' + id + '">' +
        PERFIS[id].rotulo + '</button>';
    });
    el.innerHTML = html;
    el.querySelectorAll("[data-perfil]").forEach(function (btn) {
      btn.addEventListener("click", function () { definirPerfil(btn.getAttribute("data-perfil")); });
    });
  }

  function aplicarFiltroHub() {
    var ativo = perfilAtivo();
    document.querySelectorAll("[data-perfis]").forEach(function (card) {
      var perfis = card.getAttribute("data-perfis").split(" ");
      card.hidden = perfis.indexOf(ativo) === -1;
    });
  }

  var _opts = null;

  function renderizarTudo() {
    if (!_opts) return;
    renderizarSeletor(document.getElementById("seletor-perfil"));
    renderizarSidebar(document.getElementById("sidebar"), _opts.raiz, _opts.atual);
    aplicarFiltroHub();
  }

  function init(opts) {
    _opts = opts || { raiz: "", atual: null };
    renderizarTudo();
  }

  return { init: init, PERFIS: PERFIS, TELAS: TELAS };
})();
