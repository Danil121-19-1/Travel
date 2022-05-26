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
    let mayAddUser = true;

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (formElement.elements["userName"].value == user.name ||
            formElement.elements["userEmail"].value == user.email) {
            mayAddUser = false;
            break;
        }
    }

    if (mayAddUser) {
        users.push({
            name: formElement.elements["userName"].value,
            email: formElement.elements["userEmail"].value,
            password: formElement.elements["userPassword"].value,
        });

        sessionStorage.setItem("userEmail", formElement.elements["userEmail"].value);
        sessionStorage.setItem("users", JSON.stringify(users));
        sessionStorage.setItem("logined", true);
        location.assign("./index.html");
    }
    else {
        alert("Such user already exist");
    }
});