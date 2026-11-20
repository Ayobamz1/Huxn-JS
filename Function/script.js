// function greet() {
//     console.log('hello from a function');
// }

// call, run, execute
// greet();
// greet();
// greet();
// Function Declaration
// function thanks() {
//     console.log('Thank you everyone');
// }

// thanks();
// thanks();

// function sayHello(name) {
    // console.log(`Hello ${name = "Ayobamz"}`);
    // console.log(`Hello ${name}`);
    // console.log("Hello" + " " + "name"); 
// }

// sayHello("Ayobamz");
// sayHello("Alex");
// sayHello("Festus");
// sayHello("John");

// return --> function
// function add(x, y) {
//     return x + y;
// }
// console.log(add(10, 30));

// const res1 = (add(10, 20));
// const res2 = (add(10, 30));
// const res3 = (add(10, 40));

// console.log(res1);
// console.log(res2);
// console.log(res3);

// function myFunction(p1, p2) {
//     return p1 * p2;
// }

// let x = myFunction(4,5);
// console.log(x);

// Function Declaration 
// function sayHello(username) {
//     console.log(`Hello ${username}`);
// }

// sayHello("Ayobamz")
// Function Expression 
// const greetings = function (user) {
//     console.log(`Hello ${user}`);
// }

// greetings("John")

// function showCallFunc(fn) {
//     const value = 10;
//     fn(value)
// }

// showCallFunc(function(value) {
//     console.log(value);
// })

// function greet(name, cb) {
//     console.log(`Hello ${name}`);
//     cb()
// }

// function cb() {
//     console.log(`I am a callback function`);
// }

// greet("John", cb);

// let textMessage = "hi" // Global Variable

// {let textMessage = "hi"} // Local Variable
    // console.log(textMessage);

// let textMessage = "hi" // Global
// console.log(textMessage);

// function showMessage() {
//     let textMessage = "Hello"
//     console.log(textMessage);
    
// }

// showMessage();

// for (let i = 0; i < 5length; i++) {
//     console.log(i);
// }

// console.log(i); // Global ERROR

function greet() {
    return `Hellow, my mame is ${person.name} & I am ${person.age} years old`    
}

const person = {
    name: "Ayobamz",
    age: 30,
    greet,
}

// console.log(person.greet());
console.log(greet());

