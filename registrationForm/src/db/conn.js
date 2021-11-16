//that is how we connected mongodb with express project
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/regiForm",{
    useNewUrlParser: true, //we dont want depriciation warning
    useUnifiedTopology:true,
     //it will return a promise
}).then (()=>{
    console.log(`connection successful`);
}).catch((e) => {
console.log(`no connection`);
})