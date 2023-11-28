const getPokemonData = async (pokemonName) => {
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const pokemonData = await response.json();

        const pokemonNameResultElement = document.getElementById('pokemonNameResult');
        const pokemonHeightElement = document.getElementById('pokemonHeight');
        const pokemonWeightElement = document.getElementById('pokemonWeight');
        const pokemonImageElement = document.getElementById('pokemonImage');

        pokemonNameResultElement.textContent = `Nombre: ${pokemonData.name}`;
        pokemonHeightElement.textContent = `Altura: ${pokemonData.height}m`;
        pokemonWeightElement.textContent = `Peso: ${pokemonData.weight}kg`;

        const imageUrl = pokemonData.sprites.front_default;
        pokemonImageElement.src = imageUrl;
    } catch (error) {
        console.error(`Error fetching Pokemon data: ${error.message}`);
    }
};

const pokemonForm = document.getElementById('pokemonForm');
pokemonForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const pokemonNameInput = document.getElementById('pokemonName');
    const pokemonName = pokemonNameInput.value.toLowerCase(); 
    getPokemonData(pokemonName);
});
