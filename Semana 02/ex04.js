const fs = require("fs");

var data = fs.readFileSync("./arquivo.json", "utf-8");
var arquivo = JSON.parse(data);
var pessoas = arquivo.pessoas
console.log(pessoas);