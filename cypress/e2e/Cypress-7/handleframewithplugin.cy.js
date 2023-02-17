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
    it('Handling Frames without Plugin',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded()
        .iframe()
        .clear()
        .type("Cypress")
    })
    it.only('Handling Frames without Plugin command',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.switchToIFrame("iframe")
        .clear()
        .type("Cypress")
    })
})