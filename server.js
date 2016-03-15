var express = require('express');
var app = express();

/* ==========================================================
serve the static index.html from the public folder
============================================================ */
app.use(express.static(__dirname + '/public'));
app.use("/node_modules", express.static('node_modules'));


app.listen(3000);
console.log("serveur tourne sur port 3000");
