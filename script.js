
/* =========================================================
   SOMOS NEXO INTEGRAL
   JavaScript principal
   ========================================================= */


/* ---------- ANIMACIONES AL HACER SCROLL ---------- */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* ---------- AÑO AUTOMÁTICO EN EL FOOTER ---------- */

const yearElement = document.querySelector("#current-year");

if(yearElement){
    yearElement.textContent = new Date().getFullYear();
}


/* ---------- NAVEGACIÓN SUAVE ---------- */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function(event){

        const targetId = this.getAttribute("href");

        if(targetId === "#"){
            return;
        }

        const target = document.querySelector(targetId);

        if(target){

            event.preventDefault();

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});


/* ---------- SOMBRA EN EL HEADER AL HACER SCROLL ---------- */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if(!header){
        return;
    }

    if(window.scrollY > 20){

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,.18)";

    }else{

        header.style.boxShadow =
            "none";

    }

});
