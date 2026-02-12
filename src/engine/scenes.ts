import { consumeUICommands, showMenuAtom, menuStyleAtom, type UICommand } from "../store/store";
import { GameActions } from "./game";
import { Player } from "./player";
import { getDefaultStore } from "jotai";


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

    handleCommand(cmd: UICommand) {
        switch (cmd.type) {
            case "RESUME":
                return { action: GameActions.POP_SCENE, data: null };
            // case "OPEN_SETTINGS":
            //     engine.pushScene(new SettingsScene());
            //     break;
        }
    }

    update(keys) {
        // handle menu stuff later
        const commands = consumeUICommands();
        const actions = commands.map(cmd => this.handleCommand(cmd));
        return actions[0];
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

export class StartScene extends Scene {
    constructor() {
        super("start");
        const store = getDefaultStore();
        store.set(showMenuAtom, true)
        store.set(menuStyleAtom, "start")
    }

    handleCommand(cmd: UICommand) {
        switch (cmd.type) {
            case "START":
                return { action: GameActions.PUSH_SCENE, data: new GameScene("Level 1", new Player()) };

        }
    }
    update(keys) {
        // handle menu stuff later
        const commands = consumeUICommands();
        const actions = commands.map(cmd => this.handleCommand(cmd));
        return actions[0];
    }

    render(ctx, gameWindow) {
        ctx.fillStyle = "rgba(0,0,0,0.7)";
        ctx.fillRect(0, 0, gameWindow.width, gameWindow.height);

        ctx.fillStyle = "white";
        ctx.font = '30px Arial';

        ctx.fillText("Start", gameWindow.width / 2, 100);
    }

    handleInput(code) {
       
    }

    exit() {
        const store = getDefaultStore();

        store.set(showMenuAtom, false)
        store.set(menuStyleAtom, "")
    }
}

export {
    Scene,
    GameScene,
    PauseScene
}