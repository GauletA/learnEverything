import { reducerNumber } from "..";

describe("should get number", () => {
  const test1 = [["alex", "flo", "marvin"], ["flo"]];
  const test4 = [["alex", "flo", ["t", "h"], "marvin"], ["flo"]];
  const test2 = [];
  const test3 = [[]];

  it("should get number 4", () => {
    expect(reducerNumber(1, test1)).toEqual(4);
  });
  it("should get number 6", () => {
    expect(reducerNumber(1, test4)).toEqual(6);
  });
  it("should get number 0", () => {
    expect(reducerNumber(1, test2)).toEqual(0);
  });
  it("should get number 0", () => {
    expect(reducerNumber(1, test3)).toEqual(0);
  });
});

// describe("should get number", () => {
//   const test1 = "alex";

//   it("should get number 0", () => {
//     expect(splitString(1, test1)).toEqual(0);
//   });
// });
-