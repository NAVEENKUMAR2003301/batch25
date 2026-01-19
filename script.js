// // // variable

// // // var   - function scope , global scope

// // // let   - block scope

// // // const - block scope


// // // rules

// // // var

// // var chocolateBox  = 10         // declration // intialiazation

// // chocolateBox      = 15         // reuse   // reIntialazation

// // var chocolateBox  = 20         // reDeclration


// // console.log(chocolateBox)


// // // let 

// // let a = 12 // dec   // intia

// // a     = 15 // reuse // reIntia

// // // let a = 50 not reDecl

// // console.log(a);


// // // const 

// // const b = 21 // decle  // intia

// // // b       = 23  not accept reuse , reIntialiazation

// // // const b = 30  // not accept reDec

// // console.log(b)



// printing statement

// 1. console.log()

// let a = 10

// console.log(a);
// console.log(100)


// 2. alert()

// alert("hi hello there")

// 3. confirm()

// confirm("did you like js")


// 4. prompt()

// prompt("what is your name")

// 5. document.writeln()

// document.writeln("hello")



// console method 

// console.log()

console.log(100);


// console.warn()

console.warn(100)

// console.error()

console.error(100)

// console.clear()

console.clear()


// DataTypes 

// 1.primitive DataTypes

// 1. string - ""

let a = "hello"

console.log((a));


// 2. number 

let b = 123

console.log(typeof(b));


// 3. boolean

let c = true 

console.log(typeof(c));


// 4. undefined

let d ;

console.log(d);


// 5. null

// let e = prompt()

// console.log(e);




// 2.non primitive DataTypes


// 1.Array 

// []

let fruit = ["guava","apple","banana","orange","cherry","pineApple"]

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);

console.log(fruit[0]);
console.log(fruit[fruit.length-1]);






// 2.object

// {}

let fruit1 = {
    redFruit : ["apple","cherry"],
    yellowFruit : ["banana","pineApple"],
    orangeFruit : "orange"
}

console.log(fruit1);
console.log(fruit1.redFruit[0]);
console.log(fruit1.yellowFruit[1]);
console.log(fruit1.orangeFruit);

console.clear()

// operators 

// 1. Arithmetic operator

// meaning        operators

// addition          +

// subraction        - 

// multiplication    *

// division          / 

// modulus           %

// exponencial       **

// increament        ++     pre = ++var   post = var++

//decreament         --     pre = --var post = var--


console.log(1 + 2);

console.log(1 - 1);

console.log(2 * 3);

console.log(10 / 5);

console.log(10 % 5);

console.log(2 ** 3);  // 2^3 = 2*2*2 = 8


// increament  ++ = +1


let num = 10 

++num 

console.log(num);


let num1 = 3     // null

num1     = num1++  // num1 = 3

console.log(num1);


let num2 = 2         

let num3     = num2--  


console.log("num2 : ",num2);

console.log("num3 : ",num3);











// 2. Assignment operator

// 3. comparision operator

// 4. logical operator

// 5. ternary operator




// 3.function

// 4.Date