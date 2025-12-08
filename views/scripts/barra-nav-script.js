//Script para carregar a barra de navegação de forma dinâmica
fetch('../extras/barra-navegacao.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('link-navbar').innerHTML = data;
    mostrarMenu(); // Inicializa a funcionalidade do menu após carregar o HTML
  })
  .catch(error => {
    console.error('Erro, não foi possível carregar a barra de navegação:', error);
  });

//Função para mostrar o menu ao clicar no ícone
function mostrarMenu() {
    const botaoMenu = document.getElementById("icone-menu");
    const listaMenu = document.querySelector(".paginas-nav");
    
    botaoMenu.addEventListener("click", () => {
        listaMenu.classList.toggle("aberto");
    });
}