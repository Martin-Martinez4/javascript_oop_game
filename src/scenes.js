class Scene{
    constructor(name){
        this.name
    }
    enter(){}
    exit(){}
    update(){}
    render(){}
    handleInput(code){}
}

class GameScene extends Scene {
    constructor(name, player) {
        super(name);
        this.player = player;
    }

    update() {
        this.player.update();
    }

    render(ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(
            this.player.x,
            this.player.y,
            this.player.hitBox.width,
            this.player.hitBox.height
        );
    }

    handleInput(code) {
        this.player.handleInput(code);
    }
}

class PauseScene extends Scene {
    constructor(){
        super("pause")
    }

    update(){
        // handle menu stuff later
    }

    render(ctx, gameWindow) {
        ctx.fillStyle = "rgba(0,0,0,0.7)";
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