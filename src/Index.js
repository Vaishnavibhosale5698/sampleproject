const fib = require('../../sampleproject/src/Testt');

describe("fib tests", () => {
  it("should throw an error for parameter other than integer", () => {
    expect(() => fib("1")).toThrowError("Argument has to a number");
  });

  it("should return an array", () => {
    expect(Array.isArray(fib(5))).toBeTruthy();
  });

  it("should throw an error when patameter is 0", () => {
    expect(() => fib(0)).toThrowError("Target count cannot be 0");
  });

  it("should return `[0]` when parameter is 1", () => {
    expect(fib(1)).toEqual(expect.arrayContaining([0]));
  });

  it("should return an array with integers in it", () => {
    fib(4).map(item => expect(typeof item === "number").toBeTruthy());
  });

  it("should return `[0, 1, 1, 2]` with parameter being 4", () => {
    expect(fib(4)).toEqual(expect.arrayContaining([0, 1, 1, 2]));
  });
});