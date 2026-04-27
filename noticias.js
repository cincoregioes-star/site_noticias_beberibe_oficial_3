const bancoNoticias = [
  {
    id: 1,
    titulo: "JS Bike se destaca em Beberibe com bicicletas revisadas, garantia e atendimento de confiança",
    data: "2026-04-27",
    categoria: "Publicidade",
    imagem: "./bicicletaria-jonathan-1.jpg",
    imagensExtras: ["./bicicletaria-jonathan-1.jpg", "./bicicletaria-jonathan.jpg"],
    resumo: "Bicicletaria segue em destaque em Beberibe com bikes revisadas, garantia, revisão grátis e atendimento direto ao cliente.",
    conteudo: [
      "A JS Bike continua se destacando em Beberibe pela qualidade dos produtos, pelo atendimento direto e pela confiança construída junto aos clientes da cidade.",
      "A loja trabalha com bicicletas do aro 16 ao aro 29, incluindo modelos aro 29 já entregues revisados, lubrificados e prontos para o uso no dia a dia.",
      "Entre os diferenciais estão revisão grátis, garantia de 3 meses e descanso de brinde em diversos modelos, reforçando o compromisso com segurança e economia.",
      "📍 Endereço: Rua Raimunda Gama Fernandes, 231 - Sítio Lucas, Beberibe - CE. 📞 WhatsApp: <a href='https://wa.me/5585996259283' target='_blank'>falar com a JS Bike</a>. 📸 Instagram: <a href='https://www.instagram.com/jsbikeoficial00' target='_blank'>@jsbikeoficial00</a>."
    ],
    destaque: true
  },
  {
    id: 2,
    titulo: "Fim de semana movimenta praias e comércio em Beberibe",
    data: "2026-04-27",
    categoria: "Beberibe",
    imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    resumo: "Praias, barracas e pequenos comércios registraram movimento durante o fim de semana em Beberibe.",
    conteudo: [
      "O fim de semana foi de boa movimentação em pontos turísticos de Beberibe, especialmente nas áreas de praia e nos corredores de acesso aos principais atrativos do município.",
      "Morro Branco, Praia das Fontes, Uruaú e comunidades próximas receberam visitantes e moradores em busca de lazer, gastronomia e passeio em família.",
      "A movimentação também fortalece pequenos negócios, como barracas, mercadinhos, lanchonetes, pousadas, guias locais e serviços ligados ao turismo.",
      "Com a aproximação de novos feriados e períodos de maior fluxo, a expectativa é de que o turismo siga como uma das principais forças da economia local."
    ],
    destaque: false
  },
  {
    id: 3,
    titulo: "Beberibe reforça atenção ao turismo com foco em organização e segurança",
    data: "2026-04-27",
    categoria: "Beberibe",
    imagem: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    resumo: "Município segue observando o fluxo turístico e a necessidade de organização nos pontos mais visitados.",
    conteudo: [
      "Beberibe segue entre os destinos mais lembrados do litoral cearense, com forte presença de visitantes nos fins de semana e em períodos de descanso.",
      "A organização dos espaços públicos, a limpeza urbana, a sinalização e a orientação aos visitantes continuam sendo pontos importantes para manter a boa imagem do destino.",
      "Moradores e comerciantes também destacam a importância de preservar as praias, falésias e áreas naturais que fazem parte da identidade turística da cidade.",
      "A combinação entre turismo, comércio local e serviços gera renda e reforça a necessidade de planejamento permanente para receber bem quem visita o município."
    ],
    destaque: false
  },
  {
    id: 4,
    titulo: "Comunidades de Beberibe acompanham demandas por infraestrutura",
    data: "2026-04-27",
    categoria: "Beberibe",
    imagem: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    resumo: "Moradores seguem atentos a melhorias em ruas, iluminação, limpeza e acesso às comunidades.",
    conteudo: [
      "Moradores de diferentes comunidades de Beberibe seguem acompanhando demandas relacionadas à infraestrutura urbana e rural.",
      "Entre os principais pontos citados pela população estão recuperação de vias, iluminação pública, limpeza, drenagem e melhoria nos acessos.",
      "Essas ações têm impacto direto na mobilidade, na segurança e na rotina de famílias que dependem diariamente desses serviços.",
      "A expectativa é que novas intervenções sejam priorizadas conforme o planejamento municipal e as solicitações apresentadas pelas comunidades."
    ],
    destaque: false
  },
  {
    id: 5,
    titulo: "Beberibe mantém expectativa positiva para comércio e turismo nos próximos dias",
    data: "2026-04-27",
    categoria: "Beberibe",
    imagem: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    resumo: "Setores ligados ao consumo e ao turismo esperam continuidade da movimentação no município.",
    conteudo: [
      "O comércio de Beberibe entra na semana com expectativa positiva após a movimentação registrada no fim de semana.",
      "Restaurantes, lanchonetes, lojas, hospedagens, serviços de transporte e pequenos empreendedores costumam sentir reflexos diretos do fluxo turístico.",
      "Além do turismo, a circulação de moradores nas áreas centrais também contribui para aquecer vendas e serviços no município.",
      "A manutenção desse ritmo depende de divulgação, organização dos espaços e fortalecimento das atividades econômicas locais."
    ],
    destaque: false
  },
  {
    id: 6,
    titulo: "Ceará e Fortaleza seguem em destaque na Série B do Campeonato Brasileiro",
    data: "2026-04-27",
    categoria: "Futebol Cearense",
    imagem: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1400&q=80",
    resumo: "Times cearenses aparecem entre os primeiros colocados na tabela da Série B 2026.",
    conteudo: [
      "O futebol cearense segue em evidência na Série B do Campeonato Brasileiro 2026, com Ceará e Fortaleza aparecendo na parte alta da classificação.",
      "Segundo tabela da CBF atualizada em abril, o Fortaleza aparece com 10 pontos em 5 jogos, enquanto o Ceará soma 9 pontos também em 5 partidas.",
      "A presença dos dois clubes entre os primeiros colocados aumenta a expectativa para a sequência da competição e para os confrontos diretos ao longo do campeonato.",
      "A torcida cearense acompanha a rodada com atenção, já que cada ponto pode fazer diferença na briga pelo acesso e pela consolidação no G4."
    ],
    tabela: `
      <table class="tabela-noticia">
        <thead>
          <tr><th>Posição</th><th>Clube</th><th>Pontos</th><th>Jogos</th></tr>
        </thead>
        <tbody>
          <tr><td>2º</td><td>Fortaleza</td><td>10</td><td>5</td></tr>
          <tr><td>3º</td><td>Ceará</td><td>9</td><td>5</td></tr>
        </tbody>
      </table>
    `,
    destaque: false
  },
  {
    id: 7,
    titulo: "Clássico-Rei aumenta expectativa na Série B 2026",
    data: "2026-04-27",
    categoria: "Futebol Cearense",
    imagem: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1400&q=80",
    resumo: "Ceará e Fortaleza vivem início competitivo e deixam torcedores atentos à sequência do campeonato.",
    conteudo: [
      "A presença de Ceará e Fortaleza na mesma edição da Série B aumenta o peso esportivo e emocional da competição para o torcedor cearense.",
      "Além da disputa por pontos, o Clássico-Rei carrega rivalidade histórica, mobiliza arquibancadas e movimenta redes sociais antes, durante e depois dos jogos.",
      "A boa pontuação inicial dos clubes reforça a importância de manter regularidade, evitar tropeços em casa e pontuar fora para seguir na briga pelo acesso.",
      "A sequência da Série B deve testar elenco, planejamento e capacidade de reação dos dois maiores clubes do futebol cearense."
    ],
    destaque: false
  },
  {
    id: 8,
    titulo: "Brasileirão Série B tem Vila Nova na liderança e cearenses no G4",
    data: "2026-04-27",
    categoria: "Brasileirão",
    imagem: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=80",
    resumo: "Tabela mostra equilíbrio nas primeiras rodadas da competição nacional.",
    conteudo: [
      "A Série B do Campeonato Brasileiro 2026 apresenta equilíbrio nas primeiras rodadas, com clubes separados por poucos pontos na parte de cima da tabela.",
      "O Vila Nova aparece na liderança com 11 pontos em 5 jogos, seguido por Fortaleza, Ceará e Novorizontino entre os primeiros colocados.",
      "O início forte dos representantes cearenses aumenta a confiança das torcidas, mas a competição ainda exige regularidade em uma disputa longa.",
      "A tabela pode mudar rapidamente nas próximas rodadas, principalmente porque vitórias diretas contra concorrentes costumam ter peso decisivo."
    ],
    tabela: `
      <table class="tabela-noticia">
        <thead>
          <tr><th>Posição</th><th>Time</th><th>PTS</th><th>J</th><th>V</th></tr>
        </thead>
        <tbody>
          <tr><td>1º</td><td>Vila Nova</td><td>11</td><td>5</td><td>3</td></tr>
          <tr><td>2º</td><td>Fortaleza</td><td>10</td><td>5</td><td>3</td></tr>
          <tr><td>3º</td><td>Ceará</td><td>9</td><td>5</td><td>2</td></tr>
          <tr><td>4º</td><td>Novorizontino</td><td>8</td><td>5</td><td>2</td></tr>
        </tbody>
      </table>
    `,
    destaque: false
  },
  {
    id: 9,
    titulo: "Rodada do Brasileirão mantém disputa acirrada por pontos",
    data: "2026-04-27",
    categoria: "Brasileirão",
    imagem: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1400&q=80",
    resumo: "Clubes buscam regularidade nas primeiras rodadas da competição nacional.",
    conteudo: [
      "A rodada do Brasileirão segue movimentando torcedores em todo o país, com partidas importantes para clubes que buscam subir na tabela.",
      "Neste início de competição, cada resultado tem impacto direto no ambiente interno dos clubes e na confiança das torcidas.",
      "Equipes que conseguem pontuar de forma constante nas primeiras rodadas largam em vantagem para administrar melhor a sequência do campeonato.",
      "A tabela ainda está em formação, mas o desempenho inicial já indica quais clubes começam mais fortes na disputa por acesso, permanência ou título."
    ],
    destaque: false
  },
  {
    id: 10,
    titulo: "Copa do Mundo 2026 confirma Brasil no Grupo C ao lado de Marrocos",
    data: "2026-04-27",
    categoria: "Copa do Mundo",
    imagem: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1400&q=80",
    resumo: "Mundial terá jogos nos Estados Unidos, México e Canadá, com Brasil em chave de grande expectativa.",
    conteudo: [
      "A Copa do Mundo de 2026 segue gerando expectativa entre os torcedores brasileiros, especialmente após a definição dos grupos e do calendário oficial.",
      "O Brasil aparece no Grupo C, ao lado de Marrocos, em uma chave que promete grande atenção por reunir tradição, força técnica e torcida mundial.",
      "A edição de 2026 será realizada em três países: Estados Unidos, México e Canadá, ampliando o formato e a dimensão do torneio.",
      "Com a proximidade da competição, a Seleção Brasileira passa a ser acompanhada com ainda mais cobrança por desempenho, convocação e preparação."
    ],
    destaque: false
  },
  {
    id: 11,
    titulo: "Pesquisa mostra empate técnico entre Lula e Flávio Bolsonaro em cenário nacional",
    data: "2026-04-27",
    categoria: "Eleições",
    imagem: "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?auto=format&fit=crop&w=1400&q=80",
    resumo: "Levantamento BTG Pactual/Nexus aponta disputa apertada em simulação de segundo turno.",
    conteudo: [
      "A corrida presidencial de 2026 voltou ao centro do debate nacional após nova pesquisa apontar cenário competitivo para o segundo turno.",
      "Levantamento BTG Pactual/Nexus divulgado nesta segunda-feira mostrou Lula e Flávio Bolsonaro em situação de empate técnico em uma simulação nacional.",
      "O resultado reforça a polarização política no país e indica que a eleição deve seguir marcada por forte disputa entre governo e oposição.",
      "Novas pesquisas devem ganhar peso nos próximos meses, principalmente com a definição de alianças, estratégias de campanha e desempenho econômico."
    ],
    destaque: false
  },
  {
    id: 12,
    titulo: "Pesquisa no Ceará aponta cenário disputado para o Governo do Estado",
    data: "2026-04-27",
    categoria: "Eleições",
    imagem: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=80",
    resumo: "Levantamentos estaduais colocam a eleição cearense entre os temas mais acompanhados de 2026.",
    conteudo: [
      "A eleição para o Governo do Ceará também aparece entre os assuntos políticos de maior atenção no estado em 2026.",
      "Pesquisa AtlasIntel divulgada em abril ouviu eleitores cearenses e apresentou cenários para governador e senador, movimentando partidos e lideranças.",
      "Além disso, levantamentos recentes colocam nomes conhecidos da política estadual no centro da disputa, aumentando a expectativa para os próximos passos.",
      "Em Beberibe e no litoral leste, o cenário estadual deve ter reflexos nas articulações locais, apoios regionais e debates sobre investimentos."
    ],
    destaque: false
  },
  {
    id: 13,
    titulo: "Saúde em Beberibe reforça importância da prevenção e acompanhamento nas unidades",
    data: "2026-04-27",
    categoria: "Saúde",
    imagem: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80",
    resumo: "População deve manter vacinação, consultas preventivas e atenção aos sintomas.",
    conteudo: [
      "A saúde em Beberibe segue com foco na prevenção e no acompanhamento regular da população nas unidades de atendimento.",
      "Moradores são orientados a manter vacinas atualizadas, procurar atendimento diante dos primeiros sintomas e seguir acompanhamentos de rotina.",
      "A atenção básica tem papel essencial na identificação precoce de problemas e na redução de agravamentos que poderiam exigir atendimento de urgência.",
      "A participação da população, junto com a organização dos serviços públicos, fortalece a rede municipal e melhora a qualidade de vida."
    ],
    destaque: false
  },
  {
    id: 14,
    titulo: "Educação em Beberibe entra em nova semana com foco no rendimento dos alunos",
    data: "2026-04-27",
    categoria: "Educação",
    imagem: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
    resumo: "Escolas seguem trabalhando planejamento, frequência e aprendizagem no segundo bimestre.",
    conteudo: [
      "A educação municipal de Beberibe inicia nova semana com foco no acompanhamento da aprendizagem e na organização das atividades escolares.",
      "O segundo bimestre exige atenção especial à frequência, participação dos alunos, reforço pedagógico e diálogo com as famílias.",
      "Professores e equipes escolares seguem trabalhando para manter o ritmo das aulas e reduzir dificuldades acumuladas ao longo do período letivo.",
      "A melhoria dos resultados depende da união entre escola, família e gestão pública, principalmente nas etapas de alfabetização e preparação para avaliações."
    ],
    destaque: false
  },
  {
    id: 15,
    titulo: "Política em Beberibe acompanha posses, gestão pública e demandas das comunidades",
    data: "2026-04-27",
    categoria: "Política",
    imagem: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    resumo: "Cenário local segue marcado por cobranças, articulações e expectativa por melhorias.",
    conteudo: [
      "A política em Beberibe segue movimentada com temas ligados à gestão pública, concursos, infraestrutura e atendimento às comunidades.",
      "As recentes convocações e procedimentos administrativos aumentaram a atenção sobre a organização da máquina pública municipal.",
      "Moradores também seguem cobrando respostas em áreas como saúde, educação, estradas, iluminação, limpeza e geração de oportunidades.",
      "Nos próximos meses, o cenário local deve continuar aquecido, principalmente pela influência das eleições estaduais e nacionais de 2026."
    ],
    destaque: false
  },
  {
    id: 16,
    titulo: "Trabalho em Beberibe: turismo, comércio e serviços seguem como principais portas de entrada",
    data: "2026-04-27",
    categoria: "Trabalho",
    imagem: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    resumo: "Setores ligados ao turismo e ao comércio continuam importantes para geração de renda local.",
    conteudo: [
      "O mercado de trabalho em Beberibe segue fortemente ligado ao turismo, ao comércio, aos serviços e aos pequenos empreendimentos locais.",
      "Pousadas, restaurantes, barracas, transporte, manutenção, vendas e atendimento ao público costumam concentrar oportunidades em períodos de maior movimento.",
      "A qualificação profissional continua sendo um diferencial para quem busca vaga ou deseja melhorar renda por conta própria.",
      "Com o turismo como uma das bases econômicas do município, a expectativa é que novas oportunidades apareçam conforme o fluxo de visitantes se fortaleça."
    ],
    destaque: false
  },
  {
    id: 17,
    titulo: "Concurso em Beberibe: candidatos acompanham etapas de documentação, perícia e posse",
    data: "2026-04-27",
    categoria: "Concurso",
    imagem: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    resumo: "Procedimentos administrativos seguem movimentando candidatos convocados para cargos públicos.",
    conteudo: [
      "Candidatos convocados em Beberibe seguem atentos às etapas finais relacionadas à documentação, perícia médica e posse no serviço público municipal.",
      "A fase exige atenção aos prazos, apresentação correta de documentos e cumprimento das exigências previstas nos editais e portarias oficiais.",
      "Para muitos aprovados, a posse representa estabilidade, realização profissional e início de uma nova etapa na vida funcional.",
      "A recomendação é que todos acompanhem os canais oficiais da Prefeitura e confiram regularmente novas publicações sobre o processo."
    ],
    destaque: false
  },
  {
    id: 18,
    titulo: "Resort em Beberibe reforça potencial turístico e geração de renda no litoral",
    data: "2026-04-27",
    categoria: "Turismo",
    imagem: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    resumo: "Empreendimentos turísticos de grande porte ampliam visibilidade do município no Ceará.",
    conteudo: [
      "O setor de hospedagem em Beberibe segue como peça importante para fortalecer o turismo e ampliar a permanência de visitantes no município.",
      "Resorts e empreendimentos turísticos ajudam a atrair famílias, eventos, excursões e turistas interessados nas praias e belezas naturais da região.",
      "Além da hospedagem, esses equipamentos movimentam serviços locais, fornecedores, transporte, gastronomia e oportunidades de trabalho direto e indireto.",
      "Com planejamento e valorização das comunidades, o turismo de grande porte pode contribuir para consolidar Beberibe como referência no litoral cearense."
    ],
    destaque: false
  }
];