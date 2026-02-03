

// // // // variable

// // // // var   - function scope , global scope

// // // // let   - block scope

// // // // const - block scope

// // // // rules

// // // // var

// // // var chocolateBox  = 10         // declration // intialiazation

// // // chocolateBox      = 15         // reuse   // reIntialazation

// // // var chocolateBox  = 20         // reDeclration

// // // console.log(chocolateBox)

// // // // let

// // // let a = 12 // dec   // intia

// // // a     = 15 // reuse // reIntia

// // // // let a = 50 not reDecl

// // // console.log(a);

// // // // const

// // // const b = 21 // decle  // intia

// // // // b       = 23  not accept reuse , reIntialiazation

// // // // const b = 30  // not accept reDec

// // // console.log(b)

// // printing statement

// // 1. console.log()

// // let a = 10

// // console.log(a);
// // console.log(100)

// // 2. alert()

// // alert("hi hello there")

// // 3. confirm()

// // confirm("did you like js")

// // 4. prompt()

// // prompt("what is your name")

// // 5. document.writeln()

// // document.writeln("hello")

// // console method

// // console.log()

// console.log(100);

// // console.warn()

// console.warn(100);

// // console.error()

// console.error(100);

// // console.clear()

// console.clear();

// // DataTypes

// // 1.primitive DataTypes

// // 1. string - ""

// let a = "hello";

// console.log(a);

// // 2. number

// let b = 123;

// console.log(typeof b);

// // 3. boolean

// let c = true;

// console.log(typeof c);

// // 4. undefined

// let d;

// console.log(d);

// // 5. null

// // let e = prompt()

// // console.log(e);

// // 2.non primitive DataTypes

// // 1.Array

// // []

// let fruit = ["guava", "apple", "banana", "orange", "cherry", "pineApple"];

// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[2]);

// console.log(fruit[0]);
// console.log(fruit[fruit.length - 1]);

// // 2.object

// // {}

// let fruit1 = {
//   redFruit: ["apple", "cherry"],
//   yellowFruit: ["banana", "pineApple"],
//   orangeFruit: "orange",
// };

// console.log(fruit1);
// console.log(fruit1.redFruit[0]);
// console.log(fruit1.yellowFruit[1]);
// console.log(fruit1.orangeFruit);

// console.clear();

// // operators

// // 1. Arithmetic operator

// // meaning        operators

// // addition          +

// // subraction        -

// // multiplication    *

// // division          /

// // modulus           %

// // exponencial       **

// // increament        ++     pre = ++var   post = var++

// //decreament         --     pre = --var post = var--

// console.log(1 + 2);

// console.log(1 - 1);

// console.log(2 * 3);

// console.log(10 / 5);

// console.log(10 % 5);

// console.log(2 ** 3); // 2^3 = 2*2*2 = 8

// // increament  ++ = +1

// let num = 10;

// ++num;

// console.log(num);

// let num1 = 3; // null

// num1 = num1++; // num1 = 3

// console.log(num1);

// let num2 = 2;

// let num3 = num2--;

// console.log("num2 : ", num2);

// console.log("num3 : ", num3);

// console.clear();

// // 2. Assignment operator

// let a1 = 10;

// a1 = a1 + a1;

// console.log(a1);

// let b1 = 20;

// let additionVal = 100;

// // b1 = b1 + additionVal

// b1 += additionVal;

// // b1 += additionVal -- > assignment operator

// console.log(b1);

// // 3. comparision operator Or relational operator

// // meaning      syntex         example      results

// //  less then     <             3<4          true

// // greaterThen    >             4>4          false

// // lessThenEq     <=            4<=4         true

// // greaterThenEq  >=            4>=4         true

// // loosyTypeEq    ==            5=="5"       true

// // strictlyTypeEq ===           5==="5"      false

// // loosyNotEq      !=           5!="5"       false

// // strictlyNotEq   !==          5!==5        false

