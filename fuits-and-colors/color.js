const myFruits = require('./Fruit')
console.log(myFruits.fruits);
const lime = new myFruits.fruit('Lime', 'Yellow')
myFruits.addFruit(lime)
console.log(myFruits.fruits);
