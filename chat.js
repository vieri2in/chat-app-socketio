const express = require("express");
const app = express();
const socketio = require("socket.io");
app.use(express.static(__dirname + "/public"));
const expressServer = app.listen(8000);
const io = socketio(expressServer);
io.on("connection", (socket) => {
  console.log(`${socket.id} has connected`);
  // socket.emit("messageFromServer", { data: "Welcome to socket server" });
  // socket.on("messageFromClient", (dataFromServer) => {
  //   console.log(dataFromServer);
  // });
  socket.on("newMessageFromServer", (dataFromServer) => {
    console.log(dataFromServer);
    io.emit("newMessageFromServer", {
      text: dataFromServer.text,
    });
  });
});
