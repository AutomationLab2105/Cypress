describe('Handling KeyBoard Events',()=>{
    it('Keyboard Events',()=>{
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("#email1").type("choudareddy@cypress.io")
        cy.get("#password1").type("abcdefghijklmnopqrstuvwxyz{enter}")
    })
})