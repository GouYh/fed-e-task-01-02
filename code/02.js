// 可达对象
function objGroup (obj1, obj2) {
    obj1.next = obj2
    obj2.prev = obj1
    return {
        o1: obj1,
        o2: obj2
    }
}

let obj = objGroup({name: 'obj1'}, {name: 'obj2'})

// 引用计数

const user1 = {age: 18}
const user1 = {age: 28}
const user1 = {age: 38}

const nameList = [user1.age, user2.age, user3.age]
function fn() {
    num1 = 1 // 全局能引用， fn执行完成后仍然有引用，不会被清除
    num2 = 2
}

function fn1() {
    const num1 = 1 // 全局不能引用，fn1执行完成后，全局不能访问，num1和num2被清除
    const num2 = 2
}
