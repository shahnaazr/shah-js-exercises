import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("returns sum of the numbers which is multiples of 3", () => {
    expect(sumMultiples([2, 3, 1])).toBe(3);
    expect(sumMultiples([2, 3, 11, 9])).toBe(12);
    expect(sumMultiples([6, 9, 1, 20, 21])).toBe(56);
  });

  test("returns sum of the numbers which is multiples of 5", () => {
    expect(sumMultiples([5, 5, 20, 31, 2, 4])).toBe(30);
  });

  test("returns sum of the numbers which is multiples of 3 or 5", () => {
    expect(sumMultiples([5, 5, 10, 33, 2, 4, 18])).toBe(71);
  });

  test("returns sum of the numbers which is neither multiples of 3 or 5", () => {
    expect(sumMultiples([2, 7, 13, 22, 2, 4, 11])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("return true for string containing C, G, T or A", () => {
    expect(isValidDNA("Abedsdf dsfdsf")).toBe(true);
    expect(isValidDNA("zbeCsdfdsf dsf")).toBe(true);
    expect(isValidDNA("sbedsd fGsfdsf")).toBe(true);
    expect(isValidDNA("rbe dTdfdsf dsf")).toBe(true);
  });

  test("return false for string not containing neither C, G, T or A", () => {
    expect(isValidDNA("rbedsdf dsfdsf ffh kkk")).toBe(false);
  });
});
