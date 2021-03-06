const express = require ("express");
const app = express();
const path = require("path");
const hbs = require("hbs");//for partials
require("./db/conn");
const Register = require("./models/registers");
const port = process.env.PORT || 9003;
 const static_path = path.join(__dirname, "../public");
 const template_path = path.join(__dirname, "../templates/views");
 const partials_path = path.join(__dirname, "../templates/partials");
 app.use(express.json());//this code is for postman only but this is a form
 app.use(express.urlencoded({extended:false}));// that is how we can get the data from the form

app.use(express.static(static_path));//to check is there any index.html file or not
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req,res)=>{ // "/"-> index page by default
    res.render("index");
    //res.send("hello from meghna's kitchen new");
});
app.get("/register", (req,res)=>{
  res.render("register");
});

//create a new user in our database
app.post("/register", async(req,res)=>{
    try{
     const password = req.body.password;
     const cpassword = req.body.confirmpassword;
     if(password=== cpassword){
//to store the data in database
      const newUser = new Register ({
  firstname : req.body.firstname,
  lastname : req.body.lastname,
  email : req.body.email,
  gender: req.body.gender,
  phone: req.body.phone,
  age: req.body.age,
  password: req.body.password,// or we can write only password instead of req.body
  confirmpassword: req.body.confirmpassword
      })
     const registered = await newUser.save();//to save the data
     res.status(201).render("index");

     }else{
         res.send("password is wrong");
     }

       // console.log(req.body.firstname);
        //res.send(req.body.firstname);

    }catch(error){
        res.status(400).send(error);
    }
  });
app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
});