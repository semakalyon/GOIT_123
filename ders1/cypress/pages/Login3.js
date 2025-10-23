
class LoginPage {
  url = "https://www.edu.goit.global/account/login";
  title = '.next-10stgr7 > .next-c1vj7d';
  email = '#user_email';
  password = '#user_password';
  LoginButton = '.next-1jphuq5';
  fillEmail = 'user888@gmail.com';
  fillPassword = '1234567890';

  navigateUrl() {
    cy.visit(this.url);
  }

  checkTitle(title) {
    cy.get(this.title).should("be.visible").and("have.text", title);
  }

  usernameInput() {
    return cy.get(this.email);
  }

  passwordInput() {
    return cy.get(this.password);
  }

  clickLoginButton() {
    cy.get(this.LoginButton).click();
  }

  fillEmailField(email) {
    this.usernameInput().type(email);
  }

  fillPasswordField(password) {
    this.passwordInput().type(password);
  }

  login() {
    this.fillEmailField(this.fillEmail);
    this.fillPasswordField(this.fillPassword);
    this.clickLoginButton();
  }
}

export default new LoginPage();
