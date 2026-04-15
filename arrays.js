console.log("Arrays in JavaScript")

// let a = 20;
// let name = "ali"

// arrays are collections of multiple values

// const students = ["Najaf", 24, "Maaz", 23, 99.9, true, { name: "Haider" }, [65]]
// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// console.log(students[3])

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i])
// }


// methods first one is length
// second pop

// marks .pop() remove last value from array index
// marks.push(10) // push method to add value at specific index
// marks.unshift(10) // push value to start of the array this method is used for adding values at start it works as push method but from start
// marks.shift() // shift method is used to remove value at start of the array it works as pop but in opposite direction
// marks.splice(2, 0, 12, 45); // if we want to add something at somespecific index (in this we have total 3 parameters) 1:- which index 2:- how much elements do you want to delete 3:- what you want to add
// console.log(marks);

// for of loop, for in loop, for each...


// for of loop (Index k ooper jo value hai wo batata hai)

// for (let mark of marks) { // declared a variable name mark and stored marks array in mark
//     console.log(mark + 2) // if we want to add 2 numbers in our array we give mark + 2 or + 1 if want to add 1 number
// }

// const cars = ["BMW", "Volvo", "Mini"]

// for (let car of cars) {
//     console.log(car)
// }

// for in loop (index batata hai) it is used to iterates over an objects enumerable properties like keys, index, names

// for (let i in marks) { // for in is used to print indexing of the iterable object i.e Strings, arrays, maps, nodelists
//     console.log(i)
// }

// for each loop we pass a callback function

// marks.forEach((mark) => {
//     console.log(mark + 2)
// })

// map is very important method especially in ReactJS whenever we take Api calls in react api se data le k oosko map krna hota hai frontend py
// every product in amazon and user lists every thing is mapped on amazon site

// const marks = [7, 9, 4, 5]
// // find square of all elements using mapping in arrays in js

// // map decleration

// let newArray = marks.map((mark) => {
//     return mark ** 2
// })

// console.log(newArray)
// console.log(marks);

// filters

// const marks = [88, 89, 45, 67, 23, 90, 11, 10];

// const filteredMarks = marks.filter((mark) => {
//     return mark > 50;
// })

// console.log(filteredMarks);

const marks = [88, 89, 45, 67, 23, 90, 11, 10];

// reduce (cart items mein use hota hai)
// in reduce method of arrays we have 2 parameters which are acc and val
// accumulative is declared after closing curly braces 
// val is value of all array elements

const total = marks.reduce((acc, val) => {
    return acc + val // acc is accumulative which is initial value and val is value basically it means initial plus value = tatal answer
}, 0) // accumulator

console.log(total)

// acc value is zero as per above example
// val value = 88 which is zeroth index
// total = 0 + 88 => acc = 88
// 88 + 89