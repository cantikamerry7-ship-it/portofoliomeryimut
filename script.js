script.js

/* =================================
   HAMBURGER MENU
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (!menuBtn || !navMenu) return;

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navMenu.classList.contains("show")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

});
/* =================================
   CLOSE MENU AFTER CLICK
================================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = menuBtn?.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

});


/* =================================
   TYPING EFFECT
================================= */

const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "RPL Student",
    "UI Designer",
    "Creative Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent =
            word.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 55 : 100
    );
}

typeEffect();


/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

revealElements.forEach(element => {
    observer.observe(element);
});


/* =================================
   SKILL PROGRESS ANIMATION
================================= */

const skillCards =
    document.querySelectorAll(".skill-card");

const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const progress =
                        entry.target.querySelector(".progress span");

                    if (progress) {

                        const width =
                            progress.getAttribute("style");

                        progress.style.width =
                            width.replace("width:", "")
                                 .replace(";", "")
                                 .trim();

                    }

                    skillObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.3
        }
    );

skillCards.forEach(card => {
    skillObserver.observe(card);
});


/* =================================
   BACK TO TOP
================================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =================================
   ACTIVE NAVIGATION
================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =================================
   MOUSE PARALLAX
================================= */

const particles =
    document.querySelectorAll(".background span");

document.addEventListener("mousemove", event => {

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);

    particles.forEach((particle, index) => {

        const speed = (index + 1) * 5;

        particle.style.marginLeft =
            `${x * speed}px`;

        particle.style.marginTop =
            `${y * speed}px`;

    });

});


/* =================================
   PROJECT CARD TILT
================================= */

const cards =
    document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 700) return;

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =================================
   PARALLAX PROFILE
================================= */

const profile =
    document.querySelector(".profile-wrapper");

window.addEventListener("scroll", () => {

    if (!profile) return;

    if (window.innerWidth > 700) {

        const scroll =
            window.scrollY;

        profile.style.transform =
            `translateY(${scroll * 0.08}px)`;

    }

});


/* =================================
   PAGE LOADED
================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
