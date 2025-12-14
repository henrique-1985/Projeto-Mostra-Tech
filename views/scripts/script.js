//Script para alternar entre os formulários de login e cadastro
const trocarLogin = document.querySelector("#ir-login");
const trocarCadastrar = document.querySelector("#ir-cadastrar");
const formLogin = document.querySelector(".caixa-entrar");
const formCadastrar = document.querySelector(".caixa-cadastrar");

trocarLogin.addEventListener("click", () => { // Troca para o formulário de login ao clicar no botão entrar
  formCadastrar.style.left = "150%";
  formLogin.style.left = "50%";
  
  formCadastrar.style.opacity = "0";
  formLogin.style.opacity = "1";
})

trocarCadastrar.addEventListener("click", () => { // Troca para o formulário de cadastro ao clicar no botão cadastrar
  formCadastrar.style.left = "50%";
  formLogin.style.left = "-50%";
  
  formCadastrar.style.opacity = "1";
  formLogin.style.opacity = "0";
})