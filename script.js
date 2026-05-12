// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Video Background Switcher
const videoElement = document.getElementById('main-video');
const sections = document.querySelectorAll('section[data-video]');

// Create Intersection Observer to detect which section is in view
const observerOptions = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const newVideoSrc = entry.target.getAttribute('data-video');
            
            // Only change video if it's different from current
            if (videoElement.src !== newVideoSrc) {
                // Fade out effect
                videoElement.style.opacity = '0';
                
                setTimeout(() => {
                    // Change video source
                    videoElement.src = newVideoSrc;
                    videoElement.load();
                    
                    // Play the new video
                    videoElement.play().catch(error => {
                        console.log('Autoplay prevented:', error);
                    });
                    
                    // Fade in effect
                    videoElement.style.opacity = '1';
                }, 500);
            }
        }
    });
}, observerOptions);

// Observe all sections with data-video attribute
sections.forEach(section => {
    observer.observe(section);
});

// Add parallax effect to content
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const content = document.querySelectorAll('.content, .container');
    
    content.forEach(el => {
        const speed = 0.3;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Button ripple effect
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.marginLeft = '-50px';
        ripple.style.marginTop = '-50px';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.padding = '1rem 5%';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.05)';
        navbar.style.padding = '1.5rem 5%';
    }
});

// Initialize first video
window.addEventListener('load', () => {
    const firstSection = document.querySelector('section[data-video]');
    if (firstSection) {
        const firstVideo = firstSection.getAttribute('data-video');
        videoElement.src = firstVideo;
        videoElement.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
    }
});
