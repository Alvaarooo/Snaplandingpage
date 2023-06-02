function listaDesplegable() {
    const btn = document.querySelectorAll('.activador');
    const ulInside = document.querySelectorAll('.ul-inside');

    btn.forEach(boton => 
        boton.addEventListener("click", console.log("hola")))
    }

 listaDesplegable()