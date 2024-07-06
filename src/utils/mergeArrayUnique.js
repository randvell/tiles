export const mergeArraysUnique = (arr1, arr2, key) => {
  const map = new Map(arr1.map((item) => [item[key], item]));

  arr2.forEach((item) => {
    if (!map.has(item[key])) {
      map.set(item[key], item);
    }
  });

  return Array.from(map.values());
};
