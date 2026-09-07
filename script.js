// Intersection Observer for scroll animations (fade-in)
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the 'fade-in' class
    const fadeElements = document.querySelectorAll('.fade-in');

    // Observer options
    const observerOptions = {
        root: null, // use viewport
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    // Create observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class to trigger CSS transition
                entry.target.classList.add('visible');
                // Stop observing once it's visible so the animation only happens once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe each element
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
