// 测试全局变量
var i, str = ''
for (i = 0; i < 1000; i++) {
    str += i
}

for (let i = 0; i < 1000; i++) {
    let str = ''
    str += i
}

// 测试原型对象添加方法
var fn1 = function() {
    this.foo = function() {
        console.log(111)
    }
}

let f1 = new fn1()

var fn2 = function() {
    fn2.prototype.foo = function() {
        console.log(222)
    }
}
let f2 = new fn2()

// 测试避免闭包陷阱
function test(func) {
    console.log(func())
}

function test2() {
    var name = 'lg'
    return name
}
test(function () {
    var name = 'lg'
    return name
})
test(test2)

// 测试避免属性方法使用
function Person() {
    this.name = 'icoder'
    this.age = 18
    this.getAge = function() {
        return this.age
    }
}

const p1 = new Person()
const a = p1.getAge()

function Person() {
    this.name = 'icoder'
    this.age = 18
}
const p2 = new Person()
const b = p2.age

// 测试for循环优化
var arrList = []
arrList[10000] = 'icoder'

for (var i = 0; i < arrList.length; i++) {
    console.log(arrList[i])
}

for (var i = arrList.length; i; i--) {
    console.log(arrList[i])
}

// 采用最优的循环方法

var arrList = new Array(1, 2, 3, 4, 5)
arrList.forEach(function(item) {
    console.log(item)
})
for (var i = arrList.length; i; i--) {
    console.log(arrList[i])
}
for (var i in arrList) {
    console.log(arrList[i])
}

// 使用直接量替换new Object
var a = [1, 2, 3]

var a1 = new Array(3)
a1[0] = 1
a1[1] = 2
a1[2] = 3
