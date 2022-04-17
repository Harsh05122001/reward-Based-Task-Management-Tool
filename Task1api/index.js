const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute  =require("./routes/user");
const cors  =require("cors");
dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("Db Connection Successful"))
    .catch((err)=>{
    console.log(err);
});
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.listen(5000,function(req,res){
    console.log("Backend is Running");
})