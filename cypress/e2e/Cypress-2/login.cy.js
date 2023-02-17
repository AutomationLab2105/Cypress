describe('Login Test With Cypress', () => {
    it('login with valid credentails', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login")

        //cy.get("input[name='email1']").type("ineuron@ineuron.ai")
        
        //cy.get("//input[@name='email1']").type("mukesh")

        cy.xpath("//input[@name='email1']").type("Otwani")

       // cy.get('[name="password1"]').type("")
       // cy.get('.submit-btn').click()
       // cy.get('.navbar-menu-links > button').should("be.visible")
        //password
        //click
        // assertion 
    });

    it.only('login with valid credentails', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login")

        cy.get('[name="email1"]').type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")

        cy.get('[name="password1"]').type("ineuron").should("have.value","ineuron")

        cy.get('.submit-btn').should("be.enabled").click()

        // add assertion here- check if Welcome text is present then move to next click

        cy.get('.navbar-menu-links > button').click()

        cy.get('.header').should("be.visible")


    });





    


});