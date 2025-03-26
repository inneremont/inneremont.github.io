// Carousel Logic
let numImages = 5; // Number of real images
let currentIndex = 1; // Start at the first real slide
let slideWidth; // Width of a single slide
let interval = 3000; // Time (ms) between slides
let carousel = document.getElementById('carousel');

function initCarousel() {
  slideWidth = document.getElementById('carousel-container').clientWidth; // Use container width
  let numSlides = document.querySelectorAll('.slide').length;
  carousel.style.width = `${numSlides * 100}%`; // Adjust carousel width
  carousel.style.transition = 'none'; // Disable transition for initial positioning
  carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`; // Start at the first real slide
  setTimeout(() => {
    carousel.style.transition = 'transform 1s ease-in-out'; // Re-enable transition
  }, 50); // Short delay to re-enable transition
}

function slideToNext() {
  currentIndex++;
  carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

  // Handle seamless looping
  setTimeout(() => {
    if (currentIndex === numImages + 1) {
      currentIndex = 1;
      carousel.style.transition = 'none'; // Disable transition for instant snapping
      carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
      setTimeout(() => {
        carousel.style.transition = 'transform 1s ease-in-out'; // Re-enable transition
      }, 50); // Short delay to re-enable transition
    }
  }, 1000); // Wait for the transition to finish
}

// Wait for images to load before initializing the carousel
window.addEventListener('load', () => {
  Promise.all(Array.from(document.querySelectorAll('.slide')).map(slide => {
    return new Promise((resolve) => {
      if (slide.style.backgroundImage) {
        const img = new Image();
        img.src = slide.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
        img.onload = resolve;
      } else {
        resolve();
      }
    });
  })).then(() => {
    initCarousel(); // Initialize carousel after images are loaded
    setInterval(slideToNext, interval); // Start the carousel
  });
});

window.addEventListener('resize', initCarousel);

// Full-Screen Overlay Logic
const overlay = document.getElementById('overlay');

// Open the overlay when clicking anywhere on the document
document.addEventListener('click', () => {
  overlay.style.display = 'flex'; // Show the overlay
});

// Close the overlay when clicking anywhere on it
overlay.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click from bubbling up to the document
  overlay.style.display = 'none'; // Hide the overlay
});
