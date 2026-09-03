//React
import { useState } from 'react';

//Compoenents
import PokemonCard from '../src/components/pokemonCard/pokemonCard.jsx';

//SCSS
import './App.scss';

import Logo from './assets/img/orbital-logo.svg';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <img src={Logo} alt="Orbit Logo"></img>
                <h1>Orbital</h1>
                <h2>Frontend Challenge</h2>

                <PokemonCard />
            </div>
        </>
    );
}

export default App;
