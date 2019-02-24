
var border = 30;
var letterWidth = 250- border;
var height = 990 - border;
var centerx = 500;
var centery = 650; 
var color = "#EC9F05"
function draw(){

 

var canvas = document.getElementById('lou-logo');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

       
//border
ctx.moveTo(0,0);
ctx.lineTo(1000, 0);
ctx.lineWidth = 30;
ctx.strokeStyle = color;
ctx.stroke();

ctx.moveTo(1000,10);
ctx.lineTo(1000, 1250);
ctx.lineWidth = 30;
ctx.strokeStyle = color;
ctx.stroke();

ctx.moveTo(1000,1250);
ctx.lineTo(0, 1250);
ctx.lineWidth = 30;
ctx.strokeStyle = color;
ctx.stroke();

ctx.moveTo(0,1250);
ctx.lineTo(0, 0);
ctx.lineWidth = 30;
ctx.strokeStyle = color;
ctx.stroke();
        
//vertical L
        ctx.fillStyle = color;
        ctx.fillRect(border,border,letterWidth,height - 15);
//horizontal L
        ctx.fillStyle = color;
        ctx.fillRect(border,750,690,letterWidth);
// vertical M
        ctx.fillStyle = color;
        ctx.fillRect(750,200 + border + 8,letterWidth,height +15)

// Left M Diagonal
ctx.beginPath();
ctx.moveTo(letterWidth / 2 + 40, 220 + (letterWidth / 3));
ctx.lineTo(centerx+ (letterWidth / 2) - 75 , centery+ (letterWidth / 2));
// ctx.lineTo(790,10 + (letterWidth / 3));
ctx.lineWidth = letterWidth;
ctx.strokeStyle = color;
ctx.stroke();
//right M Diagonal
ctx.beginPath();
ctx.moveTo(741 + (letterWidth /2) - 28,242 + (letterWidth / 3))
ctx.lineTo(centerx +10 , centery );
ctx.lineWidth = letterWidth;
ctx.strokeStyle = color;
ctx.stroke();

//rect for Personal
ctx.lineWidth = 3;
ctx.clearRect(270, 13, 720, 210)
ctx.stroke();

//rect for trainer
ctx.lineWidth = 3;
ctx.clearRect,(13, 1020, 710, 210);
ctx.stroke();

//Personal
ctx.font = '250px palatino'
textBaseline = top;
ctx.fillText('PERSONAL', 280, 203, 700);
ctx.stroke();

//training

textBaseline = top;
ctx.fillText('TRAINING', 23, 1210, 690);
ctx.font = '250px Black Ops One';
ctx.stroke();



//vertical/horizontal clear line to add space between L&M
ctx.clearRect(240,10,30, 725)
ctx.stroke();

ctx.clearRect(240,725,500, 30)
ctx.stroke();





}
};

draw();