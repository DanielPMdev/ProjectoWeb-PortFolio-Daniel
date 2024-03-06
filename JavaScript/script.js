var boton = document.querySelector('.Email button');
var correo = document.querySelector('.Email a');
var notificacion = document.querySelector('#copyNotification');

boton.addEventListener('click', function() {
    var tempElemento = document.createElement('textarea');
    tempElemento.value = correo.textContent;
    document.body.appendChild(tempElemento);
    tempElemento.select();
    document.execCommand('copy');
    document.body.removeChild(tempElemento);

    // Muestra la notificación
    notificacion.style.display = 'inline';
    setTimeout(function() {
        notificacion.style.display = 'none';
    }, 2000);
});


// Menu Desplegable
// Primero, selecciona el icono del menú y el menú móvil
var menuIcono = document.querySelector('.menu');
var menuMovil = document.querySelector('.movil--menu');
var enlacesMenu = document.querySelectorAll('.movilmenu--links a');

// Luego, agrega un evento de clic al icono del menú
menuIcono.addEventListener('click', function() {
    // Comprueba si el menú móvil ya se está mostrando
    if (menuMovil.style.display === 'block') {
        // Si es así, oculta el menú móvil y permite el desplazamiento del cuerpo
        menuMovil.style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        // Si no, muestra el menú móvil y oculta el desplazamiento del cuerpo
        menuMovil.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});

// También puedes agregar un evento de clic al botón de cierre del menú móvil
var botonCerrar = document.querySelector('.movilmenu--botoncerrar');
botonCerrar.addEventListener('click', function() {
    // Cuando se hace clic en el botón de cierre, cambia la propiedad display del menú móvil a none
    menuMovil.style.display = 'none';
    document.body.style.overflow = 'auto'
});

// Finalmente, agrega un evento de clic a cada enlace en el menú móvil
for (var i = 0; i < enlacesMenu.length; i++) {
    enlacesMenu[i].addEventListener('click', function() {
        // Cuando se hace clic en un enlace, oculta el menú móvil y permite el desplazamiento del cuerpo
        menuMovil.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}


function cambiarIdioma() {
    var selector = document.querySelector(".botonidioma");
    var idioma = selector.options[selector.selectedIndex].value;
    if (idioma == "es") {
        window.location.href = "index.html"
    } else if (idioma == "en") {
        window.location.href = "./Idiomas/ingles.html";
    }
}