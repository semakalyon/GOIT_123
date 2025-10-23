describe("Standart Test Yazimi", () =>{

    it("TestCase-1 STD Test", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text", "Login");
        cy.get('#user_email').should("be.visible").and("exist");
        cy.get('#user_password').should("be.visible").and("exist");
        cy.get('.next-1jphuq5').and("exist").should("be.visible");
        cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text", "I can't remember the password");

      //urL git
      //titlein görünür olup okmadığını ve textin login olup olmadığını kontrol et
      //email alanı mevcut ve görünür mü kontol et
      //password alanı mevcut ve görünür mü kontrol et
      //login butonu var mı, görünür mü kontrol et
      //parolamı unuttum texti var ve görünür mü kontrol et








    })








});