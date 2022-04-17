const router = require("express").Router();
const User = require("../models/User");
router.put("/:id",  async (req, res) => {
    
  console.log("user.js"+JSON.stringify(req.body));
    req.body.Reward+=5;
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      console.log(updatedUser);
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.get("/",async (req,res)=>{
  try{
    const Users = await User.find().sort({Reward:-1});
    res.status(200).json(Users);
  }catch(err){
    res.status(500).json(err);
  }
  
});
  module.exports = router;