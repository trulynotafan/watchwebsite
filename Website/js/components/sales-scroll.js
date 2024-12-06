document.addEventListener('DOMContentLoaded', function() {
    class AuctionTimer {
        constructor(element, endTime) {
            this.element = element;
            this.endTime = endTime;
            this.daysEl = element.querySelector('[data-days]');
            this.hoursEl = element.querySelector('[data-hours]');
            this.minutesEl = element.querySelector('[data-minutes]');
            this.secondsEl = element.querySelector('[data-seconds]');
        }

        update() {
            const now = new Date().getTime();
            const distance = this.endTime - now;

            if (distance < 0) {
                // Reset timer when it reaches zero
                this.endTime = new Date().getTime() + (2 * 24 * 60 * 60 * 1000); // Add 2 days
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (this.daysEl) this.daysEl.textContent = String(days).padStart(2, '0');
            if (this.hoursEl) this.hoursEl.textContent = String(hours).padStart(2, '0');
            if (this.minutesEl) this.minutesEl.textContent = String(minutes).padStart(2, '0');
            if (this.secondsEl) this.secondsEl.textContent = String(seconds).padStart(2, '0');
        }
    }

    const container = document.querySelector('.sales-scroll');
    const items = document.querySelectorAll('.sales-item');
    const timerInstances = [];

    // Clone items for continuous loop
    items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
    });
    items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
    });

    // Initialize all timers (original and cloned)
    document.querySelectorAll('.auction-timer').forEach((timer, index) => {
        const baseTime = new Date().getTime();
        const endTime = baseTime + ((2 + (index % items.length)) * 24 * 60 * 60 * 1000);
        timerInstances.push(new AuctionTimer(timer, endTime));
    });

    // Update all timers every second
    setInterval(() => {
        timerInstances.forEach(timer => timer.update());
    }, 1000);

    // Existing scroll handling code
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.style.animationPlayState = 'paused';
        e.preventDefault();
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
        container.style.animationPlayState = 'running';
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
        container.style.animationPlayState = 'running';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
}); 