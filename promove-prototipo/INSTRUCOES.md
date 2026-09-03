# Protótipo navegável do PROMOVE — instruções

Leia `CLAUDE.md` antes de começar. As regras de conduta e os invariantes normativos que estão lá valem para todo o trabalho.

## Objetivo

Transformar as telas HTML estáticas de `telas-originais/` em um protótipo navegável, com seleção de perfil e navegação entre telas, alimentado por uma base de dados única.

## Stack e restrições

HTML, CSS e JavaScript puros. **Sem framework, sem etapa de build, sem dependências externas.**

O protótipo será demonstrado em reuniões, a partir do repositório baixado como ZIP: abrir `index.html` no navegador precisa funcionar, sem servidor e sem internet. Isso descarta módulos ES com `import`, que o navegador bloqueia em `file://`. Use scripts clássicos.

A fonte Public Sans não pode depender do Google Fonts em uso offline. Mantenha o `<link>` para quando houver rede, mas declare uma pilha de fallback sem serifa na regra `font-family`.

Não use `localStorage` nem `sessionStorage`. O estado fica em memória, apenas enquanto a aba estiver aberta.

## Estrutura esperada

```
index.html              seleção de perfil
assets/promove.css      estilo único, extraído das telas
assets/router.js        navegação entre telas
assets/render.js        montagem das telas a partir dos dados
dados/promove.json      fonte única de dados
telas/                  uma pasta por perfil
INCONSISTENCIAS.md
README.md               como abrir e como demonstrar
```

Mantenha `telas-originais/` intacta. Ela é a referência de comparação visual.

Atenção: `fetch` de arquivo local é bloqueado em `file://`. Se o `promove.json` for carregado por `fetch`, o protótipo não abre por duplo clique. Resolva servindo os dados como script clássico, por exemplo `dados/promove.js` atribuindo o objeto a uma variável global, e mantenha o `.json` como espelho legível.

## Tarefas

Pare ao fim de cada tarefa e apresente o resultado antes de seguir para a próxima. Faça um commit por tarefa, com mensagem descritiva.

### Tarefa 1 — Extrair o estilo

As telas repetem o mesmo bloco `<style>`. Consolide em `assets/promove.css`, sem alterar a aparência. Compare o resultado com os originais e relate qualquer diferença visual que não conseguir eliminar.

### Tarefa 2 — Extrair os dados

Todos os números estão hoje embutidos no HTML. Mova para a base única, com um registro por servidor consumido por todas as telas. O mesmo servidor precisa exibir a mesma pontuação, o mesmo interstício e os mesmos afastamentos em qualquer perfil.

Estrutura sugerida:

```json
{
  "orgao": { "nome": "Secretaria de Estado da Saúde", "sigla": "SES",
             "pcr": "Lei nº 22.524/2024", "niveis": "A a S", "classes": false },
  "unidades": [ { "id": "...", "nome": "...", "chefiaImediata": "..." } ],
  "servidores": [
    {
      "id": "...", "nome": "...", "cargo": "...", "grupoOcupacional": "...",
      "unidade": "...", "nivelAtual": "E", "pontuacaoAcumulada": 253.518,
      "cicloEvolucao": {
        "inicioMesReferencia": "01/2025",
        "ultimoMesReferenciaApurado": "07/2026",
        "mesInsercaoPontuacao": "08/2026",
        "mesesCorridos": 19, "mesesComputados": 19,
        "intersticioAplicavel": 18, "fundamentoIntersticio": "art. 47, § 7º",
        "pontuacaoNecessaria": 48, "pontuacaoCiclo": 61.518, "excedente": 13.518
      },
      "requisitosObrigatorios": {
        "efetivoExercicio": { "minimo": 2.4, "alcancado": 3.800, "cumprido": true },
        "desempenho": { "minimo": 7.0, "alcancado": 9.000, "cumprido": true,
                        "cicloAvaliacao": "01/2026 a 06/2026" },
        "aperfeicoamento": { "minimoHoras": 60, "horas": 100, "alcancado": 9.000, "cumprido": true }
      },
      "requisitosAceleradores": {
        "assuncaoResponsabilidades": 12.218,
        "titulacaoAcademica": 8.000
      },
      "afastamentos": [
        { "periodo": "02/2026 a 03/2026", "meses": 2,
          "enquadramento": "art. 5º da Lei nº 23.241/2025",
          "computaEfetivoExercicio": false, "geraPontuacaoDesempenho": false }
      ],
      "situacao": "apto",
      "pendencias": []
    }
  ]
}
```

Os afastamentos ficam em lista própria porque incidem sobre dois requisitos ao mesmo tempo.

Ao final desta tarefa, produza uma tabela de conferência com todos os servidores, mostrando pontuação do ciclo, pontuação acumulada, meses computados, interstício aplicável e situação de cada um dos cinco mínimos. É por ela que a divergência aparece.

