let numImages = 3; // Number of images in the carousel
let currentIndex = 1; // Start at the first real slide (index 1 because of prepended clone)
let slideWidth; // Width of a single slide
let interval = 3000; // Time (ms) between slides
let xOffset = 0; // For smooth sliding animation
let images = []; // Array to hold image URLs
let carouselContainer, carousel;

function preload() {
  for (let i = 1; i <= numImages; i++) {

    
images.push(`https://res.cloudinary.com/dlhshzs37/image/upload/v1737463631/plakat01xx_xdrem5.png`);
    
images.push(`https://res.cloudinary.com/dlhshzs37/image/upload/v1737463631/plakat05xx_d3ngag.png`);
    
images.push(`https://res.cloudinary.com/dlhshzs37/image/upload/v1737463631/plakat04xx_olijaz.png`);    
    
  
  }
}

function setup() {
  noCanvas();

  // Create the main carousel container
  carouselContainer = createElement('div');
  carouselContainer.id('carousel-container');
  carouselContainer.style('position', 'absolute');
  carouselContainer.style('width', '100%');
  carouselContainer.style('height', '100%');
  carouselContainer.style('overflow', 'hidden');

  // Create the carousel div that holds all the slides
  carousel = createElement('div');
  carousel.id('carousel');
  carouselContainer.child(carousel);
  carousel.style('display', 'flex');
  carousel.style('position', 'absolute');
  carousel.style('width', `${(numImages + 2) * 100}%`); // Extra 2 slides for clones
  carousel.style('height', '100%');
  carousel.style('transition', 'transform 1s ease-in-out');

  // Add the last image as the first clone
  let lastClone = createElement('div');
  lastClone.style('flex', '1');
  lastClone.style('height', '100%');
  lastClone.style('background-size', 'cover');
  lastClone.style('background-position', 'center');
  lastClone.style('background-image', `url(${images[numImages - 1]})`); // Last image
  carousel.child(lastClone);

  // Add the actual slides
  for (let i = 0; i < numImages; i++) {
    let slide = createElement('div');
    slide.style('flex', '1');
    slide.style('height', '100%');
    slide.style('background-size', 'cover');
    slide.style('background-position', 'center');
    slide.style('background-image', `url(${images[i]})`); // Assign background image
    carousel.child(slide);
  }

  // Add the first image as the last clone
  let firstClone = createElement('div');
  firstClone.style('flex', '1');
  firstClone.style('height', '100%');
  firstClone.style('background-size', 'cover');
  firstClone.style('background-position', 'center');
  firstClone.style('background-image', `url(${images[0]})`); // First image
  carousel.child(firstClone);

  // Set the initial position to the first real slide
  slideWidth = windowWidth;
  xOffset = -slideWidth; // Move to the first real slide
  carousel.style('transform', `translateX(${xOffset}px)`);

  // Automatically slide every `interval` milliseconds
  setInterval(() => {
    slideToNext();
  }, interval);
}

function slideToNext() {
  currentIndex++;
  xOffset = -currentIndex * slideWidth; // Calculate the offset
  carousel.style('transform', `translateX(${xOffset}px)`); // Apply the sliding animation

  // Handle seamless looping
  setTimeout(() => {
    if (currentIndex === numImages + 1) {
      // If on the extra first slide, snap to the first real slide
      currentIndex = 1;
      xOffset = -slideWidth;
      carousel.style('transition', 'none'); // Disable transition for instant snapping
      carousel.style('transform', `translateX(${xOffset}px)`);
      setTimeout(() => {
        carousel.style('transition', 'transform 1s ease-in-out'); // Re-enable transition
      }, 50); // Add a small delay to allow re-enabling of transition
    }
  }, 1000); // Wait for the transition to finish
}

function windowResized() {
  slideWidth = windowWidth; // Update the width when the window is resized
  xOffset = -currentIndex * slideWidth; // Update the offset for the current index
  carousel.style('transform', `translateX(${xOffset}px)`); // Adjust the carousel's position
}


     
 
