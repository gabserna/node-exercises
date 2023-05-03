// Server Code .
const net = require('net');  
const server = net.createServer((socket) => {
   console.log('Welcome to Echo Server\r\n');
   socket.on('data', (chunk) => {
       socket.write(chunk);
   });
   socket.on('end', socket.end);
});

server.listen(3000, () => {
console