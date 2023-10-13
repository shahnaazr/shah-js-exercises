export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNumsArray = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element < 1) {
      smallNumsArray.push(element);
    }
  }
  return smallNumsArray;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const namesBeginningWithArray = [];
  for (let index = 0; index < names.length; index++) {
    const element = names[index];
    if (element[0] === char) {
      namesBeginningWithArray.push(element);
    }
  }
  return namesBeginningWithArray;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const wordsWithVerbsArray = [];
  for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.substring(0, 3) === "to ") {
      wordsWithVerbsArray.push(element);
    }
  }
  return wordsWithVerbsArray;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}
