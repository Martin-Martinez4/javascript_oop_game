import { GameActions } from "./game";

class Scene {
    constructor(name) {
        this.name
    }
    enter() { }
    exit() { }
    update(keys) { }
    render(ctx, gameWindow) { }
    handleInput(code) { }
}

class GameScene extends Scene {
    constructor(name, player) {
        super(name);
        this.player = player;
    }

    update(keys) {
        this.player.update(keys);
        if (keys.KeyP) {
            return { action: GameActions.PUSH_SCENE, data: new PauseScene() }
        }
    }

    render(ctx, gameWindow) {
        // render from scenes here
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, gameWindow.width, gameWindow.height);

        ctx.fillStyle = "blue";
        ctx.fillRect(this.player.x, this.player.y, this.player.hitBox.width, this.player.hitBox.height);
        
    }

    handleInput(code) {
        this.player.handleInput(code);

    }
}

class PauseScene extends Scene {
    constructor() {
        super("pause")
    }

    update(keys) {
        // handle menu stuff later
    }

    render(ctx, gameWindow) {
        ctx.fillStyle = "rgba(255,0,0,0.7)";
        ctx.fillRect(0, 0, gameWindow.width, gameWindow.height);

        ctx.fillStyle = "white";
        ctx.fillText("Paused", 200, 200);
    }

    handleInput(code) {
        if (code === "Escape") {
            // pause should dispatch action
            // { type: POP_SCENE }
            game.changeScene("game");
        }
    }
}

export {
    Scene,
    GameScene,
    PauseScene
}