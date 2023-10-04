/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const sumYearObject = data.asteroids.map(asteroid => asteroid.discoveryYear)
  .reduce((acc, cv) => {
    acc[cv] === undefined ? acc[cv] = 1 : acc[cv]++;
    
    return acc
  }, {})
  
  const greatestYear = Object.entries(sumYearObject).reduce((maxSum, currentSum) => {
    return currentSum[1] > maxSum[1] ? currentSum : maxSum;
  });
  
  return Number(greatestYear[0])
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
