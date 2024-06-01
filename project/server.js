const express = require("express");
const { Server } = require("socket.io");
const path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(path.join(__dirname, "/public")));

io.on("connection", function (socket) {
  socket.on("sender-join", function (data) {
    socket.join(data.uid);
  });

  socket.on("receiver-join", function (data) {
    socket.join(data.uid);
    socket.to(data.sender_uid).emit("init", data.uid);
  });

  socket.on("file-meta", function (data) {
    socket.to(data.uid).emit("fs-meta", data.metadata);
  });

  socket.on("fs-start", function (data) {
    socket.to(data.uid).emit("fs-share", {});
  });

  socket.on("file-raw", function (data) {
    socket.to(data.uid).emit("fs-share", data.buffer);
  });
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000"); //change the port number if needed
});
