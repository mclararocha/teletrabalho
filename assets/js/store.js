/* =========================================================
   PROMOVE – Teletrabalho · store do Modo Demonstração
   Guarda o cenário de exemplo (assets/js/demo-data.js) em
   localStorage, para alternar entre o Modo Limpo (sistema em
   branco) e o Modo Demonstração (dados de exemplo carregados).
   Ver "Persistência local (localStorage)" no CLAUDE.md.
   ========================================================= */
var PromoveStore = (function () {
  "use strict";

  var CHAVE_DADOS = "promove_dados";
  var CHAVE_MAPEAMENTO = "promove_mapeamento";

  function carregarDemo() {
    try {
      window.localStorage.setItem(CHAVE_DADOS, JSON.stringify(DEMO_DATA));
    } catch (e) {}
    window.location.reload();
  }

  function limpar() {
    try {
      window.localStorage.removeItem(CHAVE_DADOS);
      window.localStorage.removeItem(CHAVE_MAPEAMENTO);
    } catch (e) {}
    window.location.reload();
  }

  function dados() {
    try {
      var v = window.localStorage.getItem(CHAVE_DADOS);
      return v ? JSON.parse(v) : null;
    } catch (e) {
      return null;
    }
  }

  function modoAtivo() {
    return dados() ? "demo" : "limpo";
  }

  /* Mapeamento próprio da unidade, criado pela chefia na tela 01 —
     independente do cenário de demonstração, guardado em chave separada
     para não fazer as outras telas acharem que há um cenário completo. */
  function salvarMapeamento(entregas) {
    try {
      window.localStorage.setItem(CHAVE_MAPEAMENTO, JSON.stringify(entregas));
    } catch (e) {}
  }

  function mapeamentoUsuario() {
    try {
      var v = window.localStorage.getItem(CHAVE_MAPEAMENTO);
      return v ? JSON.parse(v) : null;
    } catch (e) {
      return null;
    }
  }

  return {
    carregarDemo: carregarDemo, limpar: limpar, dados: dados, modoAtivo: modoAtivo,
    salvarMapeamento: salvarMapeamento, mapeamentoUsuario: mapeamentoUsuario
  };
})();
