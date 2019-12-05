const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("jsonwebtoken");
const config = require("config");
const router = express.Router();

const Freelancer = require("../models/Freelancer");


//@route POST api/freelancers
//@desc Add freelancer details
//@access Private
router.post(
  "/",
  [
    check("user", "Please add a name")
      .not()
      .isEmpty(),
    check("email", "please include a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 characters minimum"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    //checking errors from validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ msg: "User with this email already exists" });
      } else {
        user = new User({
          name,
          email,
          password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();
        const payload = {
          user: {
            id: user.id
          }
        };
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("server errror");
    }
  }
);

//@route PUT api/clients:id
//@desc Update client
//@access Private
router.put("/:id",auth,(req,res) => {

  // TODO a more secure way to change the password
    const {name , email,password} = req.body;

    const userFields = {};

    if(name) userFields.name=name;
    if(email) userFields.email=email;
    if(password) userFields.password = password;

    try{
      //check if the user is found
      let user = await User.findById(req.params.id);
      if(!user){
        if(req.user.type==='admin'){
          return res.status(404).json({msg:'User not found'});
        }else{
          return res.status(401).json({msg:'Unauthorized'});
        }
      }
      
      //check if user is authorized to update this
      if(user._id!==req.user.id || req.user.type!=='admin'){
        return res.status(401).json({msg:'Unauthorized'});
      }

      user = await User.findByIdAndUpdate(req.params.id,{$set:userFields},{new:true});

      return res.json(user);


    }catch(err){
      console.error(err.message);
      res.status(500).send({"msg":"internal server error"});
    }
    
});

//@route Delete /api/clients:id
//@desc Delete a client
//@access Private
router.delete('/:id',auth,async (req,res) => {
  try{

    //check if the user is found
    let user = await User.findById(req.params.id);
    if(!user){
      if(req.user.type==='admin'){
        return res.status(404).json({msg:'User not found'});
      }else{
        return res.status(401).json({msg:'Unauthorized'});
      }
    }
    
    //check if user is authorized to delete this
    if(user._id!==req.user.id || req.user.type!=='admin'){
      return res.status(401).json({msg:'Unauthorized'});
    }

    await User.findByIdAndRemove(req.params.id);
    res.json({msg:"User removed"});

  }catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route GET /api/clients
//@desc Get all clients
//@access Private
router.get("/",auth, async (req,res)=>{
  try{
    if(res.user.type==="admin"){
      const users = await User.find({}).sort({name: -1});
      return res.json(users);
    }else{
      return res.status(401).json({msg:'Unauthorized'});
    }

  }catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

module.exports = router;
