// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '0.8rem 0';
            header.style.background = 'rgba(26, 26, 46, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.padding = '1.2rem 0';
            header.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formElements = this.elements;
            const formData = {
                name: formElements[0].value,
                email: formElements[1].value,
                subject: formElements[2].value,
                message: formElements[3].value
            };
            
            // Mock form submission - in real implementation, this would send data to server
            console.log('Form submitted:', formData);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = '<p>Thank you for your message! I\'ll get back to you soon.</p>';
            
            // Replace form with success message
            contactForm.innerHTML = '';
            contactForm.appendChild(successMessage);
            
            // Style success message
            successMessage.style.textAlign = 'center';
            successMessage.style.padding = '2rem';
            successMessage.style.backgroundColor = '#f1f7fd';
            successMessage.style.borderRadius = '8px';
            successMessage.style.animation = 'fadeIn 0.5s ease forwards';
        });
    }
    
    // Intersection Observer for scroll animations
    const sections = document.querySelectorAll('.section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
    
    // Portfolio item hover effect enhancement
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.portfolio-overlay').style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.portfolio-overlay').style.opacity = '0';
        });
    });
    
    // Typing effect for hero text
    const heroText = document.querySelector('.hero p');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        
        let charIndex = 0;
        function typeText() {
            if (charIndex < text.length) {
                heroText.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 50);
            }
        }
        
        setTimeout(typeText, 1000);
    }
});
