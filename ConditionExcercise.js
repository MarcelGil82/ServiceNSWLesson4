// Conditions
// 1. 
// function isBetween(floor, ceiling, num) {
//     if (num > floor && num < ceiling) {
//     return true; 
//     }
//          else {
//         return false
// }
// }
// let answer = isBetween (15, 20, 17) // if you change the order i.e (15, 20, 8), this will return false
// console.log(answer)

// 2. 
// function checkNameAndAge(person) {
//     let isOver30 = person.age > 30;
//     let foundX = false;
//     for (let i = 0; i < person.name.length; i++) {
//         let letter = person.name[i].toLowerCase();
//         if (letter == "x") {
//             foundX = true;
//             break;
//         }
//     }
//     if (isOver30 || foundX) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let person = {
//     name: "Fox",
//     age: 29

// console.log(checkNameAndAge(person));

// 3.
// function checkExactNameAndAge(person, age, name) {
//     // if the age of the person is equal to the second parameter
//     let equalAge = age == person.age;

//     // if the name of the person is NOT equal to the thrid parameter
//     let notEqualName = name != person.name;

//     if(equalAge && notEqualName) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkExactNameAndAge({
//     name: "Luke",
//     age: 23
// }, 23, "David"));

// console.log(checkExactNameAndAge({
//     name: "Dan",
//     age: 22
// }, 23, "Sinclair"));

