// if === money
// ---> Buy some stuff
// else !== money
// ----> Bring some money dude

// if (condition) {...}
// else if (condition) {...}
// else {...}

// let a = 20;
// let b = 20;

// if (a > b) {
//     console.log("a is greater than b");
// } else if (a < b) {
//     console.log("a is less than b");
// } else {
//     console.log("a is equal to b");
// }

// Conditional Statement
// let time = 20;
// let greetings;

// if (time < 10) {
//     greetings = "Good Morning";
//     console.log(greetings);
// } else if (time < 20) {
//     greetings = "Good Day"
//     console.log(greetings);
// } else {
//     greetings = "Good Evening";
//     console.log(greetings);
// }

// let password = 9;

// if (password === 8) {
//   console.log("Welcome");
// } else if (password <= 8) {
//   console.log("Password Too Short");
// } else if (password >= 8) {
//   console.log("Too Long Password");
//   console.log("Password should be at least 8 characters");
// } else {
//   console.log("Please provide a password");
// }

// Switch Statement
// switch (expression) {
    // case x:
        // print 
        // break 
    // case y 
        // print 
        // break 
// }

// let x = 10;
// let bulb;

// switch (x) {
//     case 0:
//         bulb = "off"
//         console.log(bulb);        
//         break;

//     case 1:
//         bulb = "On"
//         console.log(bulb);        
//         break;
//     default:
//         bulb = "no value found"
//         console.log(bulb);        
// }

let day = 'friday';

switch (day) {
    case "monday":
        document.write('Today is monday');
        break;
    case "tuesday":
        document.write('Today is tuesday')
        break;
    case "Wednesday":
        document.write('Tioday is wednesday');
        break;
    default:
        document.write("Don't know what day it is")
}