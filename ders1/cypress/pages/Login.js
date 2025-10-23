class Login {

    //bu method ilgili urL e gider
    navigateUrl(){
        cy.visit("https://www.edu.goit.global/account/login");
    }

   // navigateUrl(urL){
   //     cy.visit(urL);
  //  }
    
    //bu method title alanının kontrolünü sağlar
    checkTitle(title){
        cy.get('.next-10stgr7 > .next-c1vj7d').
        should("be.visible").
        and("have.text", title);
    } 

    //email alanının kontrolü
    checkEmailField(){
        cy.get('#user_email').should("be.visible").and("exist");
    }

    //password alanının kontrolü 
    checkPasswordField(){ 
        cy.get('#user_password').should("be.visible").and("exist");
    }      
    
    //Login butonunun kontrolü
    checkLoginButton() {
        cy.get('.next-1jphuq5').and("exist").should("be.visible");
    }
    
    //şifremi unuttum alanının kontrolü
    forgetPassword(text) {
        cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text", text);
    }
        

}

export default new Login() 