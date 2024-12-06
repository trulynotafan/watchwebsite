class CustomCursor {
    constructor() {
        this.cursorDot = document.createElement('div');
        this.cursorOutline = document.createElement('div');
        this.cursorDot.className = 'cursor-dot';
        this.cursorOutline.className = 'cursor-outline';
        document.body.appendChild(this.cursorDot);
        document.body.appendChild(this.cursorOutline);
        
        this.cursorPos = { x: 0, y: 0 };
        this.cursorOutlinePos = { x: 0, y: 0 };
        
        this.bindEvents();
        this.animate();
    }
    
    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            this.cursorPos.x = e.clientX;
            this.cursorPos.y = e.clientY;
        });
        
        // Hover effect on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .auction-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                this.cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                this.cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }
    
    animate() {
        const ease = 0.1;
        
        const updateOutlinePosition = () => {
            const dx = this.cursorPos.x - this.cursorOutlinePos.x;
            const dy = this.cursorPos.y - this.cursorOutlinePos.y;
            
            this.cursorOutlinePos.x += dx * ease;
            this.cursorOutlinePos.y += dy * ease;
            
            this.cursorDot.style.left = `${this.cursorPos.x}px`;
            this.cursorDot.style.top = `${this.cursorPos.y}px`;
            
            this.cursorOutline.style.left = `${this.cursorOutlinePos.x}px`;
            this.cursorOutline.style.top = `${this.cursorOutlinePos.y}px`;
            
            requestAnimationFrame(updateOutlinePosition);
        };
        
        updateOutlinePosition();
    }
}

new CustomCursor(); 