let people = [
{
    name: "Marcel",
    message: "Hi"
},{
    name: "John",
    message: "Hello"
}
]

function myGreeter(people, callback) {
    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let greeting = callback(person.message);
        console.log(`${greeting} ${person.name}`);
    }
}

function myCallbackFunction(message) {
    if (message == "Hi" || message == "Hello") {
        return "Hi";
    } else {
        return "Hello There";
    }
}

function anotherCallbackFunction(message) {
    if (message == "I'm Dan!") {
        return "NO WAY, THAT'S SO COOL";
    } else {
        return "Hello";
    }
}

myGreeter(people, anotherCallbackFunction);

// Array.filter
function myFilterFunction(person) {
    if (person.name[0] == "M") {
        return true; 
    } else {
        return false;
    }
    }

    let filteredArray = people.filter(myFilterFunction);

    console.log(filteredArray)

// Array.Map

function getNames(person) {
    return person.name;
}
let names = people.map(getNames);

console.log(names)

//Array.find

function findGreetingHi(person) {
    return person.message == "John"
}
let person = people.find(findGreetingHi);
console.log(person);