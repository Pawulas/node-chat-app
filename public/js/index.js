var socket = io();

socket.on('connect', function() {
  console.log(`connected to server`);

  socket.emit('createMessage', {
    from: 'misiaczek',
    text: "siema ludzie"
  })
});

socket.on('disconnect', function() {
  console.log(`Disconnected from server!`);
});

socket.on('newMessage', function(msg) {
  console.log('new email!', msg);
});