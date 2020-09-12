//1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!». 
let age = prompt('Привіт! Скільки тобі років?');
alert(`Привіт! Мені ${age} років!`);

//2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу. Виведемо скільки йому років. 
let yearOfBirth = prompt('Якого року ти народився?');
const THIS_YEAR = 2020;
let userAge = (+THIS_YEAR - +yearOfBirth);
alert(`Ага, значить тобі ${userAge} років.`);

//3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр. 
let sideA = prompt('Введи довжину першої сторони прямокутника');
let sideB = prompt('Введи довжину другої сторони прямокутника');
let area = (2 * +sideA + 2 * +sideB);
alert(`Площа такого прямокутника становитиме ${area}.`);

//4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі) 
let circleRadius = prompt('Тепер ускладнимо. Введи радіус кола');
const PI = 3.14;
let circleArea = (PI * circleRadius ** 2);
alert(`Площа такого кола становитиме: ${circleArea}`);

//5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще йому необхідно часу їхати, та виведіть відстань. 
let tripDuration = prompt(`Шеф, скільки нам ще їхати?`);
const SPEED = 50;
let distance = (+tripDuration * SPEED);
alert(`Нам ще лишилоя проїхати ${distance} кілометрів.`);

//6. Реалізуємо конвертер кілометрів в милі і навпаки =) 
let kilometers = prompt('Переведемо кілометри в милі? Введи кількість кілометрів');
const CONVERT = 0.62;
let kilometersToMiles = (+kilometers * CONVERT);
alert(`В ${kilometers} кілометрах є ${kilometersToMiles} миль.`);
let milesToKilometers = (+kilometers / CONVERT);
alert(`А в ${kilometers} милях є ${milesToKilometers} кілометрів.`);

//7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. Виводимо скільки бензину він може купити та скільки грошей у нього залишиться.
let ballance = prompt('Скільки маєш грошей?');
const FUEL_PRICE = 30;
let fuelCount = Math.round(+ballance / FUEL_PRICE);
let remainingFunds = (+ballance % FUEL_PRICE);
alert(`Значить так, чувак, на ці копійки ти зможеш купити ${fuelCount} літрів бензини.
У тебе залишиться ${remainingFunds} гривень.`);