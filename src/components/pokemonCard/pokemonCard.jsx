import './pokemonCard.scss';

function PokemonCard({ name, image, type, onClick }) {
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <article className={`pokemon-card ${type}`} onClick={onClick}>
            <img className="pokemon-card__image" src={image} alt={formattedName} />

            <h2 className={`pokemon-card__name ${type}`}>{formattedName}</h2>
        </article>
    );
}

export default PokemonCard;
