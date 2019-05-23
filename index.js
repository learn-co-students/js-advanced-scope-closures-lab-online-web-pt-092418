function produceDrivingRange(number) {
  return function (str1, str2) {
    let distance = parseFloat(str2) - parseFloat(str1);
    return distance <= number ?
      `within range by ${Math.abs(distance - number)}` :
      `${Math.abs(distance - number)} blocks out of range`;
  }
}

function produceTipCalculator(number) {
  return function (fare) {
    return fare * number
  }
  
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId
    }
  }
}
