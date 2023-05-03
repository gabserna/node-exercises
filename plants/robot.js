const EventEmitter = require('events');

class Robot extends EventEmitter{
    constructor(name) {
        super();
        this.name = name;
        this.isActive = false;
        this.addListeners();
    }
addListeners(){
    this.once("activate", this.addListeners);
    this.on("speak", this.speakListener);
}

activateListeners() {
    this.isActive = true;
}
speakListener(){
    if(this.isActive)
    console.log(`${this.name}: ${said}`);
    }
}
const gabriel = new Robot("gabriel");
gabriel.emit("speak", "hello");
gabriel.emit("activate");
gabriel.emit("speak", "hello");