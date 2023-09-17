// Завдання 1. forEach

// Заданий масив з числами. Знайдіть суму цих чисел.

// let arr = [5, 6, 7, 8, 9];

// Результат вивести в консоль.

let arr1 = [5, 6, 7, 8, 9];
let sum = 0;
arr1.forEach((number) => (sum += number));
console.log(sum);

// ------------------------------------------------------------------------------------------

// Завдання 2. Map

// Заданий масив з числами. Створіть новий масив, що складається з квадратів цих чисел.

// let arr = [5, 6, 7, 8, 9];

// Результат вивести в консоль.

let arr2 = [5, 6, 7, 8, 9];
let pow = arr2.map((value) => value ** 2);
console.log(pow);
// ------------------------------------------------------------------------------------------

// Завдання 3. Every

// Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.

// let arr = [{name: 'Ivan', country: 'Ukraine'},

// {name: 'Petro', country: 'Ukraine'},

// {name: 'Miguel', country: 'Cuba'}

// ]

// Результат вивести в консоль.

let arr3 = [
  { name: "Ivan", country: "Ukraine" },
  { name: "Petro", country: "Ukraine" },
  { name: "Miguel", country: "Cuba" },
];
const allFromUkraine = arr3.every((obj) => obj.country === "Ukraine");
console.log(allFromUkraine);

// ------------------------------------------------------------------------------------------

// Завдання 4. Some

// Заданий масив об’єктів. Перевірте, чи всі хоч один ключ country має значення 'Cuba'.

// let arr = [{name: 'Ivan', country: 'Ukraine'},

// {name: 'Petro', country: 'Ukraine'},

// {name: 'Miguel', country: 'Cuba'}

// ]

// Результат вивести в консоль.

let arr4 = [
  { name: "Ivan", country: "Ukraine" },
  { name: "Petro", country: "Ukraine" },
  { name: "Miguel", country: "Cuba" },
];
const anyFromCuba = arr3.some((obj) => obj.country === "Cuba");
console.log(anyFromCuba);

// ------------------------------------------------------------------------------------------

// Завдання 5. Filter

// Заданий масив значень, в ньому можуть бути звичайні елементи і підмасиви. Залиште в ньому тільки підмасиви.

// let arr = [1, 'string', [3, 4], 5, [6, 7]];

// Результат вивести в консоль.
let arr5 = [1, "string", [3, 4], 5, [6, 7]];
const arr5New = arr5.filter((item) => Array.isArray(item));
console.log(arr5New);



// ------------------------------------------------------------------------------------------

// Завдання 6. Reduce

// Заданий масив з числами. Знайдіть суму перших N елементів до першого нуля.

// Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, так як далі стоїть елемент з числом 0.

// let arr = [1, 2, 5, 0, 4, 5, 6];

// Результат вивести в консоль.
let arr6_1 = [1, 2, 5, 0, 4, 5, 6];
let zero = arr6_1.indexOf(0);
let elemN = arr6_1.splice(0, zero);

const sumElem = elemN.reduce((total, elem) => {
  return total + elem;
}, 0);
console.log(sumElem);

// Заданий масив з числами. Дізнайтеся скільки елементів з початку масиву треба скласти, щоб в сумі вийшло більше 10-ти.

// let arr = [1, 2, 3, 0, 4, 5, 6];

// Результат вивести в консоль.





const arr8 = [1, 2, 3, 0, 4, 5, 6];
const count = arr8.reduce((acc, curr, i) => {
    acc += curr;

    if (acc + curr> 10) {
return i-1;
    }
    return acc;
  }, 0);
  
  console.log(count);




// ------------------------------------------------------------------------------------------

// Завдання 7. Любим методом

// Заданий масив з числами. Залиште в ньому тільки позитивні числа. Потім вийміть квадратний корінь і цих чисел.

// let arr = [1, -2, 3, 0, 4, -5, 6, -11];

// Результат вивести в консоль.

let arr7 = [1, -2, 3, 0, 4, -5, 6, -11];
let positive = arr7.filter((elem) => elem >= 0);
console.log(positive);
let sqrt = positive.map((value) => Math.sqrt(value));
console.log(sqrt);
