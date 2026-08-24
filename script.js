(() => {
  const grid = document.getElementById('newsGrid');
  const filters = document.getElementById('filters');
  const search = document.getElementById('searchInput');
  const count = document.getElementById('resultCount');
  const articleView = document.getElementById('articleView');
  const articleContent = document.getElementById('articleContent');
  const projectGrid = document.getElementById('projectGrid');
  const menu = document.getElementById('mainNav');
  const menuButton = document.getElementById('menuButton');
  let active = 'Todas';

  const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const cats = ['Todas', ...new Set(noticias.map(n => n.categoria))];
  filters.innerHTML = cats.map(c => `<button class="filter ${c==='Todas'?'active':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');

  function render(){
    const q = (search.value || '').toLowerCase().trim();
    const list = noticias.filter(n => (active==='Todas' || n.categoria===active) && (!q || `${n.titulo} ${n.resumo} ${n.categoria} ${n.selo}`.toLowerCase().includes(q)));
    count.textContent = `${list.length} notícia${list.length===1?'':'s'}`;
    grid.innerHTML = list.map(n => `
      <article class="news-card">
        <button class="news-image-button" data-id="${n.id}" aria-label="Abrir matéria: ${esc(n.titulo)}">
          <img class="news-image" src="${esc(n.imagem)}" alt="Imagem de destaque — ${esc(n.titulo)}" loading="lazy">
        </button>
        <div class="news-card-body">
          <div class="news-meta"><span>${esc(n.categoria)}</span><time>${esc(n.data)}</time></div>
          <span class="news-seal">${esc(n.selo)}</span>
          <h3>${esc(n.titulo)}</h3>
          <p>${esc(n.resumo)}</p>
          <button class="read-btn" data-id="${n.id}">Ler matéria completa →</button>
        </div>
      </article>`).join('');
  }

  function openArticle(n){
    articleContent.innerHTML = `
      <article class="article-page">
        <header class="article-hero">
          <div class="article-hero-media"><img src="${esc(n.imagem)}" alt="Imagem de destaque — ${esc(n.titulo)}"></div>
          <div class="article-hero-copy">
            <span class="kicker">${esc(n.categoria)} · ${esc(n.data)}</span>
            <span class="article-seal">${esc(n.selo)}</span>
            <h1>${esc(n.titulo)}</h1>
            <p class="article-deck">${esc(n.resumo)}</p>
          </div>
        </header>
        <div class="article-layout">
          <main class="article-body">
            ${n.conteudo.map((p,i)=> i===0 ? `<p class="article-lead">${esc(p)}</p>` : `<p>${esc(p)}</p>`).join('')}
            ${n.destaque ? `<div class="article-highlight">${esc(n.destaque)}</div>` : ''}
            <div class="article-source"><strong>Fonte consultada:</strong> <a href="${esc(n.url)}" target="_blank" rel="noopener">${esc(n.fonte)}</a></div>
          </main>
          <aside class="article-side">
            <div class="side-box"><b>Beberibe Notícias</b><span>Edição de 24/08/2026</span><span>${esc(n.categoria)}</span></div>
            <button class="side-back" type="button" data-close-article>← Voltar às manchetes</button>
          </aside>
        </div>
      </article>`;
    articleView.classList.add('open');
    articleView.setAttribute('aria-hidden','false');
    document.body.classList.add('article-open');
    articleView.scrollTop = 0;
    history.pushState({article:n.id}, '', `#materia-${n.id}`);
  }

  function closeArticle(push=true){
    articleView.classList.remove('open');
    articleView.setAttribute('aria-hidden','true');
    document.body.classList.remove('article-open');
    if(push && location.hash.startsWith('#materia-')) history.pushState({}, '', '#noticias');
  }

  filters.addEventListener('click', e => { if(!e.target.matches('.filter')) return; active=e.target.dataset.cat; [...filters.children].forEach(b=>b.classList.toggle('active',b===e.target)); render(); });
  search.addEventListener('input', render);
  grid.addEventListener('click', e => { const b=e.target.closest('[data-id]'); if(!b) return; const n=noticias.find(x=>x.id===Number(b.dataset.id)); if(n) openArticle(n); });
  articleView.addEventListener('click', e => { if(e.target.closest('[data-close-article]')) closeArticle(); });
  document.addEventListener('keydown', e => { if(e.key==='Escape' && articleView.classList.contains('open')) closeArticle(); });
  window.addEventListener('popstate',()=>{ if(!location.hash.startsWith('#materia-')) closeArticle(false); });

  projectGrid.innerHTML = projetos.map(p=>`<article class="project-card"><img src="${esc(p.img)}" alt="${esc(p.nome)}"><div><span class="project-label">${esc(p.etiqueta)}</span><h3>${esc(p.nome)}</h3><p>${esc(p.texto)}</p><a href="${esc(p.link)}" target="_blank" rel="noopener">Acessar →</a></div></article>`).join('');

  document.getElementById('tickerTrack').innerHTML = [
    'DESTAQUE: Orientação Social que Cultiva Cidadania integra e-book e BASE Orienta Social 2.0.',
    'CONCURSO: Edital 001/2025 de Beberibe segue em acompanhamento.',
    'ELEIÇÕES: pesquisas e cenário político nacional e estadual na edição.',
    'CEARÁ: notícias estaduais e serviços entram no giro semanal.',
    'BRASIL: economia, concursos e checagem de informações.'
  ].map(x=>`<span>${x}</span>`).join('');

  menuButton.addEventListener('click',()=>menu.classList.toggle('open'));
  render();
  const hashId = location.hash.match(/^#materia-(\d+)$/); if(hashId){ const n=noticias.find(x=>x.id===Number(hashId[1])); if(n) openArticle(n); }
})();
