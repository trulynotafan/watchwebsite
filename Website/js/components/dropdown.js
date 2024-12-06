document.addEventListener('DOMContentLoaded', function() {
    // Handle dropdowns
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Close all other dropdowns
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                    other.nextElementSibling?.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            this.classList.toggle('active');
            this.nextElementSibling?.classList.toggle('active');
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-toggle')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.nextElementSibling?.classList.remove('active');
            });
        }
    });
    
    // Handle dropdown item selection
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.closest('.top-bar-item');
            const toggleText = dropdown.querySelector('.dropdown-toggle span');
            const toggleImg = dropdown.querySelector('.dropdown-toggle img');
            const selectedText = this.querySelector('span').textContent;
            const selectedImg = this.querySelector('img');
            
            toggleText.textContent = selectedText;
            if (toggleImg && selectedImg) {
                toggleImg.src = selectedImg.src;
            }
            
            // Close dropdown
            dropdown.querySelector('.dropdown-toggle').classList.remove('active');
            dropdown.querySelector('.dropdown-menu').classList.remove('active');
        });
    });
}); 