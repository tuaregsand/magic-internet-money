document.addEventListener('DOMContentLoaded', function() {
    // Enhanced floating animations for books and money
    const floatingElements = document.querySelectorAll('.yellow-book, .purple-book, .money, .money-center');
    
    floatingElements.forEach(element => {
        // Add slight rotation animation for more magical feel
        const randomRotation = (Math.random() * 10) - 5; // Random rotation between -5 and 5 degrees
        element.style.animation = `${element.style.animation.split('float')[0]}float 4s ease-in-out infinite, rotate 6s ease-in-out infinite`;
        element.style.transformOrigin = 'center center';
        
        // Add glow pulse effect
        setInterval(() => {
            const currentFilter = element.style.filter;
            const enhancedFilter = currentFilter.includes('brightness(1.2)') 
                ? currentFilter.replace('brightness(1.2)', 'brightness(1.0)') 
                : currentFilter + ' brightness(1.2)';
            element.style.filter = enhancedFilter;
        }, 2000);
    });
    
    // Magic ball pulsing effect
    const magicBall = document.querySelector('.magic-ball');
    if (magicBall) {
        setInterval(() => {
            magicBall.style.transform = magicBall.style.transform === 'scale(1.2)' 
                ? 'scale(1.0)' 
                : 'scale(1.2)';
            magicBall.style.transition = 'transform 1s ease-in-out';
        }, 2000);
    }
    
    // Parallax scrolling effect
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Move hero elements based on scroll position
        if (document.querySelector('.hero-content')) {
            document.querySelector('.title-container').style.transform = `translateY(${scrollPosition * 0.3}px)`;
            
            const yellowBook = document.querySelector('.yellow-book');
            const purpleBook = document.querySelector('.purple-book');
            const books = document.querySelector('.books');
            const magicBall = document.querySelector('.magic-ball');
            
            if (yellowBook) yellowBook.style.transform = `translateY(${-20 + scrollPosition * 0.1}px)`;
            if (purpleBook) purpleBook.style.transform = `translateY(${-15 + scrollPosition * 0.15}px)`;
            if (books) books.style.transform = `translateY(${scrollPosition * 0.05}px)`;
            if (magicBall) magicBall.style.transform = `translateY(${-10 + scrollPosition * 0.2}px) scale(${1 + scrollPosition * 0.001})`;
        }
        
        // Fade in sections as they come into view
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    });
    
    // Add smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add sparkle effect to wizard elements
    const wizardElements = document.querySelectorAll('.wizard, .wizard-character, .spell-wizard, .cauldron, .magic-ball');
    
    wizardElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            addSparkles(this);
        });
    });
    
    function addSparkles(element) {
        const sparklesCount = 10;
        const elementRect = element.getBoundingClientRect();
        
        for (let i = 0; i < sparklesCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            // Random position around element
            sparkle.style.left = `${Math.random() * elementRect.width + elementRect.left}px`;
            sparkle.style.top = `${Math.random() * elementRect.height + elementRect.top}px`;
            
            // Random size
            const size = Math.random() * 10 + 5;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            
            // Random colors
            const colors = ['#ffcc00', '#ff00ff', '#00ffff', '#ffffff'];
            sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Add to body
            document.body.appendChild(sparkle);
            
            // Animate and remove
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }
    
    // Add hover effects to social icons
    const socialIcons = document.querySelectorAll('.social-icons img');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            addSparkles(this);
        });
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .sparkle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: sparkle 1s ease-in-out forwards;
        }
        
        @keyframes sparkle {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0); opacity: 0; }
        }
        
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(5deg); }
            100% { transform: rotate(0deg); }
        }
        
        .money-line {
            transition: transform 0.5s ease;
        }
        
        .money-line:hover {
            transform: rotate(-4deg) scale(1.02);
        }
        
        .section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});