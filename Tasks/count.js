'use strict'

const count = (obj) => 
  Object.values(obj)
    .filter((value) => typeof value === "number")
    .reduce((sum, nextValue) => sum + nextValue, 0);

module.exports = count;
