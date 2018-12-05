# MindMap

**Hey guys**

This is the MindMap project
The goal is to create a way to make collaborative mindmaps online in a easy way

Currently (Initial Commit) I have the basic logic for the placing of the bubbles

Later a database is going to be added aswel as a way to input your own text and a lot of other stuff. Im also working on the circles, currently they get bigger when more letters are added but dont line up well wit the text. Furthermore the lines need to stop at the circles and not to the center of the text.


Please Leave some feedback :)

## Math Explanation
The math for this logic was quite difficult for me at first so here is a quick exlanation:

*Note*: A basic understanding of geometry is required to understand this and trigenometry for the intermediate section

###Beginer:
The problem we need to solve is figuiring out the X and Y coordinates for a bubble
The X and Y should take into  concidereation the location of the title in the middle and the distance it wants to be from this

At this point the code would look something like this

```javascript
const lineDistance = 100;
const bubbleX = titleX + lineDistance;
const bubbleY = titleY;
addBubble(bubble.text, bubbleX, bubbleY);
```

This would place a bubble 100 to the right of the title and works fine untill you add more than one bubble
For this reason we need to use the index number of the bubble so they dont overlap
*Note 1 gets added to index because arrays start at 0*

```javascript
const lineDistance = 100;
const bubbleX = titleX + lineDistance * (index + 1);
const bubbleY = titleY;
addBubble(bubble.text, bubbleX, bubbleY);
```
This would place each bubble 100 further to the right, so the first bubble would be 100 from the title and the second 200 and so on. 
This solves the problem of the bubbles overlapping but isnt very pretty or practical

This was the basics of what im doing, Ill now move on to some of the more advanced stuff

###Intermediate:
I wanted the bubbles to be sorted neatly and semetricaly, a lot of my struggles came from finding the initial way to do this. Mainly because I overlooked the simple solution for a long time. I went over ways like making a line of symetry and treating the bubbles as points in a polygon and using the function (n-2)180 to find the angle between them. It took a while to realize that the easiest solution is to calculate the innner angle.

As you can see at first I find the amount of bubbles there are
`const bubblesAmnt = bubbles.length;`
And use this to calculate the angle between the lines
`const angle = 360 / bubblesAmnt;`
Because each line has to be moved up one space this total angle for that bubble is calculated using the index
`const bubbleAngle = angle * (index + 1);`
*Note* the * Math.PI / 180 in the following lines is used to transfer from radian to degree
Knowing one angle and the length of the hypotenuse we can use trig to calcuate the x and y discplacement
```javascript
const height = Math.sin(bubbleAngle * Math.PI / 180) * textDistance;
const width = Math.cos(bubbleAngle * Math.PI / 180) * textDistance;
```
I hope this was clear but if not please ask questions!

