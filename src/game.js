export class Game {
    constructor(ctx, gameWindow) {
        // should really be a stack of scenec
        this.scenes = {};
        this.currentScene = null;
        this.ctx = ctx;
        this.gameWindow = gameWindow;
    }

    // addScene
    addScene(scene) {
        this.scenes[scene.name] = scene;
    }
    // transitionScene
    transitionScenes(sceneName) {
        if (this.scenes) {
            if (this.currentScene) {
                this.scenes[this.currentScene].exit();
            }

            this.scenes[sceneName].enter();
            this.currentScene = sceneName;
        }
    }

    // update
    update() {
        if (!this.currentScene) return
        this.scenes[this.currentScene].update();
    }

    // render
    render() {
        if (!this.currentScene) return
        this.scenes[this.currentScene].render();
    }

    // handleInput
    handleInput(code){
        if (!this.currentScene) return
        this.scenes[this.currentScene].handleInput(code);
    }
}