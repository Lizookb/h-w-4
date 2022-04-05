// Вывести на страницу в одну строку через запятую числа от 10 до 20
// let result = ' ';
// for (let c = 10; c <= 20; c++) {
//   result += c + ','
// }
// console.log(result)

// Вывести таблицу умножения на 7
for (let b = 1; b <= 10; b++) {
  // console.log(b * 7)
}

// Вывести квадраты чисел от 10 до 20
for (let i = 10; i <= 20; i++) {
  // console.log(i ** 2)
}

// Найти сумму всех целых чисел от 1 до 15
let sum = 0
for (let f = 1; f <= 15; f++) {
  sum += f
  // console.log(sum)
}

// Найти произведение всех целых чисел от 15 до 35
let mult = 1;
for (let k = 15; k <= 35; k++) {
  mult = mult * k
}
// console.log(mult)

// Найти среднее арифметическое всех целых чисел от 1 до 500
let sum1 = 0
for (let i = 1; i <= 500; i++) {
  sum1 += 1
  average = sum1 / 3
}
// console.log(average)

// Вывести на страницу сумму только четных чисел в диапазоне от 30 до 80
let sum2 = 0;
for (let a = 30; a <= 80; a++) {
  if (a % 2 === 0) {
    sum2 += a
    // console.log(sum2)
  }
}

// Вывести на страницу все числа в диапазоне от 100 до 200 кратные 3

for (l = 100; l <= 200; l++) {
  if (l % 3 === 0) {
    // console.log(l)
  }
}

// Дано натуральное число. Найти и вывести на страницу все его делители.

let natureNumber = 10;
let countDivider = 0;
for (let i = 1; i <= natureNumber; i++) {
  if (natureNumber % i === 0) {
    countDivider += 1
  }
}
// console.log('Количество делителей')
// console.log(countDivider)


// Определить количество его четных делителей. Найти сумму его четных делителей
let naturalNumber = 10;
let countEvenDivisor = 0;
for (let i = 1; i <= naturalNumber; i++) {
  if (natureNumber % i === 0 && i % 2 === 0) {
    countEvenDivisor += 1
  }
}

// console.log('Количество четных делителей')
// console.log(countEvenDivisor)



// Напечатать полную таблицу умножения от 1 до 10
let resultTable = ' '
for (let i = 1; i <= 10; i++) {
  for (let y = 1; y <= 10; y++) {
    resultTable += (i * y) + ' ';
  }
  // console.log(resultTable)
  resultTable = ' '
}

// Игра “Угадай число”. Сгенерировать случайное число в диапазоне от 0 до 10. Пользователь должен угадать число. Игра продолжается до тех пор, пока пользователь не угадает число. Пользователь может остановить игру в любой момент.

const secretNumber = Math.round(Math.random() * 10); // случайное число в диапазоне от 0 до 10
let randomNumber = null;
while (+randomNumber !== secretNumber) {
  randomNumber = prompt('Введите число');
  console.log('Продолжай дальше');
  if (!randomNumber) {
    console.log('STOP GAME');
    break;
  }
}

