class Login2 {

    url ="https://www.edu.goit.global/account/login";
    title = '.next-10stgr7 > .next-c1vj7d';
    email = '#user_email';
    password ='#user_password';
    loginButton = '.next-1jphuq5';
    forgetPassword = '.next-1f1fv1i > .next-1qrvie4';

    //bu method ilgili urL e gider
    navigateUrl(){
        cy.visit(this.url);
    }

   // navigateUrl(urL){
   //     cy.visit(urL);
  //  }
    
    //bu method title alanının kontrolünü sağlar
    checkTitle(title){
        cy.get(this.title).
        should("be.visible").
        and("have.text", title);
    } 

    //email alanının kontrolü
    checkEmailField(){
        cy.get(this.email).should("be.visible").and("exist");
    }

    //password alanının kontrolü 
    checkPasswordField(){ 
        cy.get(this.password).should("be.visible").and("exist");
    }      
    
    //Login butonunun kontrolü
    checkLoginButton() {
        cy.get(this.loginButton).and("exist").should("be.visible");
    }
    
    //şifremi unuttum alanının kontrolü
    forgetPassword(text) {
        cy.get(this.forgetPassword).should("be.visible").and("have.text", text);
    }
        

}

export default new Login2() 