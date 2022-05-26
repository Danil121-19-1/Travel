let subscribedEmails = [];
if (sessionStorage.getItem("subscribedEmails")) {
    subscribedEmails = sessionStorage.getItem("subscribedEmails");
}

let users = [];
if (sessionStorage.getItem("users")) {
    users = JSON.parse(sessionStorage.getItem("users"));
}

subscribedEmails = users.map(element => {
    return element.email;
});

for (let j = 0; j < users.length; j++) {
    let permition = true;
    const user = users[j];

    for (let k = 0; k < subscribedEmails.length; k++) {
        const email = subscribedEmails[k];

        if (user.email == email) {
            permition = false;
            break;
        }
    }

    if (permition) {
        subscribedEmails.push(user.email);
    }
}

const formElement = document.querySelector("form");

formElement.elements["button"].addEventListener("click", event => {
    event.preventDefault();

    let maySubsribe = true;

    for (let i = 0; i < subscribedEmails.length; i++) {
        const email = subscribedEmails[i];
        if (email == formElement.elements["email"].value) {
            maySubsribe = false;
            break;
        }
    }

    if (maySubsribe) {
        subscribedEmails.push(formElement.elements["email"].value);
        sessionStorage.setItem("subscribedEmails", JSON.stringify(subscribedEmails));
    }
    else {
        alert("Such email already subscribed");
    }
});