const homePage = document.getElementById("homePage");
const paginaNoticia = document.getElementById("paginaNoticia");
const areaDestaque = document.getElementById("areaDestaque");
const listaNoticias = document.getElementById("listaNoticias");
const tickerNoticias = document.getElementById("tickerNoticias");
const maisLidas = document.getElementById("maisLidas");
const listaCategorias = document.getElementById("listaCategorias");
const menuCategorias = document.getElementById("menuCategorias");

let noticiasVisiveis = [...bancoNoticias];

function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

function ordenarNoticias(lista) {
  return [...lista].sort((a, b) => new Date(b.data) - new Date(a.data));
}

function obterCategorias() {
  const categorias = [...new Set(bancoNoticias.map(noticia => noticia.categoria))];
  return ["Todas", ...categorias];
}

function renderMenuCategorias() {
  const categorias = obterCategorias();

  menuCategorias.innerHTML = categorias.map((categoria, index) => `
    <a href="#" class="nav-link ${index === 0 ? "active" : ""}" data-categoria="${categoria}">
      ${categoria}
    </a>
  `).join("");

  const links = menuCategorias.querySelectorAll(".nav-link");

  links.forEach(link => {
    link.addEventListener("click", function(evento) {
      evento.preventDefault();

      links.forEach(item => item.classList.remove("active"));
      this.classList.add("active");

      const categoria = this.dataset.categoria;
      filtrarNoticias(categoria);
    });
  });
}

function renderListaCategorias() {
  const categorias = obterCategorias().filter(cat => cat !== "Todas");

  listaCategorias.innerHTML = categorias.map(categoria => `
    <li><a href="#" onclick="filtrarNoticias('${categoria}'); return false;">${categoria}</a></li>
  `).join("");
}

function renderTicker() {
  const titulos = ordenarNoticias(bancoNoticias)
    .slice(0, 6)
    .map(noticia => `<span>${noticia.titulo} →</span>`)
    .join("");

  tickerNoticias.innerHTML = `<div>${titulos}</div><div>${titulos}</div>`;
}

function renderMaisLidas() {
  const lista = ordenarNoticias(bancoNoticias).slice(0, 5);

  maisLidas.innerHTML = lista.map(noticia => `
    <li>
      <a href="#" onclick="abrirNoticia(${noticia.id}); return false;">
        ${noticia.titulo}
      </a>
    </li>
  `).join("");
}

function renderDestaque(lista) {
  const noticiaDestaque = lista.find(noticia => noticia.destaque === true);

  if (!noticiaDestaque) {
    areaDestaque.innerHTML = "";
    return;
  }

  areaDestaque.innerHTML = `
    <div class="hero-card" onclick="abrirNoticia(${noticiaDestaque.id})">
      <img src="${noticiaDestaque.imagem}" alt="${noticiaDestaque.titulo}">
      <div class="hero-content">
        <span class="badge">${noticiaDestaque.categoria}</span>
        <h2>${noticiaDestaque.titulo}</h2>
        <div class="meta">
          <span>${formatarData(noticiaDestaque.data)}</span>
          <span>•</span>
          <span>Notícia em destaque</span>
        </div>
        <p>${noticiaDestaque.resumo}</p>
      </div>
    </div>
  `;
}

function renderNoticias(lista) {
  const noticiasSemDestaque = lista.filter(noticia => !noticia.destaque);

  listaNoticias.innerHTML = noticiasSemDestaque.map(noticia => `
    <div class="card" onclick="abrirNoticia(${noticia.id})">
      <img src="${noticia.imagem}" alt="${noticia.titulo}">
      <div class="card-content">
        <span class="badge">${noticia.categoria}</span>
        <h3>${noticia.titulo}</h3>
        <div class="meta">
          <span>${formatarData(noticia.data)}</span>
        </div>
        <p>${noticia.resumo}</p>
      </div>
    </div>
  `).join("");
}

function abrirNoticia(id) {
  const noticia = bancoNoticias.find(item => item.id === id);

  if (!noticia) return;

  paginaNoticia.innerHTML = `
    <button class="back-btn" onclick="voltarHome()">← Voltar</button>
    <span class="badge">${noticia.categoria}</span>
    <h1>${noticia.titulo}</h1>
    <div class="meta">
      <span>${formatarData(noticia.data)}</span>
    </div>
    <img src="${noticia.imagem}" alt="${noticia.titulo}">
    ${noticia.conteudo.map(paragrafo => `<p>${paragrafo}</p>`).join("")}
  `;

  homePage.style.display = "none";
  paginaNoticia.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function voltarHome() {
  paginaNoticia.style.display = "none";
  homePage.style.display = "grid";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filtrarNoticias(categoria) {
  if (categoria === "Todas") {
    noticiasVisiveis = ordenarNoticias(bancoNoticias);
  } else {
    noticiasVisiveis = ordenarNoticias(
      bancoNoticias.filter(noticia => noticia.categoria === categoria)
    );
  }

  renderDestaque(noticiasVisiveis);
  renderNoticias(noticiasVisiveis);
  voltarHome();
}

function iniciarPortal() {
  noticiasVisiveis = ordenarNoticias(bancoNoticias);
  renderMenuCategorias();
  renderListaCategorias();
  renderTicker();
  renderMaisLidas();
  renderDestaque(noticiasVisiveis);
  renderNoticias(noticiasVisiveis);
}

iniciarPortal();