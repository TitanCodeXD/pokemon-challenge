import { useEffect, useState } from 'react';
import { getPokemonSpecies } from '../../services/pokeApi';
import './pokemonModal.scss';

function PokemonModal({ pokemon }) {
    const [species, setSpecies] = useState(null);

    useEffect(() => {
        async function fetchSpecies() {
            const data = await getPokemonSpecies(pokemon.species.url);

            setSpecies(data);
        }

        fetchSpecies();
    }, [pokemon]);

    const formattedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const pokemonNumber = String(pokemon.id).padStart(3, '0');

    return (
        <div className="pokemon-modal">
            <div className={`pokemon-modal__content ${pokemon.types[0].type.name}`}>
                <div className="pokemon-modal__info">
                    <span className="pokemon-modal__number">#{pokemonNumber}</span>

                    <h2>{formattedName}</h2>

                    {species && (
                        <p>{species.genera.find((item) => item.language.name === 'en')?.genus}</p>
                    )}

                    <div className="pokemon-modal__details">
                        <div>
                            <span>HEIGHT</span>
                            <strong>{pokemon.height / 10} m</strong>
                        </div>

                        <div>
                            <span>WEIGHT</span>
                            <strong>{pokemon.weight / 10} kg</strong>
                        </div>

                        <div>
                            <span>ABILITIES</span>
                            <strong>
                                {pokemon.abilities
                                    .map((ability) => ability.ability.name)
                                    .join(', ')}
                            </strong>
                        </div>
                    </div>
                </div>

                <img
                    className="pokemon-modal__image"
                    src={pokemon.sprites.other.home.front_default}
                    alt={formattedName}
                />
            </div>
        </div>
    );
}

export default PokemonModal;
