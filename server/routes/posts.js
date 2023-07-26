import express from "express";

//importing Router module from expressJS
const router = express.Router();


//http://localhost:5000/posts
router.get('/',(req,res) =>{

      res.send('This Works');
})

export default router;