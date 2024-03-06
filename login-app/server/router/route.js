import  { Router } from "express";


//import all Controllers
import * as controller from "../controllers/appControllers.js"





const router = Router();


//POST Method
router.route('/register').post(controller.register);
//router.route('/registerMail').post();
router.route('/authenticate').post();
router.route('/login').post();


//GET Method
router.route('/user/:username').get ()
router.route('/generateOTP').get()
router.route('/verifyOTP').get()
router.route('/createResetSession').get()


//PUT Method
router.route('/updateuser').put();
router.route('/resetPassword').put();


export default router;