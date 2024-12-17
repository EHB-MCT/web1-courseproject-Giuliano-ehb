window.onload = function () {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');

        if (window.pageYOffset > 100) {
            header.classList.add('is-scrolling');
        } else {
            header.classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav'); 

    if (menu_btn && mobile_menu) { 
        menu_btn.addEventListener('click', function () {
            menu_btn.classList.toggle('is-active');
            mobile_menu.classList.toggle('is-active');
        });
    }
};



document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("main > div");
    const navLinks = document.querySelectorAll("nav a");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main > div");
    const navLinks = document.querySelectorAll("nav a");
    const mobileLinks = document.querySelectorAll(".mobile-nav a");

    const setActiveLink = () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        [...navLinks, ...mobileLinks].forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", setActiveLink);

    // Klikken op hamburgermenu links
    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            document.querySelector(".mobile-nav").classList.remove("is-active");
            document.querySelector(".hamburger").classList.remove("is-active");
        });
    });
});
