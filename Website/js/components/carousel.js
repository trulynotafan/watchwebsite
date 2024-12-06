class WatchCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dots = document.querySelectorAll('.carousel-dot');
        this.init();
    }

    init() {
        this.autoSlide();
        this.setupDotControls();
    }

    goToSlide(index) {
        this.currentSlide = index;
        const container = document.querySelector('.carousel-container');
        container.style.transform = `translateX(-${index * 100}%)`;
        this.updateDots();
    }

    updateDots() {
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    setupDotControls() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
    }

    autoSlide() {
        setInterval(() => {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.goToSlide(this.currentSlide);
        }, 5000);
    }
}

new WatchCarousel(); 