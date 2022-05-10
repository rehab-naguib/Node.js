const emitter = require('events');
const util = require('util');

function Child ()
{
this.name ="rehab";
}
util.inherits(Child,emitter);
const instance = new Child();
instance.on("sayHi",(name)=>{
    console.log("Hi " +name);
})
instance.emit("sayHi", instance.name);
