class SalesCarousel {
    constructor() {
        this.container = document.querySelector('.sales-carousel');
        this.boxes = document.querySelectorAll('.live-sales-box');
        this.currentIndex = 0;
        this.totalBoxes = this.boxes.length;
        this.autoPlayInterval = null;
        
        this.setupCarousel();
        this.createDots();
        this.startAutoPlay();
    }

    setupCarousel() {
        // Clone first item and append to end for smooth loop
        const firstClone = this.boxes[0].cloneNode(true);
        this.container.appendChild(firstClone);
        
        // Set initial position
        this.updatePosition();
    }

    createDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';
        
        for (let i = 0; i < this.totalBoxes; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => this.goToSlide(i));
            dotsContainer.appendChild(dot);
        }
        
        this.container.parentElement.appendChild(dotsContainer);
        this.dots = dotsContainer.querySelectorAll('.dot');
    }

    updatePosition() {
        const offset = -this.currentIndex * (100 + 30/this.totalBoxes); // 100% + gap
        this.container.style.transform = `translateX(${offset}%)`;
    }

    updateDots() {
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex % this.totalBoxes);
        });
    }

    nextSlide() {
        this.currentIndex++;
        this.container.style.transition = 'transform 0.5s ease';
        this.updatePosition();
        this.updateDots();

        // Reset to first slide when reaching the clone
        if (this.currentIndex >= this.totalBoxes) {
            setTimeout(() => {
                this.container.style.transition = 'none';
                this.currentIndex = 0;
                this.updatePosition();
            }, 500);
        }
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.container.style.transition = 'transform 0.5s ease';
        this.updatePosition();
        this.updateDots();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000); // Change slide every 5 seconds
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SalesCarousel();
}); 