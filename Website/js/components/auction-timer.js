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

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.daysEl.textContent = String(days).padStart(2, '0');
        this.hoursEl.textContent = String(hours).padStart(2, '0');
        this.minutesEl.textContent = String(minutes).padStart(2, '0');
        this.secondsEl.textContent = String(seconds).padStart(2, '0');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const timers = document.querySelectorAll('.auction-timer');
    const timerInstances = [];

    timers.forEach((timer, index) => {
        // Set different end times for each timer
        const endTime = new Date().getTime() + ((2 + index) * 24 * 60 * 60 * 1000);
        timerInstances.push(new AuctionTimer(timer, endTime));
    });

    // Update all timers every second
    setInterval(() => {
        timerInstances.forEach(timer => timer.update());
    }, 1000);
});