const axios = require('axios');

const getPokemonData = async (pokemonName) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const pokemonData = response.data;
        console.log(`Name: ${pokemonData.name}`);
        console.log(`Height: ${pokemonData.height}`);
        console.log(`Weight: ${pokemonData.weight}`);
    } catch (error) {
        console.error(`Error fetching Pokemon data: ${error.message}`);
    }
};

getPokemonData('glaceon');
