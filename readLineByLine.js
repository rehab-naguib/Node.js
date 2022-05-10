const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input:fs.createReadStream("./greeting.txt"),
    // output: process.stdout,
    // terminal:false,
});
file.on("line",(line)=>{
    console.log(line+"\n");
})
