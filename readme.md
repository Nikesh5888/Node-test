To run this code, you will need to have Node.js installed 

 Install the axios library using
 "npm install axios"
 
 Then, you can save the code in a file like "index.js" and run it using 
 "node index.js"


Here is the plan for Pokémon's evolution chain:

Using the /pokemon/name endpoint, send a request to the Poke API to receive information about the provided Pokémon.

The URL for the Pokémon species can be extracted from the response.

Request information about a Pokémon species from the Poke API using the /pokemon-species/id or name endpoint.

From the answer, extract the URL for the evolution chain.

Request information about the evolution chain using the /evolution-chain/id endpoint by sending a request to the Poke API with the URL for the evolution chain.

Recursively traverse the evolution chain to obtain the names and variants of each Pokémon in the chain.

Construct the output object and return it in the necessary format.