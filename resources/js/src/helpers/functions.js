export const distinct = (array, based_on) => {
  const result = [];
  const map = new Map();

  for (const item of array) {
      if(!map.has(item[based_on])){
          map.set(item[based_on], true);    // set any value to Map
          result.push(item);
      }
  }

  return result;
}