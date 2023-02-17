describe("Smoke Testing",() =>{
    it("Verify Title",()=>{
        cy.visit("https://ineuron-courses.vercel.app")
        cy.title().should("contain","Courses")
    });
    it("Verify exact Title",()=>{
        cy.visit("https://ineuron-courses.vercel.app")
        cy.title().should("eq","iNeuron Courses")
    });
    it("Verify Partical URL",()=>{
        cy.visit("https://ineuron-courses.vercel.app")
        //cy.title().should("contain","Courses")
        cy.url().should("contain","ineuron")
    });
});