import UserModel from '../model/User.model.js';  
import bcrypt from 'bcrypt';  // Import bcrypt for password hashing
import { jwt } from 'jsonwebtoken';

/** 
 * Middleware for verifying user existence
 */
export async function verifyUser(req, res, next){
    try {
        // Extract the username from the request based on the HTTP method
        const { username } = req.method == "GET" ? req.query : req.body;

        // Check if the user exists in the database
        let exist = await UserModel.findOne({ username });
        if(!exist) return res.status(404).send({ error : "Can't find User!"});  // If user not found, send 404 error
        next();  // Call the next middleware function

    } catch (error) {
        return res.status(404).send({ error: "Authentication Error"});  // If any error occurs, send authentication error
    }
}

/** 
 * Handle user registration
 * POST: http://localhost:8080/api/register 
 * @param : {
 *   "username" : "example123",
 *   "password" : "admin123",
 *   "email": "example@gmail.com",
 *   "firstName" : "bill",
 *   "lastName": "william",
 *   "mobile": 8009860560,
 *   "address" : "Apt. 556, Kulas Light, Gwenborough",
 *   "profile": ""
 * }
 */
export async function register(req,res){

    try {
        const { username, password, profile, email } = req.body;  // Destructure request body to extract user details        

        // Check if the username already exists in the database
        const existUsername = new Promise((resolve, reject) => {
            UserModel.findOne({ username }, function(err, user){
                if(err) reject(new Error(err))  // If error occurs, reject the promise with the error
                if(user) reject({ error : "Please use unique username"});  // If username already exists, reject the promise

                resolve();  // Resolve the promise if username is unique
            })
        });

        // Check if the email already exists in the database
        const existEmail = new Promise((resolve, reject) => {
            UserModel.findOne({ email }, function(err, email){
                if(err) reject(new Error(err))  // If error occurs, reject the promise with the error
                if(email) reject({ error : "Please use unique Email"});  // If email already exists, reject the promise

                resolve();  // Resolve the promise if email is unique
            })
        });

        // Use Promise.all to wait for both promises to complete
        Promise.all([existUsername, existEmail])
            .then(() => {
                if(password){
                    // Hash the password using bcrypt
                    bcrypt.hash(password, 10)
                        .then( hashedPassword => {
                            
                            const user = new UserModel({
                                username,
                                password: hashedPassword,
                                profile: profile || '',
                                email
                            });

                            // Save the user to the database
                            user.save()
                                .then(result => res.status(201).send({ msg: "User Register Successfully"}))  // Send success message if user is registered successfully
                                .catch(error => res.status(500).send({error}))  // Send error if unable to save user

                        }).catch(error => {
                            return res.status(500).send({
                                error : "Enable to hashed password"  // Send error if unable to hash password
                            })
                        })
                }
            }).catch(error => {
                return res.status(500).send({ error })  // Send error if any error occurs during user registration
            })


    } catch (error) {
        return res.status(500).send(error);  // Send internal server error if any exception occurs
    }
}


/** POST: http://localhost:8080/api/login 
 * @param: {
  "username" : "example123",
  "password" : "admin123"
}
*/
export async function login(req, res){
    
    const {username , password} =req.body

    try {

        UserModel.findOne({ username });
          .then(user =>{
            bcrypt.compare(password)
            .then(passwordCheck)=>{
                if(!passwordCheck)return res.status(400).send({error: "Don't have password" })
                  
                //create jwt token
                jwt.sign({
                    userId: user_id,
                })
                      
            }  


            .catch(error = >{
                return res.status(400).send({error: "password does not match" })
            })
          })
          .catch( error => {
            return res.status(404).send({error: "Username not found"});
          })
        
    } catch (error) {
        return res.status(500).send({ error });
        
    }
}



/** GET: http://localhost:8080/api/user/example123 */
export async function getUser(req, res){
    res.json('getUser route');
}



/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/

export async function updateUser(req, res){
    res.json('updateUser route');
}


/** GET: http://localhost:8080/api/generateOTP */
export async function generateOTP(req, res){
    res.json('generateOTP route');
}


/** GET: http://localhost:8080/api/verifyOTP */
export async function verifyOTP(req, res){
    res.json('verifyOTP route');
}




//Reset Password
// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword */
export async function  createResetSession(req, res){
    res.json(' createResetSession route');
}
