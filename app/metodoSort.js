let btbOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco')
btbOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco) // ordena livros por preco
    exibirOsLivrosNaTela(livrosOrdenados)
}