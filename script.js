(() => {
  const featureContainer = document.getElementById("featureArticle");
  const newsGrid = document.getElementById("newsGrid");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");
  const searchInput = document.getElementById("searchInput");
  const filters = document.getElementById("filters");
  const modal = document.getElementById("newsModal");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");
  const backToTop = document.getElementById("backToTop");
  let activeCategory = "Todas";

  const iconByCategory = {
    Concurso: "✓",
    Saúde: "+",
    Educação: "A",
    Agricultura: "↟",
    Cultura: "◆",
    Cidade: "⌂"
  };

  const normalize = (value) =>
    value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const readingTime = (html) => {
    const text = html.replace(/<[^>]+>/g, " ");
    return `${Math.max(2, Math.ceil(text.trim().split(/\s+/).length / 190))} min`;
  };

  const featureMarkup = `
    <figure class="feature-media">
      <img src="${FEATURE_ARTICLE.image}" alt="${FEATURE_ARTICLE.imageAlt}">
      <figcaption>Imagem de divulgação do Diagnóstico Preliminar do PDM.</figcaption>
    </figure>
    <div class="feature-layout">
      <div class="feature-lead">
        <div class="article-meta">
          <span>${FEATURE_ARTICLE.date}</span>
          <span>${FEATURE_ARTICLE.readingTime}</span>
        </div>
        <p class="standfirst">${FEATURE_ARTICLE.intro}</p>
        <div class="feature-summary">
          <strong>Nesta matéria</strong>
          <a href="#numeros-pdm">Indicadores</a>
          <a href="#agenda-pdm">Agenda completa</a>
          <a href="${FEATURE_ARTICLE.sourceUrl}" target="_blank" rel="noopener">Documento oficial ↗</a>
        </div>
      </div>
      <div class="article-body">
        ${FEATURE_ARTICLE.body
          .replace("<h3>O que os números revelam</h3>", '<h3 id="numeros-pdm">O que os números revelam</h3>')
          .replace("<h3>Oficinas nos territórios</h3>", '<h3 id="agenda-pdm">Oficinas nos territórios</h3>')}
        <div class="source-box">
          <span>Fontes consultadas</span>
          <a href="${FEATURE_ARTICLE.sourceUrl}" target="_blank" rel="noopener">Diagnóstico Preliminar oficial</a>
          <a href="${FEATURE_ARTICLE.scheduleUrl}" target="_blank" rel="noopener">Programação da audiência e oficinas</a>
        </div>
      </div>
    </div>`;

  featureContainer.innerHTML = featureMarkup;

  const cardMarkup = (article) => `
    <article class="news-card ${article.featured ? "news-card--wide" : ""}" data-id="${article.id}">
      <button class="news-card__button" type="button" aria-label="Ler: ${article.title}">
        <div class="news-card__image">
          <img src="${article.image}" alt="${article.imageAlt}" loading="lazy">
          <span class="category-tag">
            <i aria-hidden="true">${iconByCategory[article.category] || "•"}</i>
            ${article.category}
          </span>
        </div>
        <div class="news-card__body">
          <div class="article-meta">
            <span>${article.date}</span>
            <span>${readingTime(article.body)} de leitura</span>
          </div>
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <span class="read-more">Ler matéria <b>→</b></span>
        </div>
      </button>
    </article>`;

  const filteredNews = () => {
    const query = normalize(searchInput.value.trim());
    return NEWS.filter((article) => {
      const categoryMatch = activeCategory === "Todas" || article.category === activeCategory;
      const searchable = normalize(`${article.title} ${article.summary} ${article.category} ${article.body}`);
      return categoryMatch && (!query || searchable.includes(query));
    });
  };

  const renderNews = () => {
    const items = filteredNews();
    newsGrid.innerHTML = items.map(cardMarkup).join("");
    resultCount.textContent = `${items.length} ${items.length === 1 ? "notícia encontrada" : "notícias encontradas"}`;
    emptyState.hidden = items.length !== 0;

    newsGrid.querySelectorAll(".news-card__button").forEach((button) => {
      button.addEventListener("click", () => {
        const article = NEWS.find((item) => item.id === button.closest(".news-card").dataset.id);
        openArticle(article);
      });
    });
  };

  const openArticle = (article) => {
    modalContent.innerHTML = `
      <article class="modal-article">
        <div class="modal-article__image">
          <img src="${article.image}" alt="${article.imageAlt}">
          <span class="category-tag"><i>${iconByCategory[article.category] || "•"}</i>${article.category}</span>
        </div>
        <div class="modal-article__content">
          <div class="article-meta"><span>${article.date}</span><span>${readingTime(article.body)} de leitura</span></div>
          <h2>${article.title}</h2>
          <p class="standfirst">${article.summary}</p>
          <div class="article-body">${article.body}</div>
          <div class="source-box">
            <span>Fonte consultada</span>
            <a href="${article.sourceUrl}" target="_blank" rel="noopener">${article.sourceLabel} ↗</a>
          </div>
        </div>
      </article>`;
    modal.showModal();
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modal.close();
    document.body.classList.remove("modal-open");
  };

  filters.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-button");
    if (!button) return;
    activeCategory = button.dataset.category;
    filters.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("active", item === button));
    renderNews();
  });

  searchInput.addEventListener("input", renderNews);
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  menuButton.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 700);
  }, { passive: true });

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  renderNews();
})();
