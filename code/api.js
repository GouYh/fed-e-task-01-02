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
};

// 函数柯里化

function getSum (a, b, c) {
    return a + b + c
}

function carry (fn) {
    return function carriedFn (...args) {
        // 判断实参和形参的个数
        if (arguments.length < fn.length) {
            return function () {
                return carriedFn(...args.concat([...arguments]))
            }
        }
        return fn(...args)
    }
};

const carried = carry(getSum)

// console.log(carried(1)(2)(3))
// console.log(carried(1, 2, 3))
// console.log(carried(1, 2)(3))

// 函数组合

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

function compose (...args) {
    return function (value) {
        return args.reverse().reduce(function (val, next) {
            return next(val)
        }, value)
    }
}

const arrowCompose = (...args) => value => args.reverse().reduce((val, next) => next(val), value)

// 函子
class Container {
    static of (value) {
        return new Container(value)
    }

    constructor (value) {
        this._value = value
    }
    
    map (fn) {
        return Container.of(fn(this._value))
    }
}

// MayBe函子
class MayBe {
    static of (value) {
        return new MayBe(value)
    }

    constructor (value) {
        this._value = value
    }
    
    map (fn) {
        return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
    }

    isNothing () {
        return this._value === null || this._value === undefined
    }
}

// Either函子

class Left {
    static of (value) {
        return new Left(value)
    }

    constructor (value) {
        this._value = value
    }
    
    map (fn) {
        return this
    }
}

class Right {
    static of (value) {
        return new Right(value)
    }

    constructor (value) {
        this._value = value
    }
    
    map (fn) {
        return Right.of(fm(this._value))
    }
}

function parseJSON (str) {
    try {
        return Right.of(JSON.parse(str))
    } catch (e) {
        return Left.of({err: e.message})
    }
}

let r1 = Right.of(12).map(x => x + 2) // Right {_value: 14}
let r2 = Left.of(12).map(x => x + 2) // Left {_value: 12}

