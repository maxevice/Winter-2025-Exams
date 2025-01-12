'use strict'

const find = (object, value) => {
  const pairs = Object.entries(object)
  for (const [key, val] of pairs) {
    if (val === value) {
      return key;
    }
  }
}

module.exports = find;
