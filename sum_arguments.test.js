const sum = require("./sum_arguments")


const {test , expect, describe} = require("@jest/globals");

describe("All test cases should pass", function(){
    test("should work on all positive numbers", function(){
        //Assertions.
        expect(sum(2,2)).toBe(4);
    
        expect(sum(0,0)).toBe(0);
    
        expect(sum(100,0)).toBe(100);
    
        expect(sum(10,15)).toBe(25);
    
    });

    test("should work on all negative numbers", function(){
        //Assertions.
        expect(sum(-2,-2)).toBe(-4);
    
    });

    test("it should not work with characters", function(){
        expect(sum("a", "b")).toBe(undefined)
    })

})