const botaoCadastrar = document.querySelector("#cadastrar");
const botaoLogin = document.querySelector("#login");
const formCadastrar = document.querySelector(".caixa-cadastrar");
const formLogin = document.querySelector(".caixa-entrar");

botaoCadastrar.addEventListener("click", () => {
  botaoCadastrar.style.backgroundColor = "#71539c";
  botaoLogin.style.backgroundColor = "rgba(0, 0, 0, 0.2)";

  formCadastrar.style.left = "50%";
  formLogin.style.left = "-50%";
  
  formCadastrar.style.opacity = "1";
  formLogin.style.opacity = "0";
})

botaoLogin.addEventListener("click", () => {
  botaoCadastrar.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  botaoLogin.style.backgroundColor = "#71539c";

  formCadastrar.style.left = "150%";
  formLogin.style.left = "50%";
  
  formCadastrar.style.opacity = "0";
  formLogin.style.opacity = "1";
})