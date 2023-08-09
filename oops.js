/* -----> Object Oriented Javascript <----- */

// object literal is used as key :value pair data structure
// stooing variables and functions in one container
// we can refer this as an object

// 1st way
// object literal
// let biodata = {
//     // key = value
//     name:"sumit",
//     age:20,
//     getdata:function(){
//         console.log(`My name is ${biodata.name} and age is ${biodata.age}`);
//     }
// }
// console.log(biodata);
// console.log(biodata.name);
// console.log(biodata.age);
// console.log(biodata.getdata());
// biodata.getdata()



// 2nd way
// let biodata = {
//     // key = value
//     name:"sumit",
//     age:20,
       // we can also write functions without "function" word
//     getdata(){
//         console.log(`My name is ${biodata.name} and age is ${biodata.age}`);
//     }
// }
// biodata.getdata();




// 3rd way
// If we want to declare object as a value inside the object
// let biodata = {
//     // key = value
//     name : {
//         myname : "sumit",    
//         mysirnaame : "rokade"
//     },
//     age:20,
//     getdata:function(){
//         console.log(`My name is ${biodata.name} and age is ${biodata.age}`);
//     }
// }
// console.log(biodata.name.myname);     // to get value of object which is inside the object







/* --------> What is this Object <-------- */

// The defination of this object is that it contain the current context
// Thhe This object can have different values depending on where it is plced


// ex 1
// for example
// console.log(this); // It refers to the current context and that is window global object


// we can get global scope variables with the help of this obejct
// ex 2
// here we mention this objec in function but also it refers to the window global object
// function myname() {
//     console.log(this);
// }
// myname();


// ex 3
// here we can get the output as sumit becooz "mynames" is a global scope
// var mynames = 'sumit';
// function myname() {
//     console.log(this.mynames);
// }
// myname();


// ex 4
// if we mention this object inside object then for this object gllobal scope is from inside the object
// after mentioning this in any object then current context of this is change from window object to current object
// const obj = {
//     myage : 20,
//     myname(){
//         console.log(this);
//         console.log(this.myage);
//     }
// }
// obj.myname();


// ex 5
// if we use fat array function "=>" in function with this object then it again points to the window global object
// const obj = {
//     myage : 20,
//     myname : ()=> {
//         console.log(this);
//         console.log(this.myage);
//     }
// }
// obj.myname();


// ex 6
// if we write this object in function and get data from other object then it can get that data
// here currnt context of this object is again biodata
// let biodata = {
//     myname : {
//         mynameis : 'sumit',
//         mysirnameis : 'rokade',
//     },
       // things to remember that object myname is the key and the object is act like a value
//     myage : 4,
//     getdata(){
//         console.log(`my name is ${this.myname.mynameis} and my age is ${this.myage}`);
//     }
// }
// biodata.getdata();






