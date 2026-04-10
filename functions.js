console.log("Functions in JS")

// function greeting (name){
    
//     console.log("Good Morning", name)
// }

// greeting("Ali")
// greeting ("Zain")

// arguments 
// parameters

// Add two numbers

// let num1 = 10;
// let num2 = 20;

// let answer = num1 + num2

// console.log(answer)

// function

// add two nums in normal functions
// function addTwoNumbers (a,b){
//     console.log(a+b)
// }

// add two nums in arrow function
// const addTwoNumbers = (a,b) => {
//     console.log(a+b)
// }
// const addTwoNumbers = (a,b) => console.log(a+b) // single line functions arrow functions
// addTwoNumbers (5,12)


// addTwoNumbers(8,9)
// addTwoNumbers(5,10)
// addTwoNumbers(15,6)

// table of 10 and 9 using functions

// function printTable (num, limit){
//     for(let i = 1; i <= limit; i++){
//         console.log(num + " X " + i + " = " + num * i)
//     }
// }

// printTable(9,10)
// printTable(10,12)

// const addThreeNumbers = (a,b,c) => {
//     return a + b + c
// }

// const rcv = addThreeNumbers(7,8,9)
// console.log(rcv)

// default params

// const add = (a = 0, b = 0) => {
//     return a + b;
// }

// console.log(add(5 , 10))

// res parameters

// in JS we have 3 additional loops that are for each for in and for of loops

// rest parameters

// const addNumbers = (...nums) => {
//     let sum = 0;
//     for(let num of nums){
//         sum += num
//     }

//     console.log(sum)
// }
// addNumbers(7, 8,9)


// Calculator using loops and funcions

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let op = prompt("Enter operator('+', '-', '/', '*', '%')");

let result = calculator(a,b,op);
alert("Result: "+ result);


function calculator(a, b, operator) {
    if (operator === "+") return a + b;
    else if (operator === "*") return a * b;
    else if (operator === "-") return a - b;
    else if (operator === "/") return a / b;
    else if (operator === "%") return a % b;
    else return "Invalid value";
}

// console.log(calculator(10, 5, "+"));

// calcualtor using switch statements + functions logic

function calculatorSwitch (a,b,operator){
    switch (operator) {
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return b === 0 ? "cannot divide by zero" : a/b;
        case "%":
            return a%b;
        default:
            return "Invalid value"
    }
}

console.log(calculator(12,10, "/"))