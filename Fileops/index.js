//fs stands for filesystem.
var file = require('fs');
//if don't have file, it'll create and write content into file.
file.writeFileSync("./demo.txt","Pravallika");

file.appendFileSync("./demo.txt"," Medap");

var dataFromFile = file.readFileSync("./demo.txt").toString();
console.log(dataFromFile);

var dataFromFile = file.readFileSync("./demo.txt", {encoding:'utf-8'});//.toString();
console.log("Encoded = ",dataFromFile);

/*
We are reading & writing data to from files.
we are interacting with OS.
*/