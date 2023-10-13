import { isFloat } from "./util";

export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let noOfBuses = people / 40;
  if (!isFloat(noOfBuses)) {
    noOfBuses;
  } else {
    noOfBuses = Math.trunc(noOfBuses) + 1;
  }
  return noOfBuses;
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0;
  arr.forEach((element) => {
    if (element.toLowerCase() === "sheep") {
      count = count + 1;
    }
  });
  return count;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}
