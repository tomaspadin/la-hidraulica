// funcionalidad animación cards index
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.container1 .card1');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5
    });
    cards.forEach(card => {
        observer.observe(card);
    });
});