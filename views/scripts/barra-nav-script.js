//Script para carregar os elementos dinâmicos
function elementoDinamico(caminhoHtml, idElemento, callback) {
  fetch(caminhoHtml)
    .then(response => response.text())
    .then(data => {
      document.getElementById(idElemento).innerHTML = data;
      callback?.();
  });
}

//Função para mostrar o menu ao clicar no ícone
function mostrarMenu() {
  const botaoMenu = document.getElementById("icone-menu");
  const listaMenu = document.querySelector(".paginas-nav");
    
  botaoMenu.addEventListener("click", () => {
    listaMenu.classList.toggle("aberto");
  });
}

//Chama a função para carregar a barra de navegação e a função de mostrar o menu
elementoDinamico("../extras/barra-navegacao.html", "link-navbar", mostrarMenu);

//Chama a função para carregar o footer
elementoDinamico("../extras/", "");