"use strict";

// ============================================================
// BEBERIBE NOTÍCIAS — EDIÇÃO DE 07/08/2026
// Atualização semanal. Estrutura compatível com o portal atual.
// index.html e bloco de patrocinadores NÃO precisam ser alterados.
// ============================================================

const edicaoJornal = Object.freeze({
  dataEdicao: "2026-08-07",
  proximaAtualizacao: "2026-08-15",
  frequencia: "Atualização semanal aos sábados",
  local: "Beberibe - Ceará"
});

const bancoNoticias = [
  {
    id: 2,
    titulo: "4ª Reunião da CGA avança na revisão do Plano Diretor e prepara audiência e oficinas",
    data: "2026-08-06",
    atualizado: "2026-08-07",
    categoria: "Plano Diretor",
    imagem: "https://www.beberibe.ce.gov.br/fotos/2408/Img0_600x400.jpg",
    destaque: true,
    selo: "PDM • Reunião da CGA",
    resumo: "Encontro tratou das atas anteriores, do roteiro da 1ª Audiência Pública, das Oficinas Participativas e das contribuições ao Diagnóstico Preliminar.",
    conteudo: [
      "A 4ª Reunião Ordinária da Comissão de Gestão e Acompanhamento (CGA) do Plano Diretor de Beberibe foi realizada em 6 de agosto, dando continuidade à revisão do principal instrumento de planejamento territorial do município.",
      "Segundo a Prefeitura de Beberibe, o encontro discutiu a aprovação das atas das reuniões anteriores, a apresentação do roteiro da 1ª Audiência Pública e das Oficinas Participativas e o compartilhamento de sugestões e contribuições para o Diagnóstico Preliminar.",
      "A pauta oficial da reunião foi organizada em sete pontos: verificação do quórum; aprovação da pauta; aprovação das atas da 2ª e da 3ª Reuniões Ordinárias; apresentação do roteiro da 1ª Audiência Pública e das oficinas; compartilhamento de sugestões, correções e complementações ao Diagnóstico Preliminar; convite aos membros da CGA para colaborarem nas oficinas; e assuntos gerais.",
      "A Prefeitura informou ainda que os integrantes da comissão foram convidados a participar das oficinas como colaboradores da equipe técnica. A etapa reforça o caráter participativo da revisão do Plano Diretor, abrindo espaço para que informações do diagnóstico sejam conferidas e aperfeiçoadas antes das fases seguintes.",
      "Para o cidadão, o ponto central é acompanhar as próximas atividades públicas e verificar como temas como mobilidade, meio ambiente, habitação, equipamentos públicos, turismo, desenvolvimento econômico e uso do território serão traduzidos em diretrizes para o futuro de Beberibe."
    ],
    servico: [
      "Tema: revisão do Plano Diretor Municipal de Beberibe.",
      "Próxima etapa já divulgada: 1ª Audiência Pública e Oficinas Participativas.",
      "Acompanhe alterações de datas, horários e locais nos canais oficiais da Prefeitura e do PDM."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — 4ª Reunião Ordinária da CGA",
      url: "https://www.beberibe.ce.gov.br/informa/2408/4-reuni-o-ordin-ria-da-cga-d-continuidade-revis-o-"
    },
    fonteComplementar: {
      nome: "Prefeitura Municipal de Beberibe — portal oficial",
      url: "https://www.beberibe.ce.gov.br/"
    },
    creditoImagem: "Prefeitura Municipal de Beberibe"
  },

  {
    id: 1,
    titulo: "Uruaú: Zebra Boutique Hotel reúne hotelaria de charme, praia e a história do kitesurf",
    data: "2026-08-07",
    atualizado: "2026-08-07",
    categoria: "Turismo",
    imagem: "https://zebra-boutique.ceara-hotels.com/data/Images/OriginalPhoto/16205/1620529/1620529025/image-beberibe-zebra-boutique-hotel-23.JPEG",
    destaque: false,
    selo: "Turismo • Uruaú",
    resumo: "Empreendimento à beira-mar integra a história turística de Uruaú e tem trajetória associada ao empresário e pioneiro do kitesurf Kicco Risi.",
    conteudo: [
      "A Praia do Uruaú reúne mar, lagoa, ventos constantes e uma rede de hospedagem que ajudou a projetar a localidade para visitantes brasileiros e estrangeiros. Entre os empreendimentos conhecidos está o Zebra Boutique Hotel, situado na Rua Antônio Carlos Jobim, próximo à Praia do Uruaú.",
      "Listagens atuais de hospedagem apresentam o Zebra como hotel à beira-mar, com piscina, jardim, restaurante e estrutura de bem-estar. A localização é um dos principais atrativos para quem busca combinar descanso, praia e atividades ligadas ao vento e ao mar.",
      "A história do empreendimento está ligada a Kicco Risi. Em 2012, o Diário do Nordeste registrou que o italiano administrava a pousada Zebra Beach, a escolinha de kite e outros anexos em Uruaú, além de destacá-lo como pioneiro do kitesurf no Ceará. Em 2024, reportagem sobre turismo esportivo voltou a apresentá-lo ligado ao Hotel Zebra Beach & Spa.",
      "A ligação entre hospedagem e esporte ajudou Uruaú a ganhar projeção entre praticantes de kitesurf. O destino reúne condições naturais favoráveis, com lagoa, mar e ventos que atraem atletas e visitantes interessados no litoral Leste do Ceará.",
      "Mais do que um meio de hospedagem, a trajetória do Zebra ajuda a contar uma parte do desenvolvimento turístico de Uruaú: a transformação de características naturais da localidade em experiências de turismo, esporte e permanência no território.",
      "Nota editorial: esta matéria integra a cobertura de turismo e desenvolvimento local do Beberibe Notícias e não é conteúdo patrocinado. Informações comerciais, serviços e disponibilidade devem ser confirmados diretamente com o empreendimento."
    ],
    servico: [
      "Localidade: Praia do Uruaú, Beberibe-CE.",
      "Endereço divulgado pelo hotel: Rua Antônio Carlos Jobim, 33 — Uruaú.",
      "Perfil atual do empreendimento: @zebraboutiquehotel."
    ],
    fonte: {
      nome: "Zebra Boutique Hotel — canais atuais do empreendimento",
      url: "https://linktr.ee/zebraboutiquehotel"
    },
    fonteComplementar: {
      nome: "Diário do Nordeste — Na rota das feras (histórico de Kicco Risi e Zebra Beach)",
      url: "https://diariodonordeste.verdesmares.com.br/jogada/amp/na-rota-das-feras-1.659051"
    },
    fontesExtras: [
      {
        nome: "Portal IN — turismo esportivo e Kitesurf Leste Wind (2024)",
        url: "https://www.portalin.com.br/negocios/conexoes-do-turismo-mostra-a-uniao-hoteleira-no-projeto-kitesurf-leste-wind/"
      },
      {
        nome: "Booking — Zebra Boutique Hotel (informações atuais da hospedagem)",
        url: "https://www.booking.com/hotel/br/zebra-boutique.pt-br.html"
      }
    ],
    creditoImagem: "Ceara-Hotels.com / imagem de divulgação do Zebra Boutique Hotel"
  },

  {
    id: 3,
    titulo: "CRAS Sede reúne coordenadores e entrevistadores do Cadastro Único",
    data: "2026-08-07",
    atualizado: "2026-08-07",
    categoria: "Cidadania",
    imagem: "https://www.beberibe.ce.gov.br/fotos/2409/Img0_600x400.jpg",
    destaque: false,
    selo: "Assistência Social",
    resumo: "Prefeitura divulgou nesta sexta-feira reunião do CRAS Sede com profissionais envolvidos no atendimento do Cadastro Único.",
    conteudo: [
      "A Prefeitura de Beberibe divulgou nesta sexta-feira, 7 de agosto, a realização de uma reunião no CRAS Sede com coordenadores e entrevistadores do Cadastro Único.",
      "O Cadastro Único é a principal base utilizada para identificar famílias de baixa renda e viabilizar o acesso a diferentes programas e benefícios sociais. Por isso, o alinhamento das equipes que realizam entrevistas e atualizações cadastrais é parte importante da rotina de atendimento.",
      "Moradores que precisam cadastrar ou atualizar informações devem acompanhar as orientações do CRAS e dos canais oficiais do município para conferir documentação, horários e formas de atendimento."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — CRAS Sede e Cadastro Único",
      url: "https://www.beberibe.ce.gov.br/informa/2409/cras-sede-realiza-reuni-o-com-coordenadores-e-entr"
    },
    creditoImagem: "Prefeitura Municipal de Beberibe"
  },

  {
    id: 4,
    titulo: "VetMóvel leva atendimento veterinário à comunidade de Palmeira",
    data: "2026-08-06",
    atualizado: "2026-08-07",
    categoria: "Serviços",
    imagem: "https://www.beberibe.ce.gov.br/fotos/2407/Img0_600x400.jpg",
    destaque: false,
    selo: "Bem-estar animal",
    resumo: "Ação itinerante divulgada pela Prefeitura levou atendimento veterinário à comunidade de Palmeira.",
    conteudo: [
      "A comunidade de Palmeira recebeu atendimento do VetMóvel, conforme divulgação da Prefeitura de Beberibe em 6 de agosto.",
      "A iniciativa aproxima os serviços de cuidado animal das comunidades e reduz a necessidade de deslocamento dos moradores até a sede para buscar orientações e atendimentos disponibilizados pela ação.",
      "Como os serviços, horários e critérios podem variar em cada edição, os tutores devem acompanhar os canais oficiais da Prefeitura para saber quais comunidades receberão as próximas ações e quais atendimentos estarão disponíveis."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — VetMóvel em Palmeira",
      url: "https://www.beberibe.ce.gov.br/informa/2407/vetm-vel-leva-atendimento-veterin-rio-comunidade-d"
    },
    creditoImagem: "Prefeitura Municipal de Beberibe"
  },

  {
    id: 5,
    titulo: "Casa do Cidadão Itinerante leva serviços à comunidade de Arataca",
    data: "2026-08-06",
    atualizado: "2026-08-07",
    categoria: "Cidadania",
    imagem: "https://www.beberibe.ce.gov.br/fotos/2406/Img0_600x400.jpg",
    destaque: false,
    selo: "Serviço itinerante",
    resumo: "A Prefeitura informou que a Casa do Cidadão Itinerante esteve em Arataca levando serviços para mais perto dos moradores.",
    conteudo: [
      "A comunidade de Arataca recebeu a Casa do Cidadão Itinerante, ação divulgada pela Prefeitura de Beberibe em 6 de agosto.",
      "O formato itinerante tem como objetivo aproximar serviços públicos das comunidades e facilitar o acesso de moradores que enfrentam maior distância até os equipamentos localizados na sede.",
      "Para confirmar quais documentos e serviços estão disponíveis em cada atendimento, a orientação é consultar previamente a divulgação oficial do município."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — Casa do Cidadão Itinerante em Arataca",
      url: "https://www.beberibe.ce.gov.br/informa/2406/casa-do-cidad-o-itinerante-leva-servi-os-essenciai"
    },
    creditoImagem: "Prefeitura Municipal de Beberibe"
  },

  {
    id: 6,
    titulo: "Hospital Municipal realiza avaliações para pequenas cirurgias",
    data: "2026-08-06",
    atualizado: "2026-08-07",
    categoria: "Saúde",
    imagem: "https://www.beberibe.ce.gov.br/fotos/2403/Img0_600x400.jpg",
    destaque: false,
    selo: "Saúde municipal",
    resumo: "Hospital Municipal realizou etapa de avaliações de pacientes para procedimentos de pequenas cirurgias.",
    conteudo: [
      "A Prefeitura de Beberibe informou em 6 de agosto que o Hospital Municipal realizou avaliações voltadas a pequenas cirurgias.",
      "A avaliação clínica é uma etapa necessária para analisar cada caso, organizar encaminhamentos e definir a conduta adequada pela equipe de saúde.",
      "Pacientes devem seguir as orientações recebidas pela rede municipal e confirmar diretamente com a unidade responsável datas, documentação, preparo e demais procedimentos relacionados ao atendimento."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — avaliações para pequenas cirurgias",
      url: "https://www.beberibe.ce.gov.br/informa/2403/hospital-municipal-realiza-avalia-es-para-pequenas"
    },
    creditoImagem: "Prefeitura Municipal de Beberibe"
  },

  {
    id: 7,
    titulo: "Cemitério e região recebem serviços de poda e limpeza",
    data: "2026-08-06",
    atualizado: "2026-08-07",
    categoria: "Infraestrutura",
    imagem: "https://www.beberibe.ce.gov.br/fotos/2398/Img0_600x400.jpg",
    destaque: false,
    selo: "Manutenção urbana",
    resumo: "Serviços de poda e limpeza foram realizados no cemitério e no entorno, segundo divulgação da Prefeitura.",
    conteudo: [
      "A Prefeitura de Beberibe divulgou a realização de serviços de poda e limpeza no cemitério e na região do entorno.",
      "A manutenção desses espaços contribui para conservação, organização e melhores condições de circulação e uso pela população.",
      "Demandas de limpeza urbana, poda e manutenção de áreas públicas devem ser encaminhadas pelos canais oficiais disponibilizados pelo município."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — poda e limpeza no cemitério e região",
      url: "https://www.beberibe.ce.gov.br/informa/2398/cemit-rio-e-regi-o-recebem-servi-os-de-poda-e-limp"
    },
    creditoImagem: "Prefeitura Municipal de Beberibe"
  },

  {
    id: 8,
    titulo: "Policlínica realiza avaliações para encaminhamento de pacientes",
    data: "2026-08-05",
    atualizado: "2026-08-07",
    categoria: "Saúde",
    imagem: "https://www.beberibe.ce.gov.br/fotos/2404/Img0_600x400.jpg",
    destaque: false,
    selo: "Rede de saúde",
    resumo: "A Prefeitura divulgou nova agenda de avaliações na Policlínica para organização de encaminhamentos de pacientes.",
    conteudo: [
      "A Policlínica de Beberibe realizou avaliações para encaminhamento de pacientes, em ação divulgada pela Prefeitura em 5 de agosto.",
      "A etapa de avaliação permite que a rede de saúde organize o fluxo de atendimento e encaminhe cada paciente de acordo com a indicação definida pelos profissionais responsáveis.",
      "Quem aguarda consulta, avaliação ou encaminhamento deve manter os dados de contato atualizados e acompanhar as orientações fornecidas pela unidade de saúde de referência."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — avaliações na Policlínica",
      url: "https://www.beberibe.ce.gov.br/informa/2404/policl-nica-realiza-avalia-es-para-encaminhamento-"
    },
    creditoImagem: "Prefeitura Municipal de Beberibe"
  },

  {
    id: 10,
    titulo: "Ponto de Apoio do Córrego do Pântano amplia atendimento à população",
    data: "2026-08-05",
    atualizado: "2026-08-07",
    categoria: "Saúde",
    imagem: "https://www.beberibe.ce.gov.br/fotos/2399/Img0_600x400.jpg",
    destaque: false,
    selo: "Atendimento local",
    resumo: "Estrutura de apoio no Córrego do Pântano teve ampliação de atendimento divulgada pela Prefeitura de Beberibe.",
    conteudo: [
      "A Prefeitura de Beberibe divulgou em 5 de agosto a ampliação do atendimento no Ponto de Apoio do Córrego do Pântano.",
      "A presença de estruturas de atendimento mais próximas das comunidades é importante para reduzir deslocamentos e melhorar o acesso da população aos serviços disponibilizados pela rede municipal.",
      "Moradores devem acompanhar os comunicados oficiais para saber dias, horários e tipos de atendimento oferecidos no ponto de apoio."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — Ponto de Apoio do Córrego do Pântano",
      url: "https://www.beberibe.ce.gov.br/informa/2399/ponto-de-apoio-c-rrego-do-p-ntano-amplia-atendimen"
    },
    creditoImagem: "Prefeitura Municipal de Beberibe"
  }
];
