export default function cadastroUsuario(formCadastroElement, usuarios) {
  formCadastroElement.addEventListener("submit", (e) => {
    cadastrarUsuario(e, usuarios);
  });
}

function cadastrarUsuario(e, usuarios) {
  e.preventDefault();
  const nome = document.querySelector('input[name="nome"]');
  const email = document.querySelector('input[name="email"]');
  const senha = document.querySelector('input[name="senha"]');

  let listaUsuarios = JSON.parse(usuarios);

  let [usuarioEncontrado] = listaUsuarios.filter(
    (usuario) => usuario.email == email.value
  );

  if (usuarioEncontrado) {
    alert("Email já cadastrado!");
    return;
  }

  listaUsuarios.push({
    nome: nome.value,
    email: email.value,
    senha: Number(senha.value),
  });
  listaUsuarios = JSON.stringify(listaUsuarios);
  console.log(listaUsuarios);
  return alert(`Usuário(a) ${nome.value} cadastrado(a) com sucesso!`);
}
