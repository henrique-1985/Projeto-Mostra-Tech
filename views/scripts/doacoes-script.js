//Consts do popup de confirmação
const resgatarDoacao = document.getElementById("btn-resgatar");
const caixaPopup = document.getElementById("popup-resgatar");
const textoPopup = document.getElementById("popup-txt");
const iconePopup = document.getElementById("popup-icone");
const confirmarResgate = document.getElementById("btn-confirmar");
const cancelarResgate = document.getElementById("btn-cancelar");
const fecharPopup = document.getElementById("btn-fechar");
const botoesFechar = [cancelarResgate, fecharPopup];

//Função para acionar a caixa de confirmação
resgatarDoacao.addEventListener("click", () => {
    caixaPopup.style.display = 'block';
});

//Função para confirmar o resgate, muda o texto, o ícone e os botões
confirmarResgate.addEventListener("click", () => {
  textoPopup.innerText = "Resgate confirmado!";
  iconePopup.className = "bx bx-check-circle";
  confirmarResgate.style.display = "none";
  cancelarResgate.style.display = "none";
  fecharPopup.style.display = "block";
});

//Função para fechar a caixa ao clicar nos botões de cancelar ou fechar
botoesFechar.forEach(botao => {
  botao.addEventListener("click", () => {
    caixaPopup.style.display = 'none';
  });
});

//Script para alterar o que é exibido na página de doações se for ONG ou não
window.addEventListener("DOMContentLoaded", () => {
  const isOng = window.location.hash === "#ong";
  const mostrarBotao = document.querySelectorAll(".botao-resgatar");
  const esconderBotao = document.querySelectorAll(".btn-adicionar");

  if (isOng) {
    mostrarBotao.forEach(botao => {
      botao.style.display = "block";
    });
    esconderBotao.forEach(botao => {
      botao.style.display = "none";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => { //Script para redirecionar para a seção de ONG se o usuário for ONG
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.isONG) {
        window.location.hash = "ong";
    }
});