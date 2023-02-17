describe('Registration form', () => {
    it('Create a new user', () => {        
        cy.visit("https://ineuron-courses.vercel.app/login")
        //cy.viewport(1920,1080)
        cy.contains("New user? Signup").click()
        cy.contains("Sign up").should("be.disabled")
        cy.get("input[name='name']").type("Chouda Reddy")
        cy.get("input[name='email']").type("choudareddy@gmail.com")
        cy.get("input[name='password']").type("Chinna2105")
        //cy.get("input[type='checkbox']").click({multiple:true})
        //cy.get("input[type='checkbox']").first().click()
        //cy.get("input[type='checkbox']").last().click()
        //cy.get("input[type='checkbox']").eq(2).click()
        cy.xpath("//label[text()='Testing']/preceding::input[1]").click()
        cy.get("input[type='radio']").first().click()
        //cy.get("select[name='state']").select(3)
        cy.get("select[name='state']").select("Goa").should("have.value","Goa")
        cy.contains("Sign up").should("be.enabled").click()
        cy.get('[name="email1"]').type("choudareddy@gmail.com").should("have.value","choudareddy@gmail.com")
        cy.get('[name="password1"]').type("Chinna2105").should("have.value","Chinna2105")
        cy.get('.submit-btn').should("be.enabled").click()
        // add assertion here- check if Welcome text is present then move to next click
        cy.get('.navbar-menu-links > button').click()
        cy.get('.header').should("be.visible")

    });
});