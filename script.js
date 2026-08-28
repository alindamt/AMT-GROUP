const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

});


/* Reveal animation */

const revealElements = document.querySelectorAll(
    ".service-card, .project-card, .why-card, .about-content, .contact-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});
