describe("This is my first test suite",function(){
    it("My First Test Case",function(){
        expect(true).to.equal(true);
    })
    it("My second Test Case",function(){
        expect(true).to.equal(false);
    })
    it.skip("My third Test Case",function(){
        expect(true).to.equal(true);
    })
    it("My fourth Test Case",function(){
        expect(true).to.equal(true);
    })
})

