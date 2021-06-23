import { notification } from "antd";

const showNotification = (type = "error", msg = "Something went wrong") => {
    notification[type]({
        message: msg,
        duration: 2
    });
};


const login_user = (data) => {
    if (data?.user_token) {
        let expires = "";
        let date = new Date();
        date.setTime(date.getTime() + (2 * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
        document.cookie = "u_token=" + data?.user_token + expires + "; path=/";
    }
};

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

const logout_user = () => {
    document.cookie = 'u_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

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

const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};


export { login_user, check_login, logout_user, showNotification, debouncer, scrollToTop };
