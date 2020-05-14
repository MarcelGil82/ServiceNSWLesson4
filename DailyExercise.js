let pets = [
    {
      name: "Rex",
      age: 4,
      ownerId: 42
    },{
      name: "Spot",
      age: 7,
      ownerId: 132
    },{
      name: "Scooby",
      age: 3,
      ownerId: 546
    },{
      name: "Lucky",
      age: 1,
      ownerId: 42
    }
  ];
  let people = [
    {
      name: "Luke",
      id: 42
    },{
      name: "Shaggy",
      id: 546
    },{
      name: "Jade",
      id: 132
    }
  ];
  // what i started:
//   function findPetId(element) {
//       if(element.ID == ownerId)
//   } return true;
function mapPet(pet) {
    function findPersonByID(owner) {
        return owner.Id == pet.ownerId
    }
    let owner = people.find(findPersonById)
    people.find();
}

let detailedPets = pets.map();
