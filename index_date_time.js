/* ------> Date and Time <------- */

// Date Methods (get and set)
// Time Methods (get and set)

// Javascript Date object represent a single moment in time in a platform-independent format
// Date objects contain the number that represents milliseconds since 1 january 1970  UTC

// Creating Date objects
// There are four ways to create new date objects
// new Date()
// new Date(year,month,day,hours,minutes,seconds,milliseconds);  // It takes 7 argument
// new Date(milliseconds)     // we cannot avoid month section
// new Date(date String)




/* 1st Method = new Date() */
// Date Objects are created with "new Date()" construction

// let curdate = new Date();
// console.log(curdate);          // Display the current date

// console.log(new Date());       // Display the current date
 
// console.log(new Date().toLocaleString());     // display the exact date and timing

// console.log(new Date().toString());             // display the exact day,date and timing (with india standard timing)




/* 2nd Method = Date.now()  */   
// This method retuns the value corresponding to the current time the number of milliseconds elapsed since 1 january 1970
// console.log(Date.now());


/* New method to create the new date() */
// new Date(year,month...)
// here 7 numbers specify years,month,day,hour,minutes,seconnds,milliseconds
// In javascript months are defined from 0 to 11
// 0 means january and 11 means december

// var d = new Date(2018,11,11,20,10,100);
// var d = new Date(2018,11,11);             // here it will give us timing
// var d = new Date(2021);                      // here it will give us the 1 january 1970 
// console.log(d.toLocaleString());




/* -----> new date(datestring) =  It creates a new date object from a date string  <------ */
// var d = new Date("october 13,2014 11:13:00");
// console.log(d);
// console.log(d.toLocaleString());    // it will give us the perfect output



/* -----> Last method to create a date <-------- */
// var d = new Date(1689058897780);      // in brackets those are the millisecinds
// var d = new Date(0);
// console.log(d);








/* -------> Date Methods <------ */

//const newdate = new Date()  // heree we create a new object with using new date() constructor
/* How to get the individual dates */
// This all methods gives us the current information
// console.log(newdate.toLocaleString());
// console.log(newdate.getFullYear());
// console.log(newdate.getMonth());
// console.log(newdate.getDate());
// console.log(newdate.getDay());

// How to set the Individual dates
// const setinfo = new Date();
// console.log(setinfo.setFullYear(2022));   // here it will optionally select the month and date
// console.log(setinfo.setDate(10));
// console.log(setinfo.setMonth(5));
// console.log(setinfo.toLocaleString());












/* --------> Time Methods <-------- */

// hoe to get the individual time
// const curtime = new Date();
// console.log(curtime.getTime());   // get time methoda returns the time in milliseconds since 1 january 1970
// console.log(curtime.getHours());  // it returns the hours in range of (0-23)
// console.log(curtime.getMinutes());
// console.log(curtime.getSeconds());
// console.log(curtime.getMilliseconds());


// how to set the individual time
// let curtime = new Date();
// console.log(curtime.setTime(3));
// console.log(curtime.setHours(3));  
// console.log(curtime.setMinutes(7));
// console.log(curtime.setSeconds(8));
// console.log(curtime.setMilliseconds(8));



/* -----> Methods to remember <------- */
// console.log(new Date().toLocaleDateString());  // display only date
// console.log(new Date().toLocaleTimeString(20));  // display only Time
// console.log(new Date().toLocaleString());      // display both date and time






/* -------> Javascript Math Object <--------- */
// This object allows to perform mathemetical tasks on numbers

// console.log(Math.PI);

// Math.round()
// returns the value of x rounded to its nearest number
// var t = 10.501;
// console.log(Math.round(t));

// Math.pow()
// Math.pow(x,y) returns the value of x to the power of y
// console.log(Math.pow(4,2));
// console.log(2**3);                     // another method

// Math.sqrt() 
// returns the square root of specified value that mention in it
// console.log(Math.sqrt(4));
// console.log(Math.sqrt(25));

// Math.abs()
// returns the absolute (positive) value of x
// console.log(Math.abs(-55));
// console.log(Math.abs(-55.67));
// console.log(Math.abs(4-6));

// math.ceil(x) = returns the rounded value of x to its nearest integer
// console.log(Math.ceil(9.0));
// console.log(Math.ceil(9.1));     // it will increment to the 10
// console.log(Math.round(9.1));    // it won't increment that number

// Math.floor()
// Math.floor object return the number before the pointer as it as
// console.log(Math.floor(9.9));
// console.log(Math.floor(4.8));

// Math.min()
// returns the minimum number from the list of argument
// console.log(Math.min(12,3,5,9,3,2));

// Math.max()
// returns the maximum number from list of argument
// console.log(Math.max(4,5,6,7,8));

// Math.random()
// this method returns the random number bwtween 0 and 1
// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));     // to get only first number and not the remaining numbers after decimal

// Math.trunc() = this method retuens the integer part of number
console.log(Math.trunc(4.67));
console.log(Math.trunc(-5.67));



// Practice time
// If the argument is positive then Math.Trunc() is equal to the Math.floor()
// otherwise Math.trunc() is equivalent to the Math.ceil()




