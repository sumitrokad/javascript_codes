/* -------> Arrays in Javascript <-------- */

// when we use "var" then we stored only a single value
// for storing multiple values in one variables we can used Array
// In javascript we can store different data types of value (variable) in one array
// In javascript we have Array class and prototype of this class
// To stores multiple data types and values in one variable we can used Array!

// we can declare array like this
// var friends = ["hello",4,"male","female",90];

// first index element in an array is called lower index or lower boundry
// last index element in an array is called upper index and upper boundrys


// Array selection,displaying ,traversal and navigate through it!
// var friends = ["hello","male","female"];
// console.log(friends[0]);
// console.log(friends[friends.length-1]);

// to check length of an array
// console.log(friends.length);   // here we use length property


// we use for loop to navigate array
// var friends = ["hello","male","female"];
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }



// after E6 update ECMAscript there is new for..in and for..of loop

// for in loop
// With using for in loop we can get all element index numbers
// var friends = ["hello","male","female"];
// for (let elements in friends) {
//     console.log(elements);
// }

// for of loop
// with using for of loop we can get all elements data
// var friends = ["hello","male","female"];
// for (let elements of friends) {
//     console.log(elements);
// }


// For Each loop
// Calls a function for each element in the array (for individual elements )
// var friends = ["hello","male","female"];


// normal Traditional funtion
// var friends = ["hello","male","female"];
// friends.forEach(function(element,index,array){
//     console.log(element + " index: " + index + " array: " + array ); 
// });


// Fat Arrow Function
// var friends = ["hello","male","female"];
// friends.forEach((element,index,array)=>{     // we can use fat arrow function or traditional function there is just difference of "function" word and "=>" symbol
//     console.log(element + " index: " + index + " array: " + array ); 
// });


/*------> */




/* --------> Array subsection = insert,add,replace and delete elements in an array (CRUD) <------- */

// Array.prototype push()
// The push() methods add one or more elements to the end of the array
// and return new length of the array
// const animals = ["pigs","goats","sheep"];

// const count = animals.push("lion");  
// animals.push("lion");                    // this willl add at the last index of ann array
// console.log(animals);
// console.log(count);                      // returns length

// animals.push("lion","tiger","leapord");
// console.log(animals);




// Array prototype unshift()
// The unshift() method add elements at the beggining of the array
// and returns new length of the array
// const animals = ['sumit','mahadev','rokade'];
// // animals.push('mayur','mahadev','rokade');
// const count = animals.unshift('mayur','mahadev','rokade');
// console.log(animals);
// console.log(count);




// Array prototype pop();
// The pop method delete the last element of an array and returns that element
// and also change the length of that array
// const plants = ['broccoli','cauliiflower','kale','tomato','cabbaage'];
// console.log(plants);
// console.log(plants.pop());        // delete and retuen last element
// console.log(plants);              // print that array





// Array prototype shift()
// The shift() method delete the first element of an array and returns that element
// and also changes that length of the array
// const avengers = ['captain','tony','thor', 'natasha'];
// console.log(avengers.shift());
// console.log(avengers);




// ------>Array prototype splice()<--------

// It add/or remove elements from an array!

// sol1: add "june" at the last index using splice method
// const calender = ['jan','feb','mar','april','may'];

// calender.splice(calender.length,0,"jun");   // instead of 5th we can write calender
// const newcalender = calender.splice(5,0,"jun");                 // on 5th index we are inserting new element and 0th means not deleting any element
// console.log(calender);



// sol2: returning length
// console.log(ewcalender)     // It returns new empty array


// sol3: update mar to Mar
// const calender = ['jan','feb','mar','april','may'];
// const newcalender = calender.splice(2,2,"Mar");
// console.log(calender);

// another method to update mar to Mar
// const calender = ['jan','feb','mar','april','may'];
// const newcalender = calender.indexOf('mar');
// if (newcalender != -1) {
//     calender.splice(newcalender,1,'Mar');
//     console.log(calender); 
// }
// else{
//     console.log("No result found");
// }



