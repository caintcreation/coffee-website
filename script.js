const menuToggle = document.querySelector("#menu-toggle");
const menuLinks = document.querySelectorAll(".nav-link");

if (menuToggle) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", () => {
            menuToggle.checked = false;
        });
    });
}

const testimonialSlider = document.querySelector(".slider-container");

if (testimonialSlider) {
    new Swiper(testimonialSlider, {
        direction: "horizontal",
        loop: true,
        spaceBetween: 25,
        grabCursor: true,
        keyboard: {
            enabled: true
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
}