// // let a = 10;
// // let b = "10";
// // console.log(a == b);  // true

// // let x = 5;
// // let y = 3;
// // console.log(x > y);  // true

// // let p = 7;
// // let q = 7;
// // console.log(p !== q); // false

// // let m = 4;
// // let n = "4";
// // console.log(m === n); // false

// // let i = 2;
// // let j = 5;
// // console.log(i <= j); // true

// console.clear();

// // 4. logical operator

// //  And   - &&

// // true && true  = true

// // false && true = false

// //  Or    - ||

// // false || true = true

// // false || false = false

// //  Not   - !

// // !(true) = false

// // !(false) = true

// console.log((5 === 5 && 4 >= 5) || 9 === 9);

// // true && false = false

// // false || true = true

// console.log(!(6 >= 2) || 8 === 8); // !(true) = false || (8===8) true = true

// console.log(!(5 === "5") && !(7 === 0.7)); // true

// // 5. ternary operator

// // condition ? statement : statement;

// let pwd = false;

// pwd ? console.log("allow to web in") : console.log("password wrong");

// // Concatenation  +

// let a11 = "iron";
// let a12 = "man";

// let total = a11 + " " + a12;

// console.log(total);

// // Template Strings

// let b11 = "spider";
// let b12 = "man";

// let total1 = `${b11}${b12}`;

// console.log(total1);

// // Type Conversion

// // • Implicit type conversion

// // let number = 12

// // let str2   = "hello"

// // let final = number + str2

// // console.log(final);

// console.clear();

// // string

// // string anything is string

// console.log(typeof ("1" + "1"));
// console.log(typeof ("1" + 1));
// console.log(typeof ("1" + true));
// console.log(typeof ("1" + undefined));
// console.log(typeof ("1" + null));
// console.log(typeof ("1" + [1, 2]));
// console.log(typeof ("1" + { k: 1 }));

// // number

// console.log(typeof (1 + "1"));
// console.log(typeof (1 + 1));
// console.log(typeof (1 + true));
// console.log(typeof (1 + undefined));
// console.log(typeof (1 + null));
// console.log(typeof (1 + [1, 2]));
// console.log(typeof (1 + { u: 4 }));

// // boolean

// console.log(typeof (true + "1"));
// console.log(typeof (true + 1));
// console.log(typeof (true + true));
// console.log(typeof (true + undefined));
// console.log(typeof (true + null));
// console.log(typeof (true + [1, 2]));
// console.log(typeof (true + { w: 2 }));

// console.clear();

// // Explicit Type Conversion

// // number

// // (Number) constractor

// console.log(1 + Number("1"));
// console.log(Number());
// console.log(Number(""));
// console.log(Number("123"));
// console.log(Number("abc"));
// console.log(Number(12));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number([19989, 56]));
// console.log(Number({ k: 1 }));

// // boolean

// // (Boolean)

// console.log(Boolean(""));
// console.log(Boolean());
// console.log(Boolean("1"));
// console.log(Boolean("abc"));
// console.log(Boolean(12));
// console.log(Boolean(-1));
// console.log(Boolean(0));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean([1, 2]));
// console.log(Boolean({ k: 2 }));

// console.clear();

// // flow control statement

// // 1. conditional statement

// // 1. if statement

// //  if(condtion){// statement} , condition true = allow

// // example

// if (5 == "5") {
//   console.log("true only allow");
// }

// // 2. if else statement

// //  if(condtion){// statement}else{// statement} , condition true = allow if inside , false = allow else inside

// // example

// if (0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// // 3. else if statement

// let hour = 23;

// if (hour >= 1 && hour <= 6) {
//   console.log("good morning");
// } else if (hour >= 7 && hour <= 12) {
//   console.log("morning");
// } else if (hour >= 13 && hour <= 16) {
//   console.log("good Afternoon");
// } else if (hour >= 17 && hour <= 22) {
//   console.log("good evening");
// } else {
//   console.log("good night");
// }

