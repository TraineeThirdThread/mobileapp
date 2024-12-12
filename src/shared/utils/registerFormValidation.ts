import validator from 'validator';

export function registerFormValidation(login, email, pass, pass2) {
    let loginStatus = 'basic';
    let emailStatus = 'basic';
    let passStatus = 'basic';
    let loginCaption = '';
    let emailCaption = '';
    let passCaption = '';

    if (!(validator.isEmail(email) && (pass === pass2) && (pass.length >= 6) && (login.length >= 4))) {
        if (!(login.length >= 4)) {
            loginStatus = 'warning';
            loginCaption = 'Login should contain at least 4 symbols';
        } else {
            loginStatus = 'basic';
            loginCaption = '';
        }
        if (!validator.isEmail(email)) {
            emailStatus = 'warning';
            emailCaption = 'Email should be a valid';
        } else {
            emailStatus = 'basic';
            emailCaption = '';
        }
        if (!(pass === pass2)) {
            passStatus = 'warning';
            passCaption = 'Passwords must match';
        } else {
            if (!(pass.length >= 6)) {
                passStatus = 'warning';
                passCaption = 'Password should contain at least 6 symbols';
            } else {
                passStatus = 'basic';
                passCaption = '';
            }
        }
        return { loginStatus, emailStatus, passStatus, loginCaption, emailCaption, passCaption, formIsValid: false };
    } else {
        loginStatus = 'basic';
        loginCaption = '';
        emailStatus = 'basic';
        emailCaption = '';
        passStatus = 'basic';
        passCaption = '';
        return ({ loginStatus, emailStatus, passStatus, loginCaption, emailCaption, passCaption, formIsValid: true });
    }
}