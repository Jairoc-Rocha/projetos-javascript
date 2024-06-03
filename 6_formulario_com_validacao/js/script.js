const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const ErrorMessages = document.querySelectorAll(".error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  resetErrors();
  validateInputs();
});

function setErros(input, errorMenssage) {
  const errorMenssageElement = input.nextElementSibling;
  errorMenssageElement.textContent = errorMenssage;
  input.parentElement.classList.add("error");
}

const resetErrors = () => {
  ErrorMessages.forEach((msg) => {
    msg.textContent = "";
  });
  nome.parentElement.classList.remove("error");
  email.parentElement.classList.remove("error");
  assunto.parentElement.classList.remove("error");
  mensagem.parentElement.classList.remove("error");
};

function validateInputs() {
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const assuntoValue = assunto.value.trim();
  const mensagemValue = mensagem.value.trim();

  if (nomeValue === "") {
    setErros(nome, "Nome não pode ficar em branco");
  }

  if (emailValue === "") {
    setErros(email, "Email não pode ficar em branco");
  } else if (!isValidEmail(emailValue)) {
    setErros(email, "Email inválido");
  }

  if (assuntoValue === "") {
    setErros(assunto, "Assunto não pode ficar em branco");
  }

  if (mensagemValue === "") {
    setErros(mensagem, "Mensagem não pode ficar em branco");
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
