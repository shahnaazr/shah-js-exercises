export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const squaresOfNumberArray = [];
  nums.forEach((element) => {
    squaresOfNumberArray.push(element * element);
  });
  return squaresOfNumberArray;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const camelCaseWords = [];
  for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (index === 0) {
      camelCaseWords.push(element[0].toLowerCase() + element.substring(1));
    } else camelCaseWords.push(element[0].toUpperCase() + element.substring(1));
  }
  return camelCaseWords.join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let totalSubjectsCount = 0;
  people.forEach((person) => {
    totalSubjectsCount = totalSubjectsCount + person.subjects.length;
  });
  return totalSubjectsCount;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let isIngredientInMenu = false;
  menu.forEach((menuObj) => {
    menuObj.ingredients.forEach((element) => {
      if (element === ingredient) {
        return (isIngredientInMenu = true);
      }
    });
  });
  return isIngredientInMenu;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}