// sol4: delete june from array
// const calender = ['jan','feb','mar','april','may','june'];
// const newcalender = calender.indexOf('june');
// if (newcalender != -1) {
//     const updatecalender = calender.splice(newcalender,1);
//     console.log(calender); 
//     console.log(updatecalender);
// }
// else{
//     console.log("No result found");
// }

// const calender = ['jan','feb','mar','april','may','june'];
// const newcalender = calender.indexOf('april');
// if (newcalender != -1) {
//     const updatecalender = calender.splice(newcalender,Infinity);  // infinity to delete all elements with june and above that
//     console.log(calender); 
//     console.log(updatecalender);
// }
// else{
//     console.log("No result found");
// }





/*------> Challenge time <-------*/
 
// Array subsection 4  -----> Map and reduce Method <------
// map will return new array containing the result of calling a function on every element in this array
// const array = [1,2,3,4,5];
// let array1 = array.map((curelment,index,array)=>{
//     return curelment>3
// })
// console.log(array);
// console.log(array1);

// const array = [1,2,3,4,5];
// let array1 = array.map((curele,index,array)=>{
//     return `index of an array is ${index} and valus is ${curele} belong to the array ${array}`;
// })
// console.log(array1);

// here we use foreach
// the difference between map() and foreach() is that map() return new array and for each retuen undefined
// we can use reduce(),sort() and filter methods after performing map() method on an array
// but in foreach we can't use that all methods

// const array = [1,2,3,4,5];
// let array1 = array.forEach((curele,index,array)=>{
//     return `index of an array is ${index} and valus is ${curele} belong to the array ${array}`;
// })
// console.log(array1);



/*-----> Challenge time <------ */

// Q1.find the square root of each element in an array
// const array = [25,36,49,64,81];
// let array1 = array.map((Curele)=>{
//     return Math.sqrt(Curele);
// })

// let array1 = array.map((Curele)=> Math.sqrt(Curele))
// console.log(array1);


// Q2.multiply elements by 2 and return elements which is greater than 10
// we can use two methods at a time is called chaining effect

// const array = [2,3,4,5,6,7,8];
// let arr2 = array.map((Curele)=>{
//     return Curele*2;
// }).filter((Curele)=>{
//     return Curele>10;
// })

// const array = [2,3,4,5,6,7,8];
// let arr2 = array.map((Curele)=>Curele*2).filter((Curele)=>Curele>10);
// console.log(arr2);






/*----> Reduce() method <----- */

// flatten an array means to convert the 3d and 2d array into single dimensional array
// The reduce() method executes reducer function (that you provide) on each element of the array that resultinng in a single output value

// The reduce function takes four arguments;

// when we want to add something or reduce some values then we have to use Reduce that values

// Accumulator
// Current value
// current index
// source array


// let array = [5,6,3,6];
// // accumulator means a small storage where all elements are there for adding,adding process is done in accumulator
// let sum = array.reduce((accumulator,curelement,index,array)=>{
//     return accumulator += curelement;
// })
// console.log(sum);


/* Map,Reduce and filter methods together */
// const array = [2,3,4,5,6,7,8];
// let arr2 = array.map((Curele)=>Curele*2).filter((Curele)=>Curele>10).reduce((accumulator,curelement)=>{
//     return accumulator += curelement;
// })
// console.log(arr2);


// for multiplication
// const array = [2,3];
// let arr2 = array.reduce((accumulator,curelement)=>{
//     // here we did multiplication
//     return accumulator *= curelement;
// })
// console.log(arr2);


// initial method
// To add new value or string in array we can use initial method by "," 
// const array = [2,3];
// let arr2 = array.reduce((accumulator,curelement)=>{
//     // here we did multiplication
//     return accumulator *= curelement;
// },7)           // here we declare 7 to add it in this array now this 7 will go in accumulator as current value
// console.log(arr2);



/* ------> Challenge time <------- */
// converting 3d nd 2d array in one dimensional array
// let arr = [
//             ['zone1','zone2'],
//             ['zone3','zone4'],
//             ['zone5','zone6'],
//             ['zone7','zone8']
//         ];
// const newarr = arr.reduce((accum ,curele)=>{
//     return accum.concat(curele);
// })
// console.log(newarr);


