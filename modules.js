class SlidingBox {
  constructor(x, y) {
    this.boxVisible = false;
    this.boxX = width;
    this.targetX = width - 330; // Adjust to where you want it to stop

    // Create the main button
    this.mainButton = createButton('ABOUT');
    this.mainButton.position(x, y);
    this.mainButton.style('font-family', 'FolioStd-Light');
    this.mainButton.style('font-size', '20px');
    this.mainButton.style('border-left', '1px solid');
    this.mainButton.style('border-right', '1px solid');
    this.mainButton.style('border-bottom', '0px solid');
    this.mainButton.style('border-top', '0px solid');
    this.mainButton.style('background-color', 'rgba(255,255,255,0)');
    this.mainButton.style('color', 'rgb(255,255,255)');
    this.mainButton.style('padding', '10px 20px 8px 18px');
    this.mainButton.mousePressed(() => this.toggleBox());

    // Create the box container
    this.box = createElement('div');
    this.box.addClass('box');
    this.box.position(this.boxX, height / 2 - 100); // Start offscreen to the right

    // Create and style the headline, paragraph, and link
    let headline = createElement('h2', 'HELLO VISITOR');
    headline.parent(this.box);
    headline.addClass('headline');

    let paragraph = createElement('p', 'Welcome to my work-in-progress portfolio page. Gaze at the glitchy type animation I created with the p5js + hy5js library — or just go check out other stuff at my Instagram! More to come soon...');
    paragraph.parent(this.box);
    paragraph.addClass('paragraph');

    // First link
    let link1 = createA('https://www.instagram.com/jbasandberg', 'Instagram', '_blank');
    link1.parent(this.box);
    link1.addClass('link');
    
    // Second link
    let link2 = createA('https://github.com/inneremont/inneremont.github.io', 'Github', '_blank');
    link2.parent(this.box);
    link2.addClass('link');
    
    // Third link
    let link3 = createA('https://p5js.org/libraries', 'P5 Libraries', '_blank');
    link3.parent(this.box);
    link3.addClass('link');

    // Initial styles for box, headline, paragraph, and links
    this.box.style('background-color', 'rgba(255,255,255,0)');
    this.box.style('padding', '10px 15px');
    this.box.style('width', '300px');
    this.box.style('height', '440px'); // Adjust height to fit new links
    this.box.style('color', 'rgb(255,255,255)');
    this.box.style('display', 'none'); // Hide initially
    this.box.style('position', 'absolute');
    this.box.style('border-left', '1px solid white');

    headline.style('color', 'rgb(255,255,255)');
    headline.style('font-weight', '400');
    headline.style('font-family', 'FolioStd-Light');
    headline.style('font-size', '18px');

    paragraph.style('color', 'rgb(255,255,255)');
    paragraph.style('font-size', '18px');
    paragraph.style('font-family', 'FolioStd-Light');
    paragraph.style('line-height', '26px');
    paragraph.style('padding-bottom', '70px');

    // Apply same style to each link
    const links = [link1, link2, link3];
    links.forEach(link => {
      link.style('color', 'red');
      //link.style('padding-top', '50px');
      link.style('font-family', 'FolioStd-Light');
      link.style('text-decoration', 'none');
      link.style('display', 'block'); // Display each link in a block format to stack them
      link.style('margin-top', '5px'); // Add margin to space out links
    });

    // Create the close button as a div
    this.closeButton = createElement('div'); // Use a div for the close button
    this.closeButton.parent(this.box); // Set the parent to the box
    this.closeButton.style('position', 'absolute'); // Position it absolutely
    this.closeButton.style('top', '10px'); // Adjust vertical position
    this.closeButton.style('right', '10px'); // Adjust horizontal position
    this.closeButton.style('width', '30px'); // Width of the button
    this.closeButton.style('height', '30px'); // Height of the button
    this.closeButton.mousePressed(() => this.hideBox()); // Set the close button action

    // Create cross lines for the close button
    let line1 = createElement('div'); // First line of the cross
    line1.parent(this.closeButton);
    line1.style('position', 'absolute');
    line1.style('width', '1px'); // Make the line thin
    line1.style('height', '20px'); // Length of the line
    line1.style('background-color', 'white'); // Color of the line
    line1.style('top', '5px'); // Vertical position
    line1.style('left', '14px'); // Center it horizontally
    line1.style('transform', 'rotate(-45deg)');

    let line2 = createElement('div'); // Second line of the cross
    line2.parent(this.closeButton);
    line2.style('position', 'absolute');
    line2.style('width', '1px'); // Make the line thin
    line2.style('height', '20px'); // Length of the line
    line2.style('background-color', 'white'); // Color of the line
    line2.style('top', '5px'); // Vertical position
    line2.style('left', '14px'); // Center it horizontally
    line2.style('transform', 'rotate(45deg'); // Rotate the second line to make a cross
  }

  update() {
    // Animate the box sliding in from the right if slidingIn is true
    if (this.boxVisible && this.boxX > this.targetX) {
      this.boxX -= 20; // Adjust the speed of the slide
      this.box.position(this.boxX, height * 0.1);
    }
  }

  display() {
    if (this.boxVisible) {
      this.box.style('display', 'block');
    } else {
      this.box.style('display', 'none');
    }
  }

  toggleBox() {
    this.boxVisible = !this.boxVisible;
    if (this.boxVisible) {
      this.box.position(this.boxX, height * 0.1);
    } else {
      this.hideBox();
    }
  }

  hideBox() {
    // Hide the box and reset position
    this.box.style('display', 'none');
    this.boxX = width; // Reset off-screen position
    this.box.position(this.boxX, height * 0.1);
    this.boxVisible = false;
  }
}