// // 4. nested if statement

// // let age  =prompt("enter your Age :- ")
// // let height = prompt("enter your height :- ")
// // let weight =prompt("enter your weight :-  ")

// // if(age >= 18){
// //     if(height >= 155){
// //         if(weight >= 55){
// //             alert("your eligible");

// //         }else{
// //             alert("your weight is not eligible");

// //         }
// //     }else{
// //         alert("your height is not eligible");

// //     }
// // }else{
// //     alert("your age is not eligible ");

// // }

// // 5. switch statement

// // switch(condition){
// //     case value : "statement" ; break;
// //     case value : "statement" ; break ;
// // }

// // let trafficLight = "yellow"

// // switch(trafficLight){
// //     case "red" : console.log("vechile stop"); break ;
// //     case "yellow" : console.log("vechile start"); break ;
// //     case "green" : console.log("vechile go"); break;

// //     default : console.log("go");

// // }

// // 2. looping statement

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// // for loop

// // for(intialiazation ; condition ; iteration){// statement}

// for (let a = 1; a <= 5; a++) {
//   console.log(a); // 1 2 3 4 5
// }

// // let a = 1 ; 1 <= 5 = true ; 1++ = 2
// // let a = 2 ; 2 <= 5 = true ; 2++ = 3
// // let a = 3 ; 3 <= 5 = true ; 3++ = 4
// // let a = 4 ; 4 <= 5 = true ; 4++ = 5
// // let a = 5 ; 5 <= 5 = true ; 5++ = 6
// // let a = 6 ; 6 <= 5 = false.

// console.clear();

// // while loop

// // intialiazation

// // while(condition){ // statement   // iteration }

// // example

// var a2 = 5;

// while (a2 >= 20) {
//   console.log(a2);

//   a2--;
// }

// // a2 = 5 ; 5 >= 0 = true  ; 5 ; 5-- = 4
// // a2 = 4 ; 4 >= 0 = true  ; 4 ; 4-- = 3
// // a2 = 3 ; 3 >= 0 = true  ; 3 ; 3-- = 2
// // a2 = 2 ; 2 >= 0 = true  ; 2 ; 2-- = 1
// // a2 = 1 ; 1 >= 0 = true  ; 1 ; 1-- = 0
// // a2 = 0 ; 0 >= 0 = true  ; 0 ; 0-- = -1
// // a2 = -1 ; -1 >= 0 = false .

// // do while loop

// // syntex

// // intialiazation

// // do{
// //     // statement

// //     iteration
// // }

// // while(condition)

// let a3 = 5;

// do {
//   console.log(a3);

//   a3--;
// } while (a3 >= 10);

// // for of loop

// // array , string , function

// let str = "javascript";

// // syntex

// for (let a of str) {
//   console.log(a);
// }

// let arr1 = ["apple", "orange", "banana"];

// for (let b of arr1) {
//   console.log(b);
// }

// // for in loop - object

// let obj = {
//   name1: "john",
//   salery: 100000,
//   role: "developer",
// };

// for (let c in obj) {
//   console.log(obj[c]);
// }

// console.clear();

// // function

// // syntex

// // function one(parameter){
// //     // statement
// // }

// function one() {
//   console.log("hello");
// }

// one();

// function two(parameter) {
//   console.log(parameter);
// }

// two("argument");

// function student(name1, group) {
//   console.log("name :-", name1);
//   console.log("group :-", group);
// }

// student("kamal", "ece");
// student("praveen", "cse");

// let emp = {
//   name1: "danish",
//   role: "developer",
// };

// function outer() {
//   console.log(emp.name1);
// }

// outer();

// console.clear();

// // types of function

// // named function
// named("argument");

// function named(parameter) {
//   console.log("named function");
// }

// // annonymous function

// var annonymous = function (parameter) {
//   console.log("annonymous function");
// };

// annonymous("argument");

// // arrow function

