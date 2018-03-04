var multiples = require("./src/multiples.js");
describe('multiples', () => {
  // it("multiples(2,8) should return true", () => {
  //   expect(multiples(2, 8)).toEqual(true);
  // });

  // it('multiples(2,8) should return [2,4,6,8]', () => {
  //     expect(multiples(2,8)).toEqual([2,4,6,8]);
  // });

  // it("multiples(5,25) should return [5,10,15,20,25]", () => {
  //   expect(multiples(5,25)).toEqual([5,10,15,20,25]);
  // });

  // it("multiples(4,27) should return [4,8,12,16,20,24]", () => {
  //   expect(multiples(4, 27)).toEqual([4,8,12,16,20,24]);
  // });

  // it('multiples(5,7) should return [5]', () => {
  //   expect(multiples(5,7)).toEqual([5]);
  // });

  it("multiples(11,54) should return [11,22,33,44]", () => {
    expect(multiples(11,54)).toEqual([11,22,33,44]);
    
  });

});
