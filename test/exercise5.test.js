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

describe("getComplementaryDNA", () => {
  test("return complementaryDNA, T if string contains A", () => {
    expect(getComplementaryDNA("ABF")).toBe("TBF");
  });

  test("return complementaryDNA, A if string contains T", () => {
    expect(getComplementaryDNA("ETF")).toBe("EAF");
  });

  test("return complementaryDNA, C if string contains G", () => {
    expect(getComplementaryDNA("MBG")).toBe("MBC");
  });

  test("return complementaryDNA, G if string contains C", () => {
    expect(getComplementaryDNA("WERC")).toBe("WERG");
  });
});

describe("isItPrime", () => {
  test("returns true if number is a prime number", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(7)).toBe(true);
  });

  test("returns false if number is not a prime number", () => {
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(6)).toBe(false);
    expect(isItPrime(8)).toBe(false);
    expect(isItPrime(9)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns a 3 by 3 matrix with each element as foo if number 3 and value is foo", () => {
    expect(createMatrix(3, "foo")).toStrictEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
  });

  test("returns a 2 by 2 matrix with each element as fill if number 2 and value is fill", () => {
    expect(createMatrix(2, "fill")).toStrictEqual([
      ["fill", "fill"],
      ["fill", "fill"],
    ]);
  });

  test("returns a 4 by 4 matrix with each element as fill if number 4 and value is hello world", () => {
    expect(createMatrix(4, "hello world")).toStrictEqual([
      ["hello world", "hello world", "hello world", "hello world"],
      ["hello world", "hello world", "hello world", "hello world"],
      ["hello world", "hello world", "hello world", "hello world"],
      ["hello world", "hello world", "hello world", "hello world"],
    ]);
  });
});

describe("areWeCovered", () => {
  test("returns true if 3 or more than 3 staff scheduled for the given day.", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Molly", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Dolly", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Lolly", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
  });

  test("returns false if less than 3 staff scheduled for the given day.", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Molly", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(staff, "Tuesday")).toBe(false);
  });

  test("returns false if less than 3 staff scheduled for the given day.", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Molly", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Dolly", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Lolly", rota: ["Saturday", "Sunday", "Tuesday", "Friday"] },
    ];
    expect(areWeCovered(staff, "Friday")).toBe(false);
  });
});
