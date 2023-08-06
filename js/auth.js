export default function auth() {
  const dadosLocalStorage = JSON.parse(localStorage.getItem("dados_usuario"));
  if (!dadosLocalStorage) {
    location.href = "/login.html";
  }
}
