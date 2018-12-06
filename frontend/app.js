//  DOM
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

//  Global Variables
// Array of bubbles, will later be replaced by database
const bubbles = [];
//  Lenght of the line between text and bubble
const textDistance = 200;
//  Size of the canvas
const canvasSize = {x: 1000, y: 600};
//  Center of the canvas
const centerCords = {x: canvasSize.x/2, y: canvasSize.y/2};

/*
    Add and event listener to push a bubble object to the bubbles array
    For it makes the text whatever bubble number it is
*/
canvas.addEventListener('click', () => { 
    bubble = { text: bubbles.length +1 }; 
    bubbles.push(bubble);
    render();
});



/*
    Function to draw the text and cirlcle around it
    Circles are screwed right now I know still need to work on that
*/
const addBubble = function addBubble(text, x, y, line, bubbleAngle) {
    const titleRadius = 75;
    text = text.toString();

    ctx.textAlign="center";
    // Write text
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillText(text, x, y);

    // Calculate size of circle around text 
    // Needs to be changed to a better way as this is just using 30 as average
    const radius = ((text.length*30)/2);
    

    // Draw circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0,2*Math.PI);
    ctx.stroke();
    
    if (line) {
        //Calculate bubble ofset
        const height = Math.sin(bubbleAngle * Math.PI / 180) * titleRadius;
        const width = Math.cos(bubbleAngle * Math.PI / 180) * titleRadius;
        // Draw line from text to middle
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(centerCords.x + width, centerCords.y + height);
        ctx.stroke();
    }
    
}


//  The function that renders all the bubbles
const render = function render(){

    //  Clear the console, debugging purposes
    console.clear();

    //  Delete everything on screen
    ctx.clearRect(0,0, 1000, 1000)

    //  Draw the title bubble
    addBubble("Title", centerCords.x, centerCords.y, false);

    //  Loop through the bubbles array
    bubbles.forEach((bubble, index) => {

        /*  MATH EXPLANATION
            See the exlanation for math in readme.md
        */
        //  Get the amount of bubbles
        const bubblesAmnt = bubbles.length; 
        //  Get the inner angle
        const angle = 360 / bubblesAmnt;
        //  Get the angle for that specific angle
        const bubbleAngle = angle * (index + 1);
        //  Calculate the height and width from center
        const height = Math.sin(bubbleAngle * Math.PI / 180) * textDistance;
        const width = Math.cos(bubbleAngle * Math.PI / 180) * textDistance;
        //  Log for debugging
        console.log(`bubblesAmnt ${bubblesAmnt}, angle ${angle}, height ${height}, width ${width}, index ${index + 1}, bubbleAngle ${bubbleAngle}`);
        //  Set the right X and Y coordinates 
        const y = centerCords.y + height;
        const x = centerCords.x + width;

        //  Draw the bubble
        addBubble(bubble.text, x, y, true, bubbleAngle);
    });
}

// Initial render
render();




