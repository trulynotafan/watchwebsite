document.addEventListener('DOMContentLoaded', function() {
    const salesTrack = document.querySelector('.sales-track');
    
    salesTrack.addEventListener('mouseenter', () => {
        salesTrack.style.animationPlayState = 'paused';
    });
    
    salesTrack.addEventListener('mouseleave', () => {
        salesTrack.style.animationPlayState = 'running';
    });
}); 