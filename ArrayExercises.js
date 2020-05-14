  // Array Methods

  let pets = [
  {
    name: "Rex",
    age: 4,
    ownerName: "Luke"
  },{
    name: "Spot",
    age: 7,
    ownerName: "Jade"
  },{
    name: "Scooby",
    age: 3,
    ownerName: "Shaggy"
  },{
    name: "Lucky",
    age: 1,
    ownerName: "Luke"
  },{
    name: "Sadie",
    age: 3,
    ownerName: "Daniel"
  },{
    name: "Duke",
    age: 5,
    ownerName: "Sabine"
  }
];
  // 1.
    // function owwnedByLuke(person) {
    //     if (person.ownerName == "Luke") {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // let lukePets = pets.filter(owwnedByLuke);
    // console.log(lukePets)

// 2
// function getOwner(pet) {
//     return pet.owner.Name;
// }
// let owners = pets.map(getOwner);
// console.log(owners);

// 3.
// function findShaggysPet(pet) {
//     return pet.ownerName == "Shaggy";
// }
// let shaggysPet = pets.find(findShaggysPet);
// console.log(shaggysPet);

// 4.

function filterCallback(pet) {
    let lessThan5 = pet.age < 5;
    let foundS = pet.name[0] == "s" || pet.ownerName[0] == "S";
    return lessThan5 && foundS;
}
let filteredPets = pets.filter(filterCallback);
console.log(filteredPets);
