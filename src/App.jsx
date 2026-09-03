//React
import { useState, useEffect } from 'react';

//Compoenents
import PokemonCard from '../src/components/pokemonCard/pokemonCard.jsx';
import PokemonGrid from '../src/components/pokemonGrid/pokemonGrid.jsx';

//API
import { getPokemon } from './services/pokeApi.js';

//SCSS
import './App.scss';

import Logo from './assets/img/orbital-logo.svg';

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function fetchPokemon() {
            const pokemon = await getPokemon('bulbasaur');

            console.log(pokemon);
        }

        fetchPokemon();
    }, []);

    return (
        <>
            <div>
                <img src={Logo} alt="Orbit Logo"></img>
                <h1>Orbital</h1>
                <h2>Frontend Challenge</h2>

                <PokemonGrid />
            </div>
        </>
    );
}

export default App;
