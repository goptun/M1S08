import auth from "./auth.js";
import { usuarios } from "./dados.js";
import createHeader from "./header.js";
import createCards from "./card.js";
import createOptions from "./selectOption.js";
import submitForm from "./form.js";
import validarLogin from "./login.js";
import cadastroUsuario from "./cadastroUsuario.js";

/* Dados */
let menus = ["TODOS MEDICAMENTOS", "SOBRE NÓS", "FALE CONOSCO"];

let logo = {
  logoImg: "./images/logo.svg",
  nomeLogo: "Farmácia Ramos",
  alt: "Imagem de logotipo",
  logoTitulo: "FARMÁCIA RAMOS ",
};

let medicamentos = [
  {
    id: 0,
    titulo: "LORATADINA",
    descricao: "Loratadina Cimed Com 12 Comprimidos 10mg Generico",
    imagem: "./images/remedioLoratadina.png",
    imagemAlt: "Loratadina Cimed Com 12 Comprimidos 10mg Generico",
    unidade: "un",
    favorito: false,
    valor: "R$ 6,77",
  },
  {
    id: 1,
    titulo: "DORALGINA",
    descricao: "Comprimido Doralgina Com 4 Drágeas",
    imagem: "./images/remedioDoralgina.png",
    imagemAlt: "Comprimido Doralgina Com 4 Drágeas",
    unidade: "un",
    favorito: false,
    valor: "R$ 1,56",
  },
  {
    id: 2,
    titulo: "CIMEGRIPE",
    descricao: "Cimegripe 400mg Com 20 Cápsulas",
    imagem: "./images/remedioCimegripe.png",
    imagemAlt: "Cimegripe 400mg Com 20 Cápsulas",
    unidade: "un",
    favorito: false,
    valor: "R$ 11,90",
  },
  {
    id: 3,
    titulo: "PARACETAMOL",
    descricao: "Paracetamol 20 Comprimidos 750mg",
    imagem: "./images/remedioParacetamol.png",
    imagemAlt: "Paracetamol 20 Comprimidos 750mg",
    unidade: "un",
    favorito: false,
    valor: "R$ 10,99",
  },
  {
    id: 4,
    titulo: "NAPROXENO",
    descricao: "Naproxeno Com 10 Comprimidos 500mg",
    imagem: "./images/remedioNaproxeno.png",
    imagemAlt: "Naproxeno Com 10 Comprimidos 500mg",
    unidade: "un",
    favorito: false,
    valor: "R$ 7,87",
  },
  {
    id: 5,
    titulo: "SIMETICONA",
    descricao: "Simenticona Biositética 125mg com 10 cápsulas",
    imagem: "./images/remedioSimeticona.png",
    imagemAlt: "Simenticona Biositética 125mg com 10 cápsulas",
    unidade: "un",
    favorito: false,
    valor: "R$ 5,17",
  },

  {
    id: 6,
    titulo: "STOMALIV",
    descricao: "Stomaliv Sabor Abacaxi Envelope 5g",
    imagem: "./images/remedioStomaliv.png",
    imagemAlt: "Stomaliv Sabor Abacaxi Envelope 5g",
    unidade: "un",
    favorito: false,
    valor: "R$ 0,56",
  },

  {
    id: 7,
    titulo: "XAROPE DE GUACO",
    descricao: "Xarópe de Guaco G500 150ml",
    imagem: "./images/remedioXaropeDeGuaco.png",
    imagemAlt: "Xarópe de Guaco G500 150ml",
    unidade: "un",
    favorito: false,
    valor: "R$ 11,18",
  },
];

let assuntos = ["Selecione", "Comercial", "Dúvidas", "Revenda"];

/* Elementos */
let header = document.getElementsByTagName("header")[0];
let cardBody = document.querySelector("#card-body");
let assuntoElement = document.getElementById("assunto");
let formElement = document.querySelector("form");
let formLoginElement = document.getElementById("login-form");
let formCadastroElement = document.getElementById("cadastro-form");

/* Valida autenticação */
if (!formLoginElement && !formCadastroElement) {
  auth();
}

/* Criação */
if (header != null) {
  createHeader(header, logo, menus);
}

if (cardBody != null) {
  createCards(cardBody, medicamentos.length, medicamentos);
}

if (assuntoElement != null) {
  createOptions(assuntoElement, assuntos);
}

if (formElement != null) {
  submitForm(formElement);
}

if (formLoginElement != null) {
  validarLogin(formLoginElement, usuarios);
}

if (formCadastroElement != null) {
  cadastroUsuario(formCadastroElement, usuarios);
}
