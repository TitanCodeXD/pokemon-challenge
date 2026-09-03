import PokemonCard from '../pokemonCard/pokemonCard';
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
    return (
        <section className="pokemon-grid">
            {pokemonList.map((pokemon) => (
                <PokemonCard key={pokemon} name={pokemon} />
            ))}
        </section>
    );
}

export default PokemonGrid;
