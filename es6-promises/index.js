const takeAChance = require('./take-a-chance');

const chance = takeAChance('Fred');
chance.then(noError => console.log(noError));
chance.catch(error => console.error(error.message));
