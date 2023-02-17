describe('Handling Frames',()=>{
    it('Handling Frames without Plugin',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.get("iframe")
        .its("0.contentDocument")
        .its("body")
        .then(cy.wrap)
        .clear()
        .type("Cypress")
    })
})