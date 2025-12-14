//Script para alterar o que é exibido na página de doações
document.addEventListener("DOMContentLoaded", () => {
    const isONG = window.location.hash === "#ong"; // Verifica se a URL contém #ong
    const divOng = document.getElementById("ong");  
    const catalogo = document.getElementById("catalogo");
    const btnAdicionar = document.getElementById("btn-adicionar");

    if (isONG) { // Se for ONG, mostra a div da ONG e esconde a versão original
        divOng.style.display = "block";
        catalogo.style.display = "none";
        btnAdicionar.style.display = "none";
    }
});