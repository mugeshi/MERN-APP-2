import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controller from '../controller/appControllers.js';

/** POST Methods */
router.route('/register').post(controller.register); // register user
router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route('/login').post(controller.verifyUser, controller.login); // login in app

/** GET Methods */
router.route('/user/:username').get(controller.getUser); // user with username
router.route('/generateOTP').get(controller.verifyUser, controller.generateOTP); // generate random OTP
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP); // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession); // reset all the variables

/** PUT Methods */
router.route('/updateuser').put(controller.Auth, controller.updateUser); // is used to update the user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // used to reset password



export default router;