// var arrow = (parameter) => {
//   console.log("arrow function");
// };

// arrow("argument");

// // // scopes

// // // var    - global scope

// // // let    - block scope

// // // const  - block scope

// // function scopeCheck(){
// //     if(true){
// //         var a11 = "global scope"
// //         let b111 = "block scope"
// //         const c6 = "block scope"
// //         console.log(b111);
// //         console.log(c6);
// //     }

// //     console.log(a11);

// // }

// // scopeCheck()

// // // hoisting

// // console.log(ab);

// // var ab = "global scope11"

// // let ac = "block scope11"
// // console.log(ac);

// // const ad = "block scope"
// // console.log(ad);

// console.clear();

// // callback function and higher order function

// function function1() {
//   console.log("higher order function");
// }

// function function2() {
//   console.log("callback function");
// }

// function1(function2());

// // IIFE - self invoke function


// // (function(parameter){
// //     alert("hello");
    
// // })()


// // currying

// function an(a){
//     return function b(b){
//         return function c(c){
//             console.log( a + b + c );
            
//         }
//     }
// }

// an(40)(50)(60)


// function returnVal(){
//     return(100);
    
// }

// let new1 = returnVal()

// console.log(new1);



// function re(){

//     console.log("re",new1);
    
// }

// re()


// // Generator function 


// function* gen(){
//     yield "try Again"
//     yield "you get 10% offer"
//     yield "you get 30 % offer"
//     yield "best of luck try next"
//     yield "you got 100 % flat offer"
// }

// let Generator = gen()

// console.log(Generator.next().value);
// console.log(Generator.next().value);
// console.log(Generator.next().value);
// console.log(Generator.next().value);
// console.log(Generator.next().value);



// function* ab(){
//     yield "1"
//     yield "2"
//     yield "3"
//     yield "4"
//     yield "5"
//     yield "6"
//     yield "7"
// }

// let number = ab()

// for(let a of number){
//     console.log(a);
    
// }

// // Es6 edition advance concepts

// // Data stracture

// // spread operator 

// // array , object 

// // [...] , {...}

// // we can concat value in two array or object


// // example :- 

// // array 

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

let total = [...arr1,...arr2,9,10]

console.log(total);


// object

let obj1 = {
    name1 : "john",
    role  : "trainee",
    salary: 1000000
}

let obj2 = {
    name11 : "paul",
    role1  : "developer",
    salary1: 4000000
}


let finalVal = {...obj1,...obj2}

console.log(finalVal);




// // rest operator

// function 

// (...)

// we can store multiple argument in single parameter

function a(a,...b){
    console.log(a + b[1] );

    console.log(b);
    
    
    
    
    
}

a("1","2","3","4","5")

console.clear();



// destracture


// array

let num1 = [1,2,3,4]

let a1 = num1[0]
let a2 = num1[1]
let a3 = num1[2]
let a4 = num1[3]

console.log(a1 + a4);

// destracture 

let [b1,b2,b3,b4] = num1

console.log(b1 + b4);



// object 

let obj3 = {
    name1 : "john",
    role  : "developer"
}

let data1 = obj3.name1
let data2 = obj3.role

console.log(data1);
console.log(data2);

// destracture


let {name1,role} = obj3

console.log(name1);
console.log(role);



// nested array

let nested = [1,2,3,4,[5,6,7,[8]]]

let n1 = nested[4][3][0]


// destracture 

let [c1,c2,c3,c4,[c5,c6,c7,[c8]]] = nested

console.log(c8);

console.clear();



// Array advance concept 


let d1 = [1,2,3,4,5,6,"hello",true,undefined,null,[1,2,3,4],{k:2}]

console.log(d1);
console.log(d1[0]);
console.log(d1[3]);

console.log(d1[0]);
console.log(d1[d1.length-1]);


// homogeneous - same datatypes

// hetrogenous - different dataTypes

// flexible

// 1. array manipulation method 

// condition :- 

