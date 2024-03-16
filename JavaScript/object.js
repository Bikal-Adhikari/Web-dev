// let houseKeeper1 = {
//     yearsOfExperience: 12,
//     name: "Jane",
//     cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
//   };

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
}

let houseKeeper1 = new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);
let houseKeeper2 = new HouseKeeper(14, "Janet", ["lobby", "bedroom"]);
