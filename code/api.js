// 模拟常用高阶函数：map/every

const map = (arr,  fn) => {
    let results = []
    for (let value of arr) {
        results.push(fn(value))
    }
    return results
}

// let arr = [1, 2, 3, 4]
// let a = map(arr, val => val * 2)
// console.log(a)

const every = (arr, fn) => {
    let result = true
    for (let value of arr) {
        result = fn(value)
        if (!result) {
            break
        }
    }
    return result
}

// 纯函数

function sum (n1, n2) {
    return n1 + n2
}

// 模拟 menoize 方法的实现

function memoize (f) {
    let cache = {}
    return function () {
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] !== undefined ? cache[key] : f.apply(f, arguments)
        return cache[key]
    }
}