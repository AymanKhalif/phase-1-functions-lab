// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    const distanceInBlocks = Math.abs(pickupLocation - hqLocation);
    return distanceInBlocks;
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  }
  function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(startBlock - endBlock);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      fare = 'cannot travel that far';
    }
    
    return fare;
  }
  