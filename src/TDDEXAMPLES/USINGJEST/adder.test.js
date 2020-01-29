const adder = require('./adder');

describe("adder",() =>{
    it("shoud add two numbers", () =>{
        expect(adder(1, 2)).toBe(3);
    }); 
    
    it("shoud return a sole input", () =>{
        expect(adder(5)).toBe(5)
    });

    it("shoud add three numbers", () =>{
        expect(adder(1, 2, 3)).toBe(6)
    });

    it("shoud return 0 if no numbera are passed", () =>{
      expect(adder()).toBe(0)
    });

    it("shoud add any number of arguments", () =>{
        expect(adder(1,2,3,4,5,6)).toBe(21)
    })
});