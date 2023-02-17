describe("Verify URL and title",()=>{
    it("URL and title",()=>{
        cy.visit(" https://ineuron-courses.vercel.app/login")
        cy.title().should("contain","Courses")
        cy.url().should("contain","login")
    })
})