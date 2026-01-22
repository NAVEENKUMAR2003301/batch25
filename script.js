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


console.clear();



// Explicit Type Conversion

// number

// (Number) constractor

console.log(1 + Number("1"));
console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("abc"));
console.log(Number(12));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number([19989,56]));
console.log(Number({k:1}));


// boolean 

// (Boolean)

console.log(Boolean(""));
console.log(Boolean());
console.log(Boolean("1"));
console.log(Boolean("abc"));
console.log(Boolean(12));
console.log(Boolean(-1));
console.log(Boolean(0));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([1,2]));
console.log(Boolean({k:2}));


console.clear();



// flow control statement 

// 1. conditional statement 

// 1. if statement

//  if(condtion){// statement} , condition true = allow 

// example

if(5=="5"){

    console.log("true only allow");
    
}

// 2. if else statement

//  if(condtion){// statement}else{// statement} , condition true = allow if inside , false = allow else inside

// example

if(0){
    console.log("true");
    
}else{
    console.log("false");
    
}

// 3. else if statement

let hour = 23

if(hour >= 1 && hour <= 6){
    console.log("good morning");
    
}else if(hour >= 7 && hour <= 12){
    console.log("morning");
    
}else if(hour >= 13 && hour <= 16){
    console.log("good Afternoon");
    
}else if(hour >= 17 && hour <= 22){
    console.log("good evening");
    
}else{
    console.log("good night");
    
}

// 4. nested if statement

// let age  =prompt("enter your Age :- ")
// let height = prompt("enter your height :- ")
// let weight =prompt("enter your weight :-  ")

// if(age >= 18){
//     if(height >= 155){
//         if(weight >= 55){
//             alert("your eligible");
            
//         }else{
//             alert("your weight is not eligible");
            
//         }
//     }else{
//         alert("your height is not eligible");
        
//     }
// }else{
//     alert("your age is not eligible ");
    
// }

// 5. switch statement

// switch(condition){
//     case value : "statement" ; break;
//     case value : "statement" ; break ; 
// }


// let trafficLight = "yellow"

// switch(trafficLight){
//     case "red" : console.log("vechile stop"); break ;
//     case "yellow" : console.log("vechile start"); break ;
//     case "green" : console.log("vechile go"); break;

//     default : console.log("go");
    
    
    
    
// }



// 2. looping statement 

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);



// for loop

// for(intialiazation ; condition ; iteration){// statement}

for(let a = 1 ; a <= 5 ; a++){
    console.log(a); // 1 2 3 4 5
    
}

// let a = 1 ; 1 <= 5 = true ; 1++ = 2
// let a = 2 ; 2 <= 5 = true ; 2++ = 3
// let a = 3 ; 3 <= 5 = true ; 3++ = 4
// let a = 4 ; 4 <= 5 = true ; 4++ = 5
// let a = 5 ; 5 <= 5 = true ; 5++ = 6
// let a = 6 ; 6 <= 5 = false.

console.clear();


// while loop 

// intialiazation

// while(condition){ // statement   // iteration }

// example

var a2 = 5

while(a2 >= 20){

    console.log(a2);

    a2--
    
}

// a2 = 5 ; 5 >= 0 = true  ; 5 ; 5-- = 4
// a2 = 4 ; 4 >= 0 = true  ; 4 ; 4-- = 3
// a2 = 3 ; 3 >= 0 = true  ; 3 ; 3-- = 2
// a2 = 2 ; 2 >= 0 = true  ; 2 ; 2-- = 1
// a2 = 1 ; 1 >= 0 = true  ; 1 ; 1-- = 0
// a2 = 0 ; 0 >= 0 = true  ; 0 ; 0-- = -1
// a2 = -1 ; -1 >= 0 = false . 


// do while loop 

// syntex

// intialiazation 

// do{
//     // statement

//     iteration
// }

// while(condition)

let a3 = 5 

do {
  console.log(a3);

  a3--;
} 
while (a3 >= 10);

// for of loop

// array , string , function

let str = "javascript"

// syntex 

for(let a of str){

    console.log(a);
    
}

let arr1 = ["apple","orange","banana"]

for(let b of arr1){

    console.log(b);
    
}

// for in loop - object

let obj = {
    name1 : "john",
    salery : 100000,
    role   : "developer"
} 

for(let c in obj){

    console.log(obj[c]);
    
}

console.clear();



// function 

// syntex 


// function one(parameter){
//     // statement
// }


function one(){
    console.log("hello");
    
}

one()


function two(parameter){
    console.log(parameter);
    
}

two("argument")


function student(name1,group){
    console.log("name :-",name1);
    console.log("group :-",group);
    
}

student("kamal","ece")
student("praveen","cse")


let emp = {
    name1 : "danish",
    role  : "developer"
}

function outer(){

    console.log(emp.name1);
    
}

outer()

console.clear();



// types of function 

// named function
named("argument")

function named(parameter){

    console.log(
        "named function"
    );
    
}


// annonymous function 

var annonymous = function (parameter){
    
    console.log("annonymous function");
    
}

annonymous("argument")





// arrow function

var arrow = (parameter)=>{
    
    console.log("arrow function");
    
}

arrow("argument")


// // scopes 

// // var    - global scope 

// // let    - block scope

// // const  - block scope


// function scopeCheck(){
//     if(true){
//         var a11 = "global scope"
//         let b111 = "block scope"
//         const c6 = "block scope"
//         console.log(b111);
//         console.log(c6);
//     }

    


    
//     console.log(a11);
    
    
// }

// scopeCheck()

// // hoisting

// console.log(ab);

// var ab = "global scope11"




// let ac = "block scope11"
// console.log(ac);




// const ad = "block scope"
// console.log(ad);






























// • Explicit type conversion





// 3.function

// 4.Date