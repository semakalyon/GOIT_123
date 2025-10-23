import Login from "../../../../pages/Login";
import Login2 from "../../../../pages/Login";
import Login3 from "../../../../pages/Login3"; 

describe("Page Object Model -POM",() => {

    it("TC02_Page Object Pattern", () => {

        Login.navigateUrl();
        Login.checkTitle("Login");
        Login.checkEmailField();
        Login.checkPasswordField();
        Login.checkLoginButton();
        Login.forgetPassword("I can't remember the password")

    });

        it("TC03_Page Object Pattern", () => {

        Login2.navigateUrl();
        Login2.checkTitle("Login");
        Login2.checkEmailField();
        Login2.checkPasswordField();
        Login2.checkLoginButton();
        Login2.forgetPassword("I can't remember the password")

    });

    
        it("TC04_Page Object Pattern Fixtures Kullanimi", () => {

            cy.fixture('login').then((data) => {

        Login2.navigateUrl();
        Login2.checkTitle(data.titleText);
        Login2.checkEmailField();
        Login2.checkPasswordField();
        Login2.checkLoginButton();
        Login2.forgetPassword("I can't remember the password");
    });
        
   });

});