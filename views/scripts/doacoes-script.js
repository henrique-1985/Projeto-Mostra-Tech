botoesFechar.forEach(botao => {
  botao.addEventListener("click", () => {
    caixaPopup.classList.remove("aberto")
  });
});

// Script que altera visibilidade dos botões dependendo do tipo de usuário
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

// Animação de scroll
const elementos = document.querySelectorAll('.animar');

function animarScroll() {
    const alturaTela = window.innerHeight;
    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        if (posicao < alturaTela - 100) {
            el.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', animarScroll);