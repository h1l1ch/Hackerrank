// В чем отличие стрелочных функций от обычных.

// 1. "This"
// 1.1 Обыкновенные функции

function myFunction1() {
    console.log(this);
}
   
myFunction1(); // контекстом будет (window)

function myFunction2() {
    console.log(this);
}
    
new myFunction2(); // MyFunction

const myObject1 = {
    method() {
    console.log(this);
    }
};
    
// Вызов функции объекта
    
myObject1.method(); // контекстом будет myObject

// 1.2 Стрелочные функции
// Поведение this внутри стрелочной функции отличается от поведения this внутри обычной функции.
// Не имеет значения как она была вызвана, значение this внутри стрелочной функции всегда эквивалентно 
// значению this внешней функции. Другими словами функция не создает собственный контекст исполнения, 
// она использует внешний.В примере выше, myMethod() это внешняя функция для стрелочной функции callback():

const myObject2 = {

    myMethod(items) {
    console.log(this); // myObject

        const callback = () => { 
        console.log(this); // myObject
        };   

    items.forEach(callback);
    }
};

myObject2.myMethod([1, 2, 3]);

// 2. Конструкторы
// 2.1 Обыкновенные функции
// Как ты мог заметить, в предыдущей секции, обычная функция может легко создавать объекты.
// Например, Car() функция создаст объект автомобиля:

function Car1(color) {
    this.color = color;
}
    
const redCar = new Car1('red');
    
redCar instanceof Car1; // => true

// 2.2 Стрелочные функции
// Как следствие того, что стрелочные функции не имеют собственного this они не могут быть использованы для создания объектов.
// Если ты попытаешься вызвать стрелочную функцию с использованием ключевого слова new, JS кинет исключение:

const Car2 = (color) => {
    this.color = color;    
};
    
const redCar = new Car2('red'); // TypeError: Car is not a constructor

// 3. Объект arguments
// 3.1 Обыкновенные функции
// Внутри тела обыкновенной функции, существует специальный массив arguments содержащий список аргументов 
// с которым функция была вызвана.Давай вызовем функцию myFunction с двумя аргументами:

function myFunction3() {
    console.log(arguments);
}

// 3.2 Стрелочные функции
// С другой стороны, в стрелочных функциях отсутствует специальное слово arguments.
// Опять, точно так же, как и со значение this массив arguments для стрелочных функций будет браться из внешней функции.

myFunction3('a', 'b'); // { 0: 'a', 1: 'b'}

function myRegularFunction() {

    const myArrowFunction = () => {
        console.log(arguments);
    }

    myArrowFunction('c', 'd');
}
    
myRegularFunction('a', 'b'); // { 0: 'a', 1: 'b' }

// 4. Неявный return
// 4.1 Обыкновенные функции
// Только использование выражения return возвращает результат выполнения функции:

function myFunction4() {
    return 42;    
}
    
myFunction4(); // => 42

function myEmptyFunction() {
    42;    
}
    
function myEmptyFunction2() {
    
    42;
    return;    
}
    
myEmptyFunction(); // => undefined
myEmptyFunction2(); // => undefined

// 4.2 Стрелочные функции
// Ты можешь вернуть значение из стрелочной функции, точно таким же способом, как и из обычной функции, но с одним полезным исключением.
// Если стрелочная функция содержит в теле одну инструкцию, и ты опустил фигурные скобки, тогда выражение будет возвращено автоматически.

const increment = (num) => num + 1;
increment(41); // => 42