import { useEffect, useState } from 'react';
import PokemonCard from '../pokemonCard/pokemonCard';
import PokemonModal from '../pokemonModal/pokemonModal';
import { getPokemons } from '../../services/pokeApi';
import './pokemonGrid.scss';

const pokemonList = [
    'bulbasaur',
    'charmander',
    'squirtle',
    'caterpie',
    'pidgey',
    'rattata',
    'ekans',
    'pikachu',
];

function PokemonGrid() {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(null); //para podermos trocar de pokemon pelo modal

    useEffect(() => {
        async function fetchPokemons() {
            const data = await getPokemons(pokemonList);

            setPokemons(data);
        }

        fetchPokemons();
    }, []);

    //para passarmos o index do pokemon selecionado para o modal
    const handlePreviousPokemon = () => {
        if (selectedPokemonIndex > 0) {
            const previousIndex = selectedPokemonIndex - 1;

            setSelectedPokemonIndex(previousIndex);
            setSelectedPokemon(pokemons[previousIndex]);
        }
    };

    const handleNextPokemon = () => {
        if (selectedPokemonIndex < pokemons.length - 1) {
            const nextIndex = selectedPokemonIndex + 1;

            setSelectedPokemonIndex(nextIndex);
            setSelectedPokemon(pokemons[nextIndex]);
        }
    };

    return (
        <>
            <section className="pokemon-grid">
                {pokemons.map((pokemon, index) => (
                    <PokemonCard
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.other.home.front_default}
                        type={pokemon.types[0].type.name}
                        onClick={() => {
                            setSelectedPokemon(pokemon);
                            setSelectedPokemonIndex(index);
                        }}
                    />
                ))}
            </section>
            {selectedPokemon && (
                <PokemonModal
                    pokemon={selectedPokemon}
                    onClose={() => setSelectedPokemon(null)}
                    selectedPokemonIndex={selectedPokemonIndex}
                    onPrevious={handlePreviousPokemon}
                    onNext={handleNextPokemon}
                    canGoPrevious={selectedPokemonIndex > 0}
                    canGoNext={selectedPokemonIndex < pokemons.length - 1}
                />
            )}
        </>
    );
}

export default PokemonGrid;
