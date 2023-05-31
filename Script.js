window.addEventListener("scroll", function() {
    let animacion = document.getElementById("left-botton");
    let posicion = animacion.getBoundingClientRect().top;
    let alturaDePantalla = window.innerHeight;

    if(posicion < alturaDePantalla) {
        animacion.style.animation = "mover 1s  ease-out"
    } else {
        animacion.ClassLits.remove(animacion);
    }
});