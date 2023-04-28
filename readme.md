# NodeTest
 
To run this code, you will need to have Node.js installed 

Install the axios library using
  "npm install axios"

Then, you can save the code in a file like "index.js" and run it using
   "node index.js"

Here is the plan for Pokémon's evolution chain:

Using the /pokemon/name endpoint, send a request to the Poke API to get information about the specified Pokémon.

Obtain the URL for the Pokémon species from the response.

Make a request to the Poke API with the URL for the Pokémon species to receive information about the species using the /pokemon-species/id or name endpoint.

Obtain the URL for the evolution chain from the response.

Make a request to the Poke API using the URL for the evolution chain to receive information about the evolution chain using the /evolution-chain/id endpoint.

Recursively traverse the evolution chain to obtain the name and variants of each Pokémon in the chain.

Create and return the output object in the desired format.





