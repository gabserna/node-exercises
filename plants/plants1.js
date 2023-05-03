const { EventEmitter } = require('events');
const readline = require('readline');

// Creamos un objeto emisor de eventos
const planta = new EventEmitter();
let tamaño = 0;

// Función para water la planta
function water() {
  tamaño += 1;
  console.log(`plants has been watered! Tamaño: ${tamaño}`);
}

// Función para harvest la planta
function harvest() {
  tamaño = 0;
  console.log(`plants has been harvested! Tamaño: ${tamaño}`);
}

// Función para ataque de bichos
function bugAttack() {
  tamaño -= 1;
  console.log(`plants is under bugAttack! Tamaño: ${tamaño}`);
}

// Escuchamos los eventos 'water', 'harvest' y 'bugAttack'
planta.on('water', water);
planta.on('harvest', harvest);
planta.on('bugAttack', bugAttack);

// Creamos una interfaz de entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para procesar la entrada del usuario
function procesarEntrada(data) {
  const comando = data.toString().trim();
  if (comando === 'water') {
    planta.emit('water');
  } else if (comando === 'harvest') {
    planta.emit('harvest');
  } else if (comando === 'bugAttack') {
    planta.emit('bugAttack');
  } else if (comando === 'quit') {
    console.log('¡Gracias por jugar!');
    rl.close();
    process.exit();
  } else {
    console.log('Comando no reconocido. Intente nuevamente.');
  }
}
rl.on('line', procesarEntrada);
console.log('where do you want to start? (water, harvest, bugAttack, quit):');