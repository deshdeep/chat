//const express = require('express');
//const router = express.Router();
const api = require('express')();
const http = require('http').Server(api);
const io = require('socket.io')(http);


/* GET api listing. */
api.get('/', (req, res) => {
  //res.send('api works');
  res.sendFile(__dirname +'/dummy.html');
});

//Handle socket connection and messaging here
io.on('connection', function(socket){
  console.log('user connected');
  //io.emit('chat message', 'New connection');
  socket.broadcast.emit('chat message','New connection');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
}); 

http.listen(3001, function(){
  console.log('listening on *:3001');
});

module.exports = api;
