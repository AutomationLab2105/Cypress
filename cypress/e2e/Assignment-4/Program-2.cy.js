describe("Verify URL and title",()=>{
    it("URL and title",()=>{
        cy.visit(" https://ineuron-courses.vercel.app/login")
        cy.xpath("//input[@name='email1']").type("ineuron@ineuron.ai")
        cy.xpath("//input[@name='password1']").type("ineuron")
        cy.xpath("//button[@type='submit']").click({force:true})
        cy.wait(5000)
        //Capturing Welcome iNeuron to iNeuron Courses
        cy.xpath("//div[@class='home']/h4[normalize-space()='Welcome iNeuron to iNeuron Courses']").should("contain",'Welcome iNeuron to iNeuron Courses')
        
        //User is trying to logout by hiting signout button
        cy.xpath("//div[@class='navbar-menu-links']/button").click({force:true})
        
        cy.url().should("contain","login")//user is successfully log out
    })
})