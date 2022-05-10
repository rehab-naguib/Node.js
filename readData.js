const fs = require('fs');
//blocking cokde
// const data =fs.readFileSync("./data.json",{encoding:'utf8'});
// console.log(data);
// console.log("done");

fs.readFile("./data.json",'utf8',(err,data)=>{
    if(err){console.log(err)}
    console.log(data);
    
});

console.log("done");