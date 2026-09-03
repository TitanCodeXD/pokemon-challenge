import './pokemonCard.scss';

function PokemonCard() {
    return (
        <article className="pokemon-card">
            <span className="pokemon-card__number">#001</span>

            <img
                className="pokemon-card__image"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                alt="Bulbasaur"
            />

            <h2 className="pokemon-card__name">Bulbasaur</h2>
        </article>
    );
}

export default PokemonCard;
