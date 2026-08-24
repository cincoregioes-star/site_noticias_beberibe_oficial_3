const EDICAO = { data: '24/08/2026', local: 'Beberibe - Ceará' };

const noticias = [
  {
    id: 1, imagem: 'assets/capa-orientacao-social.jpg', categoria: 'Beberibe', data: '24/08/2026', selo: 'CIDADANIA',
    titulo: 'Orientação Social que Cultiva Cidadania é destaque da nova edição do Beberibe Notícias',
    resumo: 'E-book conecta orientação social, canteiros suspensos, sustentabilidade, inclusão e oficinas socioeducativas, com integração à BASE Orienta Social 2.0.',
    conteudo: [
      'A publicação “Orientação Social que Cultiva Cidadania” foi desenvolvida em Beberibe como material de estudo, planejamento de oficinas e apresentação de projeto-piloto socioeducativo.',
      'O projeto utiliza o cultivo e os canteiros suspensos como instrumentos para estimular convivência, participação, autonomia, educação ambiental e fortalecimento de vínculos.',
      'Uma das frentes mais relevantes é a possibilidade de adaptação dos canteiros para idosos e pessoas com deficiência, permitindo atividades em altura mais confortável e com melhor acesso.',
      'A BASE Orienta Social 2.0 aparece integrada ao projeto como extensão digital para consulta, estudo e apoio ao planejamento de atividades socioeducativas.'
    ],
    fonte: 'E-book Orientação Social que Cultiva Cidadania', url: 'https://cincoregioes-star.github.io/E-BOOK-ORIENTA-O-SOCIAL-QUE-CULTIVA-CIDADANIA/'
  },
  {
    id: 2, imagem: 'assets/concurso-beberibe.svg', categoria: 'Concurso', data: '24/08/2026', selo: '001/2025',
    titulo: 'Concurso de Beberibe segue “em andamento”; portal mantém acompanhamento das convocações',
    resumo: 'Consulpam mantém o Edital 001/2025 em andamento. Última nomeação consolidada no arquivo do portal teve 28 nomes em 7 de julho.',
    conteudo: [
      'A página da Consulpam referente ao Concurso Público da Prefeitura Municipal de Beberibe, Edital nº 001/2025, continua indicando a situação “em andamento”.',
      'O resultado final dos candidatos aprovados dentro do limite de vagas foi publicado em 30 de janeiro de 2026.',
      'O Beberibe Notícias já havia registrado a Portaria nº 07.07.001/2026, com 28 nomeados em diferentes cargos. Na verificação desta edição, não foi localizada uma nova convocação geral posterior nas páginas públicas indexadas consultadas.',
      'Para evitar números contraditórios, o portal só atualizará o total de convocados após conferência acumulada de todas as portarias e atos oficiais.'
    ],
    fonte: 'Consulpam', url: 'https://consulpam.selecao.net.br/informacoes/59/'
  },
  {
    id: 3, imagem: 'assets/pdm-beberibe.svg', categoria: 'Beberibe', data: '06/08/2026', selo: 'PLANO DIRETOR',
    titulo: 'Plano Diretor: participação social entrou em nova etapa após reunião da CGA e oficinas',
    resumo: 'A agenda do PDM avançou em agosto com revisão do diagnóstico, audiência e oficinas participativas em Beberibe.',
    conteudo: [
      'A 4ª Reunião Ordinária da Comissão de Gestão e Acompanhamento (CGA) do Plano Diretor ocorreu em 6 de agosto, dando continuidade à revisão do diagnóstico e à preparação das atividades participativas.',
      'A pauta envolveu atas, roteiro de atividades e contribuições ao Diagnóstico Preliminar, com participação de representantes da sociedade civil e do poder público.',
      'A etapa seguinte incluiu audiência pública e oficinas territoriais, ampliando a participação dos moradores na construção das diretrizes do município.'
    ],
    fonte: 'Prefeitura de Beberibe', url: 'https://www.beberibe.ce.gov.br/informa/2408/4-reuni-o-ordin-ria-da-cga-d-continuidade-revis-o-'
  },
  {
    id: 4, imagem: 'assets/saude-beberibe.svg', categoria: 'Beberibe', data: '04/07/2026', selo: 'SAÚDE',
    titulo: 'Hospital Municipal de Beberibe realizou nova etapa de cirurgias oftalmológicas',
    resumo: 'Procedimentos no Hospital Monsenhor Dourado reforçaram o atendimento especializado em saúde ocular no município.',
    conteudo: [
      'O Hospital Municipal Monsenhor Dourado realizou em julho mais uma etapa de cirurgias oftalmológicas.',
      'A oferta local reduz deslocamentos e amplia o acesso de pacientes a procedimentos especializados.',
      'Pacientes devem seguir as orientações da equipe e acompanhar os canais oficiais da Secretaria Municipal de Saúde para novas etapas e encaminhamentos.'
    ],
    fonte: 'Prefeitura de Beberibe', url: 'https://beberibe.ce.gov.br/informa/2317/mais-um-importante-avan-o-na-sa-de-de-beberibe'
  },
  {
    id: 5, imagem: 'assets/pesquisa-ceara.svg', categoria: 'Ceará', data: '20/08/2026', selo: 'ELEIÇÕES CE',
    titulo: 'Ipsos-Ipec: Ciro tem 43% e Elmano 35% na corrida pelo Governo do Ceará',
    resumo: 'Levantamento ouviu 800 eleitores, tem margem de erro de três pontos e registro CE-00195/2026.',
    conteudo: [
      'Pesquisa Ipsos-Ipec divulgada em 20 de agosto mostra Ciro Gomes com 43% e Elmano de Freitas com 35% no cenário estimulado para o Governo do Ceará.',
      'Na espontânea, Elmano aparece com 24% e Ciro com 23%, enquanto 44% não indicaram um nome.',
      'Em uma simulação de segundo turno entre os dois, Ciro registra 50% e Elmano 41%.',
      'Foram ouvidos 800 eleitores entre 14 e 17 de agosto. A margem de erro é de três pontos percentuais e o nível de confiança é de 95%.'
    ],
    fonte: 'UOL / Ipsos-Ipec', url: 'https://noticias.uol.com.br/eleicoes/2026/08/21/pesquisa-para-governador-do-ceara-veja-numeros-do-novo-levantamento.ghtm'
  },
  {
    id: 6, imagem: 'assets/pesquisa-presidente.svg', categoria: 'Eleições', data: '24/08/2026', selo: 'PRESIDÊNCIA',
    titulo: 'BTG/Nexus: Lula 41% e Flávio Bolsonaro 37% no primeiro turno',
    resumo: 'Pesquisa divulgada nesta segunda-feira aponta disputa apertada; no segundo turno, levantamento registra 46% a 45%.',
    conteudo: [
      'A pesquisa BTG/Nexus divulgada em 24 de agosto aponta Lula com 41% das intenções de voto e Flávio Bolsonaro com 37% no principal cenário de primeiro turno.',
      'Como a margem de erro é de dois pontos percentuais, a diferença está no limite do empate técnico.',
      'Em eventual segundo turno entre os dois, Lula aparece com 46% e Flávio com 45%.',
      'O levantamento ouviu 2.006 eleitores por telefone entre 21 e 23 de agosto, com 95% de confiança. Registro TSE: BR-09028/2026.'
    ],
    fonte: 'BTG/Nexus', url: 'https://www.nexus.fsb.com.br/estudos-divulgados/pesquisa-btg-nexus-de-intencao-de-votos-para-presidente-do-brasil-24-de-agosto-de-2026/'
  },
  {
    id: 7, imagem: 'assets/debate-eleicoes.svg', categoria: 'Política', data: '24/08/2026', selo: 'CAMPANHA 2026',
    titulo: 'Primeiro debate presidencial na TV tem ausências de Lula, Flávio Bolsonaro e Zema',
    resumo: 'Debate da campanha presidencial teve participação de outros candidatos e críticas direcionadas aos ausentes.',
    conteudo: [
      'O primeiro debate televisivo da campanha presidencial de 2026 ocorreu com as ausências de Lula, Flávio Bolsonaro e Romeu Zema.',
      'Participantes concentraram parte das críticas no presidente e também citaram temas ligados à oposição.',
      'A campanha entra agora em fase de maior exposição pública, com debates, sabatinas e propaganda eleitoral ampliando a disputa por eleitores.'
    ],
    fonte: 'UOL', url: 'https://noticias.uol.com.br/ultimas-noticias/redacao/2026/08/24/primeiro-debate-abre-campanha-presidencial-na-tv-sem-lula-e-flavio.ghtm'
  },
  {
    id: 8, imagem: 'assets/economia-focus.svg', categoria: 'Brasil', data: '24/08/2026', selo: 'ECONOMIA',
    titulo: 'Focus mantém projeção de inflação em 5,02% e reduz expectativa para o PIB de 2026',
    resumo: 'Mercado manteve estimativa de inflação acima do teto da meta e revisou para baixo a projeção de crescimento econômico.',
    conteudo: [
      'O Relatório Focus divulgado nesta segunda-feira manteve em 5,02% a projeção do mercado para o IPCA de 2026.',
      'A estimativa permanece acima do teto da meta de inflação. A projeção de crescimento do PIB foi revisada para baixo.',
      'A expectativa de Selic no fim de 2026 continua em 13,75% ao ano, segundo o levantamento com instituições financeiras.'
    ],
    fonte: 'UOL / Banco Central', url: 'https://economia.uol.com.br/noticias/redacao/2026/08/24/relatorio-focus---24-de-agosto-de-2026.ghtm'
  },
  {
    id: 9, imagem: 'assets/concursos-brasil.svg', categoria: 'Brasil', data: '23/08/2026', selo: 'CONCURSOS',
    titulo: 'Concursos públicos reúnem quase 30 mil vagas no país; Seduc-CE aparece com 3 mil',
    resumo: 'Levantamento nacional aponta oportunidades em tribunais, governos, universidades e outros órgãos.',
    conteudo: [
      'Concursos públicos abertos e anunciados no país somam cerca de 29,9 mil vagas, segundo levantamento publicado em 23 de agosto.',
      'Entre os destaques está a Secretaria da Educação do Ceará, com previsão de 3 mil vagas de nível superior e inscrições indicadas para setembro e outubro.',
      'Candidatos devem sempre conferir o edital oficial antes de efetuar inscrição ou pagamento.'
    ],
    fonte: 'UOL', url: 'https://economia.uol.com.br/empregos-e-carreiras/noticias/redacao/2026/08/23/concursos-publicos.ghtm'
  },
  {
    id: 10, imagem: 'assets/checagem.svg', categoria: 'Brasil', data: '24/08/2026', selo: 'CHECAGEM',
    titulo: 'É falso que Nestlé tenha fechado fábricas e demitido 16 mil pessoas no Brasil',
    resumo: 'Checagem aponta que as 18 unidades brasileiras seguem ativas e que o corte de 16 mil postos citado nas redes é global.',
    conteudo: [
      'Publicações virais afirmaram que a Nestlé teria fechado duas fábricas e demitido 16 mil funcionários no Brasil.',
      'A empresa informou que suas 18 unidades no país continuam ativas. O número de 16 mil cortes refere-se a um plano global anunciado anteriormente.',
      'O caso reforça a importância de verificar origem, data e contexto antes de compartilhar conteúdos políticos ou econômicos nas redes sociais.'
    ],
    fonte: 'UOL Confere', url: 'https://noticias.uol.com.br/confere/ultimas-noticias/2026/08/24/desinformacao-nestle-demissoes-fabricas-brasil-lula-enganoso.ghtm'
  }
];

