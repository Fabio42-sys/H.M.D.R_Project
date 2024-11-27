// Anime.js animation for the internal scanning line
anime({
    targets: '.inner-line',
    rotate: [0, 360],
    easing: 'linear',
    duration: 2000,
    loop: true,
});



// Generate random dots during the scan
const dotsContainer = document.querySelector('.dots');

function createDot() {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    // Random position inside the circular area
    const radius = 150; // Metade da largura/altura do scanner-container
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * radius * 0.9;

    const x = Math.cos(angle) * distance + radius;
    const y = Math.sin(angle) * distance + radius;

    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    // Random size
    const size = Math.random() * 5 + 2; // between 2px and 7px
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.position = 'absolute';
    dot.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
    dot.style.borderRadius = '50%';

    dotsContainer.appendChild(dot);

    // Remove dot after a short time
    setTimeout(() => {
        dot.remove();
    }, 500);
}

// Generate dots periodically
setInterval(createDot, 100);