function togglePopup() {
    const popup = document.getElementById('whatsappPopup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

window.addEventListener('click', function(event) {
    const popup = document.getElementById('whatsappPopup');
    const button = document.getElementById('whatsappBtn');
    if (!popup.contains(event.target) && event.target !== button) {
        popup.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel1');
    const clones = carousel.innerHTML;

    carousel.innerHTML += clones; 
    const numImages = carousel.children.length / 2; 
    const animationDuration = numImages * 10; 
    carousel.style.animationDuration = `${animationDuration}s`;
});