document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.banner-slide');
    const nextButton = document.querySelector('.banner-nav-right');
    const prevButton = document.querySelector('.banner-nav-left');
    let currentIndex = 0;

    // Show first slide
    slides[0].classList.add('active');

    const showSlide = (index) => {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        // Show current slide
        slides[index].classList.add('active');
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    // Event listeners
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Auto slide every 3 seconds
    setInterval(nextSlide, 3000);
}); 