/**
 * class
 * https://www.tslang.cn/docs/handbook/classes.html
 */

class Animal {
    private name: string;
    public length: number = 10;
    protected hobby: string = 'spa'
    readonly age: number = 100000;
    public constructor(theName: string) {
        this.name = theName
    }
    public move(distance: number) {
        console.log(`${this.name} 移动了 ${distance} 米`)
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name)
    }
    move(distance: number = 5) {
        console.log('蛇行中~')
        super.move(distance)
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name)
    }
    move(distance: number = 100) {
        console.log('奔腾中~')
        super.move(distance)
    }
}

let snake = new Snake('白素贞')
snake.move()

let horse = new Horse('白龙马')
horse.move(10000)