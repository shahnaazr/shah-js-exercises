import { isFloat } from "./util";

export const getFillings = (sandwich) => {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
};

export const isFromManchester = (person) => {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
};

export const getBusNumbers = (people) => {
  if (people === undefined) throw new Error("people is required");
  const MAX_PEOPLE_PER_BUS = 40;
  let noOfBuses = people / MAX_PEOPLE_PER_BUS;
  if (isFloat(noOfBuses)) {
    noOfBuses = Math.ceil(noOfBuses);
  }
  return noOfBuses;
};

export const countSheep = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter((element) => element.toLowerCase() === "sheep").length;
};

export const hasMPostCode = (person) => {
  if (person === undefined) throw new Error("person is required");
  return person.address.city === "Manchester";
};
