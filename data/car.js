class Car {
  brand;
  model;
  speed;
  isTrunkOpen;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
    this.speed = carDetails.speed;
    this.isTrunkOpen = carDetails.isTrunkOpen;
  }

  displayInfo() {
    console.log(
      `${this.brand} , ${this.model} ,Speed : ${this.speed} Km/h  Trunk : ${this.isTrunkOpen}`
    );
  }
  go() {
    if (this.isTrunkOpen) {
      console.log("sorry trunk is open");
      return;
    }
    this.speed += 5;
    if (this.speed > 200) {
      this.speed = 200;
    }
  }
  break() {
    this.speed -= 5;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    if (this.speed > 0) {
      console.log("sorry car is moving ");
    } else {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

const car1 = new Car({
  brand: "Toyota",
  model: "Corolla",
  speed: 0,
  isTrunkOpen: true,
});
const car2 = new Car({
  brand: "Tesla",
  model: "Model 3",
  speed: 0,
  isTrunkOpen: true,
});

class RaceCar extends Car {
  acceleration;

  constructor(manufacturerDetails) {
    super(manufacturerDetails);
    this.acceleration = manufacturerDetails.acceleration;
  }
  displayInfo() {
    console.log(
      `${this.brand} , ${this.model} ,Speed : ${this.speed} Km/h  acceleration : ${this.acceleration}`
    );
  }
  go() {
    this.speed += this.acceleration;
    if (this.speed > 300) {
      this.speed = 300;
    }
  }
  break() {
    this.speed -= 10;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }
  openTrunk() {
    console.log("racing car dont have trun ");
  }
  closeTrunk() {
    console.log("racing car dont have trun ");
  }
}

const raceCar = new RaceCar({
  brand: "McLaren",
  model: "F1",
  speed: 0,
  acceleration: 20,
});

raceCar.go();
raceCar.break();
raceCar.displayInfo();
