const axios = require('axios');
const apiUrl = 'https://pokeapi.co/api/v2';
//The getEvolutionChain function accepts a pokemonName string as input and returns a promise that resolves to the JSON text of the output object. The function obtains information about the supplied Pokemon, utilises that information to retrieve the evolution chain, and then recursively follows the evolution chain to produce the result object.

async function getEvolutionChain(pokemonName) {

    // retrieve information about the given Pokémon

    const pokemonResponse = await axios.get(`${apiUrl}/pokemon/${pokemonName}`);
    const pokemonSpeciesUrl = pokemonResponse.data.species.url;

    // extract the URL for the Pokemon species
    const pokemonSpeciesResponse = await axios.get(pokemonSpeciesUrl);
    const evolutionChainUrl = pokemonSpeciesResponse.data.evolution_chain.url;

    // extract the URL for the evolution chain
    const evolutionChainResponse = await axios.get(evolutionChainUrl);
    const evolutionChain = evolutionChainResponse.data.chain;


    // traverseEvolutionChain recursive helper function accepts an evolution chain URL and a variants array as input. It obtains information about the current evolution, adds it to the variations array, and then proceeds to track each conceivable development from that point recursively.
    const traverseEvolutionChain = (evolutionDetails) => {
        const pokemonName = evolutionDetails.species.name;
        const variations = evolutionDetails.evolves_to.map(traverseEvolutionChain);
        return { name: pokemonName, variations };
    };

    const evolutionChainResult = traverseEvolutionChain(evolutionChain);

    // construct and return the output object
    const output = { name: evolutionChainResult.name, variations: evolutionChainResult.variations };
    return JSON.stringify(output);
}

//With any Pokemon name, we can use getEvolutionChain to get the full evolution chain for that Pokemon in the format specified in the prompt.
getEvolutionChain('butterfree')
    .then(console.log)
    .catch(console.error);
