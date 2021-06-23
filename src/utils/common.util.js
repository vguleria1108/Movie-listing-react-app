import { notification } from "antd";

//Funtion to show notifications, types: error,info,success
const showNotification = (type = "error", msg = "Something went wrong") => {
    notification[type]({
        message: msg,
        duration: 2
    });
};

//Funtion to login user by setting token in cookies
const login_user = (data) => {
    if (data?.user_token) {
        let expires = "";
        let date = new Date();
        //Seetting cookies for 2 days
        date.setTime(date.getTime() + (2 * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
        document.cookie = "u_token=" + data?.user_token + expires + "; path=/";
    }
};

//Funtion to check if user is logged in
const check_login = () => {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf("u_token") === 0) {
            return cookie.substring("u_token".length, cookie.length);
        }
    }
    return false;
};

//Funtion to logout user by clearing cookies
const logout_user = () => {
    document.cookie = 'u_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

//Funtion to debounce api calls to optimize search functionality
let debounceTimer
const debouncer = (func, delay) => {
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}

//Funtion to scroll to top of page
const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

//Funtion to validate username
const validateUserName = (val) => {
    const pattern = /^[a-z]+(?:_+[a-z]+)*$/gm;
    if (pattern.test(val)) {
        return true
    }
    return false
};



export { login_user, check_login, logout_user, showNotification, debouncer, scrollToTop, validateUserName };
