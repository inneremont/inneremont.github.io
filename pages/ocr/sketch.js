var videoInput;
var ocr;
var ocr_result = "__";
var mode = 0; // 0 = camera / 1 = recognizing / 2 = displaying

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	 var constraints = {
   	 audio: false,
   	 video: {
      	facingMode: {
        exact: "environment"
     	 		}
    		}  
	};
	
	//print(parent.parent);

	// Webcam
	videoInput = createCapture(constraints);
	//videoInput.size(200, 200);
	//videoInput.position(0, 0);
	//videoInput.hide();

	
}

function draw() {
	
	background(255);

	
	videoInput.size(windowWidth/4, windowWidth/4);
	videoInput.position(0, 0);
	textAlign(CENTER);
	rectMode(CENTER);

	if (mode == 0) // camera
	{
		
	
		noStroke();
		//imageMode(CENTER);
		//image(videoInput, width/2, height/2, 640, 480);
		
		
		
		fill(255,0,0)
		ellipse(windowWidth/2,windowHeight*.7,width/2);
		fill(255)
		textSize(20);
		textWrap(WORD);
		text("Find the words scan with button for surprise!", windowWidth/2,windowHeight*.7)

	}
	else if (mode == 1) // recognizing
	{
		// flicker (working)
		noStroke();
		
		//rect(0, 0, width, height);
		fill(0)
		ellipse(windowWidth/2,windowHeight*.7,width/2);
		fill(255);
		textFont('Helvetica');
		textSize(20);
		text("checking", windowWidth/2,windowHeight*.7)
	}
	else if (mode == 2) // displaying
	{
		background(0);
		fill(255);

		textFont('Helvetica');
		textSize(50);
		text(ocr_result, windowWidth/2,windowHeight*.7);
	}
}

function mousePressed() {

	if (mode == 0) {
		mode = 1;
		Tesseract.recognize(videoInput.elt, {
				lang: "fin"
			})
			.then(function(result) {
				mode = 2;
				ocr_result = result.text.toLowerCase();
			
				// resulting text -> lower case -> search string?
			// change search words for your poster and URLs for your videos
				if (ocr_result.indexOf("2021") >= 0) {
					parent.location.assign("https://songwhip.com/wham/last-christmas");
				} else if (ocr_result.indexOf("scrooge") >= 0) {
					window.open("https://www.gutenberg.org/files/46/46-h/46-h.htm");
				} else if (ocr_result.indexOf("täti") >= 0) {
					window.open("https://www.youtube.com/watch?v=TqpXxWxNJgM");
				}
			});
	} else if (mode == 2) {
		{
			mode = 0;
		}
	}
}
