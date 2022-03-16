const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', ()=>{
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        const idPokemonSelecionado = pokemon.attributes.id.value
        const cartaoPokemonParaAbrir = document.getElementById('cartao-'+idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const cartaoPokemonAtivo = document.querySelector('.ativo')
        cartaoPokemonAtivo.classList.remove('ativo')
        const cartaoPokemonLista = document.getElementById(idPokemonSelecionado)
        cartaoPokemonLista.classList.add('ativo')
    })
})