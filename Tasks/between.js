'use strict'

const getValueBetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);
  const suffixIndex = str.indexOf(suffix);
  if (prefixIndex === -1 || suffixIndex === -1) return '';
  const startPoint = prefixIndex + prefix.length;
  const result = str.substring(startPoint, suffixIndex)
  return result
};

module.exports = getValueBetween;
