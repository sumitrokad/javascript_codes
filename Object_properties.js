/* --------> Object Properties <--------- */


// Now we can use DYNAMIC properties in Object
// let myname = 'sumit';
// const mydata = {
//     [myname] : "Hello How are you",   // for using dynmic properties we have to use square brackets outside that same varaibles
//     56 : "This is my age",            
// }
// console.log(mydata);


// If both are same,then no need to write key and values
// let myname = 'sumit';
// let myage = 23;
// mydata = {
//     myname : myname,
//     myage : myage 
// }

// mydata = {myname,myage};
// console.log(mydata);





/* ------> Spread Operator <------- */

// spread properties allows to create a new object by combining the properties of the object passed after the spread operator

const color = ['red','green','yellow','orange','blue','white'];
const newcolors = ['red','green','yellow','orange','blue','yellow','pink']

// with the help of spread operator we can add one array elements in another array with have some elements
const mycolors = [...color,'whitepink','golden'];
console.log(mycolors);
