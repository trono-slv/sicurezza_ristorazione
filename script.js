document.addEventListener('DOMContentLoaded', function() {
    const risks = document.querySelectorAll('.risk');
    risks.forEach(risk => {
        risk.addEventListener('click', function() {
            const details = this.querySelector('.details');
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });
    });
    // Smooth scroll for nav
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});