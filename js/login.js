function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


var boton= document.getElementById("regBtn")
boton.addEventListener("click",function(){
var inputs= document.getElementsByTagName("input")


    for (var i=0; i<inputs.length; i++){ 
        if (inputs[i].value.length<=0){
            showAlertError()
            return null
    }
    }



var contraseña= document.getElementById("password1")
if (contraseña.value.length<5){
    showAlertError()
    return null
}

var checkbox = document.getElementById("terminos")
console.log("checkbox", checkbox.checked)
if (checkbox.checked === false){
    showAlertError()
    return null
}

showAlertSuccess()

document.location.href = "index.html"






})