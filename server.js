var express = require("express");
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("its working")

var socket = require("socket.io");
var io = socket(server);

io.sockets.on("connection", newConnection);

function newConnection(socket) {
  console.log("new connection:" + socket.id);

  socket.on("mouse", mouseMsg);

  function mouseMsg(data) {
    // this sends message to other clients but not client that send message
    socket.broadcast.emit("mouse", data);
    // this sends message to all clients including client that sent message
    // io.sockets.emit("mouse", data);
    console.log(data);

  }

}
