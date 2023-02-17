describe("This is my first test suite",()=>{
    it("My First Test Case",()=>{
        expect(true).to.equal(true);
    })
    it.only("My second Test Case",()=>{
        expect(true).to.equal(false);
    })
    it.skip("My third Test Case",()=>{
        expect(true).to.equal(true);
    })
    it("My fourth Test Case",()=>{
        expect(true).to.equal(true);
    })
})

