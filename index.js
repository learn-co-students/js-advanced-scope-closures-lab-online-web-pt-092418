function produceDrivingRange(range) {
  return function(start, end){
    let s = parseInt(start.slice(0, start.length-2))
    let e = parseInt(end.slice(0, start.length-2))
    if ((e - s) < range){
      return `within range by ${range - (e - s)}`;
    }
    else {
      return `${(e - s) - range} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage){
  return function(fare){
    return fare * percentage;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  };
}
