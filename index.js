const { catRequest } = require('./breedFetcher');

//gets CLI argument and processes it.
const args = process.argv.slice(2);
const query = args[0];

catRequest(query, (error, desc) => {
  if (error) {
    console.log("Error fetch details: ", error);
  } else {
    console.log(desc);
  }
});