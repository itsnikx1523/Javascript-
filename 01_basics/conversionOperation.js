// let score="33"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber =Number(score)
// console.log(typeof valueInNumber);

// " 33" => 33
// "33abc" => NaN
//true =>1 ; false=>0

//let isLoggedIn = 1
let isLoggedIn= ''
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// '' => false
// " nikhil "=> true

let someNumber = 1523

// let stringNumber= String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *************** Operations ***************

let value =  3
let negValue = -value 
console.log(negValue);


let str1=" Nikhil"
let str2="    Singh"
let str3= str1+str2;
console.log(str3);

console.log("1" + 2);
console.log(1+ "2");
console.log('1'+'2'+3+ 4);
console.log(1+2 +'2');

console.log(+true);
console.log(+"");


// Increment and Decrement Operator
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
