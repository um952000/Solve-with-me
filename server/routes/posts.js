import express from "express";

const router = express.Router();

//creating the routers
router.get('/', (req,res) => {
        res.send('This Works');
});

export default router;