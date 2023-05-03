class fruit{
    constructor(name, color){
        this.name = name
        this.color = color
    }
}
const Banana = new fruit('Banana','Yellow')
const Pear = new fruit('Pear','Green')
const Blueberry = new fruit('blueberry','Blue')
const Apple = new fruit('Apple', 'Red')

let fruits =[Apple, Pear, Blueberry, Banana]
function addFruit(fruit){
    fruits.push(fruit)
}
function test(){
    console.log(`testing`);
}

module.exports = {fruit, fruits, addFruit}

