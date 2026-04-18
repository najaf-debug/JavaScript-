// //Q:1 find cube of only even elements in array

// let marks = [9, 6, 4, 6, 9, 2, 4];

// const findCube = marks.map(mark => mark % 2 === 0 ? mark ** 3 : mark);

// console.log(findCube)

// //Q:2 remove zero from array

// let marks = [0, 6, 4, 10, 9, 40, 30];

// const removeZeroes = marks.filter((mark) => {
//     return mark !== 0;
// })

// let removeZeroes = marks.filter(mark => mark !== 0)

// console.log(removeZeroes);

// //Q:3 find the largest and lowest number in an array

// let marks = [88, 0, 10, 89, 5, 50, 60, 99];

// let largest = marks[0] // we assume that our largest number is at zeroth index

// for (let mark of marks) {
//     if (mark > largest) {
//         largest = mark
//     }
// }

// console.log(largest)

// let marks = [88, 0, 10, 89, 5, 50, 60, 99];

// let lowest = marks[0]

// marks.map((mark) => {
//     if (mark < lowest) {
//         lowest = mark;
//     }
// })

// console.log(lowest);

// //Q:4 find both min and max in a single loop

// let marks = [88, 0, 10, 89, 5, 50, 60, 99];


// let min = marks[0]; // assume
// let max = marks[0]; // assume

// for (let mark of marks) {
//     if (mark > max) max = mark;
//     if (mark < min) min = mark;
// }

// console.log("Max : ", max);
// console.log("Min : ", min);

// //Q:5 find sum of array

// let marks = [88, 0, 10, 89, 5, 50, 60, 99];

// // const totalCal = marks.reduce((acc, val) => {
// //     return acc + val
// // }, 0);

// let totalCal = marks.reduce((acc, val) => acc + val, 0);

// console.log(totalCal)

// //Q:6 find average of marks in an array

// let marks = [88, 0, 10, 89, 5, 50, 60, 99];

// let totalCal = marks.reduce((acc, val) => acc + val, 0);
// let average = totalCal / marks.length

// console.log(average);

// //Q:7 find students name starts from "a"

// const students = ["Najaf", "Maaz", "Amir", "Qudrat", "Ali"]

// let newStudents = students.filter((student) => student[0] === "a" || student[0] === "A");

// console.log(newStudents);

// //Q:8 convert an array into string

// const students = ["Najaf", "Maaz", "Amir", "Qudrat", "Ali"]

// let newStudents = students.join(" ");

// console.log(newStudents);

// //Q:9 copy values of 2 arrays in 3rd array
// // we will copy using spread parameter

// let array_one = [7, 4, 8, 6];
// let array_two = [10, 9, 5, 1, 2];

// let array_three = [...array_one, ...array_two];

// console.log(array_three)

// console.log(...array_one) // rest parameters

// //Q:10 flat an array (upto infinity)

// let array = [1, 4, 5, 7, 9, 5, 3, 21, [8, 9], [10, 11, 12], [10, 20, 30]];

// let flatArray = array.flat(Infinity);

// console.log(flatArray);

// //Q:11 combine map, filter and reduce

// const marks = [78, 67, 44, 90, 80, 12, 15, 66, 88, 90];

// let newStudents = marks.filter((student) => student > 70).map((std5) => std5 + 5).reduce((acc, val) => acc + val, 0);


// // first we filtered marks of students > 70 
// // then we mapped using std5 object created from newStudents // add 5 in those 70+ marks
// // then used the reduce method acc + val to calculate all of them // combine all of them together
// console.log(newStudents);

// Q:12 count even numbers  

let numbers = [1, 2, 4, 6, 7, 8, , 9, 10];

let countEven = numbers.reduce((acc, val) => {
    return val % 2 === 0 ? acc + val : acc;
}, 0);

console.log(countEven)

// Q:13 remove duplicates from an array

let arr = [1, 2, 3, 4, 4, 5, 6, 6];

let remDup = arr.reduce((acc, val) => {
    if (!acc.includes(val)) {
        acc.push(val);
    }
    return acc;
}, []);

console.log(remDup);