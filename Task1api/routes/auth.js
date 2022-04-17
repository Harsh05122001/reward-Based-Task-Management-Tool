const router = require("express").Router();
const User = require("../models/User");
router.post("/register",async (req,res)=>{
    const newUser = new User({
        
        username:  req.body.username,
        email: req.body.email,
        password: req.body.password,

    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        
        res.status(500).json(err);
    }

});
router.post("/login",async(req,res)=>{
    try{
        console.log(req.body);
    const user = await User.findOne({username:req.body.username});
    !user && res.status(500).json("Wrong Credentials!");
    if(user.password===req.body.password){
        
       
        res.status(200).json(user);
    }else{
        res.status(500).json("Wrong Credentials");
    }
}catch(err){
    console.log(err.message);
    res.status(500).json(err);
}
});
module.exports = router;
