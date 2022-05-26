if (Boolean(sessionStorage.getItem("logined")) == true) {
    window.location.assign("./index.html");
}

let users = [];
if (sessionStorage.getItem("users")) {
    users = JSON.parse(sessionStorage.getItem("users"));
}

document.querySelector("button").addEventListener("click", event => {
    event.preventDefault();
    const formElement = document.querySelector("form");
    let mayLogin = false;

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (formElement.elements["userPassword"].value == user.password &&
            formElement.elements["userEmail"].value == user.email) {
            mayLogin = true;
            sessionStorage.setItem("userEmail", user.email);
            break;
        }
    }

    if (mayLogin) {
        sessionStorage.setItem("logined", true);
        location.assign("./index.html");
    }
    else {
        alert("Error, try again");
    }
});