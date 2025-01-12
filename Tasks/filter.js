'use strict'

const filter = (array, type) => {
  const newArray = [];
  for (const value of array) {
    if (typeof value === type) {
      newArray.push(value)
    }
  }
  return newArray;
};

module.exports = filter;