### Tarefa 3 — Uniformizar o órgão

As telas do servidor e da chefia usam cargos da Secretaria de Estado da Administração, que não tem plano de carreira no PROMOVE. A tela da comissão setorial já usa a Secretaria de Estado da Saúde. Uniformize tudo para a **SES**, carreira da Lei nº 22.524/2024, níveis de A a S, **sem estrutura de classes**.

| Servidor | Cargo na SES |
|---|---|
| Letícia Amorim Rocha | Enfermeira |
| Marcos Vinícius Teixeira | Auditor de Sistemas e Serviços de Saúde |
| Roberto Alves Nogueira | Técnico em Enfermagem |
| Cláudia Neves Barbosa | Técnica em Radiologia |
| Bruno Sales Andrade | Analista Técnico de Saúde |
| Paula Regina Siqueira | Farmacêutica |
| Maria da Silva | Assistente Técnica de Saúde |
| Fernanda Queiroz Alves | Fisioterapeuta |
| Juliana Ferreira Castro | Psicóloga |
| Patrícia Gomes Ferraz | Médica |
| Sandra Oliveira Caetano | Biomédica |
| Rafael Antunes Moreira | Técnico em Laboratório |
| Vanessa Correia Lima | Nutricionista |

Unidades administrativas a usar no lugar das da SEAD: Superintendência de Gestão Integrada, Gerência de Gestão e Desenvolvimento de Pessoas, Superintendência de Vigilância em Saúde, Superintendência de Atenção Integral à Saúde, Gerência de Auditoria.

Servidor que apareça nas telas e não esteja nesta tabela: **não invente cargo.** Registre em `INCONSISTENCIAS.md` e mantenha o nome com o cargo em branco.

A troca de cargo pode revelar conflitos, como nível incompatível com a carreira ou pontuação divergente da mesma pessoa entre telas. Não ajuste silenciosamente.

### Tarefa 4 — Casca e navegação

Tela inicial com seleção de perfil:

| Perfil | Estado |
|---|---|
| Servidor | tela principal e cinco telas de detalhe, prontas |
| Chefia Imediata | tela principal, pronta |
| Comissão Setorial | tela principal, pronta |
| Comissão Central | ainda não desenhada |
| GGDP | ainda não desenhada |
| Titular | ainda não desenhada |
| ADM | ainda não desenhada |

Para os perfis sem tela, crie apenas uma página de espera com o nome do perfil e a marca "em elaboração". **Não invente conteúdo.**

Cabeçalho fixo com troca de perfil sem recarregar a página, para permitir a demonstração de ida e volta entre perfis sobre o mesmo caso.

Os elementos com classe `lnk` hoje são decorativos. Torne-os navegáveis: o nome de um servidor abre a ficha dele; o nome de um requisito abre a tela de detalhe correspondente, já filtrada por aquele servidor.

### Tarefa 5 — Interatividade

Estado em memória, sem persistência, suficiente para encenar um fluxo completo: manifestação do servidor, análise da chefia, recurso à comissão, validação e ato do titular.

Os botões de validar, diligenciar e não validar alteram o estado visual e alimentam a linha do tempo da tela correspondente.

## Critérios de aceite

1. O repositório baixado como ZIP abre por duplo clique em `index.html`, sem servidor.
2. O mesmo servidor exibe exatamente os mesmos números em todos os perfis onde aparece.
3. Nenhum dado numérico ou fundamento legal foi alterado em relação às telas de origem, salvo o que estiver justificado em `INCONSISTENCIAS.md`.
4. A aparência é indistinguível dos arquivos de `telas-originais/`.
5. É possível percorrer um caso do início ao fim trocando de perfil, sem recarregar a página.
6. `INCONSISTENCIAS.md` lista toda divergência encontrada, nenhuma resolvida por conta própria.

## Ordem

Comece pela tela da comissão setorial, `08__Tela_Principal_da_Comissao_Setorial_v6.html`. É a mais recente e a única já revisada com a separação entre requisitos obrigatórios e aceleradores. Só depois traga as telas do servidor e da chefia para a mesma base.

Deixe a uniformização do órgão para a tarefa 3, quando a fonte única já existir. Fazendo antes, a substituição teria que ser repetida em oito arquivos.

## Caso de demonstração

O caso mais ilustrativo é o de **Maria da Silva**, que tem afastamento enquadrado no art. 5º, pontuação suficiente e interstício cumprido, mas desempenho abaixo do mínimo, e por isso permanece no nível atual. Ele atravessa quatro perfis e mostra a mesma pontuação com recortes diferentes. Garanta que esse caminho funcione de ponta a ponta antes de refinar os demais.
