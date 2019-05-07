function produceDrivingRange(blockRange){
  return function(firstBlock, secondBlock){
    let distance = Math.abs(parseInt(firstBlock) - parseInt(secondBlock));
    if (distance <= blockRange) {
      return `within range by ${blockRange - distance}`;
    } else {
      return `${distance - blockRange} blocks out of range`;
    }
  };
}

function produceTipCalculator(percentage) {
  return function(subtotal) {
    return subtotal * percentage;
  };
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  };
}
