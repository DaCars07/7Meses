
document.addEventListener("DOMContentLoaded", () => {

    // ===================================
    // BOTÓN PARA ABRIR LOS RECUERDOS
    // ===================================

    const botonAlbum = document.getElementById("abrirAlbum");
    const seccionAlbum = document.getElementById("album");

    if (botonAlbum && seccionAlbum) {

        botonAlbum.addEventListener("click", () => {

            seccionAlbum.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    } else {
        console.error("No se encontró el botón o la sección del álbum.");
    }


    // ===================================
    // ANIMACIONES AL HACER SCROLL
    // ===================================

    const elementos = document.querySelectorAll(".revelar");

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver((entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observador.unobserve(entrada.target);

                }

            });

        }, {
            threshold: 0.05
        });

        elementos.forEach((elemento) => {
            observador.observe(elemento);
        });

    } else {

        elementos.forEach((elemento) => {
            elemento.classList.add("visible");
        });

    }

});
