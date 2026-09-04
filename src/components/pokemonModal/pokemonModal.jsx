import { useEffect, useState } from 'react';
import { getPokemon, getPokemonSpecies, getEvolutionChain } from '../../services/pokeApi';
import './pokemonModal.scss';

//funçao externa para eu pegar separado cada evoluçao, ja que a api é muito aninhado os detalhes, e so quero a imagem das evoluçoes e os nomes
function getEvolutionNames(chain) {
    const names = [];

    let current = chain;

    while (current) {
        names.push(current.species.name);

        current = current.evolves_to[0];
    }

    return names;
}

function PokemonModal({
    pokemon,
    onClose,
    selectedPokemonIndex,
    onPrevious,
    onNext,
    canGoPrevious,
    canGoNext,
}) {
    const [species, setSpecies] = useState(null);
    const [evolutionChain, setEvolutionChain] = useState(null);
    const [evolutionPokemons, setEvolutionPokemons] = useState([]);
    const [loadingEvolution, setLoadingEvolution] = useState(true);

    useEffect(() => {
        async function fetchSpecies() {
            const data = await getPokemonSpecies(pokemon.species.url);

            setSpecies(data);

            const evolutionData = await getEvolutionChain(data.evolution_chain.url);

            setEvolutionChain(evolutionData);

            const evolutionNames = getEvolutionNames(evolutionData.chain);

            const evolutionPokemons = await Promise.all(
                evolutionNames.map((name) => getPokemon(name)),
            );

            setEvolutionPokemons(evolutionPokemons);

            setLoadingEvolution(false);
        }

        fetchSpecies();
    }, [pokemon]);

    const formattedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const pokemonNumber = String(pokemon.id).padStart(3, '0');

    //para eu conseguir destacar a proxima evoluçao do pokemon
    const currentEvolutionIndex = evolutionPokemons.findIndex(
        (evolution) => evolution.id === pokemon.id,
    );

    const nextEvolutionIndex = currentEvolutionIndex >= 0 ? currentEvolutionIndex + 1 : -1;

    return (
        <div className="pokemon-modal">
            <button className="pokemon-modal__close" onClick={onClose}>
                ×
            </button>
            <div className={`pokemon-modal__content ${pokemon.types[0].type.name}`}>
                {canGoPrevious && (
                    <button
                        className="pokemon-modal__arrow pokemon-modal__arrow--left"
                        onClick={onPrevious}
                        aria-label="Previous Pokémon"
                    ></button>
                )}

                {canGoNext && (
                    <button
                        className="pokemon-modal__arrow pokemon-modal__arrow--right"
                        onClick={onNext}
                        aria-label="Next Pokémon"
                    ></button>
                )}
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

                <div className="pokemon-modal__evolution">
                    <h3>Evolutions</h3>

                    {loadingEvolution ? (
                        <span>Carregando...</span>
                    ) : (
                        <div
                            className={`pokemon-modal__evolution-list ${pokemon.types[0].type.name}`}
                        >
                            {evolutionPokemons.map((evolution, index) => (
                                <div
                                    key={evolution.id}
                                    className={
                                        index === nextEvolutionIndex
                                            ? `next ${evolution.types[0].type.name}`
                                            : ''
                                    }
                                >
                                    <img src={evolution.sprites.other.home.front_default} alt="" />

                                    {index === nextEvolutionIndex && (
                                        <span>
                                            {evolution.name.charAt(0).toUpperCase() +
                                                evolution.name.slice(1)}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PokemonModal;
