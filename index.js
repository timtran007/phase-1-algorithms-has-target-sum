//create a function hasTargetSum(array, sum)
function hasTargetSum(array, target) {
  // loop through the numbers in array and add it to each other
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      let sum = (array[i] + array[j]);
      if (sum === target){
        return true
      }
    }
  }
  return false;
}

/* 
  O(n^2)
*/

/* 
create a function hasTargetSum(array, sum)
	loop through the numbers in array and add it to each other
		if any of the numbers added together is equal to the integer
			then return true
		if not,
			then return false.
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

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 5, 7, 9], 11));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 5, 7, 9], 14))

}

module.exports = hasTargetSum;
