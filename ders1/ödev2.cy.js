describe ('Log in saglayan test senaryolari', function(){

    it("TC01 ilk test", function(){
        cy.visit('https://www.edu.goit.global/account/login') 
        cy.get('#user_email').type("user888@gmail.com")
        cy.get('#user_password').type("1234567890")
        cy.get('.next-1jphuq5').click();
        cy.get('#open-navigation-menu-mobile').should('be.visible');
        cy.wait(3000);
        cy.get('#open-navigation-menu-mobile').click();
        cy.wait(2000);
        cy.scrollTo('bottom');
        cy.contains('Log out').click();
       
    }) 

    it("TC02 ikinci test", function(){
        cy.visit('https://www.edu.goit.global/account/login') 
        cy.get('#user_email').type("testowyqa@qa.team")
        cy.get('#user_password').type("QA!automation-1")
        cy.get('.next-1jphuq5').click();
        cy.get('#open-navigation-menu-mobile').should('be.visible');
        cy.wait(3000);
        cy.get('#open-navigation-menu-mobile').click();
        cy.wait(2000);
        cy.scrollTo('bottom');
        cy.contains('button', 'Log out').click();

    }) 


})