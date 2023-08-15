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

// Verifica si el usuario está autenticado
function isLoggedIn() {
    let dato = localStorage.getItem("email");
    if (dato){
        return true;
    }else{
        return false;
    }
}

// Cuando la página se cargue
window.addEventListener('load', function() {
    if (!isLoggedIn()) {
        // Redirige a la página de inicio de sesión si no está autenticado
        window.location.href = 'login.html'; // Cambia esto a la ruta correcta de tu página de inicio de sesión
    }
});