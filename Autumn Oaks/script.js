let hamburgerSelector = document.querySelector("#hamburger");
let hamburgerMenuSelector = document.querySelector("#hamburger-menu");
let hamburgerMenuSlider = () => {
    
    if(hamburgerMenuSelector.style.transform === "") {
        hamburgerMenuSelector.style.transform = "translateX(0)";
    }

    else {
        hamburgerMenuSelector.style.transform = "";
    }
}
hamburgerSelector.addEventListener("click", hamburgerMenuSlider);
let headingsMainSelector = document.querySelector("#headings-main");
let wineMainSelector = document.querySelector("#images-main__wine");
let treesBackgroundSelector = document.querySelector(".trees-background img");
let headingIntersectionSelector = document.querySelector("#intersection h1");
let intersectionSelector = document.querySelector("#intersection");
let grapeSelector = document.querySelector("#intersection__grape");
let openerSelector = document.querySelector("#intersection__opener");
let intersectionButtonSelector = document.querySelector("#intersection__button");
let winesSectionSelector = document.querySelector("#wines-section");
let wineTileSelector = document.querySelectorAll(".wine-tile");
let mediaCheck = 1;

if (window.matchMedia("(min-width: 757px)").matches) {
    mediaCheck = 2;
}

if (window.matchMedia("(min-width: 979px)").matches) {
    mediaCheck = 3;
}
let easeInOutQuad = (t) => {
    return t<.5 ? 2*t*t : -1+(4-2*t)*t;
}
let scrollFunction = () => {
    headingsMainSelector.style.transform = `translateX(-${Math.pow(window.scrollY/35, 2)}px)`;
    wineMainSelector.style.transform = `translateX(${Math.pow(window.scrollY/35, 2)}px)`;
    treesBackgroundSelector.style.height = `calc(100% + ${Math.pow(window.scrollY/65, 2)}px)`;

    switch (mediaCheck) {
    case 1:
    case 2: 
    if (intersectionSelector.offsetTop > (window.scrollY + 50)) {
        headingIntersectionSelector.style.opacity = `${((window.scrollY + 50) / intersectionSelector.offsetTop) * 100}%`
        grapeSelector.style.opacity = `${((window.scrollY + 50) / intersectionSelector.offsetTop) * 10}%`;
        openerSelector.style.opacity = `${((window.scrollY + 50) / intersectionSelector.offsetTop) * 10}%`;
        headingIntersectionSelector.style.marginBottom = `${((window.scrollY + 50) / intersectionSelector.offsetTop) * 75 - 75}px`;
        intersectionButtonSelector.style.opacity = `${((window.scrollY + 50) / intersectionSelector.offsetTop) * 100}%`;
        grapeSelector.style.transform = `translateX(${easeInOutQuad(-((window.scrollY + 50) / intersectionSelector.offsetTop) * 30 + 30)/50}vw)`;
        openerSelector.style.transform = `translateX(${easeInOutQuad(((window.scrollY + 50) / intersectionSelector.offsetTop) * 30 - 30)/50}vw)`;
        for (let i = 0; i < wineTileSelector.length; i++) {
            switch (i) {
            case 0:
                wineTileSelector[i].style.transform = `perspective(650px) translateY(${-((window.scrollY + 50) / intersectionSelector.offsetTop) * 300}px) rotateY(15deg)`;
            break;
            case 1:
                wineTileSelector[i].style.transform = `perspective(650px) translateY(${-((window.scrollY + 50) / intersectionSelector.offsetTop) * 600}px) rotateY(15deg)`;
            break;
            case 2:
                wineTileSelector[i].style.transform = `perspective(650px) translateY(${-((window.scrollY + 50) / intersectionSelector.offsetTop) * 900}px) rotateY(15deg)`;
            break;
            }
        }
    }

    else {
        headingIntersectionSelector.style.opacity = "1";
        grapeSelector.style.opacity = "0.1";
        openerSelector.style.opacity = "0.1";
        intersectionButtonSelector.style.opacity = "1";
        grapeSelector.style.transform = "translateX(0)";
        openerSelector.style.transform = "translateX(0)";
    }

    for (let i = 0; i < wineTileSelector.length; i++) {
        if (winesSectionSelector.offsetTop > (window.scrollY + 50) && (window.scrollY + 50) > intersectionSelector.offsetTop) {
            switch (i) {
                case 0:
                    wineTileSelector[i].style.transform = `perspective(650px) translateY(-300px) rotateY(${-(((window.scrollY + 50) - intersectionSelector.offsetTop) / winesSectionSelector.offsetTop) * 45 + 15}deg)`;
                break;
                case 1:
                    wineTileSelector[i].style.transform = `perspective(650px) translateY(-600px) rotateY(${-(((window.scrollY + 50) - intersectionSelector.offsetTop) / winesSectionSelector.offsetTop) * 45 + 15}deg)`;
                break;
                case 2:
                    wineTileSelector[i].style.transform = `perspective(650px) translateY(-900px) rotateY(${-(((window.scrollY + 50) - intersectionSelector.offsetTop) / winesSectionSelector.offsetTop) * 45 + 15}deg)`;
                break;
            }
        }

        if (winesSectionSelector.offsetTop < (window.scrollY + 50) && (window.scrollY + 50) > intersectionSelector.offsetTop) {
            switch (i) {
                case 0:
                    wineTileSelector[i].style.transform = `perspective(650px) translateY(-300px) rotateY(0deg)`;
                break;
                case 1:
                    wineTileSelector[i].style.transform = `perspective(650px) translateY(-600px) rotateY(0deg)`;
                break;
                case 2:
                    wineTileSelector[i].style.transform = `perspective(650px) translateY(-900px) rotateY(0deg)`;
                break;
            }
        }
    }
    break;
    

    case 3:
    case 4:
    if (intersectionSelector.offsetTop > window.scrollY) {
        headingIntersectionSelector.style.opacity = `${(window.scrollY / intersectionSelector.offsetTop) * 100}%`
        grapeSelector.style.opacity = `${(window.scrollY / intersectionSelector.offsetTop) * 10}%`;
        openerSelector.style.opacity = `${(window.scrollY / intersectionSelector.offsetTop) * 10}%`;
        headingIntersectionSelector.style.marginBottom = `${(window.scrollY / intersectionSelector.offsetTop) * 75 - 75}px`;
        intersectionButtonSelector.style.opacity = `${(window.scrollY / intersectionSelector.offsetTop) * 100}%`
        grapeSelector.style.transform = `translateX(${easeInOutQuad(-(window.scrollY / intersectionSelector.offsetTop) * 30 + 30)/50}vw)`;
        openerSelector.style.transform = `translateX(${easeInOutQuad((window.scrollY / intersectionSelector.offsetTop) * 30 - 30)/50}vw)`;
        for (let i = 0; i < wineTileSelector.length; i++) {
            switch (i) {
            case 0:
                wineTileSelector[i].style.transform = `perspective(650px) translateY(${-(window.scrollY / intersectionSelector.offsetTop) * 300}px) rotateY(15deg)`;
            break;
            case 1:
                wineTileSelector[i].style.transform = `perspective(650px) translateY(${-(window.scrollY / intersectionSelector.offsetTop) * 600}px) rotateY(15deg)`;
            break;
            case 2:
                wineTileSelector[i].style.transform = `perspective(650px) translateY(${-(window.scrollY / intersectionSelector.offsetTop) * 900}px) rotateY(15deg)`;
            break;
            }
        }
    }

    else {
        headingIntersectionSelector.style.opacity = "1";
        grapeSelector.style.opacity = "0.1";
        openerSelector.style.opacity = "0.1";
        headingIntersectionSelector.style.marginBottom = "0";
        intersectionButtonSelector.style.opacity = "1";
        grapeSelector.style.transform = "translateX(0)";
        openerSelector.style.transform = "translateX(0)";
    }
    
    for (let i = 0; i < wineTileSelector.length; i++) {
        if (winesSectionSelector.offsetTop > window.scrollY && window.scrollY > intersectionSelector.offsetTop) {
            switch (i) {
                case 0:
                    wineTileSelector[i].style.transform = `perspective(650px) translateY(-300px) rotateY(${-((window.scrollY - intersectionSelector.offsetTop) / winesSectionSelector.offsetTop) * 58 + 15}deg)`;
                break;
                case 1:
                    wineTileSelector[i].style.transform = `perspective(650px) translateY(-600px) rotateY(${-((window.scrollY - intersectionSelector.offsetTop) / winesSectionSelector.offsetTop) * 58 + 15}deg)`;
                break;
                case 2:
                    wineTileSelector[i].style.transform = `perspective(650px) translateY(-900px) rotateY(${-((window.scrollY - intersectionSelector.offsetTop) / winesSectionSelector.offsetTop) * 58 + 15}deg)`;
                break;
            }
        }

        if (winesSectionSelector.offsetTop < window.scrollY && window.scrollY > intersectionSelector.offsetTop) {
            switch (i) {
                case 0:
                    wineTileSelector[i].style.transform = `perspective(650px) translateY(-300px) rotateY(0deg)`;
                break;
                case 1:
                    wineTileSelector[i].style.transform = `perspective(650px) translateY(-600px) rotateY(0deg)`;
                break;
                case 2:
                    wineTileSelector[i].style.transform = `perspective(650px) translateY(-900px) rotateY(0deg)`;
                break;
            }
        }
    }
    break;
    }
}
document.addEventListener("scroll", scrollFunction);