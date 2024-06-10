
// Funcionalidad logo de whatsapp, linkeado a mi número
function redirectToWhatsApp() {
    var phoneNumber = "543492638459"; 
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var baseUrl = "https://wa.me/" + phoneNumber;
    if (isMobile) {
        window.location.href = baseUrl;
    } else {
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