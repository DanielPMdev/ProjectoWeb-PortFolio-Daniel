// Primero, selecciona el botón y el correo electrónico
var boton = document.querySelector('.Email button');
var correo = document.querySelector('.Email a');

// Luego, añade un evento de click al botón
boton.addEventListener('click', function() {
    // Crea un elemento textarea temporal
    var tempElemento = document.createElement('textarea');
    // Establece su valor al correo electrónico
    tempElemento.value = correo.textContent;
    // Añade el textarea al cuerpo del documento
    document.body.appendChild(tempElemento);
    // Selecciona el texto
    tempElemento.select();
    // Copia el texto al portapapeles
    document.execCommand('copy');
    // Elimina el textarea temporal
    document.body.removeChild(tempElemento);
    // Notifica al usuario que el correo electrónico ha sido copiado
    alert('Correo electrónico copiado al portapapeles: ' + correo.textContent);
});
