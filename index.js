var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/socket", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

http.listen(3000, () => {
  console.log("localhost:3000");
});
