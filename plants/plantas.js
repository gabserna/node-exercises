const { EventEmitter } = require('events');
const readline = require('readline');

// Creamos un objeto emisor de eventos
const planta = new EventEmitter();
let tamaño = 0;

// Función para sembrar la planta
function sembrar() {
  tamaño += 1;
  console.log(`¡La planta ha sido sembrada! Tamaño: ${tamaño}`);
}

// Función para cosechar la planta
function cosechar() {
  tamaño = 0;
  console.log(`¡La planta ha sido cosechada! Tamaño: ${tamaño}`);
}

// Función para ataque de bichos
function ataqueDeZombies() {
  tamaño -= 1;
  console.log(`¡La planta ha sido atacada por bichos! Tamaño: ${tamaño}`);
}

// Escuchamos los eventos 'sembrar', 'cosechar' y 'ataqueDeZombies'
planta.on('sembrar', sembrar);
planta.on('cosechar', cosechar);
planta.on('ataqueDeZombies', ataqueDeZombies);

// Creamos una interfaz de entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para procesar la entrada del usuario
function procesarEntrada(data) {
  const comando = data.toString().trim();
  if (comando === 'sembrar') {
    planta.emit('sembrar');
  } else if (comando === 'cosechar') {
    planta.emit('cosechar');
  } else if (comando === 'ataqueDeZombies') {
    planta.emit('ataqueDeZombies');
  } else if (comando === 'salir') {
    console.log('¡Gracias por jugar!');
    rl.close();
    process.exit();
  } else {
    console.log('Comando no reconocido. Intente nuevamente.');
  }
}
rl.on('line', procesarEntrada);
console.log('¿Qué acción desea realizar? (sembrar, cosechar, ataqueDeZombies, salir):');