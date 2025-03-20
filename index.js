let lastScrollY = window.scrollY;
const navbar = document.querySelector(".nav-wrapper");
let scrollTimeout; // Timeout variable to track inactivity

window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout); // Reset idle timer on every scroll

    if (window.scrollY > lastScrollY) {
        navbar.style.opacity = "0.1"; // Hide when scrolling down
    } else {
        navbar.style.opacity = "1"; // Show when scrolling up
    }

    lastScrollY = window.scrollY; // Update last scroll position

    // Detect if user stops scrolling (idle)
    scrollTimeout = setTimeout(() => {
        navbar.style.opacity = "1"; // Restore navbar when idle
    }, 2000); // Adjust time (2000ms = 2 seconds)
});

// ✅ Only run carousel logic if "carousel-track" exists
const track = document.getElementById("carousel-track");

if (track) { // ✅ Check if the element exists before running the code
    const totalImages = 25;
    const imagePath = "https://ruchka77.github.io/noydesign/CarouselPictures/"; // Updated to GitHub Pages path

    // Dynamically insert images into the carousel
    for (let i = 1; i <= totalImages; i++) {
        let img = document.createElement("img");
        img.src = `${imagePath}example${i}.jpeg`; // Uses GitHub URL instead of local path
        img.alt = `Image ${i}`;
        img.classList.add("carousel-image");
        img.style.zIndex = i === 0 ? 1 : 0; // Ensure only the first image is visible initially
        track.appendChild(img);
    }

    // Select all images
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    function moveSlide(direction) {
        // Hide the current image
        images[currentIndex].style.opacity = "0";
        images[currentIndex].style.position = "absolute";
        images[currentIndex].style.zIndex = "0";

        // Update the index
        currentIndex += direction;

        // Loop to first/last image if needed
        if (currentIndex < 0) {
            currentIndex = totalImages - 1;
        } else if (currentIndex >= totalImages) {
            currentIndex = 0;
        }

        // Show the new image
        images[currentIndex].style.opacity = "1";
        images[currentIndex].style.position = "relative";
        images[currentIndex].style.zIndex = "1";
    }

    setInterval(() => moveSlide(1), 8000);
}
