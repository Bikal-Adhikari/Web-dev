function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert("cleaning in process...");
  };
}

let houseKeeper1 = new HouseKeeper(12, "James", ["bedroom"]);
houseKeeper1.clean();
