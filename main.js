// Tab functionality for Academics page
function openLevel(levelId) {
    const levelContents = document.querySelectorAll('.level-content');
    levelContents.forEach(content => {
        content.classList.remove('active');
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(levelId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });
            
            if (!isActive) {
                answer.classList.add('active');
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            alert(`Thank you, ${name}! Your message has been sent. We'll contact you soon.`);
            contactForm.reset();
        });
    }
});