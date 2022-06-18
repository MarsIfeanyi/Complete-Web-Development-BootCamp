// Method is a function that is associated with an object

const bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"],
  moveSuitcase: function () {
    alert("may i take your suitcase?");
    pickUpSuitcase();
    move();
  },
};

//Using constructor functions
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function () {
    alert("may i take your suitcase?");
    pickUpSuitcase();
    move();
  };
}

function HouseKeeper(name, yearsOfExperience, cleaningRepertoire) {
  this.name = name;
  this.yearsOfExperience = yearsOfExperience;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert("cleaning in Progress");
  };
}

const houseKeeper = new HouseKeeper("Temi", 12, ["lobby", "bedroom"]);

houseKeeper.clean();
