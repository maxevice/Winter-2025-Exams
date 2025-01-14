'use strict'

const compare = (dict1, dict2) => {
  const dict1Keys = Object.keys(dict1);
  const dict2Keys = Object.keys(dict2);
  if (dict1Keys.join('-') !== dict2Keys.join('-')) return false;
  for (const key of dict1Keys) {
    if (dict1[key] !== dict2[key]) return false;
  }
  return true;
};

module.exports = compare;
