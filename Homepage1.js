
/*
class HomePage1 {

  url = "https://www.edu.goit.global/account/login";
  title = '.next-10stgr7 > .next-c1vj7d';
  email = '#user_email';
  password = '#user_password';
  loginButton = '.next-1jphuq5';
  attendanceSchedule = '.next-nxhxlt > .next-1cl89bs';
  catImage = '.next-1sh4jrc';
  burgerMenuButton = '#open-navigation-menu-mobile';
  notificationMenuButton = '#menu-button--menu--6';
  logoutText = "Log out"
  logoutButton = '.next-s1xegz > .next-bve2vl';

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

  scrollToBottom() {
    cy.scrollTo('bottom').wait(3000);
  }

  scrollToTop() {
    cy.scrollTo('Top').wait(3000);
  }

 openBurgerMenu() {
    cy.get(this.burgerMenuButton).should('exist').and('be.visible').click();
  }

  clickLogout() {
    cy.get(this.logoutButton).should('be.visible').click();
  }
 //clickLogout() {
  //cy.contains('Log out').click();
 // }

  logout() {
    this.openBurgerMenu();
   // this.scrollToBottom();
    this.clickLogout();
  }

}

export default new HomePage1();
*/

class HomePage1 {

  url = "https://www.edu.goit.global/account/login";
  title = '.next-10stgr7 > .next-c1vj7d';
  email = '#user_email';
  password = '#user_password';
  loginButton = '.next-1jphuq5';
  attendanceSchedule = '.next-nxhxlt > .next-1cl89bs';
  catImage = '.next-1sh4jrc';
  burgerMenuButton = '.next-7afvtf';
  notificationMenuButton = '#menu-button--menu--6';
  logoutButton = '.next-xracdc > .next-bve2vl';
  
  checkAttendanceSchedule() {
    cy.get(this.attendanceSchedule).should("exist").and("be.visible");
  }

  checkCatImage() {
    cy.get(this.catImage).should("exist").and("be.visible");
  }

  getBurgerMenuButton() {
   return cy.get('.next-7afvtf');
  }

  checkNotificationMenuButton() {
    cy.get(this.notificationMenuButton).should("exist").and("be.visible");
  }

  openBurgerMenu() {
    return cy.get(this.burgerMenuButton);
  }

 logout() {
    this.openBurgerMenu();
    cy.get(this.logoutButton)
      .scrollIntoView()
      .click();
}}

export default new HomePage1();
