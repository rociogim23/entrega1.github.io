document.addEventListener("DOMContentLoaded", function(){
    
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    
});

// Verificamos si el usuario está autenticado
function isLoggedIn() {
    let dato = localStorage.getItem("email");
    if (dato){
        return true;
    }else{
        return false;
    }
}

// Cuando la página se cargue llamamos a la función 'isLoggedIn' y en caso de que no esté el email almacenado lo mandamos al login nuevamente.
window.addEventListener('load', function() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
});