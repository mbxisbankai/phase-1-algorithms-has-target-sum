function hasTargetSum(array, target) {
  //first for loop with i as a constant, starting at 0
  for(let i = 0; i < array.length; i++){
    //second for loop with j as a constant, starting at i + 1
    for(let j = i + 1; j < array.length; j++){
      if(array[i] + array[j] === target){
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

/*
hasTargetSum(array, target){
  first for loop with i as a constant, starting at 0
  second for loop with j as a constant, starting at i + 1
  if i + j add up to the target {
    return true
  } else {
    return false 
  }
}

*/