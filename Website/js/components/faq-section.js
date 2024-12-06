function toggleAnswer(element) {
    // Get the answer element that follows the clicked question
    const answer = element.nextElementSibling;
    
    // If the answer is currently hidden
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.padding = "0 20px";
        element.classList.remove('active');
    } else {
        // Close all other answers first
        const allAnswers = document.querySelectorAll('.faq-answer');
        const allQuestions = document.querySelectorAll('.faq-question');
        
        allAnswers.forEach(item => {
            item.style.maxHeight = null;
            item.style.padding = "0 20px";
        });
        
        allQuestions.forEach(item => {
            item.classList.remove('active');
        });
        
        // Open the clicked answer
        answer.style.maxHeight = answer.scrollHeight + 40 + "px"; // Add padding to height
        answer.style.padding = "20px";
        element.classList.add('active');
    }
} 