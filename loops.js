console.log("Loops in JavaScript")
// Loops are used to avoid code redundancy / repeatitions in code
// console.log("Sorry");
// console.log("Sorry");
// console.log("Sorry");
// console.log("Sorry");

// for loop // while loop // do while loop


// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }

// i = 1 (first step)
// i <= 4 (true) // 2 <= 4 (true) 3 <= 4
// 1 // 2 // 3 // 4

// let i = 1;  // initialization

// while Loop

// while(i<=5){ // condition
//     console.log(i); // print
//     i++; // increment / decreament 
// }

// Do while loop

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i == 5)

// infinite loop for loop

/*
for(let i = 0; i <= 20; i++){
    console.log(i)
    if(i == 8){
        break;
    }
    console.log(i)
}  for breaking loop at point */

/*
    for(let i = 1; i <= 20; i++){
        if(i === 8){
            continue;
        }
        console.log(i)
    }
        */

    // printing table of numbers

    // table of 2 using while loop
// let i = 2;

// while(i <= 10){
//     console.log(i)
//     i+=2;
// }

// for loop table of 2

// let num = 2

// for(let i = 1; i<=10; i++){
//     console.log(num * i);
// }

// table of 9 using for loop
// let num2 = 9;

// for(let i = 1; i <= 10; i++){
//     console.log(num2 * i)
// }

// 20 tak even numbers using for loop

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i, "Even Number ")
//     }
// }

// let i = 3;

// while(i <= 20){
//     console.log(i)
//     i += 2;
// }

// 7 X 1 = 7
// 7 X 2 = 14

// let table = 9

// for(let i = 1; i <= 20; i++){
//     // console.log(table * i);
//     // console.log(table + " X " + i + " = " + table * i) 
//     console.log(`${table} X ${i} = ${table*i}`)
// }


// sum of first n numbers

let sum = 0;

for(let i = 1; i <= 10; i++){
    sum += i
}

// 1 after first iterations and as iterations run the value of i will updated and sum will increase value
// 1 2 3 4 5 6 7 8 9 10 = 55
console.log(sum)

// desecnding order in for loop
// for(let i = 5; i >= 1; i--){
//     console.log(i)
// }

// desending order using while loop
let i = 5;
while(i >= 1){
    console.log(i)
    i--;
}

// assending order
for(let i = 1; i <= 5; i++){
    console.log(i)
}

// pyramid approach pattern problems 

// pyramid in assending order
for(let i = 1; i <= 5; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += "*"
    }

    console.log(row)
}

// pyramid in descending order
for(let i = 5; i >= 1; i--){
    let row = ""
    for(let j = 1; j <= i; j++){
        row += "*"
    }
    console.log(row)
}

// numebrs instead of stars

for(let i = 1; i <= 5; i++){
    let numbers = "";
    for(j = 1; j <= i; j++){
        numbers += j
     }
    console.log(numbers)
}

// aligned pyramids 

// right aligned pyramids 
let r = 5;

for(let i = 1; i <= 5; i++){
    let row = ""
    // spaces
    for(let j = 1; j <= r - i; j++){
        row += " "
    }

    // stars
    for(let k = 1; k <= i; k++){
        row += "*";
    }
    console.log(row)
}

// left pyramid 

let l = 5;

for(let i = 1; i <= 5; i++){
    let row = ""

    // stars
    for(let k = 1; k <= i; k++){
        row += "*"
    }
    console.log(row)
}

// centered pyramid

let c = 5;

for(let i = 1; i <= c; i++){
    let row = "";

    // spaces
    for(let j = 1; j <= c - i; j++){
        row += " "
    }

    // stars 
   for(let k = 1; k <= 2*i -1; k++){
    row += "*"
   }

   console.log(row)
}