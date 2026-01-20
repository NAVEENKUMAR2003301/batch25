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



console.clear()


// 2. Assignment operator


let a1 = 10

    a1 = a1 + a1

    console.log(a1);

let b1 = 20

let additionVal = 100

    // b1 = b1 + additionVal 

    b1 += additionVal

    // b1 += additionVal -- > assignment operator

    console.log(b1);
    
    

// 3. comparision operator Or relational operator

// meaning      syntex         example      results

//  less then     <             3<4          true

// greaterThen    >             4>4          false

// lessThenEq     <=            4<=4         true

// greaterThenEq  >=            4>=4         true

// loosyTypeEq    ==            5=="5"       true

// strictlyTypeEq ===           5==="5"      false

// loosyNotEq      !=           5!="5"       false

// strictlyNotEq   !==          5!==5        false

// let a = 10;
// let b = "10";
// console.log(a == b);  // true 

// let x = 5;
// let y = 3;
// console.log(x > y);  // true

// let p = 7;
// let q = 7;
// console.log(p !== q); // false

// let m = 4;
// let n = "4";
// console.log(m === n); // false

// let i = 2;
// let j = 5;
// console.log(i <= j); // true

console.clear()

// 4. logical operator

//  And   - &&

// true && true  = true 

// false && true = false

//  Or    - || 

// false || true = true

// false || false = false

//  Not   - !

// !(true) = false 

// !(false) = true 


console.log((5===5)&&(4>=5)||(9===9));

// true && false = false

// false || true = true

console.log(!(6>=2)||(8===8)); // !(true) = false || (8===8) true = true

console.log(!(5==="5")&&!(7===.7)); // true


// 5. ternary operator

// condition ? statement : statement;

let pwd = false

pwd ? console.log("allow to web in") : console.log("password wrong");


// Concatenation  +

let a11 = "iron"
let a12 = "man"

let total = a11 +" "+ a12 

console.log(total);





// Template Strings 


let b11 = "spider"
let b12 = "man"

let total1 = `${b11}${b12}`

console.log(total1);


// Type Conversion

// • Implicit type conversion

// let number = 12

// let str2   = "hello"

// let final = number + str2

// console.log(final);

console.clear();


// string 

// string anything is string


console.log(typeof("1" + "1"));
console.log(typeof("1" + 1));
console.log(typeof("1" + true));
console.log(typeof("1" + undefined));
console.log(typeof("1" + null));
console.log(typeof("1" + [1,2]));
console.log(typeof("1" + {k:1}));


// number

console.log(typeof(1 + "1"));
console.log(typeof(1 + 1));
console.log(typeof(1 + true));
console.log(typeof(1 + undefined));
console.log(typeof(1 + null));
console.log(typeof(1 + [1,2]));
console.log(typeof(1 + {u:4}));


// boolean 

console.log(typeof(true + "1"));
console.log(typeof(true + 1));
console.log(typeof(true + true));
console.log(typeof(true + undefined));
console.log(typeof(true + null));
console.log(typeof(true + [1,2]));
console.log(typeof(true + {w:2}));





















// • Explicit type conversion





// 3.function

// 4.Date