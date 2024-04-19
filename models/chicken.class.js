class Chicken extends MovableObject { //extends = erben
    y = 340;
    width = 80;
    height = 90;

    constructor() {
        super().loadImage('../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 300 + Math.random() * 500;
    }
}