const API_URL = 'https://pokeapi.co/api/v2';

export async function getPokemon(name) {
    const response = await fetch(`${API_URL}/pokemon/${name}`);

    if (!response.ok) {
        throw new Error('Failed to fetch Pokémon');
    }

    return response.json();
}