const projetos = [
  {nome:'DB ENEM', etiqueta:'ENEM 2026', texto:'Plataforma de simulados digitais para preparação do ENEM, com testes e trilhas de estudo.', link:'https://cincoregioes-star.github.io/DB-ENEM/', img:'assets/db-enem.svg'},
  {nome:'Gabarito Max', etiqueta:'Simulados', texto:'Portal de preparação digital para concursos, vestibulares e formação profissional.', link:'https://cincoregioes-star.github.io/oficial-portal-gabaritomax/', img:'assets/gabarito-max.svg'},
  {nome:'Gabarito Data Center', etiqueta:'Carreiras Tech', texto:'Simulados para atualização e preparação profissional em carreiras de data center.', link:'https://cincoregioes-star.github.io/gabarito-data-center-testes-gratis/', img:'assets/data-center.svg'},
  {nome:'Gabarito Logística', etiqueta:'Formação profissional', texto:'Projeto de simulados e preparação voltado a conhecimentos e rotinas da área de logística.', link:'https://cincoregioes-star.github.io/gabarito-logistica/', img:'assets/logistica.svg'},
  {nome:'Meu Quintal Produtivo', etiqueta:'E-book', texto:'Guia prático de cultivo com propostas de canteiros, diversidade de alimentos e soluções acessíveis.', link:'https://cincoregioes-star.github.io/ebook-meu-quintal-produtivo-biomyra/meu-quintal-produtivo-biomyra.pdf', img:'assets/quintal.svg'},
  {nome:'Orientação Social que Cultiva Cidadania', etiqueta:'E-book', texto:'Oficinas, cidadania, canteiros suspensos, inclusão e sustentabilidade em uma proposta socioeducativa.', link:'https://cincoregioes-star.github.io/E-BOOK-ORIENTA-O-SOCIAL-QUE-CULTIVA-CIDADANIA/', img:'assets/orienta.svg'},
  {nome:'Orientador Social: Território e Transformação', etiqueta:'E-book', texto:'Publicação dedicada à atuação territorial, fortalecimento de vínculos e transformação social.', link:'https://cincoregioes-star.github.io/orientador-social-territorio-transformacao/', img:'assets/orienta.svg'},
  {nome:'Bicicletaria Jonathan — JS Bike', etiqueta:'Comércio local', texto:'Bicicletas aro 16 ao 29, revisão, manutenção e atendimento especializado no Sítio Lucas, em Beberibe.', link:'https://wa.me/5585991819078?text=Ol%C3%A1%2C%20vi%20o%20an%C3%BAncio%20da%20JS%20Bike%20no%20Beberibe%20Not%C3%ADcias.', img:'assets/js-bike.svg'}
];
