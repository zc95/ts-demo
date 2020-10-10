/**
 * class
 * https://www.tslang.cn/docs/handbook/classes.html
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.length = 10;
        this.hobby = 'spa';
        this.age = 100000;
        this.name = theName;
    }
    Animal.prototype.move = function (distance) {
        console.log(this.name + " \u79FB\u52A8\u4E86 " + distance + " \u7C73");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('蛇行中~');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 100; }
        console.log('奔腾中~');
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Animal));
var snake = new Snake('白素贞');
snake.move();
var horse = new Horse('白龙马');
horse.move(10000);
