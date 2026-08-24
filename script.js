(() => {
  const grid = document.getElementById('newsGrid');
  const filters = document.getElementById('filters');
  const search = document.getElementById('searchInput');
  const count = document.getElementById('resultCount');
  const modal = document.getElementById('newsModal');
  const modalContent = document.getElementById('modalContent');
  const projectGrid = document.getElementById('projectGrid');
  const menu = document.getElementById('mainNav');
  const menuButton = document.getElementById('menuButton');
  let active = 'Todas';

  const cats = ['Todas', ...new Set(noticias.map(n => n.categoria))];
  filters.innerHTML = cats.map(c => `<button class="filter ${c==='Todas'?'active':''}" data-cat="${c}">${c}</button>`).join('');

  const esc = s => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  function render(){
    const q = (search.value || '').toLowerCase().trim();
    const list = noticias.filter(n => (active==='Todas' || n.categoria===active) && (!q || `${n.titulo} ${n.resumo} ${n.categoria} ${n.selo}`.toLowerCase().includes(q)));
    count.textContent = `${list.length} notícia${list.length===1?'':'s'}`;
    grid.innerHTML = list.map(n => `<article class="news-card"><div class="news-meta"><span>${esc(n.categoria)}</span><time>${esc(n.data)}</time></div><span class="news-seal">${esc(n.selo)}</span><h3>${esc(n.titulo)}</h3><p>${esc(n.resumo)}</p><button class="read-btn" data-id="${n.id}">Ler matéria →</button></article>`).join('');
  }

  filters.addEventListener('click', e => { if(!e.target.matches('.filter')) return; active=e.target.dataset.cat; [...filters.children].forEach(b=>b.classList.toggle('active',b===e.target)); render(); });
  search.addEventListener('input', render);
  grid.addEventListener('click', e => {
    const b=e.target.closest('[data-id]'); if(!b) return; const n=noticias.find(x=>x.id===Number(b.dataset.id));
    modalContent.innerHTML=`<span class="kicker">${esc(n.categoria)} · ${esc(n.data)}</span><h2>${esc(n.titulo)}</h2><p class="lead">${esc(n.resumo)}</p>${n.conteudo.map(p=>`<p>${esc(p)}</p>`).join('')}<p class="source-note">Fonte: <a href="${n.url}" target="_blank" rel="noopener">${esc(n.fonte)}</a></p>`;
    modal.showModal();
  });
  document.getElementById('modalClose').addEventListener('click',()=>modal.close());
  modal.addEventListener('click',e=>{ if(e.target===modal) modal.close(); });

  projectGrid.innerHTML = projetos.map(p=>`<article class="project-card"><img src="${p.img}" alt="${esc(p.nome)}"><div><span class="project-label">${esc(p.etiqueta)}</span><h3>${esc(p.nome)}</h3><p>${esc(p.texto)}</p>${p.link==='#'?'<span class="link-muted">Link será mantido conforme o repositório publicado.</span>':`<a href="${p.link}" target="_blank" rel="noopener">Acessar →</a>`}</div></article>`).join('');

  document.getElementById('tickerTrack').innerHTML = [
    'DESTAQUE: Orientação Social que Cultiva Cidadania integra e-book e BASE Orienta Social 2.0.',
    'CONCURSO: Edital 001/2025 de Beberibe segue marcado como “em andamento” pela Consulpam.',
    'ELEIÇÕES: BTG/Nexus aponta Lula 41% e Flávio Bolsonaro 37% no 1º turno.',
    'CEARÁ: Ipsos-Ipec aponta Ciro 43% e Elmano 35% para o Governo do Estado.',
    'ECONOMIA: Focus mantém projeção de inflação de 5,02% para 2026.'
  ].map(x=>`<span>${x}</span>`).join('');

  menuButton.addEventListener('click',()=>menu.classList.toggle('open'));
  render();
})();
