import { Game } from "./game.js";

const gameWindow = document.getElementById("game_window");
gameWindow.width = window.innerWidth - 50;
gameWindow.height = window.innerHeight - 50;

const ctx = gameWindow.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, gameWindow.width, gameWindow.height);

window.addEventListener("resize", () => {

    console.log("resized")
    gameWindow.width = window.innerWidth - 50;
    gameWindow.height = window.innerHeight - 50;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, gameWindow.width, gameWindow.height);
});

const keys = {
    KeyA: false,
    KeyD: false,
    KeyW: false,
    KeyS: false,
}

class HitBox {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

const game = new Game(ctx, gameWindow);

class Entity {
    constructor() {
        
    }
}

class Player extends Entity {
    constructor() {
        super()
        this.hitBox = new HitBox(50, 50);
        this.x = 50;
        this.y = 50;
        this.speed = 5;
    }

    update() {
        if (keys.KeyA) this.x -= this.speed;
        if (keys.KeyD) this.x += this.speed;
        if (keys.KeyW) this.y -= this.speed;
        if (keys.KeyS) this.y += this.speed;
    }
}

window.addEventListener("keydown", (e) => {
    if (keys.hasOwnProperty(e.code)) {
        keys[e.code] = true;
    }
})
window.addEventListener("keyup", (e) => {
    if (keys.hasOwnProperty(e.code)) {
        keys[e.code] = false;
    }
})

const player = new Player()


function gameLoop() {

    player.update()

    ctx.clearRect(0, 0, gameWindow.width, gameWindow.height);
    ctx.save()

    // render from scenes here
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, gameWindow.width, gameWindow.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.hitBox.width, player.hitBox.height);
    ctx.restore();


    requestAnimationFrame(gameLoop);
}

gameLoop();

