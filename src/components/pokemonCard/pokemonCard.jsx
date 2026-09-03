import './pokemonCard.scss';

function PokemonCard({ name, image }) {
    return (
        <article className="pokemon-card">
            <img className="pokemon-card__image" src={image} alt={name} />

            <h2 className="pokemon-card__name">{name}</h2>
        </article>
    );
}

export default PokemonCard;
