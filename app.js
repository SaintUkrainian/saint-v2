const welcomeLogo = document.querySelectorAll("#logo path");
const cont = document.querySelector(".container");
const navIcon = document.getElementById("nav-icon");
const navIconClose = document.getElementById("nav-icon-close");
const scrollDownText = document.querySelector("header h3");
const navBar = document.querySelector(".nav-bar-container");
const navBarItems = document.querySelectorAll(".nav-bar-item");
const sections = document.querySelectorAll("section");

const timeLine = new TimelineMax();

timeLine
    .fromTo(
        cont,
        1.5,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeInOut },
        "+=2.2"
    )
    .fromTo(
        sections,
        1.5,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeInOut },
        "-=1.5"
    )
    .fromTo(
        navBar,
        1.5,
        { x: "100%" },
        { x: "0%", ease: Power2.easeInOut },
        "-=1.2"
    )
    .fromTo(
        navBarItems,
        0.5,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, ease: Power2.easeInOut }
    )
    .fromTo(
        scrollDownText,
        1.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, ease: Power2.easeInOut }
    );

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos >= 969) {
        navBar.style.top = "-50px";
    } else {
        navBar.style.top = "0px";
    }
};
