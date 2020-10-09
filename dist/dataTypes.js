/**
 * 布尔值
 * 布尔值是最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型
 */
var isDone = false;
/**
 * 数值
 * 使用 number 定义数值类型
 */
var age = 122;
/**
 * 字符串
 * 使用 string 定义字符串类型
 */
var userName = '张成';
/**
 * 数组
 * TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
 */
var list1 = [1, 3, 4];
var list2 = [1, 3, 4];
var list3 = ['哈哈', '33'];
var list4 = ['哈哈', '33'];
var list5 = [1, '滴滴'];
var list6 = [1, '滴滴'];
/**
 * 元组 Tuple
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
 */
var tupleType = ['hello', 10];
/**
 * 枚举
 * enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
/**
 * 空值
 * JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
 */
function alertName() {
    alert('my name is tom');
}
/**
 * Null 和 Undefined
 * 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型
 */
var unusable = undefined;
var u = undefined;
var n = null;
/**
 * 任意值
 * 任意值（Any）用来表示允许赋值为任意类型
 */
var notSure = 'seven';
notSure = 7;
notSure = false;
/**
 * Never
 * never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
 */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
create({ name: 1 });
// create(false)
/**
 * 类型断言
 * 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
 */
// 类型断言有两种形式。 其一是“尖括号”语法：
var someValue = 'this is a string';
var strLength = someValue.length;
// 另一个为as语法：
var someValue2 = "this is a string";
var strLength2 = someValue.length;
