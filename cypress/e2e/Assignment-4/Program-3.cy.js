describe('Email and password validation',()=>{
    it("Email and Password validation without passing any details",()=>{
        cy.visit(" https://ineuron-courses.vercel.app/login")
        //cy.xpath("//input[@name='email1']")
        //cy.xpath("//input[@name='password1']")
        cy.xpath("//button[@type='submit']").click({force:true})
        cy.xpath("//div[@class='content']/h2[normalize-space()='Email and Password is required']").should("contain",'Email and Password is required')
        
    })
    it("Email and Password validation without passing password",()=>{
        cy.visit(" https://ineuron-courses.vercel.app/login")
        cy.xpath("//input[@name='email1']").type("ineuron@ineuron.ai")
        //cy.xpath("//input[@name='password1']")
        cy.xpath("//button[@type='submit']").click({force:true})
        cy.xpath("//div[@class='content']/h2[normalize-space()='Password is required']").should("contain",'Password is required')
        
    })
    it("Email and Password validation without passing email",()=>{
        cy.visit(" https://ineuron-courses.vercel.app/login")
        //cy.xpath("//input[@name='email1']")
        cy.xpath("//input[@name='password1']").type("ineuron")
        cy.xpath("//button[@type='submit']").click({force:true})
        cy.xpath("//div[@class='content']/h2[normalize-space()='Email is required']").should("contain",'Email is required')
    })
    it("Email and Password validation passing invalid details",()=>{
        cy.visit(" https://ineuron-courses.vercel.app/login")
        cy.xpath("//input[@name='email1']").type("choudareddy@cypress.io")
        cy.xpath("//input[@name='password1']").type("cypress")
        cy.xpath("//button[@type='submit']").click({force:true})
        cy.xpath("//div[@class='content']//h2[@class='errorMessage']").should("contain","USER Email Doesn't Exist")
       
    })
})
