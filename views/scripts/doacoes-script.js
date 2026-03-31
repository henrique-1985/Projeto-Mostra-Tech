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
    caixaPopup.classList.add("aberto");
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
    caixaPopup.classList.remove("aberto")
  });
});

//Script que altera a visibilidade dos botões de resgatar e adicionar doações dependendo do tipo de usuário
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const resgatarDoacao = document.querySelectorAll(".botao-resgatar");
    const adicionarDoacao = document.querySelectorAll(".btn-adicionar");

    resgatarDoacao.forEach(botao => botao.style.display = "none");
    adicionarDoacao.forEach(botao => botao.style.display = "none");

    if (user) {
        if (user.isONG) {
            window.location.hash = "ong";
            resgatarDoacao.forEach(botao => botao.style.display = "block");
        } else {
            adicionarDoacao.forEach(botao => botao.style.display = "block");
        }
    }
});