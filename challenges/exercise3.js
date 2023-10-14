import { isFloat } from "./util";

export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function (element) {
    return element < 1;
  });
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // const namesBeginningWithArray = [];
  // for (let index = 0; index < names.length; index++) {
  //   const element = names[index];
  //   if (element[0] === char) {
  //     namesBeginningWithArray.push(element);
  //   }
  // }
  // return namesBeginningWithArray;
  return names.filter(function (name) {
    if (name.startsWith(char)) {
      return name;
    }
  });
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
  const integersArray = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (!isFloat(element)) {
      integersArray.push(element);
    }
  }
  return integersArray;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  const citiesArray = [];
  for (let index = 0; index < users.length; index++) {
    const element = users[index];
    citiesArray.push(element.data.city.displayName);
  }
  return citiesArray;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRootsArray = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    squareRootsArray.push(Number(Math.sqrt(element).toFixed(2)));
  }
  return squareRootsArray;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const arrayContainingMatchingSentences = [];
  for (let index = 0; index < sentences.length; index++) {
    const sentence = sentences[index];
    if (sentence.toLowerCase().includes(str)) {
      arrayContainingMatchingSentences.push(sentence);
    }
  }
  return arrayContainingMatchingSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const arrayContainingLongestSides = [];
  for (let index = 0; index < triangles.length; index++) {
    const triangle = triangles[index];
    let longestSideOfTriangle = 0;
    for (
      let indexForTriangle = 0;
      indexForTriangle < triangle.length;
      indexForTriangle++
    ) {
      const triangleLength = triangle[indexForTriangle];
      if (triangleLength > longestSideOfTriangle) {
        longestSideOfTriangle = triangleLength;
      }
    }
    arrayContainingLongestSides.push(longestSideOfTriangle);
  }
  return arrayContainingLongestSides;
}
