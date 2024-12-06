document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showBox(index) {
        boxes.forEach((box, i) => {
            box.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    function nextBox() {
        currentIndex = (currentIndex + 1) % boxes.length;
        showBox(currentIndex);
    }

    // Initial display
    showBox(currentIndex);

    // Change box every 3 seconds
    setInterval(nextBox, 3000);

    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showBox(currentIndex);
        });
    });
}); 