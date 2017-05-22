const express = require('express');
const PORT = process.env.PORT || 9000;
const path = require('path');
const app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(`${__dirname}/dist`));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', msg);
    console.log(msg)
  });

  socket.on('add user', function(msg){
    socket.broadcast.emit('login', 'new user');
    console.log('new user')
  });

  socket.on('disconnect', function () {
    // echo globally that this client has left
    socket.broadcast.emit('logout','user left');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
