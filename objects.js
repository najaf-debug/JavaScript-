// let student = {
//     name: "Najaf",
//     age: 24,
//     university: "UAD",
//     hobbies: ["singing", "golf", "cricket"],
//     class: {
//         semester: 6,
//         id: 1064,
//     },
//     sayHello: function () {
//         console.log("Good Morning " + this.name);
//     },
// }


// console.log(student.name);
// console.log(student.hobbies[1])
// console.log(student.class.semester);
// student.sayHello();

// for in
// for (let key in student) {
//     console.log(key, student[key])
// }

// const students = [
//     {
//         name: "Najaf",
//         age: 24,
//         university: "UAD"
//     },
//     {
//         name: "maaz",
//         age: 25,
//         university: "Comsats"
//     },
//     {
//         name: "Mariamzx",
//         age: 20,
//         university: "RandiKhana"
//     },
// ]

// students.map((student) => {
//     console.log(student.name, student.age, student.university)
// })

// let newStudents = students.filter((student) => {
//     return student.age >= 24;
// });

// console.log(newStudents)

// amazon real world example of filters 

const products = [
    {
        name: "T-Shirt",
        price: 1200,
        color: "red"
    },
    {
        name: "Polo shirt",
        price: 800,
        color: "black"
    },
    {
        name: "Dress-Shirt",
        price: 650,
        color: "white"
    },
    {
        name: "T-Shirt",
        price: 900,
        color: "sky-blue"
    },
]

let newProducts = products.filter((product) => {
    return product.price <= 1000 && product.name === "T-Shirt";
});

console.log(newProducts);

newProducts.map((product) =>
    console.log(product.name, product.price, product.color)
)