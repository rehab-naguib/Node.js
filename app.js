const Joi = require('joi');
const express = require('express');
const app = express();

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
    { id: 4, name: "course4" }
]
//use parser middleware
app.use(express.json())
//home page
app.get("/", (req, res) => {
    res.send("wlcome to courses store");
});
//get all courses
app.get("/courses", (req, res) => {
    res.send(courses);
})
//get single course
app.get("/courses/:id",(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id) )
    if(!course) return res.status(404).send("there is no course with this given id");
    res.send(course);
})
//edit course
app.put("/courses/:id",(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id) )
    if(!course) return res.status(404).send("there is no course with this given id");
    const {error} = validateInputCourse( req.body);
    if(error)
    return res.status(404).send(error.details[0].message);
    course.name = req.body.name
    res.send(course);
    
})
//add course 
app.post("/courses",(req,res)=>{
    const {error} = validateInputCourse(req.body)
    if(error) return res.send(error.details[0].message)
    const course ={
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course)
    res.send(course);
})
const port = process.env.PORT || 3000;

//delete course
app.delete("/courses/:id",(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) return res.status(404).send("course not found")
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
})


app.listen(port, () => console.log("listening"));
function validateInputCourse(course)
{
    const schema = Joi.object({
        name : Joi.string().min(3).required()
    })
    console.log(schema.validate({name:course.name}))
   return schema.validate({name:course.name});
}