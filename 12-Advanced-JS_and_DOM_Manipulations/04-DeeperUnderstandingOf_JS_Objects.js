const houseKeeper1 = {
  name: "Temi",
  yearsOfExperience: 12,
  cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
};

//Constructor Function... Whats special about constructor functions is that the name have to be capitalized and it's no longer the same camelCase... Hint: The capitalized letter helps us to know that this is a constructor function... The constructor function is like a factory for creating objects ie OOP... The inputs in the constructor function are what we are going to provide when we create new object from the factory

function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}

//Initialise Object... Create an object from the Factory/class

const bellBoy1 = new BellBoy("Temi", 19, true, ["French", "English"]);
console.log(bellBoy1);

//Turning the houseKeeper1 object into constructor function

function HouseKeeper(name, yearsOfExperience, cleaningRepertoire) {
  this.name = name;
  this.yearsOfExperience = yearsOfExperience;
  this.cleaningRepertoire = cleaningRepertoire;
}

//creating new object
const houseKeeper01 = new HouseKeeper("Temi", 12, [
  "bathroom",
  "lobby",
  "bedroom",
]);
console.log(houseKeeper01);
