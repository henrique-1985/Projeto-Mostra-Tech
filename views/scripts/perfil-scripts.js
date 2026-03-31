//Consts do popup de confirmação de apagar conta
const apagarConta = document.getElementById("btn-deletar");
const caixaDeletar = document.getElementById("popup-deletar");
const textoPopupApagar = document.getElementById("popup-txt-deletar");
const iconePopupApagar = document.getElementById("popup-icone-deletar");
const confirmarDeletar = document.getElementById("btn-confirmar-deletar");
const cancelarDeletar = document.getElementById("btn-cancelar-deletar");
const fecharPopupDeletar = document.getElementById("btn-fechar-deletar");
const botoesFecharDeletar = [cancelarDeletar, fecharPopupDeletar];

//Função para acionar a caixa de confirmação de apagar conta
apagarConta.addEventListener("click", () => {
    caixaDeletar.classList.add("aberto");
});

//Função para confirmar o apagar, muda o texto, o ícone e os botões
confirmarDeletar.addEventListener("click", () => {
  textoPopupApagar.innerText = "Conta apagada.";
  iconePopupApagar.className = "bx bx-check-circle";
  confirmarDeletar.style.display = "none";
  cancelarDeletar.style.display = "none";
  fecharPopupDeletar.style.display = "block";
});

//Função para fechar a caixa ao clicar nos botões de cancelar ou fechar
botoesFecharDeletar.forEach(botao => {
  botao.addEventListener("click", () => {
    caixaDeletar.classList.remove("aberto")
  });
});