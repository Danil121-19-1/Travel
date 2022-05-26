if (!sessionStorage.getItem("logined")) {
    location.assign("./index.html");
}

document.querySelector(".cart__image > img").setAttribute("src", sessionStorage.getItem("serviceImageSrc"));
document.querySelector(".cart__name").innerText = sessionStorage.getItem("serviceName");
document.querySelector(".cart__price").innerText = sessionStorage.getItem("servicePrice");