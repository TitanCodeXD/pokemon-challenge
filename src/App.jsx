//React
import { useState, useEffect } from 'react';

//Compoenents
import PokemonCard from '../src/components/pokemonCard/pokemonCard.jsx';
import PokemonGrid from '../src/components/pokemonGrid/pokemonGrid.jsx';

//API

//SCSS
import './App.scss';

import Logo from './assets/img/orbital-logo.svg';

function App() {
    return (
        <>
            <div>
                <div className="header">
                    <img src={Logo} alt="Orbit Logo"></img>
                    <h1>Orbital</h1>
                    <h2>Frontend Challenge</h2>
                </div>

                <div className="content">
                    <PokemonGrid />
                </div>
            </div>
        </>
    );
}

export default App;
