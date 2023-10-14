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
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
