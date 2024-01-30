// Types: null, undefined, boolean, number, string, object, symbol
/*
console.log(typeof 0);
console.log(typeof true);
console.log(typeof 'JavaScript');
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof null);
console.log(typeof function () { });
console.log(typeof NaN);

//  Что означает глубокая (deep) и поверхностная (shallow) копия объекта? Как сделать каждую из них?
// Поверхностная копия - ссыличноя копия. Когда две переменных ссылаются на один и тот же объект.
// Глубокая копия - точная и независимая копия объекта. При изменениях в объекте А данные в объекте В остаются неизменными.
// Поверхностная копия создаётся при поставлении знака "=". Три способа создания глубокой копии:

// First method

const food1 = { beef: "?", bacon: "?" }

const cloneFood1 = { ...food1 }

console.log(food1)

// Second method

const food2 = { beef: "?", bacon: "?" }

const cloneFood2 = Object.assign(food2)

console.log(food2)

// Third method

const food3 = { beef: "?", bacon: "?" }

const cloneFood3 = JSON.parse(JSON.stringify(food3));

console.log(food3)

console.log(Boolean([]));
*/

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`Steven's tip in restaurant is ${tip} dollars.`);

(function (x) {
    return (function (y) {
        console.log(x); // 1
    })(2)
})(1)


// The answer to what is console.logged is "undefined" because of the hoisting. 
// Local variable x is hoisted from the local store however its value is not.
// First is global execution context is done then moves to the function local scope
// Local scope of a function is first initialized and the variable is hoisted.
// Its ddeclaration is hoisted then the code in the body of a function is executed.
var x = 21;

var fun = function () {
    console.log(x);
    var x = 20;
};

function square(num) { // Params
    console.log(num * num);
};

square(5); //Arguments


// Three callback functions here have different lexical scope. Private are here
// PrivateCounter and ChangeBy and are accessed only by calling callback functions
// This is caled closure. 
const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i);
        }, i * 1000);
    }
}

a();

// Infinite Currying

function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    };
}

console.log(add(5)(2)(4)(8));

// Manipulating DOM with currying
function updateElementText(id) {
    return function (content) {
        document.querySelector(`#${id}`).textContent = content;
    };
}

const updateHeader = updateElementText('heading');
updateHeader('Subscribe to RoadsideCoder');

// Currying in JavaScript
// Convert f(a, b, c) to f(a)(b)(c)

function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args)
        } else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            };
        }
    }
}

const sum = (a, b, c, d) = a + b + c + d;
const totalSum = curry(sum);
console.log(totalSum(1)(6)(5)(6));