// 1. if you add the conditon you can use , you can add multiple value.

// 2. if you remove the condition you can use , you can remove one value only.

// types :- 


let manipulation  = [1,2,3,4]

// 1. pop() - we can remove the value array in last

manipulation.pop()

// 2. shift() - we can remove the value array in first

manipulation.shift()

// 3. unshift() - we can add the value array in first

manipulation.unshift(0,1)

// 4. push()  - we can add the value array in last

manipulation.push(4,5,6,7,8)

console.log(manipulation);

// 5. splice(// startingIndex , removeCount , adding value) 

let spliceArr = [1,2,3,40,50,60,7]

spliceArr.splice(3,3,4,5,6)

console.log(spliceArr);

// array merge concept 

// 1. concat()

     let ar1 = [1,2,3,4]
     let ar2 = [5,6,7,8]

     let totalVal1 = ar1.concat(ar2,9,10)
     
     console.log(totalVal1);
     

// 2. flat()

     let nest = [1,2,3,4,[5,6,[7,[8,[9,[10]]]]]]

     let flatVal = nest.flat(Infinity)

     console.log(flatVal);
     

// 3. slice()

   let a5 = [1,2,3,4,50,60,70,8]

   let sliceVal = a5.slice(4,7) //startingIndex,endingIndex + 1

   console.log(sliceVal);
   

// 4. fill()

let fillVal = [1,2,3,4] // 1,2,3,four

fillVal.fill("four",3,4) // value , si , ei+1

console.log(fillVal);


// 5. sort()

let sortVal = [1,9,"a","A",401,8,2000,5]

let sort1 = sortVal.sort()

console.log(sort1);


console.clear();


// 6. indexOf()  v -- > i

let arr12 = [1,2,3,4,5,4,3,2,1]

let newIndexof = arr12.indexOf(2,2) // value , from index

console.log(newIndexof);




// 7. lastIndexOf()

let arr13 = [1,2,3,4,3,2,1]

let newLastIndexOf = arr13.lastIndexOf(2,4) // value , from index

console.log(newLastIndexOf);


// 8. includes()

let arr14 = [1,2,3,4]

let newIncludes = arr14.includes(4)

console.log(newIncludes);


// 9. reverse()

let arr15 = [4,10,15,20]

let newReverse = arr15.reverse()

console.log(newReverse);


// array higherorder methods

// function one(){
//     console.log("one");
    
// }

// function two(){
//     console.log("two");
    
// }

// one(two())

// forEach()

let game = ["gta","ff","pubg","cod"]

let forEach1 = game.forEach((currentElement,index,totalArray)=>{
    return(currentElement);
    
})

console.log(forEach1);


// map

let map1 = game.map((cu,i,ta)=>{

    return("map "+cu);
   
})

console.log(map1);




// filter

let employee = [
    {name : "a", salary : 100000},
    {name : "b", salary : 200000},
    {name : "c", salary : 300000},
    {name : "d", salary : 400000}
]

let salayDate = employee.filter((c,i,t)=>{

    return c.salary > 200000
})

console.log(salayDate);


// find 

let salaryDate1 = employee.find((c,i,t)=>{
   return c.salary > 200000;
})

console.log(salaryDate1);


// reduce 

employee = [
  { name: "a", salary: 100000 },
  { name: "b", salary: 200000 },
  { name: "c", salary: 300000 },
  { name: "d", salary: 400000 },
];

let allSalary = employee.reduce((acc,c,i,t)=>{
    return acc + c.salary

    //   0 + 1 = 1
    //   1 + 2 = 3
    //   3 + 3 = 6
    //   6 + 4 = 10

    // retrun acc + c.salary = 10 + 0

},0) // 1 // 3 // 6 // 10

console.log(allSalary);




// some - Or 

let some1 = [2,2,2,2]

