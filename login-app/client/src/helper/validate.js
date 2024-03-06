import toast from 'react-hot-toast';

// Validate password
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);
    return errors;
}

// Password verification function
function passwordVerify(errors = {}, values) {
    const specialChars = "!@#$%^&*()_+-={}[]|;:',.<>/?";

    if (!values.password) {
        errors.password = toast.error("Password Required...!");
    } else if (values.password.includes(" ")) {
        errors.password = toast.error("Invalid Password...!");
    } else if (values.password.length < 4) {
        errors.password = toast.error("Password must be more than 4 characters long");
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(values.password)) {
        errors.password = toast.error("Password must have special characters");
    }

    return errors;
}

// Validate username
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);
    return errors;
}

// Username verification function
function usernameVerify(errors = {}, values) {
    if (!values.username) {
        errors.username = toast.error('Username Required ...!');
    } else if (values.username.includes(" ")) {
        errors.username = toast.error('Invalid Username...!');
    }

    return errors;
}

// Validate Reset password
export async function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values);

    if (values.password !== values.confirm_pwd) {
        errors.exist = toast.error('Password does not match...!');
    }

    return errors;
}

// Validate register form
export async function registerValidate(values) {
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}

// Validate email
function emailVerify(errors = {}, values) {
    if (!values.email) {
        errors.email = toast.error("Email Required...!");
    } else if (values.email.includes(" ")) {
        errors.email = toast.error("Wrong Email...!");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = toast.error("Invalid email address...!");
    }

    return errors;
}


/** validate profile page */
export async function profileValidation(values){
    const errors = emailVerify({}, values);
    return errors;
}
