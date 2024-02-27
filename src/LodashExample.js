const lodash = require('lodash')
//import the lodash module


//Create a function to find a maximum value from number array.
function findMaxValue(array) {
  return lodash.max(array);
}


//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
function filterValues(arr, num) {
  return lodash.filter(arr, value => value > num);
}

//Create a function to return all values of employeeName array in capital letters.
function nameInCapital(arr) {
  return lodash.map(arr, name => lodash.toUpper(name));
}



module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
  
}
