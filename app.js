let years = 0;
for (let i = 1; i <= 2020; i++) {
     years = years + i;
//      if (years == 13) {
//          console.log(years)
//      }
 }
// 10 Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

function getDigitsSum(digit){
     let sum = 0;
     while(digit > 0) {
          const lastDigit = digit % 10;
          digit = Math.floor(digit / 10);
          sum += lastDigit;
     }
}

// 11 Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

function func9(){
     const array = [];
     for (let i = 1; i <= 2020; i++) {
          if (getDigitsSum(i) === 13) {
               array.push(i)
          }
     }     
     return array;
}