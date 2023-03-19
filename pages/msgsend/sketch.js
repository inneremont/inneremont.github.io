/*
    p5.js MQTT Client example
    This example uses p5.js: https://p5js.org/
    and the Eclipse Paho MQTT client library: https://www.eclipse.org/paho/clients/js/
    to create an MQTT client that sends and receives MQTT messages.
    The client is set up for use on the shiftr.io test MQTT broker (https://shiftr.io/try),
    but has also been tested on https://test.mosquitto.org
    created 12 June 2020
    modified 20 Aug 2020
    by Tom Igoe
*/

// MQTT client details:
let broker = {

  hostname: 'inneremont.cloud.shiftr.io',
  port: 443
};
// MQTT client:
let client;
// client credentials:
let creds = {
  clientID: 'world wide web', // choose whatever name you want
  userName: 'inneremont', // unique Key from token
  password: '5JMspsRcKHQwrb9O' // unique Secret from token
}
// topic to subscribe to when you connect:
let topic = 'esp32/led';

// a pushbutton to send messages
let sendButton;
let localDiv;
let localSlider;
let remoteDiv;
let inpt;

let input2
let sendButton2;
let localDiv2;
let remoteDiv2;
let slider1;

// intensity of the circle in the middle
//let intensity = 255;

let leds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Helvetica')
  for (let i = 0; i < 4; i++) {
    leds[i] = new Led(i * 50 + 20, height / 2, color(120,120,120), false);
  }
  // Create an MQTT client:
  client = new Paho.MQTT.Client(broker.hostname, Number(broker.port), creds.clientID);
  // set callback handlers for the client:
  client.onConnectionLost = onConnectionLost;
//  client.onMessageArrived = onMessageArrived;
  // connect to the MQTT broker:
  client.connect({
    onSuccess: onConnect, // callback function for when you connect
    userName: creds.userName, // username
    password: creds.password, // password
    useSSL: true // use SSL
  });
  // create input
   inpt = createInput("");
   inpt.position(width*0.1, 0);
  // // create the send button:
   sendButton = createButton('send');
   sendButton.position(width*0.11, 0);
   sendButton.mousePressed(sendMqttMessage);
  // create a div for local messages:
  localDiv = createDiv('Messages goes here');
  localDiv.addClass('recieved');
  localDiv.position(width*0.1, 0);
  localDiv.style('text-align', 'center');
     
  // create a div for the response:
  remoteDiv = createDiv('¡Hola! soy LED Flanders');
  remoteDiv.addClass('masthead');
  remoteDiv.position(0, 0);
 
  remoteDiv.style('font-size', '20 px');
  remoteDiv.style('background-color', 'black');
  remoteDiv.style('color', 'rgb(255, 165, 0)');
 // remoteDiv.style('padding', '2vw 20vw  2vw 20vw');

  remoteDiv.style('font-weight', 'bold');
  remoteDiv.style('text-align', 'center');
  //test adjust slider value
 
  
  
  




  for (let i = 0; i < leds.length; i++) {
    if (i == 0) {
      leds[i].name = "ledR";
      leds[i].infill = color(255, 0, 0);
    }
    if (i == 1) {
      leds[i].name = "ledY";
      leds[i].infill = color(255, 255, 0);
    }
    if (i == 2) {
      leds[i].name = "ledG";
      leds[i].infill = color(0, 255, 0);
    }
    if (i == 3) {
      leds[i].name = "ledB";
      leds[i].infill = color(0, 125, 255);
    }
  }

}

function draw() {
  background(255, 165, 0);

  // draw a circle whose brightness changes then a message is received:
  // fill(intensity);
  // circle(width / 2, height / 2, width / 2);
  // subtract one from the brightness of the circle:
  // if (intensity > 0) {
  //   intensity--;
  // }
}

function mousePressed() {
  for (let i = 0; i < leds.length; i++) {
    if(leds[i].detect()){
      leds[i].sendMsg();
    }
  }
}

// called when the client connects
function onConnect() {
  localDiv.html('I’m on the internets!');
  client.subscribe(topic);
  console.log("connected")
}

// called when the client loses its connection
function onConnectionLost(response) {
  if (response.errorCode !== 0) {
    localDiv.html('onConnectionLost:' + response.errorMessage);
  }
}

/*
// called when a message arrives
function onMessageArrived(message) {
  remoteDiv.html('I got a message:' + message.payloadString);
  let incoming = split(trim(message.payloadString), "/");
  console.log(incoming);
  // let incomingNumber = parseInt(message.payloadString);
  // if (incomingNumber > 0) {
  //   intensity = incomingNumber;
  // }
}
*/
// called when you want to send a message:
function sendMqttMessage() {
  // if the client is connected to the MQTT broker:
  if (client.isConnected()) {
    // make a string with a random number form 0 to 15:
     let msg2 = inpt.value();
   // let msg2 = String(inpt.value());
    let msg = msg2;
    // start an MQTT message:
    message = new Paho.MQTT.Message(msg);
    // choose the destination topic:
    message.destinationName = topic;
    // send it:
    client.send(message);
    // print what you sent:
    localDiv.html('I sent: ' + message.payloadString);
  }
}

// called when you want to send a message:
function sendMqttMessage2() {
  // if the client is connected to the MQTT broker:
  if (client.isConnected()) {
    // make a string with a random number form 0 to 15:
    //let msg2 = String(round(random(15)));
    let msg2 = off;

    let msg = "esp32/led/" + msg2 + "\n";
    // start an MQTT message:
    message = new Paho.MQTT.Message(msg);
    // choose the destination topic:
    message.destinationName = topic;
    // send it:
    client.send(message);
    // print what you sent:
    localDiv2.html('I sent: ' + message.payloadString);
  }
}


class Led {
  constructor(x, y, fil, onOff) {
    this.x = x;
    this.y = y;
    this.infill = fil;
    this.size = 30;
    this.onOff = onOff;
    this.name = "";
  }
  sendMsg() {
    if (client.isConnected()) {
      // make a string with a random number form 0 to 15:
       let msg2 = "on";

      this.onOff = !this.onOff;
      let out;
      if (this.onOff) {
        out = String(255);
      } else {
        out = String(0);
     
      }
         

      let msg = this.name + "/" + out;
      // start an MQTT message:
      let message;
      message = new Paho.MQTT.Message(msg2);
      // choose the destination topic:
      message.destinationName = topic;
      // send it:
      client.send(message);
      // print what you sent:
      localDiv.html('I sent: ' + message.payloadString);
    }

  }

  show() {
    if (this.onOff) {
      fill(this.infill);
    } else {
      fill(120);
    }
    circle(this.x, this.y, this.size);
  }

  detect() {
    if (dist(mouseX, mouseY, this.x, this.y) <= this.size) {
      //fill(this.inFill);
      return true;

    } else {
    //  fill(120);
      return false;
    }
  }
}
