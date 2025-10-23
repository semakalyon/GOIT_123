import Login2 from "../../../../pages/Login";
import Login3 from "../../../../pages/Login3"; 

describe("HOOKS",() => {

// before: bütün testlerden önce 1 kere çalışır.
// after: bütün testlerden sonra 1 kere çalışır.
// beforeEach: her testten önce 1 kere çalışır.
// afterEach: her testten sonra 1 kere çalışır.
let userData;

before(() => {
 cy.log(":::::before method calisti")
 cy.fixture("user").then((data) => {
 userData=data;
 
}); 

});

after(() => {
 cy.log(":::::after method calisti")

});

beforeEach(()=> {
 cy.log(":::::beforeEach method calisti")

});

afterEach(()=> {
 cy.log(":::::afterEach method calisti")

});

    it("TC01", () => {
    cy.log(":::::TC01 calisti")

    });

    it("TC02", () => {
    cy.log(":::::TC02 calisti")
    
    });

});   