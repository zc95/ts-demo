/**
 * 接口
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 *
 * ?代表可选属性
 */
function printLabel(labelObject) {
    console.log(labelObject.label);
    console.log(labelObject.count);
    console.log(labelObject.readonlyValue);
    // Cannot assign to 'readonlyValue' because it is a read-only property
    // labelObject.readonlyValue = 2
}
printLabel({ label: '张成', readonlyValue: true });
