
const express = require("express");
const app = express();
const http = require('http');
const path = require('path');
const kill = require("kill-port");
  
app.get("/gettry", (req, res) => {
  res.send("Hello World!");
});
  
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

  
const PORT = 8080;
const host = "localhost";

app.use(express.static(__dirname + '../../reactdemo/build'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.once('error', function(err) {
  
  if (err.code === 'EADDRINUSE') {
    // port is currently in use
  kill(PORT, "tcp");
  console.log(`${PORT} is currently in use now it's kill,Please restart the server`)    
  }
});

server.once('listening', function(res) {
  // close the server if listening doesn't fail
// server.close();
});

server.listen(PORT, () => console.log(`Server started on port ${PORT} on http://${host}:${PORT}`));





