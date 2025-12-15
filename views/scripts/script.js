const trocarLogin = document.querySelector("#ir-login");
const trocarCadastrar = document.querySelector("#ir-cadastrar");
const formLogin = document.querySelector(".caixa-entrar");
const formCadastrar = document.querySelector(".caixa-cadastrar");
const checkboxONG = document.querySelector("#tipo-usuario");
const inputNome = document.querySelector('input[name="name"]');
const inputEmail = document.querySelector('input[name="email"]');

//Script para alternar entre os formulários de login e cadastro
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

//Altera o placeholder do cadastro se for ONG
checkboxONG.addEventListener("change", () => {
  if (checkboxONG.checked) {
    inputNome.placeholder = "Insira o nome da sua organização";
    inputEmail.placeholder = "Insira o email da sua organização";
  } else {
    inputNome.placeholder = "Insira seu nome";
    inputEmail.placeholder = "Insira seu email";
  }
});