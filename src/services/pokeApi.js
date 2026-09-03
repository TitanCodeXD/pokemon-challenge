const API_URL = 'https://pokeapi.co/api/v2';

//Aqui fiz duas funççoes básicas para consumir a api, um para pegar um pokemon especifico, oputro para pegar todos aatraves de um mape de nomes
export async function getPokemon(name) {
    const response = await fetch(`${API_URL}/pokemon/${name}`);

    if (!response.ok) {
        throw new Error('Failed to fetch Pokémon');
    }

    return response.json();
}

export async function getPokemons(names) {
    const requests = names.map((name) => getPokemon(name));

    return Promise.all(requests);
}
