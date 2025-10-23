

class HomePage2 {

  url = "https://www.edu.goit.global/account/login";
  title = '.next-10stgr7 > .next-c1vj7d';
  email = '#user_email';
  password = '#user_password';
  loginButton = '.next-1jphuq5';
  attendanceSchedule = '.next-nxhxlt > .next-1cl89bs';
  catImage = '.next-1sh4jrc';
  burgerMenuButton = '#open-navigation-menu-mobile';
  notificationMenuButton = '#menu-button--menu--6';
  logoutButton = '.next-xracdc > .next-bve2vl';

  checkAttendanceSchedule() {
    cy.get(this.attendanceSchedule).should("exist").and("be.visible");
  }

  checkCatImage() {
    cy.get(this.catImage).should("exist").and("be.visible");
  }

  getBurgerMenuButton() {
    return cy.get(this.burgerMenuButton);
  }

  checkNotificationMenuButton() {
    cy.get(this.notificationMenuButton).should("exist").and("be.visible");
  }

  openBurgerMenu() {
  cy.get(this.burgerMenuButton).wait(500)
}

  scrollToBottom() {
    cy.scrollTo('bottom');
  }

  clickLogout() {
    cy.get(this.logoutButton).click().should('have.class', 'active'); 
  }

  logout() {
    this.openBurgerMenu();
    this.clickLogout();
  }

}

export default new HomePage2();