let newSome = some1.some((cu,i,t)=>{
   return cu % 2 == 0
   // 1 % 2 == 0 -- > false
   // 2 % 2 == 0 -- > true
   // 3 % 2 == 0 -- > false
   // 4 % 2 == 0 -- > true

   // (false || true || false || true) = true
})

console.log(newSome);



// every - And

let newEvery = some1.every((c,i,t)=>{
    return i%2==0
})

console.log(newEvery);


// sort

let aa = [4,8,2,7,3000]

// 4 , 2 , 7 , 8 , 3000 

// 2 , 4 , 7 , 8 ,3000

let newSort = aa.sort()

console.log(newSort);


let sortVal1 = aa.sort((a,b)=>{
 return b-a
})

console.log(sortVal1);

// array to string


// toString()

let ab = [1,2,3]

let arrStr = ab.toString()

console.log(arrStr);


// join()

let str2 = ab.join("hi")

console.log(str2);

console.clear();


// 13. String Methods


let str = "javascript"

// charAt(), i -- > v

let charAtVal  = str.charAt(1)

console.log(charAtVal);


// charCodeAt(), i -- > av

let charCodeAtVal = str.charCodeAt(1)

console.log(charCodeAtVal);


// length, 

let lengthVal = str.length

console.log(lengthVal);

str = "javascript";



// slice(),

let sliceVal1 = str.slice(2,5)

console.log(sliceVal1);



// toUpperCase(), 

str = "javascript";

let upper = str.toUpperCase()

console.log(upper);

// toLowerCase(), 

str = "JAVASCRipt";

let lower = str.toLowerCase()

console.log(lower);

// trim(), 

str = " javascript "

console.log(str.length);

let trimVal = str.trim()

console.log(trimVal.length);

// trimStart()

let startTrim = str.trimStart()

console.log(startTrim.length);

// trimEnd()

let Endtrim = str.trimEnd()

console.log(Endtrim);

str = " java-script ";


// includes(),
 let includesVal1 = str.includes("a")

 console.log(includesVal1);
 

// split(), 

let split = str.split("a")

console.log(split);

// indexOf(), 

str = "java-script";

let indexOfVal1 = str.indexOf("a",2)

console.log(indexOfVal1);

// lastIndexOf()

let last = str.lastIndexOf("a",2)

console.log(last);



// replace(), 

let replaceVal = str.replace("java","python") // "java","python"

console.log(replaceVal);



// startsWith(), 

str = "java-script";

let start = str.startsWith("j")

console.log(start);


// endsWith()

let end = str.endsWith("t")

console.log(end);


console.clear();

// Date

let date1 = new Date()

console.log(date1);

// get

let year = date1.getFullYear()

console.log(year);

let month = date1.getMonth()

console.log(month);

let date = date1.getDate()

console.log(date);

let day = date1.getDay()

console.log(day);

let hour = date1.getHours()

console.log(hour);

let minutes = date1.getMinutes()

console.log(minutes);

let seconds = date1.getSeconds()

console.log(seconds);


// locale string

let time = date1.toLocaleTimeString()

console.log(time);

let date2 = date1.toLocaleDateString()

console.log(date2);

let both = date1.toLocaleString()

console.log(both);




console.clear();


// set 

let dateVal = new Date()

console.log(dateVal);


// year

dateVal.setFullYear(2003)

console.log(dateVal);

// month

dateVal.setMonth(4)

console.log(dateVal);

// date

dateVal.setDate(10)

console.log(dateVal);


// time 

dateVal.setHours(5)

console.log(dateVal);

// minutes

dateVal.setMinutes(5)

console.log(dateVal);

// seconds 

dateVal.setSeconds(5)

console.log(dateVal);



// // birthday Finder

// let year1 = prompt("enter your bday year")
// let month1 =prompt("enter your bday month using number")
// let date11 = prompt("enter your bday date")

// let orgin = new Date()

// orgin.setFullYear(year1)
// orgin.setMonth(month1-1)
// orgin.setDate(date11)

// let day1 = orgin.getDay()



// let dayData = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]


