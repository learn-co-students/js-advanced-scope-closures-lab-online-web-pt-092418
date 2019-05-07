function produceDrivingRange(num) {
  return function (startBlock, endBlock) {
    const endBlockNum = parseInt(endBlock.substring(0, 2), 10);
    const startBlockNum = parseInt(startBlock.substring(0, 2), 10);
    const blocks = Math.abs(endBlockNum - startBlockNum);
    if (blocks > num) {
      return blocks - num + " blocks out of range";
    } else if (blocks < num) {
      return "within range by " + (num - blocks);
    } else {
      return "equal range"
    }
  };
  }

function produceTipCalculator(tipPercent) {
  return function (amount) {
    return tipPercent * amount
  }
}
function createDriver() {
  let driverId = 0
 return  class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId
    }
  }
}