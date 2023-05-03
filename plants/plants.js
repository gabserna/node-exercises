const EventEmitter = require('events');

class Plant extends EventEmitter{
    constructor() {
        super();
        this.size = 0;
        this.hasBeenPlanted = false;
        this.water();
        this.plantSeed();
        this.bugAttack();
        this.harvest();
        this.bugs = bugs;
    }
plantSeed(){
    this.once("true", this.hasBeenPlanted);
    this.on(1, this.size);
    console.log("seed has been planted")
}

water() {
    if(this.hasBeenPlanted, this.size) {
    console.log(`${this.size}: ${said}`);
    }
}
bugAttack(bugs){
    if(this.hasBeenPlanted, this.size) {
        console.log(`${this.size}:` - `${bugs}`);
    }
}

harvest() {
    this.removeAllListeners('plantSeed', "water", "bugAttack"); {
        console.log("great harvest...")
    };
}}

const myPlant = new Plant();

myPlant.emit("harvest");
myPlant.emit("bugAttack");
myPlant.emit("plantSeed");
myPlant.emit("water");
myPlant.emit("water");
myPlant.emit("water");
myPlant.emit("water");
myPlant.emit("water");
myPlant.error = new Error("error made!");
myPlant.emit("bugAttack");
myPlant.emit("harvest");
myPlant.emit("water");
myPlant.emit("water");
myPlant.emit("water");
myPlant.emit("water");
myPlant.emit("water");
myPlant.emit("water");
myPlant.emit("water");
myPlant.emit("bugAttack");
myPlant.emit("bugAttack");
myPlant.emit("bugAttack");