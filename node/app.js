
const express = require("express");
const app = express();
const http = require('http');
const path = require('path');
  
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

server.listen(PORT, () => console.log(`Server started on port ${PORT} on http://${host}:${PORT}`));


