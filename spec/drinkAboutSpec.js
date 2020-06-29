describe("drinkAbout",function(){
    describe ("whatCanIDrink tests",function(){
        it ("should return an error if age is wrong", function(){
            expect (whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
            expect (whatCanIDrink(130)).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        })
        it ("should return a drink", function(){
            expect (whatCanIDrink(10)).toBe("Drink Toddy");
            expect (whatCanIDrink(17)).toBe("Drink Coke");
            expect (whatCanIDrink(20)).toBe("Drink Beer");
            expect (whatCanIDrink(40)).toBe("Drink Whisky"); 
            /* expect (whatCanIDrink(40)).toBe("Drink Rum");    Deliberate should be whisky */
        })
    })
})