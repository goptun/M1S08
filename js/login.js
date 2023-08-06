export default function validarLogin(formLoginElement, usuarios) {
  formLoginElement.addEventListener("submit", (e) => {
    validarUsuarioESenha(e, usuarios);
  });
}

function validarUsuarioESenha(e, usuarios) {
  e.preventDefault();
  const email = document.querySelector('input[name="email"]');
  const senha = document.querySelector('input[name="senha"]');

  let listaUsuarios = JSON.parse(usuarios);

  let [usuarioEncontrado] = listaUsuarios.filter(
    (usuario) => usuario.email == email.value
  );

  if (!usuarioEncontrado) {
    alert("Email não cadastrado!");
    return;
  }

  if (usuarioEncontrado.senha != senha.value) {
    alert("Senha inválida!");
    return;
  }

  localStorage.setItem(
    "dados_usuario",
    JSON.stringify({
      nome: usuarioEncontrado.nome,
      email: usuarioEncontrado.email,
    })
  );
  location.href = "medicamentos.html";
}
