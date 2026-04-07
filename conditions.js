console.log("Conditional Statements in JS")

// if else condition

let age = 19;

if(age >= 18){
    console.log("You can cast your vote")
}else{
    console.log("You're not eligible to vote")
}

// if else if-else

    let marks = 95;

    if(marks >= 90 && marks <= 100){
        console.log("A+ grades");
    }else if(marks >= 80 && marks <= 90){
        console.log("A Grade");
    }else if(marks >=75 && marks <= 80){
        console.log("B Grade")
    }else{
        console.log("Fail")
    }

let your_age = 18;
let isID = true

if(your_age >= 18){
    if(isID){
        console.log("you can enter portal")
    }else{
        console.log("you don't have an ID")
    }
}else{
    console.log("You are underage")
}

let isAdmin = false;
let isOwner = true;

if(isAdmin || isOwner){
    console.log("Access granted")
}

let num = 5;

let num_result = num > 0 ? "Num is positive" : "Num is negative"

console.log(num_result) 

// Switch Statement

let day = 7

switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
        
}

let number = 5;

if (number == "5"){
    console.log("Yes")
}else{
    console.log("No")
}

// Difference btw equality and strict equality operator

if (number === "5"){
    console.log("Yes")
}else{
    console.log("No")
}

// to check if given number is even or not

let new_number = 10;
if(new_number % 2 === 0){
    console.log("Number is even")
}else{
    console.log("Number is odd")
}

let remainder = 12

let final = remainder % 2;

console.log(final)