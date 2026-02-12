class HitBox {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}


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

    update(keys) {
        if (keys.KeyA) this.x -= this.speed;
        if (keys.KeyD) this.x += this.speed;
        if (keys.KeyW) this.y -= this.speed;
        if (keys.KeyS) this.y += this.speed;
    }
}

export {
  Player
}