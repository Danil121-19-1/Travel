document.addEventListener("click", event => {
    let target = event.target.closest(".service__button");
    if (target) {
        if (!sessionStorage.getItem("logined")) {
            alert("You have to be logined to buy service");
            return;
        }

        sessionStorage.setItem("serviceImageSrc", target.parentElement.querySelector(".service__image-container > img").getAttribute("src"));
        sessionStorage.setItem("serviceName", target.parentElement.querySelector(".service__header").innerText);
        sessionStorage.setItem("servicePrice", target.parentElement.querySelector(".service__price").innerText);
        location.assign("./buy-service.html");
    }
});