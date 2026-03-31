//Script para carregar os elementos dinâmicos
function elementoDinamico(caminhoHtml, idElemento, callback) {
    fetch(caminhoHtml)
        .then(response => response.text())
        .then(data => {
            document.getElementById(idElemento).innerHTML = data;
            callback?.();
        });
}
//Script para atualizar a barra de navegação com base no login do usuário e para o menu do ícone
function atualizarNavbar() {
    const linkCadastro = document.getElementById("link-cadastro");
    const botaoSair = document.getElementById("btn-sair");
    const user = JSON.parse(localStorage.getItem("user"));

    if(user){ // Se o usuário estiver logado, exibe o nome e o botão de sair
        if (window.innerWidth <= 768) { // Para telas menores, exibe apenas "meu perfil"
            linkCadastro.innerText = "Meu Perfil";
        } else {
            linkCadastro.innerText = "Olá, " + user.name;
        }

        linkCadastro.href = "../routes/perfil.html";

        botaoSair.style.display = "inline-block"; // Exibe o botão de sair
        botaoSair.addEventListener("click", () => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/";
        });

    } else {
        botaoSair.style.display = "none"; // Esconde o botão de sair
    }

    // Menu do ícone
    const botaoMenu = document.getElementById("icone-menu");
    const listaMenu = document.querySelector(".paginas-nav");
    botaoMenu.addEventListener("click", () => {
        listaMenu.classList.toggle("aberto");
    });
}

// Carrega a barra e atualiza a navbar
elementoDinamico("../extras/barra-navegacao.html", "link-navbar", atualizarNavbar);

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