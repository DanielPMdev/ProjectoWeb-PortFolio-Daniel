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