// alert(dayData[day1])


console.clear();



// Asyncronous 

// setTimeout 

// syntex 


// setTimeout(()=>{

//     console.log("hello");
    

// },1000)

// setTimeout(()=>{

//     console.log("hi");
    

// },5000)


// setInterval(()=>{

//     let time = new Date()

//     console.log(time.toLocaleTimeString());
    
    
// },1000)


// function one(){
//     console.log("one");
    
// }

// function two(){
//     console.log("two");
    
// }

// function three(){
//     console.log("three");
    
// }

// one()
// setTimeout(two,0)
// three()



// Promise


// resolve - successfull data (.then())

// reject - error data (.catch())

// bending - coming data (.finally())


// API

// https://fakestoreapi.com/products/1

// fetch("https://fakestoreapi.com/products/")
// .then((data1)=>{

//     // json to js --> .json()

//    return data1.json()
    
// })
// .then((jsData)=>{

//    let tenDollerBellow =  jsData.filter((current,index,total)=>{

//         return current.price > 10
        

//     })

//     console.log(tenDollerBellow);
    
    
// })

// .catch((error)=>{

//     console.log(error);
    

// })

// .finally((a)=>{
//     console.log(a);
    
// })




// DOM - Document Object Model

// selecting 

// 1. getElementByTagName

let tag = document.getElementsByTagName("h1")

console.log(tag);

// 2. getElementByClassName

let class1 = document.getElementsByClassName("one")

console.log(class1);

// 3. getElementById

let id1 = document.getElementById("two")

console.log(id1);

// 1. querySelector 

let tag1 = document.querySelector("h2")

console.log(tag1);

let class2 = document.querySelector(".aa")

console.log(class2);

let id2 = document.querySelector("#bb")

console.log(id2);




// 2. querySelectorAll

let divAll = document.querySelectorAll("div")

console.log(divAll);


console.clear();



// // traversing 

// // parent element

// let child1 = document.querySelector(".child1")

// console.log(child1);  
// console.log(child1.parentElement);// parentElement  


// // child element

// let parent = document.querySelector(".parent")

// console.log(parent);
// console.log(parent.firstElementChild);// firstElementChild
// console.log(parent.lastElementChild);//lastElementChild 
// console.log(parent.firstChild);// firstChild
// console.log(parent.lastChild);// lastChild


// // sibling element

// let child11 = document.querySelector(".child1")


// console.log(child11);
// let child2 = (child11.nextElementSibling);// nextSiblingElement

// console.log(child2.nextElementSibling);

// console.log(child2.previousElementSibling);



// // manipulating

// // value - input tag inside value

// // textContent,innerText,innerHtml - all tag exclude input tag

// let input = document.querySelector("input")

// input.value = "hi"

// let h3 = document.querySelector("h3")



// let div = document.querySelector("div")

// div.innerHTML = `<h1>hi</h1><h5>hi</h5>`


// // event handler and event listner

// // event handler

// function click1(){
//    h3.innerText = "one";
// }


// // event listner

// let h2 = document.querySelector("h2")
// let btn = document.querySelector(".btn")

// btn.addEventListener("click",()=>{
//     h2.innerText = "good morning"
// })


// // style


// // h2.style.fontSize = "50px"

// // // add attributes 


// // h2.addAttributes("class","one")


// // // new tag 

// // document.createElement("h1")

// // // one tag inside another tag if you want give you can use 

// // append 
// // prepend

// // // eval()

// // console.log("10"+10);

// // console.log(eval("10"+10));

// remove()





let input = document.querySelector("input")
let button = document.querySelector("button")
let ol = document.querySelector("ol")

button.addEventListener("click",()=>{
    let inputValue = input.value
    let li = document.createElement("li")
    li.innerText = inputValue
    

    li.setAttribute("class","aa")

    ol.append(li)

    li.addEventListener("click",()=>{
        li.remove()
    })

})



























// // 4.Date


