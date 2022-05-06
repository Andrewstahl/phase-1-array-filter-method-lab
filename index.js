// Code your solution here
const driversArray = ["Bobby", "Sammy", "Sally", "Annette", "Bobby"];

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

// function loopAndPrint(drivers) {
//   for (const driver of drivers) {
//     console.log(driver.name.toLowerCase());
//   }
// }

// loopAndPrint(drivers);

function findMatching(drivers, filterName) {
  return drivers.filter(driver => (driver.toLowerCase() === filterName.toLowerCase()));
}

// Long Version of findMatching
// function findMatchingLong(drivers, filterName) {
//   return drivers.filter(function matchName(driver) {
//     if (driver.name.toLowerCase() === filterName.toLowerCase()) {
//       return driver.name;
//     }
//   })
// }

function fuzzyMatch(drivers, filterName) {
  return drivers.filter(driver => (driver.substring(0, filterName.length).toLowerCase() === filterName.toLowerCase()));
}

// This is the long version of the function to test it out
// function fuzzyMatchLong(drivers, filterName) {
//   let filteredDrivers = [];
//   for (const driver of drivers) {
//     if (driver.name.substring(0, filterName.length).toLowerCase() === filterName.toLowerCase()) {
//       filteredDrivers.push(driver);
//     }
//   }
//   return filteredDrivers;
// }

function matchName(drivers, filterName) {
  return drivers.filter(driver => driver.name === filterName);
}