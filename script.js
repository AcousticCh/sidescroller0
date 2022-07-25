let playerState = "idle";
const dropDown = document.getElementById("animations")
dropDown.addEventListener("change", function(e) {
    playerState = e.target.value;
});

const canvas = document.getElementById("canvas1"); //create canvas
const ctx = canvas.getContext("2d"); //create context (actual canvas 2d drawing page)

const CANVAS_WIDTH = canvas.width = 600; //get canvas width
const CANVAS_HEIGHT = canvas.height = 600; //get canvas height

const playerImg = new Image(); //create html image element
playerImg.src = "shadow_dog.png"; //create player spritesheet object
let spriteWidth = 575;
let spriteHeight = 523;

let gameFrame = 0;
const staggerFrames = 5;

// sprite image mapping
const spriteAnimations = [];
const animationStates = [
    {
        name: "idle",
        frames: 7,
    },
    {
        name: "jump",
        frames: 7,
    },
    {
        name: "fall",
        frames: 7,
    },
    {
        name: "run",
        frames: 9,
    },
    {
        name: "dizzy",
        frames: 11,
    },
    {
        name: "sit",
        frames: 5,
    },
    {
        name: "roll",
        frames: 7,
    },
    {
        name: "bite",
        frames: 7,
    },
    {
        name: "ko",
        frames: 12,
    },
    {
        name: "gethit",
        frames: 4,
    }
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for(let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //clear screen at start of animation
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImg, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight); // argumants: spritesheet, x, y pos, x, y size
    


    gameFrame++
    requestAnimationFrame(animate);
};

animate();