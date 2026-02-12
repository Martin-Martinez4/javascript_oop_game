import { Game } from "./game.js";
import {GameScene, StartScene} from "./scenes.js"
import { Player } from "./player.js";


export function startEngine(){
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
        KeyP: false,
    }
    window.addEventListener("keydown", (e) => {
        if (keys.hasOwnProperty(e.code)) {
            keys[e.code] = true;
        }
    
        console.log(keys)
    })
    window.addEventListener("keyup", (e) => {
        if (keys.hasOwnProperty(e.code)) {
            keys[e.code] = false;
        }
    })
    
    // const player = new Player();
    // const level1 = new GameScene("Level 1", player);
    const startScreen = new StartScene();
    const game = new Game(ctx, gameWindow);
    game.addScene(startScreen)
    
    
    
    function gameLoop() {
    
        game.update(keys)
    
        ctx.clearRect(0, 0, gameWindow.width, gameWindow.height);
        ctx.save()
        game.render(ctx, gameWindow);
        ctx.restore();
    
    
    
        requestAnimationFrame(gameLoop);
    }
    
    gameLoop();

}

