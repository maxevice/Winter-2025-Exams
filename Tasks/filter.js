'use strict'

const filter = (array, type) => {
  return array.filter((value) => typeof value === type)
};

module.exports = filter;
