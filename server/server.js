const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const port = process.env["PORT"] || 3000;
const publicPath = path.join(__dirname, '/../public');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log(`new user connected`);

  socket.on('disconnect', () => {
    console.log('Client disconnected!!');
  })

  socket.emit('newMessage', {
    from: 'adam',
    text: 'siema jestem Adam',
    created_at: new Date().toISOString()
  });

  socket.on('createMessage', (msg) => {
    console.log('createMessage: ', msg);
  });
});




// start server
server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
})
