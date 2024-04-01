// Code your solution here
function findMatching(drivers, target) {
    return drivers.filter(driver => driver.toLowerCase() === target.toLowerCase());
}
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  function matchName(drivers, target) {
    return drivers.filter(driver => driver.name.toLowerCase() === target.toLowerCase());
  }
