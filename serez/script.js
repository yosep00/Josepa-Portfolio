document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.add('scrolled');
            header.classList.remove('scrolled');
        }
    });

    // Fix header scroll logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Parallax effect for Hero Image and Banner
    const parallaxElements = document.querySelectorAll('.parallax-img .cover-img, .banner-img');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            parallaxElements.forEach(el => {
                // Subtle parallax for each image
                el.style.transform = `translateY(${scrolled * 0.15}px) scale(1.05)`;
            });
        });
    }
});

// --- Iframe Communication ---
window.addEventListener("load", () => {
    const myId = window.location.hash ? window.location.hash.substring(1) : null;
    
    const sendHeight = () => {
        if (myId && window.parent) {
            window.parent.postMessage({
                type: "resize-iframe",
                id: myId,
                height: document.documentElement.scrollHeight
            }, "*");
        }
    };
    
    sendHeight();
    setTimeout(sendHeight, 500);
    setTimeout(sendHeight, 1500);
    
    if (window.ResizeObserver) {
        new ResizeObserver(sendHeight).observe(document.body);
    }
});

// Parallax sync via parent message
window.addEventListener("message", (e) => {
    if (e.data.type === "parent-scroll") {
        let scrolled = e.data.scrollY - e.data.offsetTop;
        if (scrolled < 0) scrolled = 0;
        
        const parallaxElements = document.querySelectorAll(".parallax-img .cover-img, .banner-img");
        parallaxElements.forEach(el => {
            el.style.transform = `translateY(${scrolled * 0.15}px) scale(1.05)`;
        });
        
        document.querySelectorAll('.animate-on-scroll:not(.is-visible)').forEach(el => {
            const rect = el.getBoundingClientRect();
            const parentWindowHeight = window.parent.innerHeight || 800;
            if (rect.top < e.data.scrollY + parentWindowHeight * 0.85 - e.data.offsetTop) {
                el.classList.add('is-visible');
            }
        });
    }
});
