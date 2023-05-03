const http = require('http');

const server = http.createServer((req, res) => {
  // process incoming request
  if (req.method === 'GET' && req.url === '/tamaño') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ tamaño }));
  } else if (req.method === 'POST' && req.url === '/sembrar') {
    sembrar();
    res.end('Plant seeded');
  } else if (req.method === 'POST' && req.url === '/cosechar') {
    cosechar();
    res.end('Plant harvested');
  } else if (req.method === 'POST' && req.url === '/ataqueDeBichos') {
    ataqueDeBichos();
    res.end('Plant is under bugs attack');
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

// start server
server.listen(3000, () => {
  console.log('Servidor iniciado en puerto 3000');
});




/* 
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Leer archivo HTML
    fs.readFile('plantas.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Error interno del servidor');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // Si se solicita otro recurso, devolver un error 404
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('Recurso no encontrado');
  }
});

server.listen(3000, () => {
  console.log('Servidor web iniciado en http://localhost:3000/');
});
 */