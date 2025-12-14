//Script para alternar entre os formulários de login e cadastro
const botaoCadastrar = document.querySelector("#cadastrar");
const botaoLogin = document.querySelector("#login");
const formCadastrar = document.querySelector(".caixa-cadastrar");
const formLogin = document.querySelector(".caixa-entrar");

botaoCadastrar.addEventListener("click", () => { // Troca para o formulário de cadastro ao clicar no botão cadastrar
  botaoCadastrar.style.backgroundColor = "#6aa3dd";
  botaoLogin.style.backgroundColor = "rgba(255, 255, 255, 0.3)";

  formCadastrar.style.left = "50%";
  formLogin.style.left = "-50%";
  
  formCadastrar.style.opacity = "1";
  formLogin.style.opacity = "0";
})

botaoLogin.addEventListener("click", () => { // Troca para o formulário de login ao clicar no botão entrar
  botaoCadastrar.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  botaoLogin.style.backgroundColor = "#6aa3dd";

  formCadastrar.style.left = "150%";
  formLogin.style.left = "50%";
  
  formCadastrar.style.opacity = "0";
  formLogin.style.opacity = "1";
})