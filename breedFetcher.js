const request = require('request');

const catRequest = function(catBreed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  //returns error response
    if (error) {
      return callback(`\nThere has been an error. Error information is as follows: \n ${error}`, null);
    
    }
    //tidies up our response by making it a JSON object and makes a nice variable for our cat's description
    const data = JSON.parse(body);
    const breed = data[0];
    //checks to see if there is a response to our query or if that breed isn't part of the directory
    if (breed === undefined) {
      return callback(`\nBreed not found, please try again with a different breed.\n`, null);
    } else {
    //if the query is successful, returns the breeds description
      return callback(null,`\n${breed.description}\n`);
    }
  });

};


module.exports = { catRequest };