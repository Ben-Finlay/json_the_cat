const request = require('request');
//gets CLI argument and processes it.
const args = process.argv.slice(2);
const query = args[0];
//calls GET on the thecatapi and embeds our command line argument.
request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  //returns error response
  if (error) {
    console.log("\nThere has been an error. Error information is as follows: \n", error);
    return;
  }
  //tidies up our response by making it a JSON object
  const data = JSON.parse(body);
  //makes a nice variable for our cat's description
  const breed = data[0];
  //checks to see if there is a response to our query or if that breed isn't part of the directory
  if (breed === undefined) {
    return console.log("\nBreed not found, please try again with a different breed.\n");
  } else {
    //if the query is successful, returns the breeds description
    return console.log(`\n${breed.description}\n`);
  }     
});
