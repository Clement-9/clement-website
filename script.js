// Mobile Navigation and Scroll Behavior
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header');
    const nav = document.querySelector('.main-nav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    let lastScroll = 0;
    const scrollThreshold = 100;

    // Mobile menu toggle
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Scroll detection for header
    window.addEventListener('scroll', function() {
        if (window.innerWidth <= 768) {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                // At top of page
                header.classList.remove('hide');
                header.classList.add('show');
            } else if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
                // Scrolling down
                header.classList.add('hide');
                header.classList.remove('show');
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            } else if (currentScroll < lastScroll) {
                // Scrolling up
                header.classList.remove('hide');
                header.classList.add('show');
            }
            
            lastScroll = currentScroll;
        }
    });

    // Close menu when clicking links
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Tab functionality for Academics page
    function openLevel(levelId) {
        const levelContents = document.querySelectorAll('.level-content');
        const tabButtons = document.querySelectorAll('.tab-button');
        
        levelContents.forEach(content => content.classList.remove('active'));
        tabButtons.forEach(button => button.classList.remove('active'));
        
        document.getElementById(levelId).classList.add('active');
        event.currentTarget.classList.add('active');
    }

    // FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });
            
            if (!isActive) answer.classList.add('active');
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
            this.reset();
        });
    }
});