(() => {
  "use strict";

  const elements = {
    homePage: document.getElementById("homePage"),
    areaDestaque: document.getElementById("areaDestaque"),
    listaNoticias: document.getElementById("listaNoticias"),
    paginaNoticia: document.getElementById("paginaNoticia"),
    tickerNoticias: document.getElementById("tickerNoticias"),
    menuCategorias: document.getElementById("menuCategorias"),
    destaquesEdicao: document.getElementById("destaquesEdicao"),
    listaCategorias: document.getElementById("listaCategorias"),
    searchInput: document.getElementById("searchInput"),
    resultCount: document.getElementById("resultCount"),
    editionDate: document.getElementById("editionDate"),
    nextEditionDate: document.getElementById("nextEditionDate"),
    editionStatus: document.getElementById("editionStatus"),
    nextEditionText: document.getElementById("nextEditionText"),
    readingProgress: document.getElementById("readingProgress")
  };

  const state = {
    categoria: "Todas",
    busca: "",
    artigoAberto: null
  };

  const collator = new Intl.Collator("pt-BR", { sensitivity: "base" });

  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalizar(value = "") {
    return String(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function formatarData(dataISO, formatoLongo = false) {
    if (!dataISO) return "";
    const data = new Date(`${dataISO}T12:00:00`);
    return new Intl.DateTimeFormat("pt-BR", formatoLongo
      ? { day: "2-digit", month: "long", year: "numeric" }
      : { day: "2-digit", month: "2-digit", year: "numeric" }
    ).format(data);
  }

  function ordenarNoticias(lista) {
    return [...lista].sort((a, b) => {
      if (Boolean(a.destaque) !== Boolean(b.destaque)) return a.destaque ? -1 : 1;
      return new Date(b.data) - new Date(a.data);
    });
  }

  const noticiasOrdenadas = ordenarNoticias(bancoNoticias);

  function categoriasComContagem() {
    const mapa = bancoNoticias.reduce((acc, noticia) => {
      acc[noticia.categoria] = (acc[noticia.categoria] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(mapa)
      .sort(([a], [b]) => collator.compare(a, b))
      .map(([nome, quantidade]) => ({ nome, quantidade }));
  }

  function configurarEdicao() {
    elements.editionDate.textContent = formatarData(edicaoJornal.dataEdicao);
    elements.nextEditionDate.textContent = formatarData(edicaoJornal.proximaAtualizacao);
    elements.editionStatus.textContent = `Edição de ${formatarData(edicaoJornal.dataEdicao, true)}`;
    elements.nextEditionText.textContent = `Próxima atualização: ${formatarData(edicaoJornal.proximaAtualizacao, true)}`;
  }

  function gerarMenuCategorias() {
    const categorias = [{ nome: "Todas", quantidade: bancoNoticias.length }, ...categoriasComContagem()];

    elements.menuCategorias.innerHTML = categorias.map(({ nome, quantidade }) => `
      <button
        class="category-button ${state.categoria === nome ? "active" : ""}"
        type="button"
        data-category="${escapeHtml(nome)}"
        aria-pressed="${state.categoria === nome}"
        title="${quantidade} ${quantidade === 1 ? "notícia" : "notícias"}"
      >${escapeHtml(nome)}</button>
    `).join("");

    elements.listaCategorias.innerHTML = categorias
      .filter(({ nome }) => nome !== "Todas")
      .map(({ nome, quantidade }) => `
        <li>
          <button type="button" data-category="${escapeHtml(nome)}">
            <span>${escapeHtml(nome)}</span>
            <b>${quantidade}</b>
          </button>
        </li>
      `).join("");
  }

  function gerarTicker() {
    const items = noticiasOrdenadas.slice(0, 9).map(noticia => (
      `<span>${escapeHtml(noticia.titulo)}</span>`
    ));
    elements.tickerNoticias.innerHTML = [...items, ...items].join("");
  }

  function gerarDestaques() {
    const idsPreferidos = [1, 2, 4, 12];
    const destaques = idsPreferidos
      .map(id => bancoNoticias.find(noticia => noticia.id === id))
      .filter(Boolean);

    elements.destaquesEdicao.innerHTML = destaques.map(noticia => `
      <li>
        <button type="button" data-news-id="${noticia.id}">
          <span>${escapeHtml(noticia.titulo)}<small>${escapeHtml(noticia.categoria)} • ${formatarData(noticia.data)}</small></span>
          <b>→</b>
        </button>
      </li>
    `).join("");
  }

  function obterNoticiasFiltradas() {
    const termo = normalizar(state.busca);

    return noticiasOrdenadas.filter(noticia => {
      const categoriaValida = state.categoria === "Todas" || noticia.categoria === state.categoria;
      if (!categoriaValida) return false;
      if (!termo) return true;

      const textoIndexado = normalizar([
        noticia.titulo,
        noticia.resumo,
        noticia.categoria,
        noticia.selo,
        ...(noticia.conteudo || []),
        ...(noticia.convocados || []).flatMap(item => [item.nome, item.cargo, item.inscricao, item.modalidade])
      ].join(" "));

      return textoIndexado.includes(termo);
    });
  }

  function metaNoticia(noticia, destaque = false) {
    return `
      <div class="news-meta">
        <span>${formatarData(noticia.data, true)}</span>
        <span>${escapeHtml(noticia.categoria)}</span>
        <span class="source-check">✓ Fonte identificada</span>
        ${destaque ? "<span>Principal da edição</span>" : ""}
      </div>
    `;
  }

  function imagemComFallback(noticia, loading = "lazy") {
    return `<img src="${escapeHtml(noticia.imagem)}" alt="${escapeHtml(noticia.titulo)}" loading="${loading}" onerror="this.onerror=null;this.src='assets/fallback.svg';">`;
  }

  function cardDestaque(noticia) {
    return `
      <article class="hero-news" data-news-id="${noticia.id}" tabindex="0" role="button" aria-label="Abrir notícia: ${escapeHtml(noticia.titulo)}">
        <div class="hero-news__image">${imagemComFallback(noticia, "eager")}</div>
        <div class="hero-news__content">
          <span class="badge">${escapeHtml(noticia.selo || noticia.categoria)}</span>
          <h3>${escapeHtml(noticia.titulo)}</h3>
          <p>${escapeHtml(noticia.resumo)}</p>
          ${metaNoticia(noticia, true)}
        </div>
      </article>
    `;
  }

  function cardNoticia(noticia) {
    return `
      <article class="news-card" data-news-id="${noticia.id}" tabindex="0" role="button" aria-label="Abrir notícia: ${escapeHtml(noticia.titulo)}">
        <div class="news-card__image">${imagemComFallback(noticia)}</div>
        <div class="news-card__body">
          <span class="badge">${escapeHtml(noticia.selo || noticia.categoria)}</span>
          <h3>${escapeHtml(noticia.titulo)}</h3>
          <p>${escapeHtml(noticia.resumo)}</p>
          ${metaNoticia(noticia)}
        </div>
      </article>
    `;
  }

  function atualizarContador(total) {
    const filtros = [];
    if (state.categoria !== "Todas") filtros.push(state.categoria);
    if (state.busca) filtros.push(`busca: “${state.busca}”`);

    const textoTotal = `${total} ${total === 1 ? "notícia encontrada" : "notícias encontradas"}`;
    elements.resultCount.textContent = filtros.length ? `${textoTotal} • ${filtros.join(" • ")}` : textoTotal;
  }

  function renderizarHome() {
    const filtradas = obterNoticiasFiltradas();
    atualizarContador(filtradas.length);

    if (!filtradas.length) {
      elements.areaDestaque.innerHTML = "";
      elements.listaNoticias.innerHTML = `
        <div class="empty-state">
          <strong>Nenhuma notícia encontrada.</strong><br>
          Tente outra palavra ou selecione “Todas”.
        </div>
      `;
      return;
    }

    const destaque = filtradas.find(noticia => noticia.destaque) || filtradas[0];
    const restantes = filtradas.filter(noticia => noticia.id !== destaque.id);

    elements.areaDestaque.innerHTML = cardDestaque(destaque);
    elements.listaNoticias.innerHTML = restantes.map(cardNoticia).join("");
  }

  function servicoHtml(noticia) {
    if (!Array.isArray(noticia.servico) || noticia.servico.length === 0) return "";
    return `
      <section class="service-box">
        <h3>Informações práticas</h3>
        <ul>${noticia.servico.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    `;
  }

  function alertaEditorialHtml(noticia) {
    if (!noticia.alertaEditorial) return "";
    return `
      <section class="editorial-alert">
        <span>Correção verificada</span>
        <h3>${escapeHtml(noticia.alertaEditorial.titulo)}</h3>
        <p>${escapeHtml(noticia.alertaEditorial.texto)}</p>
      </section>
    `;
  }

  function metricasHtml(noticia) {
    if (!Array.isArray(noticia.metricas) || !noticia.metricas.length) return "";
    return `
      <section class="article-section">
        <div class="article-section__head"><span>Panorama</span><h2>Números principais</h2></div>
        <div class="stats-grid">
          ${noticia.metricas.map(item => `
            <div class="stat-card"><strong>${escapeHtml(item.valor)}</strong><span>${escapeHtml(item.rotulo)}</span></div>
          `).join("")}
        </div>
        ${noticia.notaCalculo ? `<p class="calculation-note">${escapeHtml(noticia.notaCalculo)}</p>` : ""}
      </section>
    `;
  }

  function historicoHtml(noticia) {
    if (!Array.isArray(noticia.historicoNomeacoes) || !noticia.historicoNomeacoes.length) return "";
    const total = noticia.historicoNomeacoes.reduce((soma, item) => soma + Number(item.registros || 0), 0);
    return `
      <section class="article-section">
        <div class="article-section__head"><span>Levantamento</span><h2>${escapeHtml(noticia.tituloHistorico || "Histórico de atos analisados")}</h2></div>
        <div class="history-list">
          ${noticia.historicoNomeacoes.map(item => `
            <div><b>${escapeHtml(item.portaria)}</b><span>${escapeHtml(item.data)}</span><strong>${escapeHtml(item.registros)} registros</strong></div>
          `).join("")}
          <div class="history-total"><b>Total publicado</b><span>cinco portarias</span><strong>${total} registros</strong></div>
        </div>
      </section>
    `;
  }

  function orientadorHtml(noticia) {
    if (!Array.isArray(noticia.situacaoOrientador) || !noticia.situacaoOrientador.length) return "";
    return `
      <section class="orientador-box">
        <div><span>Cargo acompanhado</span><h2>${escapeHtml(noticia.tituloOrientador || "Orientador Social")}</h2><p>${escapeHtml(noticia.textoOrientador || "Consulte a situação atualizada nos documentos oficiais.")}</p></div>
        <ul>${noticia.situacaoOrientador.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    `;
  }

  function convocadosHtml(noticia) {
    if (!Array.isArray(noticia.convocados) || !noticia.convocados.length) return "";
    const grupos = noticia.convocados.reduce((acc, item) => {
      (acc[item.cargo] ||= []).push(item);
      return acc;
    }, {});

    return `
      <section class="article-section nominees-section">
        <div class="article-section__head"><span>Anexo I</span><h2>${escapeHtml(noticia.tituloConvocados || `${noticia.convocados.length} nomes publicados`)}</h2><p>${escapeHtml(noticia.descricaoConvocados || "Relação organizada a partir do documento oficial indicado na notícia.")}</p></div>
        ${Object.entries(grupos).map(([cargo, pessoas]) => `
          <div class="nominee-group">
            <div class="nominee-group__title"><h3>${escapeHtml(cargo)}</h3><span>${pessoas.length} ${pessoas.length === 1 ? "nome" : "nomes"}</span></div>
            <div class="table-scroll">
              <table class="nominee-table">
                <thead><tr><th>Nome</th><th>Inscrição</th><th>Classificação</th><th>Modalidade</th></tr></thead>
                <tbody>
                  ${pessoas.map(pessoa => `
                    <tr><td>${escapeHtml(pessoa.nome)}</td><td>${escapeHtml(pessoa.inscricao)}</td><td>${escapeHtml(pessoa.classificacao)}</td><td><span class="mode-pill mode-${normalizar(pessoa.modalidade)}">${escapeHtml(pessoa.modalidade)}</span></td></tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `).join("")}
      </section>
    `;
  }

  function galeriaHtml(noticia) {
    if (!Array.isArray(noticia.galeria) || !noticia.galeria.length) return "";
    return `
      <section class="article-section">
        <div class="article-section__head"><span>Documento oficial</span><h2>Imagens da portaria</h2></div>
        <div class="document-gallery">
          ${noticia.galeria.map(item => `
            <figure><a href="${escapeHtml(item.imagem)}" target="_blank" rel="noopener noreferrer"><img src="${escapeHtml(item.imagem)}" alt="${escapeHtml(item.legenda)}" loading="lazy"></a><figcaption>${escapeHtml(item.legenda)}</figcaption></figure>
          `).join("")}
        </div>
      </section>
    `;
  }

  function fontesHtml(noticia) {
    const fontes = [noticia.fonte, noticia.fonteComplementar, ...(noticia.fontesExtras || [])].filter(Boolean);
    return `
      <section class="source-box">
        <h3>Fontes consultadas</h3>
        <p>Consulte as publicações originais para conhecer metodologia, contexto, atualizações e eventuais retificações. Textos de análise, crônica e estilo são identificados como conteúdo editorial.</p>
        ${fontes.map(fonte => `
          <a class="source-link" href="${escapeHtml(fonte.url)}" target="_blank" rel="noopener noreferrer">
            ${escapeHtml(fonte.nome)} ↗
          </a>
        `).join("")}
      </section>
    `;
  }

  function abrirNoticia(id, atualizarHash = true) {
    const noticia = bancoNoticias.find(item => item.id === Number(id));
    if (!noticia) return;

    state.artigoAberto = noticia.id;
    document.title = `${noticia.titulo} | Beberibe Notícias`;

    elements.paginaNoticia.innerHTML = `
      <div class="detail-shell">
        <button class="detail-back" type="button" data-close-article>← Voltar para a edição</button>

        <header class="article-header">
          <span class="badge">${escapeHtml(noticia.selo || noticia.categoria)}</span>
          <h1>${escapeHtml(noticia.titulo)}</h1>
          ${metaNoticia(noticia)}
        </header>

        <figure class="article-cover">
          ${imagemComFallback(noticia, "eager")}
          <figcaption class="image-credit">Imagem: ${escapeHtml(noticia.creditoImagem || "Beberibe Notícias")}</figcaption>
        </figure>

        <div class="article-layout">
          <div class="article-body">
            ${(noticia.conteudo || []).map(paragrafo => `<p>${escapeHtml(paragrafo)}</p>`).join("")}
            ${alertaEditorialHtml(noticia)}
            ${metricasHtml(noticia)}
            ${historicoHtml(noticia)}
            ${orientadorHtml(noticia)}
            ${servicoHtml(noticia)}
            ${convocadosHtml(noticia)}
            ${galeriaHtml(noticia)}
            ${fontesHtml(noticia)}
          </div>

          <aside class="article-actions" aria-label="Ações da notícia">
            <button class="btn btn-primary" type="button" data-share-news="${noticia.id}">Compartilhar</button>
            <a class="btn btn-secondary" href="${escapeHtml(noticia.fonte.url)}" target="_blank" rel="noopener noreferrer">Abrir fonte original</a>
            ${noticia.documentoLocal ? `<a class="btn btn-document" href="${escapeHtml(noticia.documentoLocal)}" target="_blank" rel="noopener noreferrer">Abrir documento em PDF</a>` : ""}
            <div class="article-note">Última revisão editorial: ${formatarData(noticia.atualizado || edicaoJornal.dataEdicao, true)}.</div>
          </aside>
        </div>
      </div>
    `;

    elements.homePage.style.display = "none";
    elements.paginaNoticia.classList.add("active");

    if (atualizarHash && window.location.hash !== `#noticia-${noticia.id}`) {
      history.pushState({ noticiaId: noticia.id }, "", `#noticia-${noticia.id}`);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function fecharNoticia(atualizarUrl = true) {
    state.artigoAberto = null;
    document.title = `Beberibe Notícias | Edição semanal de ${formatarData(edicaoJornal.dataEdicao, true)}`;
    elements.paginaNoticia.classList.remove("active");
    elements.paginaNoticia.innerHTML = "";
    elements.homePage.style.display = "block";

    if (atualizarUrl && window.location.hash.startsWith("#noticia-")) {
      history.pushState({}, "", `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function compartilharNoticia(id) {
    const noticia = bancoNoticias.find(item => item.id === Number(id));
    if (!noticia) return;

    const url = `${window.location.origin}${window.location.pathname}#noticia-${noticia.id}`;
    const dados = {
      title: noticia.titulo,
      text: `${noticia.titulo} — Beberibe Notícias`,
      url
    };

    if (navigator.share) {
      try {
        await navigator.share(dados);
        return;
      } catch (erro) {
        if (erro?.name === "AbortError") return;
      }
    }

    const mensagem = encodeURIComponent(`${dados.text}\n${url}`);
    window.open(`https://wa.me/?text=${mensagem}`, "_blank", "noopener,noreferrer");
  }

  function selecionarCategoria(categoria) {
    state.categoria = categoria || "Todas";
    gerarMenuCategorias();
    renderizarHome();
    document.getElementById("ultimasNoticias")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function tratarHash() {
    const match = window.location.hash.match(/^#noticia-(\d+)$/);
    if (match) {
      abrirNoticia(Number(match[1]), false);
    } else if (state.artigoAberto) {
      fecharNoticia(false);
    }
  }

  function atualizarProgressoLeitura() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const altura = document.documentElement.scrollHeight - window.innerHeight;
    const progresso = altura > 0 ? Math.min(100, Math.max(0, (scrollTop / altura) * 100)) : 0;
    elements.readingProgress.style.width = `${progresso}%`;
  }

  document.addEventListener("click", event => {
    const noticiaTarget = event.target.closest("[data-news-id]");
    if (noticiaTarget) {
      event.preventDefault();
      abrirNoticia(noticiaTarget.dataset.newsId);
      return;
    }

    const categoriaTarget = event.target.closest("[data-category]");
    if (categoriaTarget) {
      event.preventDefault();
      selecionarCategoria(categoriaTarget.dataset.category);
      return;
    }

    if (event.target.closest("[data-close-article]")) {
      event.preventDefault();
      fecharNoticia();
      return;
    }

    const shareTarget = event.target.closest("[data-share-news]");
    if (shareTarget) {
      event.preventDefault();
      compartilharNoticia(shareTarget.dataset.shareNews);
    }
  });

  document.addEventListener("keydown", event => {
    if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-news-id][role='button']")) {
      event.preventDefault();
      abrirNoticia(event.target.dataset.newsId);
    }

    if (event.key === "Escape" && state.artigoAberto) fecharNoticia();
  });

  elements.searchInput.addEventListener("input", event => {
    state.busca = event.target.value.trim();
    renderizarHome();
  });

  window.addEventListener("hashchange", tratarHash);
  window.addEventListener("scroll", atualizarProgressoLeitura, { passive: true });
  window.addEventListener("resize", atualizarProgressoLeitura);

  configurarEdicao();
  gerarMenuCategorias();
  gerarTicker();
  gerarDestaques();
  renderizarHome();
  tratarHash();
  atualizarProgressoLeitura();
})();
