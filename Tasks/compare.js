'use strict'

const compare = (dict1, dict2) => {
  const dict1Keys = Object.keys(dict1);
  const dict2Keys = Object.keys(dict2);
  if (dict1Keys.join('-') !== dict2Keys.join('-')) return false;
  let flag = true;
  for (const key of dict1Keys) {
    if (dict1[key] === dict2[key]) flag = flag && true;
    else {
      flag = flag && false;
    }
  }
  return flag;
};

module.exports = compare;
