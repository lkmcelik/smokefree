// Counter animation
function animateCounters() {
    function animateCounter(id, start, end, duration) {
        let startTimestamp = null;
        const element = document.getElementById(id);
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Set up intersection observer to start animation when element is in view
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start animations when counters are visible
                animateCounter('counter1', 0, 50, 2000);
                animateCounter('counter2', 0, 1825, 2000);
                animateCounter('counter3', 0, 3650, 2000);
                // Unobserve after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe the counter container
    const counterContainer = document.querySelector('.counter-container');
    if (counterContainer) {
        observer.observe(counterContainer);
    }
}

// Run the animation when the page is loaded
window.addEventListener('load', animateCounters); 