document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation and Scroll Behavior
    const header = document.querySelector('.site-header');
    const nav = document.querySelector('.main-nav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    let lastScroll = 0;
    const scrollThreshold = 100;

    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Scroll detection for header
    window.addEventListener('scroll', function() {
        if (window.innerWidth <= 768) {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.classList.remove('hide');
                header.classList.add('show');
            } else if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
                header.classList.add('hide');
                header.classList.remove('show');
                if (nav) nav.classList.remove('active');
                if (mobileToggle) mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            } else if (currentScroll < lastScroll) {
                header.classList.remove('hide');
                header.classList.add('show');
            }
            
            lastScroll = currentScroll;
        }
    });

    // Close menu when clicking links
    if (nav) {
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                if (mobileToggle) mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Academics Page Tab System
    function setupAcademicTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const levelContents = document.querySelectorAll('.level-content');

        if (tabButtons.length > 0 && levelContents.length > 0) {
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons and contents
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    levelContents.forEach(content => content.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Show corresponding content
                    const levelId = this.getAttribute('data-level');
                    document.getElementById(levelId).classList.add('active');
                });
            });
        }
    }
    setupAcademicTabs();

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