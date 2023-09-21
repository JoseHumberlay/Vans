// Obtén la referencia a la imagen
const imagen = document.getElementById('imagen');

// Define la función para hacer la imagen más grande al pasar el cursor
function hacerMasGrande() {
    imagen.style.transform = 'scale(1.1)'; // Aumenta el tamaño al 110%
}

// Define la función para restaurar el tamaño original al quitar el cursor
function restaurarTamañoOriginal() {
    imagen.style.transform = 'scale(1)'; // Vuelve al tamaño original
}

// Agrega los eventos al pasar el cursor y quitarlo
imagen.addEventListener('mouseenter', hacerMasGrande);
imagen.addEventListener('mouseleave', restaurarTamañoOriginal);
