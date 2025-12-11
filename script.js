document.addEventListener('DOMContentLoaded', () => {
    // Simple smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    // Add fade-in class to elements you want to animate
    document.querySelectorAll('.post-card, .section-title').forEach((el) => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
