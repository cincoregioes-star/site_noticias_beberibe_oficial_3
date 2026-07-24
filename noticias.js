const edicaoJornal = Object.freeze({
  dataEdicao: "2026-07-24",
  proximaAtualizacao: "2026-08-01",
  local: "Beberibe, Ceará",
  periodicidade: "Atualização semanal aos sábados"
});

const bancoNoticias = Object.freeze([
  {
    id: 1,
    titulo: "Portaria de 21 de julho nomeia 24 aprovados em nove cargos",
    data: "2026-07-21",
    atualizado: "2026-07-24",
    categoria: "Concurso",
    destaque: true,
    selo: "Documento oficial",
    imagem: "assets/convocacao-21-julho-24-nomeados.svg",
    creditoImagem: "Arte editorial Beberibe Notícias, com dados da portaria",
    resumo: "Novo ato do concurso nº 001/2025 traz 24 nomeações; entrega de documentos e avaliações estão previstas para agosto.",
    conteudo: [
      "A Portaria nº 21.07.001/2026 nomeou 24 pessoas aprovadas no Concurso Público nº 001/2025 da Prefeitura de Beberibe. O ato alcança nove cargos, entre funções administrativas, apoio escolar, saúde e assistência, e deve ser lido diretamente no documento oficial.",
      "Entre os cargos citados estão Auxiliar de Administração, Auxiliar de Serviços Gerais, Motorista Escolar, Auxiliar Pedagógico, Técnico de Enfermagem, Assistente Social, Cirurgião-Dentista, Enfermeiro e Psicólogo. Cada candidato deve conferir nome, classificação e exigências sem depender apenas de resumos.",
      "O levantamento editorial estima 180 registros de nomeação acumulados até 21 de julho no edital nº 001/2025. Comparado às 255 vagas imediatas do edital, o saldo aritmético seria de 75, mas esse número não é um saldo oficial e pode mudar com desistências, reposições e decisões administrativas.",
      "O cargo de Orientador Social, que tinha cinco vagas imediatas, não aparece nesta portaria e não foi localizado nos atos contabilizados pelo jornal até esta data. Isso não significa exclusão do concurso: os interessados devem continuar acompanhando o portal oficial e novas publicações."
    ],
    metricas: [
      { valor: "24", rotulo: "novas nomeações" },
      { valor: "9", rotulo: "cargos alcançados" },
      { valor: "180", rotulo: "registros estimados até 21/07" },
      { valor: "75", rotulo: "saldo aritmético não oficial" }
    ],
    notaCalculo: "Estimativa editorial baseada nos atos publicados. Nomeações, vagas ocupadas e saldo administrativo não são conceitos equivalentes; confirme sempre com a Prefeitura.",
    alertaEditorial: {
      titulo: "A Portaria nº 21.07.002/2026 não entra nesta conta",
      texto: "Esse segundo ato se refere ao Edital nº 004/2025, do magistério. Misturar concursos diferentes produziria um total incorreto."
    },
    servico: [
      "Envio dos documentos exigidos: prazo de 15 dias, conforme a portaria, para gabineteadm@beberibe.ce.gov.br.",
      "Apresentação na Secretaria de Administração: 04/08/2026, das 8h às 12h, Rua João Tomaz Ferreira, 42.",
      "Avaliação médica: 06/08/2026, das 8h às 12h, na Policlínica Municipal.",
      "Leia a portaria integral e verifique eventuais retificações antes de se deslocar."
    ],
    documentoLocal: "documentos/portaria-21-07-001-2026.pdf",
    fonte: {
      nome: "Prefeitura de Beberibe — Concurso Público nº 001/2025",
      url: "https://www.beberibe.ce.gov.br/concursopublico.php?grup=42"
    }
  },
  {
    id: 2,
    titulo: "Plano Diretor terá audiência dia 12 e oficinas em sete localidades",
    data: "2026-07-21",
    atualizado: "2026-07-24",
    categoria: "PDM",
    destaque: true,
    selo: "Participação popular",
    imagem: "assets/pdm-oficinas-agosto.svg",
    creditoImagem: "Arte editorial com a programação publicada pela Prefeitura",
    resumo: "Audiência pública será na Câmara Municipal; oficinas seguem pela sede e distritos entre 12 e 15 de agosto.",
    conteudo: [
      "A audiência pública da revisão do Plano Diretor Municipal está marcada para 12 de agosto de 2026, às 9h, na Câmara Municipal de Beberibe. Às 13h30 do mesmo dia, o local recebe a oficina participativa da sede, abrindo uma sequência de encontros territoriais.",
      "No dia 13, as atividades seguem para Parajuru, às 9h30, e Paripueira, às 13h30. Em 14 de agosto, a programação chega a Sucatinga pela manhã e Itapeim à tarde; no dia 15, contempla Serra do Félix e Forquilha.",
      "As contribuições podem abordar crescimento urbano, moradia, mobilidade, infraestrutura, ambiente, turismo, atividades econômicas e acesso a serviços. Participantes podem levar problemas observados, prioridades e propostas com indicação clara do lugar e do público beneficiado.",
      "O encontro é uma oportunidade de comparar as necessidades da sede, litoral, sertão e comunidades rurais. Como horários e locais podem receber ajustes, a orientação é consultar a notícia oficial da Prefeitura antes de sair e registrar presença em cada atividade."
    ],
    servico: [
      "12/08, 9h: audiência pública — Câmara Municipal de Beberibe.",
      "12/08, 13h30: oficina da sede — Câmara Municipal de Beberibe.",
      "13/08: Parajuru às 9h30; Paripueira às 13h30.",
      "14/08: Sucatinga às 9h30; Itapeim às 13h30.",
      "15/08: Serra do Félix às 9h30; Forquilha às 13h30."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — audiência e oficinas do Plano Diretor",
      url: "https://www.beberibe.ce.gov.br/informa/2350/prefeitura-de-beberibe-convida-popula-o-para-parti"
    }
  },
  {
    id: 3,
    titulo: "Hospital amplia cuidados com recém-nascidos e CAF entrega medicamentos",
    data: "2026-07-23",
    atualizado: "2026-07-24",
    categoria: "Saúde",
    destaque: true,
    selo: "Saúde municipal",
    imagem: "assets/saude-serra-felix.webp",
    creditoImagem: "Arquivo de pauta municipal; confira os registros nas fontes oficiais",
    resumo: "Testes da orelhinha e da linguinha passam a integrar o cuidado neonatal, enquanto a assistência farmacêutica mantém entregas.",
    conteudo: [
      "O Hospital Municipal de Beberibe divulgou a realização dos testes da orelhinha e da linguinha em recém-nascidos. Os procedimentos ajudam a identificar precocemente alterações auditivas e limitações do frênulo da língua, permitindo avaliação profissional e encaminhamento quando necessário.",
      "A informação reforça a importância do acompanhamento desde os primeiros dias de vida. Famílias devem perguntar à equipe de saúde quando o exame será realizado, guardar o registro e manter as consultas de puericultura e vacinação conforme orientação da unidade responsável.",
      "Em outra ação, a Central de Abastecimento Farmacêutico informou a entrega de medicamentos às unidades. A distribuição depende de estoque, prescrição e protocolos do SUS; por isso, o cidadão deve confirmar na unidade onde é acompanhado quais documentos e receitas precisa apresentar.",
      "O jornal reúne as duas notícias porque ambas tratam da continuidade do cuidado: diagnóstico precoce e acesso regular ao tratamento. Em caso de urgência, sintomas graves ou dúvida clínica, a orientação deve vir de profissional de saúde, não de publicação em rede social."
    ],
    servico: [
      "Para exames do recém-nascido, procure a equipe do hospital ou a unidade de referência da família.",
      "Para medicamentos, leve documento, cartão do SUS e receita válida quando exigidos.",
      "Disponibilidade e critérios devem ser confirmados diretamente com a rede municipal."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — testes da orelhinha e da linguinha",
      url: "https://www.beberibe.ce.gov.br/informa/2364/hospital-realiza-testes-da-orelhinha-e-da-linguinh"
    },
    fonteComplementar: {
      nome: "Prefeitura de Beberibe — entrega de medicamentos pela CAF",
      url: "https://www.beberibe.ce.gov.br/informa/2363/caf-realiza-entrega-de-medicamentos"
    }
  },
  {
    id: 4,
    titulo: "Projeto de inglês prevê experiência em Cambridge para estudantes vencedores",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Educação",
    destaque: true,
    selo: "Proposta educacional",
    imagem: "assets/enem-2026.webp",
    creditoImagem: "Imagem ilustrativa de educação; detalhes dependem de publicação oficial",
    resumo: "Iniciativa apresentada pela gestão municipal associa ensino de inglês a uma viagem educacional; regras ainda precisam ser publicadas.",
    conteudo: [
      "A prefeita apresentou uma iniciativa voltada ao ensino de inglês na rede municipal, com previsão de viagem educacional a Cambridge, na Inglaterra, para estudantes vencedores. A proposta tem potencial para estimular aprendizagem, intercâmbio cultural e novas perspectivas entre os alunos.",
      "Para garantir igualdade, será importante que o regulamento informe séries atendidas, quantidade de vagas, etapas, critérios de avaliação e desempate. Também devem ficar claros os apoios para estudantes com deficiência e para famílias que tenham dificuldade de acesso à documentação necessária.",
      "Uma viagem internacional envolve passaporte, autorização dos responsáveis, seguro, acompanhamento, transporte e despesas. A publicação oficial deve explicar o que será custeado pelo projeto e quais obrigações permanecerão com os participantes, evitando expectativas ou gastos antecipados.",
      "Até que edital, cronograma ou regulamento sejam divulgados, a notícia deve ser tratada como apresentação de projeto, não como inscrição aberta. Pais e estudantes devem acompanhar apenas os canais da Prefeitura e da Secretaria de Educação para receber orientações confirmadas."
    ],
    alertaEditorial: {
      titulo: "Aguarde o regulamento",
      texto: "O jornal não localizou, até o fechamento, edital com critérios completos. Não envie documentos nem faça pagamentos por mensagens não verificadas."
    },
    fonte: {
      nome: "Prefeitura de Beberibe — portal institucional",
      url: "https://www.beberibe.ce.gov.br/"
    }
  },
  {
    id: 5,
    titulo: "Estrada entre Bom Sucesso e Lagoa Nova é aberta ao tráfego",
    data: "2026-07-23",
    atualizado: "2026-07-24",
    categoria: "Infraestrutura",
    selo: "Mobilidade rural",
    imagem: "assets/estrada-cumbe.webp",
    creditoImagem: "Arquivo de infraestrutura do portal; foto ilustrativa",
    resumo: "Intervenção facilita o deslocamento entre comunidades e reforça a necessidade de conservação contínua das vias.",
    conteudo: [
      "A Prefeitura informou a abertura da estrada que liga Bom Sucesso a Lagoa Nova. A melhoria cria uma nova condição de deslocamento para moradores, transporte escolar, serviços públicos e circulação da produção, especialmente em períodos de maior demanda nas comunidades rurais.",
      "A utilidade da via dependerá da conservação, drenagem e sinalização. Chuvas, tráfego pesado e erosão podem alterar rapidamente as condições, por isso moradores devem comunicar pontos de risco e evitar velocidade incompatível com trechos de terra ou obras recentes.",
      "A gestão municipal também divulgou serviço de máquinas na estrada do Juazeiro, indicando uma frente mais ampla de manutenção. É importante que cronogramas e prioridades considerem rotas escolares, acesso à saúde, escoamento de produção e ligações entre comunidades.",
      "Obras viárias precisam ser acompanhadas não apenas na entrega, mas ao longo do uso. Fotos georreferenciadas, registros de atoleiros e relatos sobre tempo de viagem ajudam poder público e comunidades a identificar trechos que exigem nova intervenção."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — estrada Bom Sucesso–Lagoa Nova",
      url: "https://www.beberibe.ce.gov.br/informa/2366/estrada-entre-bom-sucesso-e-lagoa-nova-aberta"
    },
    fonteComplementar: {
      nome: "Prefeitura de Beberibe — melhorias na estrada do Juazeiro",
      url: "https://www.beberibe.ce.gov.br/informa/2365/m-quina-realiza-melhorias-na-estrada-do-juazeiro"
    }
  },
  {
    id: 6,
    titulo: "Praia das Fontes recebe limpeza e Areninha ganha nova iluminação",
    data: "2026-07-23",
    atualizado: "2026-07-24",
    categoria: "Cidade",
    selo: "Serviços urbanos",
    imagem: "assets/iluminacao-uberaba.webp",
    creditoImagem: "Arquivo de serviços urbanos; imagem ilustrativa",
    resumo: "Ações recentes alcançam espaço turístico, equipamento esportivo e recuperação de galeria na Serra do Félix.",
    conteudo: [
      "Equipes municipais reforçaram a limpeza na Praia das Fontes, destino conhecido pelas falésias e fontes naturais. A conservação melhora a experiência de moradores e visitantes, mas também depende do descarte correto de resíduos por comerciantes, turistas e frequentadores.",
      "A Areninha recebeu nova iluminação, medida que amplia a possibilidade de uso no fim da tarde e à noite. Além da instalação, é importante acompanhar funcionamento, consumo, segurança no entorno e canais para informar lâmpadas apagadas ou danos ao equipamento.",
      "Na Serra do Félix, a Prefeitura comunicou a recuperação de uma tampa de galeria. Embora pontual, o serviço reduz risco de acidentes e mostra como manutenção de drenagem, calçadas e travessias deve fazer parte da rotina urbana e distrital.",
      "As três ações têm escala diferente, mas compartilham a mesma necessidade: manutenção contínua e participação da população no cuidado. Publicar antes e depois, prazo de execução e canal de atendimento ajuda a transformar ações isoladas em política de conservação."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — limpeza na Praia das Fontes",
      url: "https://www.beberibe.ce.gov.br/informa/2361/limpeza-refor-a-cuidados-na-praia-das-fontes"
    },
    fontesExtras: [
      { nome: "Prefeitura de Beberibe — nova iluminação na Areninha", url: "https://www.beberibe.ce.gov.br/informa/2360/areninha-recebe-nova-ilumina-o" },
      { nome: "Prefeitura de Beberibe — galeria na Serra do Félix", url: "https://www.beberibe.ce.gov.br/informa/2362/serra-do-f-lix-recebe-recupera-o-de-tampa-de-galer" }
    ]
  },
  {
    id: 7,
    titulo: "Férias em Beberibe: roteiro consciente entre praia, história e descanso",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Férias",
    selo: "Guia local",
    imagem: "assets/capa-edicao-24-07-2026.webp",
    creditoImagem: "Imagem ultrarrealista criada para a edição",
    resumo: "Planejamento simples ajuda a aproveitar Morro Branco, Praia das Fontes e Uruaú sem descuidar da segurança e do ambiente.",
    conteudo: [
      "Uma visita a Beberibe pode combinar caminhada pela manhã, almoço com sabores locais e descanso no fim da tarde. Morro Branco, Praia das Fontes e Uruaú oferecem experiências diferentes, e distribuir os passeios por dias reduz pressa e deslocamentos desnecessários.",
      "Antes de sair, confirme acesso, horários, condições do tempo e orientações de segurança. Em áreas de falésias, respeite sinalização e mantenha distância de bordas ou trechos instáveis; em passeios contratados, procure prestadores identificados e combine valores antecipadamente.",
      "Leve água, protetor solar, chapéu e recipiente para guardar o próprio lixo. Comprar de pequenos negócios, artesãos, guias e restaurantes locais pode fazer o dinheiro do turismo circular no município, desde que preços e condições sejam confirmados diretamente.",
      "O melhor roteiro não é o que reúne mais lugares, mas o que permite observar paisagem, cultura e comunidade com tranquilidade. A página oficial de turismo do município ajuda a localizar atrativos e meios de hospedagem, mas reservas devem ser verificadas com cada estabelecimento."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — portal oficial de turismo",
      url: "https://beberibe.ce.gov.br/turismo.php"
    }
  },
  {
    id: 8,
    titulo: "Uruaú reúne pousadas, lagoa e atmosfera de descanso no litoral",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Turismo",
    selo: "Hospedagem",
    imagem: "assets/uruau-pousadas-2026.webp",
    creditoImagem: "Imagem ultrarrealista criada para representar Uruaú",
    resumo: "Portal municipal lista opções de hospedagem em Uruaú; escolha deve considerar localização, acessibilidade e avaliações recentes.",
    conteudo: [
      "Uruaú combina praia, lagoa e ritmo mais tranquilo, atraindo quem busca descanso perto da natureza. O portal municipal de turismo lista pousadas e chalés na localidade, mas a presença na relação não equivale a classificação ou recomendação editorial.",
      "Antes de reservar, confirme preço total, política de cancelamento, distância real da praia, estacionamento, refeições e acessibilidade. Famílias com crianças, idosos ou pessoas com deficiência devem perguntar sobre degraus, banheiros, circulação e segurança nas áreas comuns.",
      "Avaliações recentes ajudam a identificar mudanças de gestão ou manutenção, porém não substituem contato direto. Peça confirmação por escrito, evite transferências para contas de terceiros desconhecidos e confira endereço e identidade do estabelecimento antes de pagar.",
      "Ao chegar, valorize restaurantes, artesãos e serviços locais, respeitando áreas de preservação e regras comunitárias. Um turismo responsável reduz lixo, evita ruído excessivo e fortalece renda sem retirar do lugar a tranquilidade que torna Uruaú especial."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — meios de hospedagem e atrativos",
      url: "https://beberibe.ce.gov.br/turismo.php"
    },
    fonteComplementar: {
      nome: "Turismo Ceará — Praia do Uruaú",
      url: "https://turismoceara.com/onde-ir/praias/praias-no-litoral-do-ceara/praia-do-uruau/"
    }
  },
  {
    id: 9,
    titulo: "Morro Branco e Praia das Fontes pedem turismo com respeito às falésias",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Turismo",
    selo: "Patrimônio natural",
    imagem: "assets/morro-branco-praia-fontes-real.webp",
    creditoImagem: "Imagem ultrarrealista criada para representar as falésias e a gruta costeira",
    resumo: "Paisagens famosas exigem cuidado com bordas, trilhas, resíduos e orientações locais durante o período de férias.",
    conteudo: [
      "Morro Branco é conhecido pelo labirinto de falésias e pelas areias coloridas, enquanto Praia das Fontes reúne mar, fontes naturais e formações costeiras. Os dois destinos ajudam a projetar Beberibe, gerar renda e preservar referências da identidade municipal.",
      "Falésias são formações naturais sujeitas à erosão. Visitantes devem respeitar barreiras, não subir em bordas frágeis, evitar retirar material e seguir orientações de guias e autoridades. Após chuvas ou sinais de deslizamento, o cuidado precisa ser redobrado.",
      "O passeio também exige atenção ao sol, hidratação, maré, crianças e pertences. Levar apenas o necessário, recolher resíduos e preferir recipientes reutilizáveis reduz impactos em áreas que recebem grande fluxo durante fins de semana e feriados.",
      "Turismo de qualidade depende de informação, fiscalização, limpeza e trabalho local valorizado. Quando moradores e visitantes protegem paisagem e cultura, os atrativos permanecem capazes de gerar experiências, emprego e memória para as próximas gerações."
    ],
    fonte: {
      nome: "Prefeitura de Beberibe — Morro Branco",
      url: "https://www.beberibe.ce.gov.br/pontosturisticos.php?id=1"
    },
    fonteComplementar: {
      nome: "Prefeitura de Beberibe — portal de turismo",
      url: "https://beberibe.ce.gov.br/turismo.php"
    }
  },
  {
    id: 10,
    titulo: "Câmara Municipal tem resultado final do concurso publicado",
    data: "2026-06-29",
    atualizado: "2026-07-24",
    categoria: "Política local",
    selo: "Poder Legislativo",
    imagem: "assets/concurso-homologado.svg",
    creditoImagem: "Arte editorial de concurso público",
    resumo: "Consulpam disponibilizou o resultado final do Concurso nº 001/2026 da Câmara de Beberibe; candidatos devem acompanhar atos seguintes.",
    conteudo: [
      "A organizadora Consulpam publicou em 29 de junho o resultado final do Concurso Público nº 001/2026 da Câmara Municipal de Beberibe. O documento encerra uma etapa da seleção, mas candidatos ainda precisam acompanhar homologação, convocações e eventuais comunicados do Legislativo.",
      "Resultado final não significa posse automática. A chamada observa classificação, vagas, validade do concurso, necessidades administrativas e requisitos do cargo. Qualquer prazo deve ser conferido no edital ou ato oficial, sem depender de mensagens encaminhadas em grupos.",
      "No acompanhamento da política municipal, concursos também importam porque definem parte da capacidade administrativa do Legislativo. Servidores efetivos apoiam processos, transparência, atendimento ao cidadão e continuidade institucional para além de mandatos.",
      "Candidatos devem manter contato atualizado e guardar comprovantes, certificados e documentos exigidos. O jornal recomenda acessar diretamente a página da organizadora e os canais oficiais da Câmara antes de entregar dados pessoais ou realizar qualquer pagamento."
    ],
    fonte: {
      nome: "Consulpam — Concurso da Câmara Municipal de Beberibe",
      url: "https://www.consulpam.com.br/index.php?acao=ver&id=779&menu=concursos"
    }
  },
  {
    id: 11,
    titulo: "Câmara dos Deputados publica resultado final e mantém concurso separado para polícia legislativa",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Oportunidades",
    selo: "Concurso federal",
    imagem: "assets/camara-deputados-concurso.svg",
    creditoImagem: "Arte editorial exclusiva; consulte os editais federais",
    resumo: "Página oficial reúne o Edital nº 9/2026, de resultado final, e documentos de outro certame da Polícia Legislativa.",
    conteudo: [
      "A Câmara dos Deputados mantém uma página oficial para os editais de seus concursos. Entre os documentos listados está o Edital nº 9/2026, relacionado ao resultado final para cargos de Analista Legislativo e Técnico Legislativo, conforme a identificação publicada pelo órgão.",
      "Na mesma área existe um concurso separado para Policial Legislativo Federal. Os dois processos não devem ser confundidos: cada um possui requisitos, banca, etapas, cronograma e atos próprios, e a leitura do número e do cargo evita inscrição ou acompanhamento equivocado.",
      "Quem aparece em resultado final deve verificar classificação, homologação e futuras convocações. Quem pretende estudar para novas oportunidades pode usar os editais para compreender conteúdos, atribuições e exigências, mas não deve presumir que haverá inscrição aberta sem aviso oficial.",
      "A recomendação é salvar a página institucional, conferir data e número de cada documento e desconfiar de links de pagamento enviados por terceiros. Convocações legítimas precisam ser confirmadas no Diário Oficial e nos canais da Câmara dos Deputados."
    ],
    fonte: {
      nome: "Câmara dos Deputados — editais de concursos",
      url: "https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/editais"
    }
  },
  {
    id: 12,
    titulo: "Gerp mostra Flávio com 35% e Lula com 34%; diferença é empate técnico",
    data: "2026-07-22",
    atualizado: "2026-07-24",
    categoria: "Política nacional",
    destaque: true,
    selo: "Pesquisas 2026",
    imagem: "assets/pesquisa-presidencial-julho.svg",
    creditoImagem: "Gráfico editorial com os percentuais publicados",
    resumo: "Levantamento dá vantagem numérica de um ponto a Flávio Bolsonaro, mas margem de erro impede afirmar liderança estatística.",
    conteudo: [
      "Pesquisa Gerp divulgada em 22 de julho mostra Flávio Bolsonaro com 35% e Lula com 34% em um cenário de primeiro turno. A vantagem numérica de um ponto está dentro da margem de erro informada, portanto o resultado correto é empate técnico.",
      "Outros levantamentos de julho apresentaram desenhos diferentes. A Real Time Big Data registrou Lula com 45% e Flávio com 42% em segundo turno, também em empate técnico; a Futura/Apex mostrou 46,3% a 46,1%, uma igualdade ainda mais estreita.",
      "Na pesquisa BTG/Nexus de 13 de julho, Lula apareceu com 47% e Flávio com 44%, novamente no limite da margem. Comparar institutos exige observar campo, amostra, método, registro no Tribunal Superior Eleitoral e formulação da pergunta.",
      "Assim, é verdadeiro dizer que uma pesquisa deu percentual numericamente maior a Flávio, mas incorreto transformar um ponto em liderança consolidada. Pesquisas são fotografias do momento, podem divergir e não substituem o voto apurado."
    ],
    alertaEditorial: {
      titulo: "Percentual maior não é o mesmo que liderança estatística",
      texto: "Quando a diferença está dentro da margem de erro, os candidatos estão tecnicamente empatados. O jornal informa o número e também a limitação."
    },
    fonte: {
      nome: "Exame — Pesquisa Gerp de julho de 2026",
      url: "https://exame.com/brasil/pesquisa-gerp-no-1o-turno-flavio-bolsonaro-tem-35-e-lula-34/"
    },
    fonteComplementar: {
      nome: "CNN Brasil — Real Time Big Data",
      url: "https://www.cnnbrasil.com.br/eleicoes/real-time-presidente-2o-turno-julho-2026/"
    },
    fontesExtras: [
      { nome: "CNN Brasil — Futura/Apex", url: "https://www.cnnbrasil.com.br/eleicoes/futura-apex-lula-flavio-segundo-turno-julho/" },
      { nome: "BTG/Nexus — intenção de voto de 13 de julho", url: "https://www.nexus.fsb.com.br/estudos-divulgados/pesquisa-btg-nexus-de-intencao-de-votos-para-presidente-do-brasil-13-de-julho-de-2026/" }
    ]
  },
  {
    id: 13,
    titulo: "IPCA fica em 0,16% em junho e acumula 4,64% em doze meses",
    data: "2026-07-10",
    atualizado: "2026-07-24",
    categoria: "Economia",
    selo: "Inflação",
    imagem: "assets/ipca-junho-2026.svg",
    creditoImagem: "Gráfico editorial com dados oficiais do IBGE",
    resumo: "Inflação oficial desacelerou no mês; acumulado do ano chegou a 3,36%, com efeitos diferentes para cada orçamento familiar.",
    conteudo: [
      "O Índice Nacional de Preços ao Consumidor Amplo ficou em 0,16% em junho de 2026, segundo o IBGE. No acumulado do ano, o índice chegou a 3,36%; nos doze meses encerrados em junho, registrou 4,64%.",
      "Uma taxa mensal menor indica desaceleração do aumento médio, não queda generalizada de preços. Produtos podem continuar mais caros, alguns podem baixar e outros subir acima da média, conforme região, renda e hábitos de consumo de cada família.",
      "Para o orçamento doméstico, comparar preços, planejar cardápio, reduzir desperdício e renegociar serviços recorrentes ajuda mais do que acompanhar apenas um número nacional. Famílias endividadas devem priorizar despesas essenciais e buscar acordos com custo total claramente informado.",
      "Empresas locais também sentem alimentos, energia, transporte, crédito e insumos de maneiras diferentes. A inflação influencia decisões, mas compras e investimentos precisam considerar fluxo de caixa, demanda e preço praticado no mercado de Beberibe."
    ],
    metricas: [
      { valor: "0,16%", rotulo: "IPCA em junho" },
      { valor: "3,36%", rotulo: "acumulado em 2026" },
      { valor: "4,64%", rotulo: "acumulado em 12 meses" }
    ],
    fonte: {
      nome: "IBGE — IPCA de junho de 2026",
      url: "https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/47534-ipca-fica-em-0-16-em-junho"
    }
  },
  {
    id: 14,
    titulo: "Tarifaço: decisão é dos EUA; governo Lula deve responder pela negociação",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Análise",
    selo: "Análise editorial",
    imagem: "assets/tarifas-brasil-eua.svg",
    creditoImagem: "Arte editorial baseada em informações oficiais e cobertura internacional",
    resumo: "Atribuir toda a culpa a Lula é uma posição política; fatos mostram decisão americana e responsabilidade brasileira na resposta.",
    conteudo: [
      "Os Estados Unidos aplicaram tarifa adicional de 25% a produtos brasileiros, com exceções para alguns itens. A decisão de cobrar a tarifa pertence ao governo americano; por isso, dizer que o presidente Lula criou o tributo não corresponde ao fato básico.",
      "Isso não elimina a responsabilidade política do governo brasileiro. Cabe ao Executivo negociar, reduzir danos, apoiar exportadores, buscar mercados e explicar resultados. Críticos podem avaliar que declarações ou estratégias de Lula pioraram o ambiente, mas precisam demonstrar essa relação com evidências.",
      "O governo brasileiro contesta as justificativas americanas e afirma que a medida prejudica empresas dos dois países. Autoridades dos Estados Unidos apresentam sua própria narrativa. Entre essas versões, culpa exclusiva de um só ator permanece interpretação política, não conclusão comprovada.",
      "A posição editorial do jornal é cobrar resultado: transparência nas negociações, proteção temporária bem focalizada e cuidado para evitar retaliações que encareçam produtos. O debate melhora quando separa a autoria da tarifa, a qualidade da resposta e os impactos concretos."
    ],
    alertaEditorial: {
      titulo: "Fato, posição e opinião estão separados",
      texto: "A tarifa é uma decisão dos Estados Unidos. A avaliação sobre erros do governo Lula integra a análise política e deve ser sustentada por resultados e documentos."
    },
    fonte: {
      nome: "MDIC — coletiva sobre a tarifa dos Estados Unidos",
      url: "https://www.gov.br/mdic/pt-br/assuntos/noticias/governo-federal-realiza-entrevista-coletiva-sobre-tarifa-dos-eua/"
    },
    fonteComplementar: {
      nome: "Agência Brasil — resposta brasileira ao tarifaço",
      url: "https://agenciabrasil.ebc.com.br/internacional/noticia/2026-07/brasil-rebate-eua-e-diz-que-tarifaco-prejudicaria-empresas-americanas"
    },
    fontesExtras: [
      { nome: "El País — reação e exceções às novas tarifas", url: "https://elpais.com/america/2026-07-22/brasil-opta-por-la-cautela-para-responder-a-los-nuevos-aranceles-impuestos-por-estados-unidos.html" }
    ]
  },
  {
    id: 15,
    titulo: "Crônica: a cidade cabe no caminho entre a reunião e a praia",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Crônica",
    selo: "Texto original",
    imagem: "assets/cronica-beberibe-caminhos.webp",
    creditoImagem: "Imagem ultrarrealista exclusiva da crônica",
    resumo: "Uma reflexão sobre participação, pertencimento e os pequenos sinais que revelam como Beberibe deseja crescer.",
    conteudo: [
      "Há cidades que a gente conhece pelo mapa e cidades que só aparecem quando o caminho fica mais lento. Beberibe muda de voz entre a sede, o litoral e o sertão; cada estrada, praça e oficina guarda uma pergunta diferente sobre o futuro.",
      "Na reunião pública, alguém fala da água; outro lembra a escola; uma comerciante pede movimento e um agricultor pede acesso. São frases curtas, mas juntas formam o desenho de um município que não cabe em uma única fotografia nem em um único gabinete.",
      "Depois, a praia parece responder com seu próprio silêncio. A falésia ensina que toda forma está mudando, mesmo quando parece firme, e que conservar não é congelar o tempo: é permitir que a beleza continue existindo sem perder o lugar.",
      "Planejar uma cidade talvez seja isso: caminhar ouvindo antes de traçar a linha. Quando a população participa, o futuro deixa de ser promessa distante e vira trabalho compartilhado, desses que começam com uma cadeira ocupada e uma pergunta bem feita."
    ],
    fonte: {
      nome: "Beberibe Notícias — crônica original",
      url: "https://cincoregioes-star.github.io/site_noticias_beberibe_oficial_3/"
    }
  },
  {
    id: 17,
    titulo: "Moda de férias: leveza, proteção solar e peças que repetem bem",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Moda",
    selo: "Estilo prático",
    imagem: "assets/estilo-vida-receitas.webp",
    creditoImagem: "Imagem ultrarrealista criada para a seção de estilo e gastronomia",
    resumo: "Tecidos leves, chapéu e combinações versáteis ajudam a enfrentar calor, praia e passeios sem excesso de bagagem.",
    conteudo: [
      "Para dias quentes, roupas leves e modelagens confortáveis costumam funcionar melhor do que peças muito justas. Algodão, linho e tecidos respiráveis ajudam no conforto, mas proteção solar continua necessária mesmo quando braços e pernas estão parcialmente cobertos.",
      "Uma mala pequena pode começar com cores que combinam entre si: duas partes de baixo, três blusas, uma sobreposição leve e calçado seguro para caminhada. Chapéu de aba, óculos com proteção e bolsa reutilizável completam o conjunto sem depender de tendência cara.",
      "Na praia, biquíni, maiô ou sunga podem ganhar camisa ampla e saída simples para circular fora da areia. Em trilhas e falésias, o visual precisa respeitar o terreno: sola firme, mãos livres e acessórios que não atrapalhem são escolhas de segurança.",
      "Moda responsável também aproveita o que já existe no armário, conserta peças e valoriza costureiras e lojas locais. Repetir combinação não é falta de criatividade; é sinal de planejamento, economia e identidade pessoal."
    ],
    fonte: {
      nome: "Beberibe Notícias — conteúdo editorial de estilo",
      url: "https://cincoregioes-star.github.io/site_noticias_beberibe_oficial_3/"
    }
  },
  {
    id: 18,
    titulo: "Gastronomia local: simplicidade, frescor e renda circulando perto",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Gastronomia",
    selo: "Sabores de Beberibe",
    imagem: "assets/gastronomia-local-beberibe.webp",
    creditoImagem: "Imagem ultrarrealista exclusiva da gastronomia local",
    resumo: "Peixes, frutas, mandioca e temperos podem formar experiências que valorizam produtores e pequenos negócios.",
    conteudo: [
      "A cozinha do litoral encontra a produção rural em pratos que podem unir peixe, macaxeira, feijão, frutas e ervas. Quando ingredientes frescos recebem preparo cuidadoso, receitas simples ganham identidade e contam uma história sobre o território.",
      "Restaurantes e barracas podem destacar origem dos ingredientes, prato do dia e opções em diferentes faixas de preço. Informação clara sobre porção, acompanhamentos e alergênicos melhora a experiência e evita desperdício ou surpresa na conta.",
      "Comprar de pescadores, agricultores, mercados e produtores locais faz parte da economia do turismo. Para isso funcionar de forma contínua, é preciso qualidade, higiene, regularidade de fornecimento e preço que seja justo para quem produz e para quem vende.",
      "Em casa, aproveitar talos, cascas adequadas e sobras refrigeradas com segurança reduz custos. Planejar quantidades antes da feira ajuda a transformar a gastronomia em prazer cotidiano, não apenas consumo de ocasião."
    ],
    fonte: {
      nome: "Beberibe Notícias — conteúdo editorial de gastronomia",
      url: "https://cincoregioes-star.github.io/site_noticias_beberibe_oficial_3/"
    }
  },
  {
    id: 19,
    titulo: "Como amaciar carne sem esconder o sabor",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Receitas",
    selo: "Cozinha prática",
    imagem: "assets/receita-carne-macia.webp",
    creditoImagem: "Imagem ultrarrealista exclusiva da receita",
    resumo: "Corte correto, descanso e cozimento adequado fazem mais diferença que excesso de produto ou tempero.",
    conteudo: [
      "Comece cortando a carne contra o sentido das fibras, porque pedaços com fibras mais curtas ficam mais fáceis de mastigar. Para bifes, uma leve batida entre plásticos pode uniformizar a espessura sem transformar a peça em pasta.",
      "Marinadas com cebola, alho, ervas e pequena quantidade de ácido dão sabor, mas limão ou vinagre por tempo excessivo podem alterar a textura da superfície. Mamão e abacaxi têm enzimas fortes e devem ser usados com moderação por poucos minutos.",
      "Cortes com mais tecido conjuntivo ficam macios em cozimento lento com líquido ou na panela de pressão. Cortes naturalmente tenros pedem calor rápido e descanso de alguns minutos antes de fatiar, para reter melhor os sucos.",
      "Mantenha a carne refrigerada durante a marinada, use recipiente limpo e não reutilize líquido que tocou produto cru sem fervê-lo. Higiene e temperatura correta são mais importantes do que qualquer truque culinário."
    ],
    servico: [
      "Para 500 g: cebola, alho, ervas, 1 colher de sopa de azeite e até 1 colher de sopa de limão ou vinagre.",
      "Marine sempre na geladeira; para bifes, 30 minutos a 2 horas normalmente bastam.",
      "Abacaxi ou mamão: use pouca quantidade e por tempo curto para não desmanchar a carne."
    ],
    fonte: {
      nome: "Beberibe Notícias — receita e orientação culinária",
      url: "https://cincoregioes-star.github.io/site_noticias_beberibe_oficial_3/"
    }
  },
  {
    id: 20,
    titulo: "Bolo simples de liquidificador para o café da tarde",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Receitas",
    selo: "Receita da semana",
    imagem: "assets/bolo-caseiro-cafe.webp",
    creditoImagem: "Imagem ultrarrealista exclusiva da receita",
    resumo: "Receita básica aceita banana, coco ou raspas de limão e pode ser preparada com poucos utensílios.",
    conteudo: [
      "Bata no liquidificador três ovos, uma xícara de leite, meia xícara de óleo e uma xícara de açúcar. Em uma tigela, misture duas xícaras de farinha de trigo e acrescente o líquido aos poucos, mexendo até a massa ficar uniforme.",
      "Junte uma colher de sopa de fermento químico por último, sem bater demais. Despeje em forma média untada e enfarinhada; leve ao forno previamente aquecido a 180 graus por cerca de 35 a 45 minutos.",
      "O tempo varia conforme forno e forma. Faça o teste do palito apenas quando o bolo já estiver crescido e dourado; se sair limpo, retire e espere amornar antes de desenformar para reduzir o risco de quebrar.",
      "Para variar, acrescente banana fatiada com canela, coco ralado ou raspas de limão. Reduzir um pouco o açúcar é possível, mas mudanças grandes em líquidos e farinha podem alterar a estrutura da massa."
    ],
    servico: [
      "Ingredientes: 3 ovos, 1 xícara de leite, 1/2 xícara de óleo, 1 xícara de açúcar, 2 xícaras de farinha e 1 colher de fermento.",
      "Forno: 180 °C, aproximadamente 35 a 45 minutos.",
      "Conserve coberto e consuma em poucos dias; no calor, recheios perecíveis exigem refrigeração."
    ],
    fonte: {
      nome: "Beberibe Notícias — receita original da edição",
      url: "https://cincoregioes-star.github.io/site_noticias_beberibe_oficial_3/"
    }
  },
  {
    id: 21,
    titulo: "Comida saudável começa com variedade e menos ultraprocessados",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Saúde e alimentação",
    selo: "Bem-estar",
    imagem: "assets/alimentacao-saudavel-local.webp",
    creditoImagem: "Imagem ultrarrealista exclusiva da seção de alimentação",
    resumo: "Feijão, arroz, legumes, frutas e alimentos locais podem formar uma rotina equilibrada sem receitas complicadas.",
    conteudo: [
      "Uma alimentação saudável pode ser montada com alimentos conhecidos: arroz, feijão, raízes, ovos, carnes, legumes, verduras e frutas. A combinação varia conforme cultura, renda, disponibilidade e necessidades individuais, sem exigir produtos especiais.",
      "Planejar o cardápio e cozinhar quantidade adequada reduz desperdício e facilita levar refeição pronta. Feiras e produtores locais podem oferecer alimentos da estação com melhor preço, mas higiene, armazenamento e procedência continuam importantes.",
      "Ultraprocessados costumam reunir excesso de sódio, açúcar, gorduras e aditivos, além de favorecer consumo rápido. Reduzir refrigerantes, biscoitos recheados, salgadinhos e refeições instantâneas já abre espaço para alimentos mais simples.",
      "Não existe dieta única para todos. Pessoas com diabetes, doença renal, alergias, gestação ou outras condições devem procurar orientação profissional individualizada. O objetivo geral é variedade, regularidade, água e uma relação menos apressada com a comida."
    ],
    fonte: {
      nome: "Ministério da Saúde — Guia Alimentar para a População Brasileira",
      url: "https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf"
    }
  },
  {
    id: 22,
    titulo: "Agricultura empresarial precisa unir produtividade, mercado e gestão de risco",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Agricultura empresarial",
    selo: "Campo e negócios",
    imagem: "assets/agricultura-empresarial-tecnologia.webp",
    creditoImagem: "Imagem ultrarrealista exclusiva da agricultura empresarial",
    resumo: "Dados de solo, água, custos e contratos ajudam propriedades a produzir com eficiência e menor exposição.",
    conteudo: [
      "Uma atividade rural empresarial começa no planejamento: análise de solo, disponibilidade de água, calendário climático, mão de obra e destino da produção. Produzir mais sem mercado definido pode aumentar estoque, perda e endividamento em vez de elevar lucro.",
      "Registrar custo por cultura ou lote permite comparar semente, fertilizante, energia, combustível e manutenção. A margem precisa considerar perdas e juros, não apenas preço de venda. Contratos devem ser lidos com atenção a qualidade, entrega e penalidades.",
      "Irrigação eficiente, cobertura do solo, manejo integrado e monitoramento reduzem desperdício e vulnerabilidade. Tecnologia tem valor quando responde a um problema medido; comprar equipamento sem treinamento, assistência e retorno calculado pode criar novo custo fixo.",
      "No município, cooperação com fornecedores, transportadores e agroindústrias pode ampliar escala e regularidade. Licenciamento, uso responsável da água, segurança do trabalho e rastreabilidade precisam entrar no modelo de negócio desde o início."
    ],
    fonte: {
      nome: "Embrapa — pesquisa e orientação para o setor agropecuário",
      url: "https://www.embrapa.br/"
    }
  },
  {
    id: 23,
    titulo: "Agricultura familiar transforma diversidade em renda e segurança alimentar",
    data: "2026-07-24",
    atualizado: "2026-07-24",
    categoria: "Agricultura familiar",
    selo: "Produção local",
    imagem: "assets/agricultura-familiar-beberibe.webp",
    creditoImagem: "Imagem ultrarrealista exclusiva da agricultura familiar",
    resumo: "Quintais produtivos, organização coletiva e venda institucional podem fortalecer famílias e comunidades.",
    conteudo: [
      "A agricultura familiar combina produção, cuidado do território e renda dentro da realidade de cada unidade. Diversificar hortaliças, frutas, criação e beneficiamento reduz dependência de um único produto e melhora a alimentação da própria família.",
      "Quintais produtivos, compostagem, cobertura do solo e irrigação econômica podem começar em pequena escala. Antes de investir, é importante observar água disponível, luminosidade, demanda local e tempo de trabalho, registrando custos e resultados.",
      "Associações e cooperativas ajudam a comprar insumos, transportar e vender com regularidade. Programas de compras públicas podem abrir mercado, desde que produtores mantenham documentação, qualidade, calendário de entrega e articulação com assistência técnica.",
      "Em Beberibe, a conexão entre agricultura, escolas, CRAS, feiras e turismo pode gerar circuitos curtos de comercialização. Políticas públicas devem ouvir mulheres, jovens e comunidades, facilitando crédito, formação e acesso transparente às oportunidades."
    ],
    fonte: {
      nome: "Ministério do Desenvolvimento Agrário e Agricultura Familiar",
      url: "https://www.gov.br/mda/pt-br"
    },
    fonteComplementar: {
      nome: "Embrapa — soluções para agricultura familiar",
      url: "https://www.embrapa.br/"
    }
  }
]);
