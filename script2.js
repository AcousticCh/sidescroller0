const canvas = document.getElementById("canvas1"); //create canvas
const ctx = canvas.getContext("2d"); //create context (actual canvas 2d drawing page)

const CANVAS_WIDTH = canvas.width = 600; //get canvas width
const CANVAS_HEIGHT = canvas.height = 600; //get canvas height

const playerImg = new Image(); //create html image element
playerImg.src = "shadow_dog.png"; //create player spritesheet object
let spritewidth = 575;
let spriteHeight = 523;
let frameX = 0;
let frameY = 4;
let gameFrame = 0;
const staggerFrames = 5;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //clear screen at start of animation
    //ctx.fillRect(100, 50, 100, 100);
    ctx.drawImage(playerImg, frameX * spritewidth, frameY * spriteHeight, spritewidth, spriteHeight, 0, 0, spritewidth / 2, spriteHeight / 2); // argumants: spritesheet, x, y pos, x, y size
    if(gameFrame % staggerFrames == 0) {
        if(frameX < 9) frameX++;
        else frameX = 0;
    };

    gameFrame++
    requestAnimationFrame(animate);
};

animate();