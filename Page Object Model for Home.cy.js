import LoginPage from "../../pages/Login3"
import LoginPage2 from "../../pages/Login4"
import HomePage1 from "../../pages/Homepage1"
import HomePage2 from "../../pages/HomePage2"

describe("Page Object Model for Logout -POM",() => {

    it("TC01- İlk kullanici için HomePage POP", () => {
        cy.viewport(1920, 1080)

        LoginPage.navigateUrl();
        LoginPage.checkTitle("Login");
        LoginPage.login();
        HomePage1.openBurgerMenu();
        HomePage1.logout();

    });

        it("TC02-İkinci Kullanici için HomePage POP", () => {
        cy.viewport(1920, 1080)

        LoginPage2.navigateUrl();
        LoginPage2.checkTitle("Login");
        LoginPage2.login();
        HomePage2.openBurgerMenu();
        HomePage2.logout();

    
    });



});