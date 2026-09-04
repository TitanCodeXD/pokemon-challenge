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

    useEffect(() => {
        async function fetchPokemons() {
            const data = await getPokemons(pokemonList);

            setPokemons(data);
        }

        fetchPokemons();
    }, []);

    return (
        <>
            <section className="pokemon-grid">
                {pokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.other.home.front_default}
                        type={pokemon.types[0].type.name}
                        onClick={() => setSelectedPokemon(pokemon)}
                    />
                ))}
            </section>
            {selectedPokemon && (
                <PokemonModal pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />
            )}
        </>
    );
}

export default PokemonGrid;
