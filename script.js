/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.classList.add("menu-open");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
});


/* Close menu when a link is clicked */

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-intro, .philosophy-content, .card, .product-card, footer"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   NAVBAR SHOW / HIDE
========================================= */

const navbar = document.querySelector(".navbar");

let previousScroll = window.scrollY;

window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;


    /* Background after scrolling */

    if (currentScroll > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }


    /* Hide navbar when scrolling down */

    if (
        currentScroll > previousScroll &&
        currentScroll > 150
    ) {

        navbar.style.transform = "translateY(-100%)";

    } else {

        navbar.style.transform = "translateY(0)";

    }

    previousScroll = currentScroll;

});


/* =========================================
   HERO PARALLAX
========================================= */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition <= window.innerHeight) {

        heroImage.style.transform =
            `translateY(${scrollPosition * 0.12}px) scale(1.02)`;

    }

});


/* =========================================
   HORIZONTAL CARD DRAGGING
========================================= */

const cardContainers = document.querySelectorAll(".cards");

cardContainers.forEach((container) => {

    let isDragging = false;

    let startX = 0;

    let startingScroll = 0;


    container.addEventListener("mousedown", (event) => {

        isDragging = true;

        container.classList.add("dragging");

        startX = event.pageX;

        startingScroll = container.scrollLeft;

    });


    container.addEventListener("mouseleave", () => {

        isDragging = false;

        container.classList.remove("dragging");

    });


    container.addEventListener("mouseup", () => {

        isDragging = false;

        container.classList.remove("dragging");

    });


    container.addEventListener("mousemove", (event) => {

        if (!isDragging) {
            return;
        }

        event.preventDefault();

        const movement = event.pageX - startX;

        container.scrollLeft =
            startingScroll - movement * 1.4;

    });

});


/* =========================================
   SOUND BUTTON
========================================= */

const soundButton = document.getElementById("soundButton");

let soundEnabled = false;

soundButton.addEventListener("click", () => {

    soundEnabled = !soundEnabled;

    if (soundEnabled) {

        soundButton.innerHTML = `
            <span>■</span>
            SOUND OFF
        `;

    } else {

        soundButton.innerHTML = `
            <span>Ⅱ</span>
            SOUND ON
        `;

    }

});


/* =========================================
   IMAGE LOADING EFFECT
========================================= */

const images = document.querySelectorAll("img");

images.forEach((image) => {

    image.addEventListener("load", () => {

        image.classList.add("loaded");

    });

});


/* =========================================
   PREVENT DRAGGING IMAGES
========================================= */

images.forEach((image) => {

    image.addEventListener("dragstart", (event) => {

        event.preventDefault();

    });

});

/* =========================================
   TRUE WITHIN
   PHILOSOPHY PAGE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const philosophyHero =
        document.querySelector(".philosophy-hero");


    if (!philosophyHero) {
        return;
    }


    /*
        Subtle mouse movement on desktop.
        This creates a cinematic depth effect.
    */

    if (window.innerWidth > 1000) {

        const background =
            document.querySelector(
                ".philosophy-background"
            );


        philosophyHero.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    (event.clientX / window.innerWidth - 0.5) * 2;

                const y =
                    (event.clientY / window.innerHeight - 0.5) * 2;


                background.style.transform =
                    `scale(1.045)
                     translate(${x * 5}px, ${y * 5}px)`;

            }
        );


        philosophyHero.addEventListener(
            "mouseleave",
            () => {

                background.style.transform =
                    "scale(1.03)";

            }
        );

    }

});
