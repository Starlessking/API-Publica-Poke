
const getPokemonData = async (pokemonName) => {
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const pokemonData = await response.json();

        const pokemonNameElement = document.getElementById('pokemonName');
        const pokemonHeightElement = document.getElementById('pokemonHeight');
        const pokemonWeightElement = document.getElementById('pokemonWeight');
        const pokemonImageElement = document.getElementById('pokemonImage');

        pokemonNameElement.textContent = `Name: ${pokemonData.name}`;
        pokemonHeightElement.textContent = `Height: ${pokemonData.height}`;
        pokemonWeightElement.textContent = `Weight: ${pokemonData.weight}`;

        const imageUrl = pokemonData.sprites.front_default;
        pokemonImageElement.src = imageUrl;
    } catch (error) {
        console.error(`Error fetching Pokemon data: ${error.message}`);
    }
};

getPokemonData('jolteon');
