export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let nextNumber = null;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === n && index !== nums.length - 1) {
      return (nextNumber = nums[index + 1]);
    }
  }
  return nextNumber;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let obj = { 1: 0, 0: 0 };
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    obj[element] = obj[element] + 1;
  }
  return obj;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return Number(n.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  for (let index = 0; index < arrs.length; index++) {
    const arr = arrs[index];
    for (let indexOfArr = 0; indexOfArr < arr.length; indexOfArr++) {
      const element = arr[indexOfArr];
      sum = sum + element;
    }
  }
  return sum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (index === 0) {
      newArr[arr.length - 1] = element;
    } else if (index + 1 === arr.length) {
      newArr[0] = element;
    } else {
      newArr[index] = element;
    }
  }
  return newArr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let isSearchTermAvailable = false;
  for (let key in haystack) {
    if (
      haystack[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      isSearchTermAvailable = true;
    }
  }
  return isSearchTermAvailable;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  let strAsArr = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ");
  const wordfrequencyObj = {};
  for (let index = 0; index < strAsArr.length; index++) {
    const element = strAsArr[index];
    if (wordfrequencyObj[element] === undefined) {
      wordfrequencyObj[element] = 1;
    } else {
      wordfrequencyObj[element] += 1;
    }
  }
  return wordfrequencyObj;
};
