// Chama os elementos para o js
const nameinput = document.querySelector("#name");
const emailinput = document.querySelector("#email");
const submitbutton = document.querySelector("#submit-buton");
const errormsg = document.querySelector(".msg");
const items = document.querySelector(".Items");

// Inicio do EventListener do botão submit
submitbutton.addEventListener("click", (e) => {
  e.preventDefault();
  // Atribui os valores dos elementos ao objeto
  const namevalue = nameinput.value;
  const emailvalue = emailinput.value;
  // Inicio da validação do formulário
  if (namevalue === "" || emailvalue === "") {
    // Mensagem de erro caso validação seja true
    errormsg.textContent = "Please fill out all the fields!";
    // atribui uma classe ao erro para estilização
    errormsg.classList = "error";
    // Tempo em que o erro será exibido na tela
    setTimeout(() => {
      // Exclui o erro da tela
      errormsg.classList = "";
      errormsg.textContent = "";
    }, "3000");
    // Retorna ao estado inicial finalizando o código
    return;
  }
  // Caso a validação seja false segue o código abaizo
  // Cria um List  Item com os valores dos objetos
  const li = document.createElement("li");
  // coloca uma clase ao li
  li.classList = "item";
  // coloca os valores dos objetos dentro do li
  li.innerHTML = `Name:${namevalue}<br />Email:${emailvalue}`;
  // coloca o li dentro do ul
  items.appendChild(li);
  // limpa os campo dos objetos
  nameinput.value = "";
  emailinput.value = "";
  // apos tudo acontecer limpa o ul e mostra uma mensagem de sucesso
  setTimeout(() => {
    li.remove();
    errormsg.classList = "login";
    errormsg.textContent = "successful login";
  }, "3000");
  // apos a mensagem de sucesso limpa tudo e retorna ao estado inicial
  setTimeout(() => {
    errormsg.classList = "";
    errormsg.textContent = "";
  }, "6000");
});
