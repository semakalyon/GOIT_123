import LoginPage from "../../pages/Login3";
import LoginPage2 from "../../pages/Login4"

describe("Page Object Model for Login -POM",() => {

    it("TC01- İlk kullanici için LoginPage POP", () => {

        LoginPage.navigateUrl();
        LoginPage.checkTitle("Login");
        LoginPage.login();

    });

        it("TC02-İkinci Kullanici için LoginPage POP", () => {

        LoginPage2.navigateUrl();
        LoginPage2.checkTitle("Login");
        LoginPage2.login();
    
    });



});