export default function createCards(fatherCard, quantidadeCards, produtos) {
  for (let id = 0; id < quantidadeCards; id++) {
    let card = `
    
    <div id = ${id} class="col-lg-3 col-md-6 mb-4">
      <div class="card h-100 mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3 text-end">
          <h6 class="my-0 fw-normal pe-3 heart">
            <i class="bi bi-heart-fill">
            </i>
          </h6>
        </div>
    <div class="card-body d-flex flex-column">
      <div class="flex-grow-1">
        <img class="img-fluid rounded">
      </div>
        <h3 class="card-tittle h-100 mt-4 fs-4">
        </h3>
        <h4 class="card-subtitle h-100 mb-4 text-muted fs-6">
        </h4>
        <p class="card-text pricing-card-text mb-4">
        <small class="text-body-secondary fw-light">
        </small>
      </p>
      <button type="button" class="w-100 btn btn-lg btn-primary fs-6 custom-btn">Adicionar</button>
        </div>
      </div>
    </div>
    
    `;
    fatherCard.innerHTML += card;
  }

  fillCards(produtos);
}

function fillCards(produtos) {
  for (let id = 0; id < produtos.length; id++) {
    let elementoCard = document.getElementById(id);
    let nomeProduto = elementoCard.querySelector("h3");
    let descricaoProduto = elementoCard.querySelector("h4");
    let precoProduto = elementoCard.querySelector("p");
    let imagemProduto = elementoCard.querySelector("img");
    let botaoAdicionar = elementoCard.querySelector("button");
    let botaoFavorito = elementoCard.querySelector("i");

    nomeProduto.innerText = produtos[id].titulo;
    descricaoProduto.innerText = produtos[id].descricao;
    precoProduto.innerText = produtos[id].valor;
    precoProduto.innerHTML += `<small class="text-body-secondary fw-light">/${produtos[id].unidade}</small>`;

    imagemProduto.setAttribute("src", produtos[id].imagem);
    imagemProduto.setAttribute("alt", produtos[id].imagemAlt);

    botaoAdicionar.addEventListener("click", () => {
      console.log(produtos[id].titulo);
      console.log(produtos);
      alert(`Você adicionou ${produtos[id].titulo} ao seu carrinho.`);
    });

    botaoFavorito.addEventListener("click", () => {
      console.log(produtos[id].titulo);

      if (produtos[id].favorito === false) {
        alert(`Você adicionou ${produtos[id].titulo} aos seus favoritos.`);
        botaoFavorito.style.color = "red";
        produtos[id].favorito = true;
      } else {
        alert(`Você removeu ${produtos[id].titulo} dos seus favoritos.`);
        botaoFavorito.style.color = "rgb(168, 9, 9)";
        produtos[id].favorito = false;
      }

      produtos.forEach((element) => {
        if (element.favorito === true) {
          console.log(element);
        }
      });
    });
  }
}
