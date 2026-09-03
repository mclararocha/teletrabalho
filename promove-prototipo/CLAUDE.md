# PROMOVE — regras permanentes

Este repositório contém telas de um sistema de evolução funcional de servidores públicos do Estado de Goiás. O trabalho é montar um protótipo navegável de demonstração a partir delas. As instruções passo a passo estão em `INSTRUCOES.md`.

## Regra de conduta

As telas contêm regras da legislação estadual. **Não altere nenhuma regra, número, prazo ou fundamento legal por conta própria.**

Ao encontrar divergência entre telas, dado inconsistente ou regra que pareça errada:

1. Não resolva sozinho.
2. Registre em `INCONSISTENCIAS.md`, com o arquivo, o trecho, o que diverge e as opções possíveis.
3. Siga com o restante do trabalho.

Divergência entre telas quase sempre indica decisão de negócio ainda não tomada, não defeito de código. Resolver por conta própria destrói informação.

## Fidelidade visual

Preserve a aparência das telas originais. Não redesenhe, não troque cores, não reorganize seções, não "modernize". A identidade é: tipografia Public Sans, paleta em `oklch`, cartões brancos com borda clara, pares chave-valor em azul-esverdeado, seções expansíveis em acordeão.

## Sobre os PDFs em `normas/`

Estão ali para consulta pontual, quando houver dúvida concreta. **Não os leia por iniciativa própria.** O Decreto nº 10.802/2025 e a Lei nº 23.241/2025 são digitalizados, sem camada de texto, e exigiriam OCR caro em contexto. Tudo o que é necessário para o protótipo já está nos invariantes abaixo.

## Invariantes normativos

Não contrarie nenhum destes pontos. Se algo exigir contrariá-los, pare e registre em `INCONSISTENCIAS.md`.

**Pontuação e níveis.** Cada nível da carreira corresponde a 48 pontos, conforme o Anexo I do Decreto nº 10.802/2025. A pontuação para evoluir ao próximo nível é 48. A escala acumulada é: A igual a 0, B igual a 48, C igual a 96, D igual a 144, E igual a 192, e assim por diante, de 48 em 48, até S igual a 864.

**Interstício mínimo.** Nunca presuma. É resultado apurado, e o fundamento aparece sempre ao lado do valor:

- 18 meses no caso padrão, art. 47, § 7º
- 15 meses para quem tem direito a aposentadoria especial, art. 47, § 7º
- 12 meses quando a pontuação total do ciclo ultrapassa o equivalente aos dois níveis subsequentes, art. 47, § 8º

**Aperfeiçoamento.** Mínimo de 60 horas por ciclo de evolução, reduzido a 40 horas quando incide o art. 47, § 9º. Teto de 100 horas por ciclo. Pontuação de 0,09 por hora.

**Mínimos dos requisitos obrigatórios.** Efetivo exercício 2,4 pontos, a 0,2 por mês. Desempenho 7,0 pontos no último ciclo de avaliação concluído. Aperfeiçoamento 5,4 pontos, equivalentes a 60 horas.

**Desempenho na fase de transição.** 1,5 ponto por mês, de modo que um semestre sem afastamento fecha em 9,0. A verificação do mínimo de 7,0 recai sempre sobre o último ciclo semestral concluído, nunca sobre o acumulado do ciclo de evolução.

**Afastamentos.** Incidem simultaneamente sobre o efetivo exercício e sobre o desempenho. Nunca aplique desconto em um requisito sem aplicar no outro a partir do mesmo registro. As hipóteses do art. 4º da Lei nº 23.241/2025 contam como efetivo exercício; as do art. 5º não contam e também não comportam pontuação de desempenho.

**Obrigatórios e aceleradores.** Requisitos obrigatórios são efetivo exercício, desempenho e aperfeiçoamento. Pendência em qualquer um deles mantém o servidor no nível atual, ainda que a pontuação e o interstício estejam cumpridos, na forma do art. 47, § 6º. Requisitos aceleradores são assunção de responsabilidades e titulação acadêmica; são opcionais e não bloqueiam a evolução. Análise em curso sobre acelerador não retira o servidor da condição de apto.

**Pontos excedentes.** Pontuação obtida acima da necessária ao próximo nível é acumulada para o ciclo seguinte, art. 47, § 5º.

**Competências.** A verificação do cumprimento dos requisitos é da Comissão Setorial. A validação dos critérios de apuração é da Comissão Central. O ato de concessão é do titular do órgão. A reconsideração do desempenho é da chefia, e só o recurso sobe à Comissão Setorial; já na titulação acadêmica, a reconsideração é dirigida à própria comissão.

**Prazos do art. 53.** A comissão consolida a verificação e encaminha ao titular até o 15º dia útil do mês. O titular emite o ato até o último dia útil. Os efeitos funcionais e financeiros começam no primeiro dia do mês subsequente. É vedado ato com efeitos retroativos.

## Nomenclatura obrigatória

- **"Pontuação", nunca "nota".** As avaliações formais ainda não começaram.
- **"Ciclo de evolução"** é o interstício entre evoluções. **"Ciclo de avaliação"** é o período semestral do desempenho. Nunca troque um pelo outro.
- **"Mês de referência"** é o mês apurado. **"Mês de inserção da pontuação"** é o mês em que ela entra no sistema.
- Cite as normas por extenso: "Decreto nº 10.802/2025", "Lei nº 23.241/2025", "Lei nº 22.524/2024".

## O que este protótipo não é

Não é o sistema. O sistema definitivo, o IntegraGO, é desenvolvido por empresa terceira. Aqui não há autenticação real, banco de dados, backend nem integração. O protótipo serve para validar fluxos e requisitos com a área de negócio antes do desenvolvimento.
