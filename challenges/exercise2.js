export const getSquares = (nums) => {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((element) => {
    return element * element;
  });
};

export const camelCaseWords = (words) => {
  if (words === undefined) throw new Error("words is required");
  const camelCaseWords = words.map((element, index) => {
    if (index === 0) {
      return element[0].toLowerCase() + element.substring(1);
    } else return element[0].toUpperCase() + element.substring(1);
  });
  return camelCaseWords.join("");
};

export const getTotalSubjects = (people) => {
  if (people === undefined) throw new Error("people is required");
  let totalSubjectsCount = 0;
  people.forEach((person) => {
    totalSubjectsCount = totalSubjectsCount + person.subjects.length;
  });
  return totalSubjectsCount;
};

export const checkIngredients = (menu, ingredient) => {
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
};

export const duplicateNumbers = (arr1, arr2) => {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const duplicateNumbersArray = [];
  for (let arr1Index = 0; arr1Index < arr1.length; arr1Index++) {
    const arr1Element = arr1[arr1Index];
    for (let arr2Index = 0; arr2Index < arr2.length; arr2Index++) {
      const arr2Element = arr2[arr2Index];
      if (
        arr1Element === arr2Element &&
        !duplicateNumbersArray.includes(arr1Element)
      ) {
        duplicateNumbersArray.push(arr1Element);
      }
    }
  }
  return duplicateNumbersArray.sort();
};
