(() => {
  const grid = document.getElementById('newsGrid');
  const filters = document.getElementById('filters');
  const searchInput = document.getElementById('searchInput');
  const resultCount = document.getElementById('resultCount');
  const articleView = document.getElementById('articleView');
  const articleContent = document.getElementById('articleContent');
  const projectGrid = document.getElementById('projectGrid');
  const tickerTrack = document.getElementById('tickerTrack');
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  let activeCategory = 'Todas';

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]));
  const categories = ['Todas', ...new Set(noticias.map((item) => item.categoria))];

  filters.innerHTML = categories.map((category) => (
    `<button class="filter ${category === 'Todas' ? 'active' : ''}" type="button" data-cat="${esc(category)}">${esc(category)}</button>`
  )).join('');

  const buildPreview = (item) => {
    if (!item.preview || !item.preview.length) return '';
    return `<ul class="preview-list">${item.preview.map((line) => `<li>${esc(line)}</li>`).join('')}</ul>`;
  };

  function renderNews() {
    const query = (searchInput.value || '').trim().toLowerCase();
    const filtered = noticias.filter((item) => {
      const matchesCategory = activeCategory === 'Todas' || item.categoria === activeCategory;
      const haystack = `${item.titulo} ${item.resumo} ${item.categoria} ${item.selo} ${item.preview?.join(' ') || ''}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      return matchesCategory && matchesQuery;
    });

    resultCount.textContent = `${filtered.length} manchete${filtered.length === 1 ? '' : 's'}`;

    grid.innerHTML = filtered.map((item, index) => {
      const cardClass = index === 0 ? 'news-card news-card--lead' : (index < 3 ? 'news-card news-card--support' : 'news-card');
      return `
      <article class="${cardClass}">
        <button class="news-image-button" type="button" data-id="${item.id}" aria-label="Abrir matéria ${esc(item.titulo)}">
          <img class="news-image" src="${esc(item.imagem)}" alt="Imagem de destaque da matéria ${esc(item.titulo)}" loading="lazy">
        </button>
        <div class="news-card-body">
          <div class="news-meta">
            <span>${esc(item.categoria)}</span>
            <time>${esc(item.data)}</time>
          </div>
          <span class="news-seal">${esc(item.selo)}</span>
          <h3>${esc(item.titulo)}</h3>
          <p>${esc(item.resumo)}</p>
          ${buildPreview(item)}
          <button class="read-btn" type="button" data-id="${item.id}">Ler matéria completa →</button>
        </div>
      </article>
    `;}).join('');
  }

  function openArticle(item) {
    articleContent.innerHTML = `
      <article class="article-page">
        <header class="article-hero">
          <div class="article-hero-media">
            <img src="${esc(item.imagem)}" alt="Imagem principal da matéria ${esc(item.titulo)}">
          </div>
          <div class="article-hero-copy">
            <span class="kicker">${esc(item.categoria)} · ${esc(item.data)}</span>
            <span class="article-seal">${esc(item.selo)}</span>
            <h1>${esc(item.titulo)}</h1>
            <p class="article-deck">${esc(item.resumo)}</p>
          </div>
        </header>

        <div class="article-layout">
          <main class="article-body">
            ${item.conteudo.map((paragraph, index) => (
              index === 0 ? `<p class="article-lead">${esc(paragraph)}</p>` : `<p>${esc(paragraph)}</p>`
            )).join('')}

            <figure class="article-inline-image">
              <img src="${esc(item.imagem)}" alt="Imagem complementar da matéria ${esc(item.titulo)}">
            </figure>

            ${item.destaque ? `<div class="article-highlight">${esc(item.destaque)}</div>` : ''}

            <div class="article-source">
              <strong>Fonte consultada:</strong>
              <a href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.fonte)}</a>
            </div>
          </main>

          <aside class="article-side">
            <div class="side-box">
              <b>${esc(EDICAO.portal)}</b>
              <span>Edição de ${esc(EDICAO.data)}</span>
              <span>${esc(item.categoria)}</span>
              <span>${esc(item.selo)}</span>
              <button class="side-back" type="button" data-close-article>← Voltar às manchetes</button>
            </div>
          </aside>
        </div>
      </article>
    `;

    articleView.classList.add('open');
    articleView.setAttribute('aria-hidden', 'false');
    document.body.classList.add('article-open');
    articleView.scrollTop = 0;
    history.pushState({ article: item.id }, '', `#materia-${item.id}`);
  }

  function closeArticle(updateHistory = true) {
    articleView.classList.remove('open');
    articleView.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('article-open');

    if (updateHistory && location.hash.startsWith('#materia-')) {
      history.pushState({}, '', '#noticias');
    }
  }

  filters.addEventListener('click', (event) => {
    const button = event.target.closest('.filter');
    if (!button) return;
    activeCategory = button.dataset.cat;
    [...filters.children].forEach((child) => child.classList.toggle('active', child === button));
    renderNews();
  });

  searchInput.addEventListener('input', renderNews);

  grid.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-id]');
    if (!trigger) return;
    const article = noticias.find((item) => item.id === Number(trigger.dataset.id));
    if (article) openArticle(article);
  });

  articleView.addEventListener('click', (event) => {
    if (event.target.closest('[data-close-article]')) {
      closeArticle();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && articleView.classList.contains('open')) {
      closeArticle();
    }
  });

  window.addEventListener('popstate', () => {
    if (!location.hash.startsWith('#materia-')) {
      closeArticle(false);
    }
  });

  projectGrid.innerHTML = projetos.map((item) => `
    <article class="project-card">
      <img src="${esc(item.img)}" alt="${esc(item.nome)}">
      <div class="project-card__body">
        <span class="project-label">${esc(item.etiqueta)}</span>
        <h3>${esc(item.nome)}</h3>
        <p>${esc(item.texto)}</p>
        <a href="${esc(item.link)}" target="_blank" rel="noopener">Acessar →</a>
      </div>
    </article>
  `).join('');

  tickerTrack.innerHTML = [
    'DESTAQUE: Orientação Social que Cultiva Cidadania conduz a matéria principal desta edição.',
    'CONCURSO: Beberibe Notícias mantém monitoramento do Edital 001/2025.',
    'ELEIÇÕES: levantamentos para Presidência e Governo do Ceará entram no radar da semana.',
    'ECONOMIA: Relatório Focus mantém inflação acima do teto e reduz previsão para o PIB.',
    'PROJETOS: DB ENEM, Gabarito Max, Data Center, Logística, e-books e JS Bike seguem em evidência.'
  ].map((item) => `<span>${item}</span>`).join('');

  menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));

  renderNews();

  const hashMatch = location.hash.match(/^#materia-(\d+)$/);
  if (hashMatch) {
    const article = noticias.find((item) => item.id === Number(hashMatch[1]));
    if (article) openArticle(article);
  }
})();
