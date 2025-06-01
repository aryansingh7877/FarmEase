const mongoose=require("mongoose")

 const Database= async () => {
// mongodb://localhost:27017/loginData
   //  mongoose.connect("mongodb+srv://aryansingh787769:aryansingh7877@cluster0.uun7u.mongodb.net/loginData")
   mongoose.connect("mongodb://localhost:27017/farmease_data_base")
    .then(()=>console.log("database connected succesfully"))
    .catch((error)=>console.log(error));
    }
  
   
    Database();
    module.exports=mongoose;
    