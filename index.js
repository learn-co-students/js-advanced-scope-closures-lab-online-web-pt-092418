function produceDrivingRange(blockRange) {
  return function(beginningBlock, endingBlock) {
    const numberBlocks = parseInt(endingBlock) - parseInt(beginningBlock)
    const blockRangeDifference = blockRange - numberBlocks
    if (numberBlocks >= blockRange) {
      return `${Math.abs(blockRangeDifference)} blocks out of range`
    } else {
      return `within range by ${blockRangeDifference}`
    }
  }
};

function produceTipCalculator(percentTip) {
  return function(ridePrice) {
    return ridePrice * percentTip
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
