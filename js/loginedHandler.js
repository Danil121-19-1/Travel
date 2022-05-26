if (Boolean(sessionStorage.getItem("logined")) == true) {
    document.querySelector("header").innerHTML = `
    <img src="./img/icon.png">
    <a href="./index.html">Головна</a>
    <a href="./services.html">Сервіси</a>
    <a href="./contact-us.html">Контакти</a>
    <div style='color: white; font-size: 1.7vw;'>${sessionStorage.getItem("userEmail")}</div>`;

    document.querySelector("footer").innerHTML = `
    <img src="./img/icon.png">
    <a href="./index.html">Головна</a>
    <a href="./services.html">Сервіси</a>
    <a href="./contact-us.html">Контакти</a>
    <div style='color: white; font-size: 1.7vw;'>${sessionStorage.getItem("userEmail")}</div>`;
}