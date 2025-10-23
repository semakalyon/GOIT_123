// cypress/pages/LoginPage.js

class LoginPage {
  usernameInput() {
    return cy.get('[name="user888@gmail.com"]');
  }

  passwordInput() {
    return cy.get('input[name="password"]');
  }

  loginButton() {
    return cy.get('button[type="submit"]');
  }

  // --- Aksiyonlar ---
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    this.usernameInput().type(email);
  }

  fillPassword(password) {
    this.passwordInput().type(password);
  }

  clickLogin() {
    this.loginButton().click();
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();
