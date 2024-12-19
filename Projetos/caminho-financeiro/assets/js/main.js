// Detecta o nível de profundidade para corrigir os caminhos
const isInPages = window.location.pathname.includes("/pages/");
const basePath = isInPages ? "../assets/html/" : "assets/html/";

// Log para verificar onde estamos
console.log("Carregando caminhos de base:", basePath);

// Carrega o cabeçalho dinamicamente
fetch(`${basePath}header.html`)
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;

    // Corrige os links de navegação dinamicamente, se necessário
    if (isInPages) {
      document.querySelectorAll(".nav-links a").forEach((link) => {
        const href = link.getAttribute("href");
        if (!href.startsWith("http") && !href.startsWith("../")) {
          // Ajusta apenas os links que não têm "../" ou que já são absolutos
          link.setAttribute("href", `../${href}`);
        }
      });
    }
  })
  .catch((err) => console.error("Erro ao carregar o cabeçalho:", err));

// Carrega o rodapé dinamicamente
fetch(`${basePath}footer.html`)
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((err) => console.error("Erro ao carregar o rodapé:", err));

//Cards Menu
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const pageId = card.id;
    window.location.href = `pages/${pageId}.html`;
  });
});

console.log("main.js carregado");
