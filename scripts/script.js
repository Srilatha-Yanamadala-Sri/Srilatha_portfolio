function loadHTML(file, elementId, callback) {
    fetch(`sections/${file}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback(); // Run the callback after loading the content
        })
        .catch(error => console.error('Error loading the file:', error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML('nav.html', 'nav-container');
    loadHTML('profile.html', 'profile-container', initializeTypewriter); // Add callback here
    loadHTML('about.html', 'about-container');
    loadHTML('experience.html', 'experience-container');
    loadHTML('projects.html', 'projects-container');
    loadHTML('contact.html', 'contact-container');
    loadHTML('footer.html', 'footer-container');
});

let currentIndex = 0;

function showSlides(index) {
    const container = document.querySelector('.carousel-container');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const visibleCards = 3; // Number of cards visible at a time

    // Ensure index is within bounds
    if (index < 0) {
        currentIndex = totalCards - visibleCards;
    } else if (index > totalCards - visibleCards) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Update the transform property to show the correct cards
    container.style.transform = `translateX(-${currentIndex * 300}px)`;
}

function nextSlide() {
    showSlides(currentIndex + 1);
}

function prevSlide() {
    showSlides(currentIndex - 1);
}

// Initialize the carousel
showSlides(currentIndex);

// Typewriter Effect Initialization
function initializeTypewriter() {
    const typewriterElement = document.querySelector(".typewriter");
    if (!typewriterElement) {
        console.error("Typewriter element not found!");
        return;
    }

    const text = "FullStack Developer"; // Text to type out
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust typing speed (in milliseconds)
        } else {
            // Wait for 2 seconds, then reset and restart the typing effect
            setTimeout(() => {
                typewriterElement.textContent = ""; // Clear the text
                index = 0; // Reset the index
                typeWriter(); // Restart the typing effect
            }, 3000); // Wait for 3 seconds before restarting
        }
    }

    typeWriter();
}
