describe('İlk dersimiz', function() {
  it ("TC01 İlk test senaryomuz", function(){

    cy.visit('https://www.edu.goit.global/account/login')
    
    cy.get('#user_email').type("deneme");
    //cy.get('#user_email').as('email');
    //cy.get('@email').clear();
    cy.get('#user_password').type('1234567890');
    cy.get('.next-1bzq1af').click();
    cy.url().should('include','www.edu.goit.global')
    //cy.title().should('include','Login')
    cy.title().should('include','Log in')
//    cy.wait(3000);
    cy.get('.next-1bzq1af').dblclick();
//    cy.wait(3000);
    cy.get('.next-1bzq1af').rightclick();
    //cy.get('.next-1bzq1af').should('have.text','Log in');
    cy.get('.next-1bzq1af').
    should('have.text','Log in').
    and('be.visible').
    and('exist');
    cy.get('next-bdn3jy eteu1jj5').should('equal','Email'); //videoda da çalışmadı




  })   



  it('TC02 Log in butonunun doğrulanmasi', function() {
  cy.visit('https://www.edu.goit.global/account/login')
  cy.get('.eckniwg2').should('have.text','Log in').and('have.css','background-color','rgb(255, 107, 10)')
  cy.get('#user_email').type("user888@gmail.com")
  cy.get('#user_password').type("1234567890")  
  cy.get('#user_password').screenshot();
  cy.get('.next-1jphuq5').click();
  cy.wait(5000);
  //cy.get('#go-to-the-course-homepage-widget > .next-1jphuq5').scrollIntoView();
  cy.scrollTo('bottom'); //sayfanın en altına
  cy.wait(5000);
  cy.scrollTo('center');  //sayfanın ortasına
  cy.wait(3000);
  cy.screenshot();




 })




  //1. cy cypress test kütüphanesinin temel komutudur.
  //2. visit() --> url gider.
  //3. get() --> locate
  //4. type() --> metin göndermek için kullanılır.
  //5. clear() --> metin silmeye yarar.
  //6. as() --> allias olarak bir elemente isim verebiliriz.
  // locate --selectors
  /* 
  id # 
  class . 
  atr=value [name:'email']
  */

  //7. click() -->sol click yapar
  //8. contains('') -- locate almak için kullanılır, text içerisine göre locate alabilir.
  //contains('Email')

  //9.url() --> sayfanın urlini verecektir.
  //10. title() --> sayfanın başlığını verir.
  //11. wait(2000) --> milisaniye kadar bekler.
  //12.dblclick() --> çift klik yapar.
  //13. rightclick() --> sağ click yapar.
  //14. should()  and() -->
  //should('have.text','expected')
  // be.visible görünür olup olmadığını doğrular.
  //should('be.not.visible'); görünür olmadığını doğrular.
  //should('not.exist'); var olmadığını doğrular.
  //should('have.value','myUsername');
  //should('have.class','active');
  //should('be.checked');
  //should('not.be.checked');
 //15. check()
 //cy.get().check().should(be.checked);
 //hover() --> bir elementin üstüne fareyi götürür cy.get().hover();
 //scrollIntoView() --> Bir element görünür olana kadar sayfayı kaydırır.
 //scrollTo(0,1000); sayfayı 1000px aşagı kaydırır



})


  
  