
// Funcionalidad logo de whatsapp, linkeado a mi número
function redirectToWhatsApp() {
    var phoneNumber = "543492638459"; 
    // Verificación
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // URL base para WhatsApp
    var baseUrl = "https://wa.me/" + phoneNumber;
    if (isMobile) {
        // Si es un dispositivo móvil, redirige a la aplicación de WhatsApp
        window.location.href = baseUrl;
    } else {
        // Si es una computadora, redirige a WhatsApp Web
        window.open(baseUrl, "_blank");
    }
}
// Funcionalidad carrucel en index, hidraulica y aire acondicionado
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel1');
    const clones = carousel.innerHTML;
    carousel.innerHTML += clones; 
    const numImages = carousel.children.length / 2; 
    const animationDuration = numImages * 10; 
    carousel.style.animationDuration = `${animationDuration}s`;
});