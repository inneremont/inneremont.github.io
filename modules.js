class SlidingBox {
  constructor(x, y, dw, dval) {
    this.boxVisible = false;
    this.boxX = width;
    this.targetX = dw;
    this.dval = dval;

    // Create the main button
    this.mainButton = createButton('ABOUT');
    this.mainButton.position(x, y);
    this.mainButton.style('font-family', 'FolioStd-Light');
    this.mainButton.style('font-size', '3vh');
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
    this.box.position(this.boxX, height / 2 - 100);

    // Create and style the headline, paragraph, and links
    this.headline = createElement('h2', 'HELLO VISITOR');
    this.headline.parent(this.box);
    this.headline.addClass('headline');

    this.paragraph = createElement('p', 'Welcome to my work-in-progress portfolio page. Gaze at the glitchy type animation I created with the p5js + hy5js library — or just go check out other stuff at my Instagram! More to come soon...');
    this.paragraph.parent(this.box);
    this.paragraph.addClass('paragraph');

    // Create and store links in an array
    this.links = [
      createA('https://www.instagram.com/jbasandberg', 'Instagram', '_blank'),
      createA('https://github.com/inneremont/inneremont.github.io', 'Github', '_blank'),
      createA('https://p5js.org/libraries', 'P5 Libraries', '_blank')
    ];
    this.links.forEach(link => {
      link.parent(this.box);
      link.addClass('link');
      link.style('color', 'red');
      link.style('font-family', 'FolioStd-Light');
      link.style('text-decoration', 'none');
      link.style('display', 'block');
      link.style('margin-top', '5px');
    });

    // Initial styles for box, headline, and paragraph
    this.box.style('background-color', 'rgba(255,255,255,0)');
    this.box.style('padding', '10px 15px');
    this.box.style('height', '60vh');
    this.box.style('color', 'rgb(255,255,255)');
    this.box.style('display', 'none');
    this.box.style('position', 'absolute');
    this.box.style('border-left', '1px solid white');

    this.headline.style('color', 'rgb(255,255,255)');
    this.headline.style('font-weight', '400');
    this.headline.style('font-family', 'FolioStd-Light');

    this.paragraph.style('color', 'rgb(255,255,255)');
    this.paragraph.style('font-family', 'FolioStd-Light');
    this.paragraph.style('padding-bottom', '70px');

    // Create the close button as a div
this.closeButton = createElement('div');
this.closeButton.parent(this.box);
this.closeButton.style('position', 'absolute');
this.closeButton.style('top', '10px');
this.closeButton.style('right', '10px');
this.closeButton.style('width', '30px');
this.closeButton.style('height', '30px');
this.closeButton.mousePressed(() => this.hideBox());

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
line2.style('transform', 'rotate(45deg)'); // Rotate the second line to make a cross

  }

  update() {
    if (this.boxVisible && this.boxX > this.targetX) {
      this.boxX -= 20;
      this.box.position(this.boxX, height * 0.1);
    }

    // Dynamically update the style based on `dval`
    if (this.dval < 400) { 
      this.box.style('width', '65vw');
      this.headline.style('font-size', '5vw');
      this.paragraph.style('font-size', '5vw');
      this.paragraph.style('line-height', '4vh');
      this.links.forEach(link => link.style('font-size', '5vw'));
    } else {
      this.box.style('width', '25vw');
      this.headline.style('font-size', '1.7vw');
      this.paragraph.style('font-size', '1.7vw');
      this.paragraph.style('line-height', '5vh');
      this.links.forEach(link => link.style('font-size', '1.7vw'));
    }
  }

  display() {
    this.box.style('display', this.boxVisible ? 'block' : 'none');
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
    this.box.style('display', 'none');
    this.boxX = width;
    this.box.position(this.boxX, height * 0.1);
    this.boxVisible = false;
  }
}
