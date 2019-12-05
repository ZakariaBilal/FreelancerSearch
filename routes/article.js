const express = require("express");
const { check, validationResult } = require("express-validator");
const config = require("config");
const router = express.Router();

const Article = require("../models/Article");

//@route POST api/articles
//@desc Add an article
//@access Private
router.post(
  "/",
  [
    check("title", "Please add a title")
      .not()
      .isEmpty(),
    check("content", "Please add a content").not().isEmpty(),auth
  ],
  async (req, res) => {
    //checking errors from validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { content, title } = req.body;
    try {
        let article = new Article({
            content,title,freelancer:req.user.id
        });

        await article.save();
        res.json(article);
      }
     catch (err) {
      console.error(err);
      res.status(500).send("server errror");
    }
  }
);

//@route PUT api/articles:id
//@desc Update Article
//@access Private
router.put("/:id",auth,(req,res) => {

  // TODO a more secure way to change the password
    const {content , title} = req.body;

    const articleFields = {};

    if(content) articleFields.content=content;
    if(title) articleFields.title=title;

    try{
      //check if the user is found
      let article = await Article.findById(req.params.id);
      if(!article){
        if(req.user.type==='admin'){
          return res.status(404).json({msg:'Article not found'});
        }else{
          return res.status(401).json({msg:'Unauthorized'});
        }
      }
      
      //check if user is authorized to update this
      if(article.freelancer!==req.user.id){
        return res.status(401).json({msg:'Unauthorized'});
      }

      article = await Article.findByIdAndUpdate(req.params.id,{$set:userFields},{new:true});

      return res.json(article);


    }catch(err){
      console.error(err.message);
      res.status(500).send({"msg":"internal server error"});
    }
    
});

//@route Delete /api/articles:id
//@desc Delete an Article
//@access Private
router.delete('/:id',auth,async (req,res) => {
  try{
    //check if the user is found
    let article = await Article.findById(req.params.id);
    if(!article){
      if(req.user.type==='admin'){
        return res.status(404).json({msg:'Article not found'});
      }else{
        return res.status(401).json({msg:'Unauthorized'});
      }
    }
    
    //check if user is authorized to delete this
    if(article.freelancer!==req.user.id || req.user.type!=='admin'){
      return res.status(401).json({msg:'Unauthorized'});
    }

    await Article.findByIdAndRemove(req.params.id);
    res.json({msg:"Article removed"});

  }catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route GET /api/articles
//@desc Get all articles
//@access Public
router.get("/", async (req,res)=>{
  try{
      const articles = await Article.find({}).sort({date:-1});
      return res.json(articles);

  }catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route GET /api/articles/freelancer:id
//@desc Get all articles of a freelancer
//@access Public
router.get("/freelancer:id",async(req,res)=>{
    try{
        const articles = await Article.find({freelancer:req.params.id}).sort({date:-1});
        return res.json(articles);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route GET /api/articles:id
//@desc Get an article
//@access Public
router.get("/:id",async(req,res)=>{
    try{
        const article = await Article.findById(req.params.id);
        if(!article){
            return res.status(404).json({msg:"Article not found"});
        }else{
            return res.json(article);
        }
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;
