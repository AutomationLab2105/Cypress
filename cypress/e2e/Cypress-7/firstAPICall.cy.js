describe('Handling KeyBoard Events',()=>{
    it('Keyboard Events',()=>{
        cy.request("https://ineuron-courses.vercel.app/login").then(function(resp){
            cy.log(resp.status)
            
            cy.log(resp.duration)
            cy.log(resp.body)
            cy.log(resp.statusText)
        })
        
    })
})