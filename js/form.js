let nomeForm = document.getElementById("nome");
let telefoneForm = document.getElementById("telefone");
let emailForm = document.getElementById("email");
let assuntoForm = document.getElementById("assunto");
let mensagemForm = document.getElementById("mensagem");
let checkboxForm = document.getElementById("checkbox");

export default function submitForm(formElement) {
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(nomeForm.value);
    alert(
      `Mensagem enviada com sucesso. Obrigado por nos contatar sr(a) ${nomeForm.value}. Em breve entraremos em contato.`
    );
  });
}
