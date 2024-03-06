import  { Router } from "express";

const router = Router();


//POST Method
router.route('/register').post((req, res) =>res.json('register route'));


//GET Method




export default router;