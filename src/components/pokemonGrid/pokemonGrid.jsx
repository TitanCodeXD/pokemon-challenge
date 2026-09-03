import { useEffect, useState } from 'react';
import PokemonCard from '../pokemonCard/pokemonCard';
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

    useEffect(() => {
        async function fetchPokemons() {
            const data = await getPokemons(pokemonList);

            setPokemons(data);
        }

        fetchPokemons();
    }, []);

    return (
        <section className="pokemon-grid">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.sprites.other.home.front_default}
                    type={pokemon.types[0].type.name}
                />
            ))}
        </section>
    );
}

export default PokemonGrid;
