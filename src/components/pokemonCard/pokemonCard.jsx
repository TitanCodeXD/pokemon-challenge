import './pokemonCard.scss';

function PokemonCard({ name }) {
    return (
        <article className="pokemon-card">
            <img
                className="pokemon-card__image"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                alt={name}
            />

            <h2 className="pokemon-card__name">{name}</h2>
        </article>
    );
}

export default PokemonCard;
