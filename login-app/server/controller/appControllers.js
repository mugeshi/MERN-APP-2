import UserModel from '../model/User.model.js'
import bcrypt from 'bcrypt'


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
const existUsername = new Promise((resolve, reject) => {
    // Look for a user with the given username in the database
    UserModel.findOne({ username }, function (err, user) {
        // If there's an error, reject the promise with an error
        if (err) reject(new Error(err));
        
        // If a user is found, reject the promise with an error message
        if (user) reject({ error: "Please use a unique username" });

        // If everything is okay, resolve the promise
        resolve();
    });
});

// Assuming existEmail is defined somewhere in your code
const existEmail = new Promise((resolve, reject) => {
    // Implement the logic to check if the email exists
    // ...

    resolve();  // Resolve for now, you need to implement the actual logic
});

// Use Promise.all to wait for both promises to complete
Promise.all([existUsername, existEmail])
    .then(() => {
        // If a password is provided, hash it
        if (password) {
            bcrypt.hash(password, 10)
                .then(hashedPassword => {
                    const user = new UserModel({
                        username,
                        password: hashedPassword,
                        profile: profile || '',
                        email,
                    });

                    // Save the user to the database
                    user.save()
                        .then(result => res.status(201).send({ msg: "User Registered Successfully" }))
                        .catch(error => res.status(500).send(error));
                })
                .catch(error => {
                    res.status(500).send({
                        error: "Unable to hash password",
                    });
                });
        }
    })
    .catch(error => {
        res.status(500).send({ error });
    });



/** POST: http://localhost:8080/api/login 
 * @param: {
  "username" : "example123",
  "password" : "admin123"
}
*/
export async function login(req, res){
    res.json('login route');
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




// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
export async function  createResetSession(req, res){
    res.json(' createResetSession route');
}


//Reset Password
// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword */
export async function  createResetSession(req, res){
    res.json(' createResetSession route');
}
