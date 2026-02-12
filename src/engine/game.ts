export class GameActions {
    static PUSH_SCENE = "push_scene";
    static POP_SCENE = "pop_scene"
}
export class Game {
    constructor(ctx, gameWindow) {
        // should really be a stack of scenes
        this.scenes = [];
        this.ctx = ctx;
        this.gameWindow = gameWindow;
    }

    // addScene
    addScene(scene) {
        this.scenes.push(scene)
    }

    popScene(){
        this.peekScene().exit()
        this.scenes.pop()
    }

    peekScene() {
        return this.scenes[this.scenes.length - 1]
    }

    // transitionScene
    transitionScenes(newScene) {
        const exitScene = this.scenes.pop()
        exitScene.exit();

        this.addScene(newScene);
        this.scenes[this.scenes.length - 1].enter();
    }

    handleAction(actionObject) {
        console.log(actionObject.data)
        if (actionObject.action == GameActions.PUSH_SCENE) {
            this.transitionScenes(actionObject.data)
        }
        if (actionObject.action == GameActions.POP_SCENE) {
            this.popScene();
        }
    }

    // update
    update(keys) {
        const currentScene = this.peekScene();
        if (!currentScene) return
        const res = currentScene.update(keys);
        if (res) {
            this.handleAction(res);
        }
    }

    // render
    render(ctx, gameWindow) {
        const currentScene = this.peekScene();
        if (!currentScene) return

        currentScene.render(ctx, gameWindow);
    }

    // handleInput
    handleInput(code) {
        const currentScene = this.peekScene();
        if (!currentScene) return
        currentScene.handleInput(code);
    }
}