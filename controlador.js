const formulario=document.getElementById("formulario");

const saludo=document.getElementById("saludo");

const api=new ApiModelo();

formulario.addEventListener("submit",function(e){

    e.preventDefault();

    let nombre=document.getElementById("nombre").value.trim();

    let apellido=document.getElementById("apellido").value.trim();

    let rol=document.getElementById("rol").value.trim();

    let cliente=new Cliente(nombre,apellido,rol);

    if(cliente.validarNombre()==false){

        alert("El nombre debe tener más de 3 caracteres.");

        return;

    }

    let respuesta=api.guardar(cliente);

    if(respuesta){

        saludo.innerHTML="Hola " + nombre + ", bienvenido.";

        alert("Cliente guardado correctamente.");

        formulario.reset();

    }else{

        alert("El cliente ya se encuentra registrado.");

    }

});