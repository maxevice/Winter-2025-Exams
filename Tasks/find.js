'use strict'

const find = (object, value) => {
  for (const name in object) {
    if (object[name] === value) {
      return name;
    }
  }
};

module.exports = find;
