/* ------> Modern Javascript <------- */

// Var = function scope
// let and constant = block scope

// var myname = "helo";
// console.log(myname);
// let myname = "hiii";
// console.log(myname);         // let and var is same

// const myname = "heloo";
// console.log(myname);
// var myname = "hiii";    // we cannot change the const variable after declaring
// console.log(myname)


// function biodata() {
//     var myname = "peter parker";
//     console.log(myname);
// }
// biodata();


// function biodata() {
//     var myname = "peter parker";
//     console.log(myname);
//     if (true) {                             // var is function scope we can use it anywhere and also we can change it from anywhere
//         var myname1 = "peter parker 2";
//         console.log(myname);
//         console.log(myname1);
//     }
//     console.log(myname);
// }
// biodata();


// function biodata() {
//     let myname = "peter parker";
//     console.log(myname);
//     if (true) {                          // let and const is a block scope if we use let in any block then we can't use it outside that block
//         let myname1 = "peter parker 2";  // let and const is limited to  block or function that we have created
//         console.log(myname);             // let and const scope is limited to that curley bracket that we have created
//         console.log(myname1);
//     }
//     console.log(myname1);
// }
// biodata();





/* -------> Template Literals (Template Strings) <--------- */

// for (let num = 1; num <= 10; num++){
//     let tableof = 2;
//    // console.log(tableof+"*"+num + " = " + tableof*num);

//    console.log(`${tableof}*${num} = ${tableof*num}`);   // Template Literals.. we can also write it like this
// }




/* -------> Default Parameters <--------- */
// Default parameters allows named parameters to be initialized with 
// default values if no value and undefined is passed


// whenevee we gives argument to the function it always goes to first variable
// function  multi(a,b = 4) {
//     return a*b;
// }
// console.log(multi(2));





/* -------> Fat Arrow function <--------- */

// normal function
// function sum() {
//     let a = 4, b = 4;
//     sum = a+b;
//     console.log(`Sum of numbers `+sum);    // Here we declare Console so we don't have to put sum in console again to call this function
// }
// sum();


// How To convert it into Fat Arrow Function //
// In Fat arrow function we have to always call function after 
// initialization of that function but in normal function we can call it anywhere
// => is a Fat Arrow
// const sum = () =>{
//     let a = 3,b=4;
//     console.log(`the multiplication is ${a*b}`);
// }
// sum();

// short method to write it
// const sum = () =>`Sum of two numbers is ${(a=4)*(b=5)}`;
// console.log(sum());

