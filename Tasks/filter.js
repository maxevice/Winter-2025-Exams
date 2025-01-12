'use strict'

const filter = (array, type) => {
  const remove = [];
  for (const value of array) {
    const index = array.indexOf(value);
    if (typeof array[index] !== type) {
      remove.unshift(index);
    }
  }
  for (const index of remove) array.splice(index, 1);
  return array;
};

module.exports = filter;
