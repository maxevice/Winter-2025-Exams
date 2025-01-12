'use strict'

const count = (obj) => 
  Object.values(obj)
    .reduce((sum, nextValue) => typeof nextValue === 'number' ? sum + nextValue : sum, 0);

module.exports = count;
