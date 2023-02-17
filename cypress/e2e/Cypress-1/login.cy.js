describe("Login Test with Cypress",()=> {
    it("Login with Valid Credientials",()=>{
        cy.visit("https://ineuron-courses.vercel.app/login")
        // cy.get("input[name='email1']").type("ineuron@ineuron.ai")
        // cy.get('#password1').type("ineuron")
        // cy.get('.submit-btn').click()
        // cy.get('.navbar-menu-links > button').should("be.visible")
        cy.xpath("//input[@name='email1']").type("Chinna")
    });
});