const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

// add um evento ao button submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// pegando os valores dos inputs
function checkInputs() {
  const usernameValue = document.getElementById("username").value;
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  const passwordConfirmationValue = document.getElementById("password-confirmation").value;

  // verificando os inputs
  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatorio.");
  }else{
    setSuccessFor(username);
  }

  if(emailValue === "") {
    setErrorFor(email, "O email é obrigatório");
  }else if(!checkEmail(emailValue)){
    setErrorFor(email, "Por favor, insira um email válido");
  }else[
    setSuccessFor(email)
  ]

  if (passwordValue === ""){
    setErrorFor(password, "A senha é obrigatoria");
  }else if (passwordValue.length < 7){
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  }else{
    setSuccessFor(password)
  }
/* 

  parte que ta dando error

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation)
  }
  */
}

//menssagem de acerto
function setSuccessFor(input) {
  const formControl = input.parentElement; // vai retorna o pai do username
  formControl.className = "form-control success"; // para mudar o nome da classe e acessar o style erro dela
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // adicionar a mensagem de erro
  small.innerText = message;

  //adicionar a clase de error
  formControl.className = "form-control error";
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
