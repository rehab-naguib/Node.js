const fs = require("fs");
fs.rename("./test.txt","./info.txt",(err)=>console.log(err));