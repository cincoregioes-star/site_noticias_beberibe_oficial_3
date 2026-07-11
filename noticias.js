/**
 * BEBERIBE NOTÍCIAS — EDIÇÃO SEMANAL
 * Atualização: sábado, 11 de julho de 2026.
 * Para a próxima edição, altere as datas abaixo e substitua/adicione notícias.
 */
const edicaoJornal = Object.freeze({
  dataEdicao: "2026-07-11",
  proximaAtualizacao: "2026-07-18",
  frequencia: "Atualização aos sábados",
  local: "Beberibe - Ceará"
});

const bancoNoticias = [
  {
    id: 1,
    titulo: "Nova unidade da CAIXA amplia atendimento bancário em Beberibe",
    data: "2026-06-26",
    atualizado: "2026-07-11",
    categoria: "Serviços",
    imagem: "assets/caixa-beberibe.webp",
    destaque: true,
    selo: "SERVIÇO NOVO",
    resumo: "Ponto de Atendimento funciona no Centro, com serviços bancários, programas sociais e três caixas eletrônicos.",
    conteudo: [
      "Beberibe passou a contar com um novo Ponto de Atendimento da CAIXA, inaugurado em 26 de junho de 2026 na Rua Coronel Biá, sem número, no Centro.",
      "A unidade oferece atendimento bancário e acesso a programas sociais do Governo Federal. O atendimento presencial ocorre de segunda a sexta-feira, das 10h às 15h.",
      "O espaço também dispõe de três terminais de autoatendimento, disponíveis diariamente das 6h às 22h. Segundo a CAIXA, a estrutura tem aproximadamente 481 metros quadrados e recursos de acessibilidade.",
      "A nova unidade reduz a necessidade de deslocamento para outros municípios e facilita o atendimento de trabalhadores, beneficiários de programas sociais, comerciantes e famílias de Beberibe."
    ],
    servico: [
      "Endereço: Rua Coronel Biá, s/n, Centro, Beberibe",
      "Atendimento presencial: segunda a sexta, das 10h às 15h",
      "Autoatendimento: todos os dias, das 6h às 22h"
    ],
    fonte: {
      nome: "CAIXA Notícias",
      url: "https://caixanoticias.caixa.gov.br/Paginas/Not%C3%ADcias/2026/06-JUNHO/CAIXA-inaugura-unidade-em-Beberibe-%28CE%29.aspx"
    },
    fonteComplementar: {
      nome: "Prefeitura de Beberibe",
      url: "https://www.beberibe.ce.gov.br/informa.php?id=2303"
    },
    creditoImagem: "CAIXA"
  },
  {
    id: 2,
    titulo: "Portaria de 7 de julho nomeia 28 aprovados do concurso de Beberibe; veja todos os nomes",
    data: "2026-07-07",
    atualizado: "2026-07-11",
    categoria: "Concurso",
    imagem: "assets/concurso-portaria-07-julho.svg",
    destaque: true,
    selo: "28 NOMEADOS",
    resumo: "A Portaria nº 07.07.001/2026 reúne 28 nomeados em nove cargos; a lista não contém convocação para Orientador Social.",
    conteudo: [
      "A Prefeitura de Beberibe publicou a Portaria GAPRE nº 07.07.001/2026, de 7 de julho de 2026, que nomeia aprovados no Concurso Público do Edital nº 001/2025 e os convoca para os procedimentos de posse.",
      "O Anexo I apresenta 28 pessoas distribuídas por nove cargos: Auxiliar de Administração, Auxiliar de Serviços Gerais, Motorista Escolar, Auxiliar Pedagógico, Técnico de Enfermagem, Assistente Social, Cirurgião Dentista, Enfermeiro e Psicólogo.",
      "A relação é formada por 25 candidatos da ampla concorrência, dois candidatos PCD e um candidato da modalidade PPP. Todos os nomes, inscrições, classificações e modalidades estão reproduzidos abaixo conforme as páginas 4 e 5 da portaria.",
      "Correção editorial: a notícia anterior que mencionava convocação para Orientador Social foi retirada. A Portaria nº 07.07.001/2026 não contém o cargo Orientador Social e nenhum nome dessa função aparece no seu Anexo I.",
      "O edital do concurso prevê cinco vagas imediatas para Orientador Social: três de ampla concorrência, uma PCD e uma reservada para pessoa negra. Nos cinco atos de nomeação analisados até 7 de julho, o código 016 — Orientador Social — não aparece entre os cargos nomeados.",
      "A contagem consolidada dos cinco atos de nomeação localizados resulta em 155 registros. Como duas inscrições aparecem novamente em atos posteriores, são 153 candidatos distintos. Comparando esse total com as 255 vagas imediatas previstas no edital, existe uma diferença aritmética de 102; esse número não deve ser tratado como saldo oficial, porque as listas posteriores incluem substituições, reclassificações, desistências e nomeações repetidas para vagas já abertas."
    ],
    alertaEditorial: {
      titulo: "Orientador Social não está nesta convocação",
      texto: "A lista de 7 de julho não inclui Orientador Social. A matéria incorreta foi removida. Até esta edição, nenhum dos cinco atos de nomeação analisados apresenta o código 016 do cargo."
    },
    metricas: [
      { valor: "28", rotulo: "nomeados em 7 de julho" },
      { valor: "9", rotulo: "cargos nesta portaria" },
      { valor: "155", rotulo: "registros em cinco atos" },
      { valor: "153", rotulo: "candidatos distintos" },
      { valor: "255", rotulo: "vagas imediatas do edital" },
      { valor: "102", rotulo: "diferença bruta, não saldo oficial" }
    ],
    historicoNomeacoes: [
      { portaria: "26.03.001/2026", data: "26/03/2026", registros: 71 },
      { portaria: "04.05.001/2026", data: "04/05/2026", registros: 7 },
      { portaria: "26.05.001/2026", data: "26/05/2026", registros: 34 },
      { portaria: "16.06.001/2026", data: "16/06/2026", registros: 15 },
      { portaria: "07.07.001/2026", data: "07/07/2026", registros: 28 }
    ],
    notaCalculo: "Os 155 registros correspondem às linhas publicadas nos cinco anexos de nomeação. As inscrições 11556 e 16792 reaparecem em atos posteriores, por isso a contagem de pessoas distintas é 153. A diferença de 102 em relação às 255 vagas é apenas um indicador bruto e não representa confirmação oficial de vagas ainda desocupadas.",
    situacaoOrientador: [
      "Vagas imediatas previstas: 5",
      "Ampla concorrência: 3",
      "Pessoa com deficiência: 1",
      "Pessoa negra/PPP: 1",
      "Nomeações identificadas nos cinco atos analisados: 0"
    ],
    servico: [
      "Envio dos documentos: no prazo de 15 dias da publicação, para gabineteadm@beberibe.ce.gov.br",
      "Exame médico admissional: 23 de julho de 2026, das 8h às 12h, na Policlínica Municipal",
      "Apresentação na Secretaria de Administração: 24 de julho de 2026, das 8h às 12h",
      "Endereço: Rua João Tomaz Ferreira, nº 42, Centro, Beberibe",
      "Posse: até 30 dias contados da nomeação; exercício: até 15 dias após a posse"
    ],
    convocados: [
      { cargo: "Auxiliar de Administração", inscricao: "14470", nome: "Igor Claudio Nogueira", classificacao: "2º", modalidade: "AC" },
      { cargo: "Auxiliar de Serviços Gerais", inscricao: "10906", nome: "Marlen de Sousa de Abreu", classificacao: "6º", modalidade: "AC" },
      { cargo: "Auxiliar de Serviços Gerais", inscricao: "14082", nome: "Emanuel Anderson Souza Lima", classificacao: "7º", modalidade: "AC" },
      { cargo: "Auxiliar de Serviços Gerais", inscricao: "3224", nome: "Raquel Ferreira Coutinho Câmara", classificacao: "8º", modalidade: "AC" },
      { cargo: "Auxiliar de Serviços Gerais", inscricao: "2632", nome: "Juliene Maria da Silva Monteiro de Castro", classificacao: "9º", modalidade: "AC" },
      { cargo: "Motorista Escolar", inscricao: "17722", nome: "Francisco Flavio Vieira", classificacao: "9º", modalidade: "AC" },
      { cargo: "Motorista Escolar", inscricao: "16792", nome: "Francisco Eurismar da Silva Santiago", classificacao: "10º", modalidade: "AC" },
      { cargo: "Auxiliar Pedagógico", inscricao: "7584", nome: "Lívia Araújo da Costa", classificacao: "5º", modalidade: "AC" },
      { cargo: "Auxiliar Pedagógico", inscricao: "8784", nome: "Evelly Cristhinne Oliveira Santos", classificacao: "6º", modalidade: "AC" },
      { cargo: "Auxiliar Pedagógico", inscricao: "13526", nome: "Matheus Barbalho Almeida", classificacao: "7º", modalidade: "AC" },
      { cargo: "Auxiliar Pedagógico", inscricao: "13547", nome: "Kellyne Lara Ferreira Alves", classificacao: "8º", modalidade: "AC" },
      { cargo: "Auxiliar Pedagógico", inscricao: "14455", nome: "Jose Lucas Borges Tomaz", classificacao: "9º", modalidade: "AC" },
      { cargo: "Auxiliar Pedagógico", inscricao: "16125", nome: "Estefany Gomes Fernandes", classificacao: "10º", modalidade: "AC" },
      { cargo: "Auxiliar Pedagógico", inscricao: "17274", nome: "Sabryna Silva Lima", classificacao: "11º", modalidade: "AC" },
      { cargo: "Auxiliar Pedagógico", inscricao: "17099", nome: "Rodrigo Chaves Freire", classificacao: "12º", modalidade: "AC" },
      { cargo: "Auxiliar Pedagógico", inscricao: "10635", nome: "Graziele Martins da Silva", classificacao: "13º", modalidade: "AC" },
      { cargo: "Auxiliar Pedagógico", inscricao: "14619", nome: "Luis Gonzaga Maia Neto", classificacao: "14º", modalidade: "AC" },
      { cargo: "Auxiliar Pedagógico", inscricao: "13818", nome: "Walter Santana Silva", classificacao: "15º", modalidade: "AC" },
      { cargo: "Auxiliar Pedagógico", inscricao: "8907", nome: "Alex Constantino da Silva", classificacao: "2º", modalidade: "PPP" },
      { cargo: "Auxiliar Pedagógico", inscricao: "1691", nome: "Roberta Lima Silva de Souza", classificacao: "1º", modalidade: "PCD" },
      { cargo: "Auxiliar Pedagógico", inscricao: "13006", nome: "Daline de Sousa Celestino", classificacao: "2º", modalidade: "PCD" },
      { cargo: "Técnico de Enfermagem", inscricao: "18933", nome: "Karlos Renan Maciel Silvestre Bié", classificacao: "9º", modalidade: "AC" },
      { cargo: "Assistente Social", inscricao: "2410", nome: "Sara Silva de Oliveira", classificacao: "8º", modalidade: "AC" },
      { cargo: "Assistente Social", inscricao: "11601", nome: "Nágyla Cristine Soares Costa", classificacao: "10º", modalidade: "AC" },
      { cargo: "Cirurgião Dentista", inscricao: "14948", nome: "Jaime Vieira de Oliveira", classificacao: "10º", modalidade: "AC" },
      { cargo: "Enfermeiro", inscricao: "1160", nome: "Alessandra de Carvalho Silva", classificacao: "8º", modalidade: "AC" },
      { cargo: "Psicólogo", inscricao: "10118", nome: "Danilo Pinheiro", classificacao: "16º", modalidade: "AC" },
      { cargo: "Psicólogo", inscricao: "2458", nome: "Lívia Ana de Sá Gomes", classificacao: "17º", modalidade: "AC" }
    ],
    galeria: [
      { imagem: "assets/portaria-07-07-capa.webp", legenda: "Página 1: identificação e objeto da Portaria nº 07.07.001/2026." },
      { imagem: "assets/portaria-07-07-lista-1.webp", legenda: "Página 4: primeira parte do Anexo I, com cargos e candidatos nomeados." },
      { imagem: "assets/portaria-07-07-lista-2.webp", legenda: "Página 5: continuação e encerramento da relação de nomeados." }
    ],
    documentoLocal: "documentos/portaria-07-07-001-2026.pdf",
    fonte: {
      nome: "Prefeitura de Beberibe — Portaria 07.07.001/2026",
      url: "https://beberibe.ce.gov.br/concursopublico.php?grup=42&id=3052"
    },
    fonteComplementar: {
      nome: "Consulpam — vagas do Edital nº 001/2025",
      url: "https://consulpam.selecao.net.br/informacoes/59/"
    },
    fontesExtras: [
      { nome: "Prefeitura de Beberibe — histórico do concurso", url: "https://beberibe.ce.gov.br/concursopublico.php?grup=42" },
      { nome: "Prefeitura de Beberibe — Portaria 26.05.001/2026", url: "https://www.beberibe.ce.gov.br/portaria.php?id=5660" }
    ],
    creditoImagem: "Arte Beberibe Notícias; documentos: Prefeitura de Beberibe"
  },
  {
    id: 3,
    titulo: "VetMóvel leva atendimento animal ao Boqueirão do Cesário",
    data: "2026-07-09",
    atualizado: "2026-07-11",
    categoria: "Saúde",
    imagem: "assets/vetmovel-boqueirao.webp",
    selo: "BEM-ESTAR ANIMAL",
    resumo: "Ação itinerante levou serviços veterinários e orientação aos tutores da comunidade.",
    conteudo: [
      "O VetMóvel de Beberibe chegou à comunidade de Boqueirão do Cesário com atendimento voltado ao cuidado e ao bem-estar dos animais.",
      "A iniciativa aproxima os serviços veterinários das comunidades e amplia o acesso de tutores que enfrentam dificuldade para se deslocar até a sede do município.",
      "Além dos procedimentos realizados durante a ação, o serviço contribui para orientar a população sobre prevenção, vacinação, manejo responsável e sinais que exigem avaliação profissional.",
      "Moradores devem acompanhar os canais oficiais da Prefeitura para saber quais localidades receberão as próximas etapas do atendimento itinerante."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe",
      url: "https://www.beberibe.ce.gov.br/informa/2326/cuidado-e-bem-estar-para-os-animais-da-nossa-comun"
    },
    creditoImagem: "Prefeitura de Beberibe"
  },
  {
    id: 4,
    titulo: "Profissionais da saúde recebem capacitação na Serra do Félix",
    data: "2026-07-09",
    atualizado: "2026-07-11",
    categoria: "Saúde",
    imagem: "assets/saude-serra-felix.webp",
    selo: "QUALIFICAÇÃO",
    resumo: "Treinamento municipal busca fortalecer o atendimento prestado à população no distrito.",
    conteudo: [
      "Profissionais da saúde que atuam na Serra do Félix participaram de uma capacitação promovida pelo município.",
      "A formação continuada ajuda as equipes a atualizar procedimentos, padronizar rotinas e melhorar o acolhimento dos usuários nos serviços públicos.",
      "Em comunidades mais distantes da sede, equipes preparadas e bem orientadas são essenciais para identificar riscos, realizar encaminhamentos e garantir continuidade do cuidado.",
      "A ação integra o esforço de qualificação dos profissionais que atendem diretamente a população de Beberibe."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe",
      url: "https://www.beberibe.ce.gov.br/informa/2325/qualifica-o-que-fortalece-o-cuidado-com-a-popula-o"
    },
    creditoImagem: "Prefeitura de Beberibe"
  },
  {
    id: 5,
    titulo: "Comunidade de Uberaba recebe modernização da iluminação pública",
    data: "2026-07-07",
    atualizado: "2026-07-11",
    categoria: "Infraestrutura",
    imagem: "assets/iluminacao-uberaba.webp",
    selo: "ILUMINAÇÃO LED",
    resumo: "Substituição de luminárias busca ampliar visibilidade, eficiência e segurança nas vias da comunidade.",
    conteudo: [
      "A comunidade de Uberaba recebeu serviços de modernização da iluminação pública com a instalação de luminárias de tecnologia LED.",
      "A troca melhora a visibilidade noturna e pode reduzir falhas e consumo de energia em comparação com equipamentos antigos.",
      "Uma iluminação mais eficiente também favorece a circulação de pedestres, o trânsito local, o funcionamento do comércio e a sensação de segurança dos moradores.",
      "A Prefeitura informou que a ação integra melhorias realizadas em comunidades do município."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe",
      url: "https://www.beberibe.ce.gov.br/informa/2323/mais-ilumina-o-seguran-a-e-efici-ncia-para-a-comun"
    },
    creditoImagem: "Prefeitura de Beberibe"
  },
  {
    id: 6,
    titulo: "Gruta Mãe D’Água continua interditada após desabamento parcial",
    data: "2026-06-17",
    atualizado: "2026-07-11",
    categoria: "Alerta",
    imagem: "assets/gruta-alerta.svg",
    selo: "ACESSO PROIBIDO",
    resumo: "Área permanece fechada até nova avaliação técnica; visitantes não devem ultrapassar a sinalização.",
    conteudo: [
      "Parte da Gruta Mãe D’Água, em Beberibe, desabou em 16 de junho. Não houve registro de vítimas.",
      "O local já estava interditado e sinalizado devido à instabilidade observada anteriormente. A avaliação inicial relacionou o episódio ao processo natural de erosão costeira provocado pela ação das marés e das ondas.",
      "O acesso permanece proibido até que uma nova avaliação técnica indique condições seguras. A área segue sob acompanhamento dos órgãos municipais responsáveis.",
      "Moradores, guias e turistas não devem remover barreiras nem entrar no trecho interditado, inclusive para fotos. Em áreas de falésias e grutas, o solo pode ceder sem aviso."
    ],
    servico: [
      "Situação: acesso interditado",
      "Não ultrapasse a sinalização",
      "Aguarde liberação oficial após avaliação técnica"
    ],
    fonte: {
      nome: "O POVO",
      url: "https://www.opovo.com.br/noticias/ceara/beberibe/2026/06/17/gruta-mae-d-agua-desaba-parcialmente-em-beberibe.html"
    },
    creditoImagem: "Arte ilustrativa Beberibe Notícias"
  },
  {
    id: 7,
    titulo: "Hospital Municipal realiza nova etapa de cirurgias oftalmológicas",
    data: "2026-07-04",
    atualizado: "2026-07-11",
    categoria: "Saúde",
    imagem: "assets/cirurgias-oftalmo.webp",
    selo: "SAÚDE OCULAR",
    resumo: "Procedimentos foram realizados no Hospital Municipal Monsenhor Dourado.",
    conteudo: [
      "O Hospital Municipal Monsenhor Dourado realizou mais uma etapa de cirurgias oftalmológicas em Beberibe.",
      "A oferta local dos procedimentos ajuda pacientes que aguardam tratamento e reduz deslocamentos para outros municípios.",
      "O acompanhamento antes e depois da cirurgia é essencial. Pacientes devem seguir as orientações da equipe, usar corretamente os medicamentos prescritos e comparecer às revisões marcadas.",
      "Informações sobre filas, encaminhamentos e novas etapas devem ser buscadas diretamente na rede municipal de saúde."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe",
      url: "https://www.beberibe.ce.gov.br/informa/2317/mais-um-importante-avan-o-na-sa-de-de-beberibe"
    },
    creditoImagem: "Prefeitura de Beberibe"
  },
  {
    id: 8,
    titulo: "Beberibe celebra 134 anos com programação cultural na Praça Matriz",
    data: "2026-07-04",
    atualizado: "2026-07-11",
    categoria: "Cultura",
    imagem: "assets/festa-134-anos.webp",
    selo: "ANIVERSÁRIO DA CIDADE",
    resumo: "Programação reuniu concurso Miss & Mister e apresentações musicais no Centro.",
    conteudo: [
      "Beberibe celebrou 134 anos de emancipação com programação realizada na Praça Matriz.",
      "A agenda incluiu o concurso Miss & Mister Beberibe e shows de Henry Freitas, Amanda Rainha e Lagosta Bronzeada.",
      "Eventos desse porte movimentam o Centro, geram demanda para alimentação, transporte, comércio e trabalhadores temporários, além de fortalecer a convivência e a identidade cultural da cidade.",
      "O aniversário também é um momento para valorizar a história das comunidades e discutir os próximos passos do desenvolvimento municipal."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe",
      url: "https://www.beberibe.ce.gov.br/informa.php?id=2321"
    },
    creditoImagem: "Prefeitura de Beberibe"
  },
  {
    id: 9,
    titulo: "Ordem de serviço autoriza pavimentação da Estrada do Cumbe",
    data: "2026-07-03",
    atualizado: "2026-07-11",
    categoria: "Infraestrutura",
    imagem: "assets/estrada-cumbe.webp",
    selo: "MOBILIDADE",
    resumo: "Obra de calçamento deve melhorar o acesso, a circulação e as condições de deslocamento na região.",
    conteudo: [
      "Foi assinada a ordem de serviço para a pavimentação em calçamento da Estrada do Cumbe, em Beberibe.",
      "A melhoria viária é importante para o deslocamento dos moradores, o transporte de estudantes, o acesso a serviços e o escoamento da produção local.",
      "Durante a execução, condutores devem reduzir a velocidade e respeitar possíveis desvios, máquinas e trabalhadores na pista.",
      "A população pode acompanhar o andamento e eventuais mudanças no trânsito pelos canais oficiais do município."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe",
      url: "https://www.beberibe.ce.gov.br/informa.php?id=2318"
    },
    creditoImagem: "Prefeitura de Beberibe"
  },
  {
    id: 10,
    titulo: "ENEM 2026: provas estão marcadas para 8 e 15 de novembro",
    data: "2026-07-11",
    atualizado: "2026-07-11",
    categoria: "Educação",
    imagem: "assets/enem-cronograma.svg",
    selo: "CRONOGRAMA OFICIAL",
    resumo: "Estudantes têm quatro meses para organizar revisão, simulados, redação e estratégia de prova.",
    conteudo: [
      "O cronograma oficial do ENEM 2026 prevê a aplicação das provas nos dias 8 e 15 de novembro.",
      "Com a aproximação do exame, estudantes devem dividir a preparação entre revisão de conteúdo, resolução de questões, simulados completos e treino semanal de redação.",
      "Também é importante praticar controle de tempo, leitura de enunciados e organização emocional para os dois domingos de prova.",
      "O DB ENEM, projeto parceiro do portal, oferece simulados digitais por área e pode ser usado como ferramenta complementar de treino. O cronograma oficial deve sempre ser conferido no portal do Inep."
    ],
    servico: [
      "1º dia: 8 de novembro de 2026",
      "2º dia: 15 de novembro de 2026",
      "Fonte oficial: Inep"
    ],
    fonte: {
      nome: "Inep — Cronograma ENEM 2026",
      url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/orientacoes/cronograma"
    },
    creditoImagem: "Arte Beberibe Notícias"
  },
  {
    id: 11,
    titulo: "PND 2026: pagamento da taxa pode ser feito até 14 de julho",
    data: "2026-07-11",
    atualizado: "2026-07-11",
    categoria: "Educação",
    imagem: "assets/pnd-2026.webp",
    selo: "PRAZO IMPORTANTE",
    resumo: "Inscrições foram encerradas; candidatos inscritos devem observar pagamento, atendimento especializado e data da prova.",
    conteudo: [
      "O período de inscrição da Prova Nacional Docente 2026 terminou em 10 de julho, mas candidatos inscritos ainda devem acompanhar os próximos prazos.",
      "O pagamento da taxa está previsto até 14 de julho. O resultado das solicitações de atendimento especializado também está programado para o dia 14, com recursos entre 14 e 16 de julho e resultado final em 20 de julho.",
      "A prova será aplicada em 20 de setembro. A avaliação terá formação geral docente, questão discursiva e componente específico da área de licenciatura escolhida.",
      "Como datas podem sofrer ajustes, o candidato deve consultar a Página do Participante e os comunicados oficiais do Inep."
    ],
    servico: [
      "Pagamento da taxa: até 14 de julho",
      "Prova: 20 de setembro de 2026",
      "Resultado final previsto: 15 de dezembro"
    ],
    fonte: {
      nome: "Inep — Prova Nacional Docente",
      url: "https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/prova-nacional-docente/pnd-inscricoes-sao-prorrogadas-ate-10-7"
    },
    creditoImagem: "Inep / Governo Federal"
  },
  {
    id: 12,
    titulo: "Resultado do concurso municipal do Edital 004/2025 é homologado",
    data: "2026-06-24",
    atualizado: "2026-07-11",
    categoria: "Concurso",
    imagem: "assets/concurso-homologado.svg",
    selo: "CONCURSO PÚBLICO",
    resumo: "Decreto nº 24.06.01/2026 homologa o resultado final; próximos atos devem ser acompanhados no portal oficial.",
    conteudo: [
      "O Município de Beberibe publicou o Decreto nº 24.06.01/2026, que homologa o resultado final do concurso público regido pelo Edital nº 004/2025.",
      "A homologação encerra formalmente a etapa de resultado e permite que a administração realize convocações durante a validade do certame, conforme necessidade, disponibilidade de vagas e regras do edital.",
      "A aprovação não deve ser confundida com nomeação imediata. Candidatos precisam acompanhar Diário Oficial, decretos, portarias e publicações da Prefeitura.",
      "É recomendável manter telefone, e-mail, endereço e documentos atualizados para evitar problemas quando houver convocação."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — Decretos",
      url: "https://www.beberibe.ce.gov.br/decretos.php?id=2999"
    },
    creditoImagem: "Arte Beberibe Notícias"
  }
];
