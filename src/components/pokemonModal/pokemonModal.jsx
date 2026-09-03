import './pokemonModal.scss';

function PokemonModal({ pokemon }) {
    return (
        <div className="pokemon-modal">
            <div className="pokemon-modal__content">
                <h2>{pokemon.name}</h2>
            </div>
        </div>
    );
}

export default PokemonModal;
