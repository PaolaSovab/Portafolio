let menuVisible = false;

//Funcion para ocultar o mostrar el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//Ocultar el menu al seleccionar una opcion

function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//detecta si se intenta utilizar correo en pc o telefono

const correos = document.querySelectorAll(".correo-link");

correos.forEach(correo => {
  correo.addEventListener("click", function (e) {
    e.preventDefault();
    const email = "paolasovab@gmail.com";
    const esMovil = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (esMovil) {
      window.location.href = `mailto:${email}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
    }
  });
});

