describe("fizzBuzz",function(){
    describe ("fizzBuzz tests", function(){
        it ("should return an error if type is wrong", function(){
            expect (fizzBuzz("Quack")).toBe("Error!");
        })
        it ("should return FizzBuzz", function(){
            expect (fizzBuzz(15)).toBe("FizzBuzz");
        })
        it ("should return Fizz", function(){
            expect (fizzBuzz(6)).toBe("Fizz");
        })
        it ("should return Buzz", function(){
            expect (fizzBuzz(10)).toBe("Buzz");
        })
        it ("should return number 2", function(){
            expect (fizzBuzz(2)).toBe(2);
        })
    })
})