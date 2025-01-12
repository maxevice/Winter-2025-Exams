'use strict'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (day) => {
  const index = days.findIndex(value => day.startsWith(value.toLowerCase()));
  return index + 1 || -1;
};

module.exports = parseDay;
