import user from "../fixtures/userDB-test.json"

describe('Login Screen', () => {
  before(function(){
    cy.fixture('userDB-test').then(function(userData){
      this.userData=userData
    })
  })
  beforeEach(()=>{
    cy.viewport(1440,1000)
    cy.visit("/")
  })
  context("the form",()=>{

    xit("displays the login form",()=>{
      cy.getByData('login-form').should("exist");
      cy.location("pathname").should("eq", "/")
    })

    xit("displays an empty input for email and UI message",()=>{
      cy.getByData("email-input").should('be.empty')
      cy.getByData("ui-message").should("have.text","Please FIRST enter your email.")
    })

    it("recognizes an existing user",function(){
      cy.getByData('email-input').type("testuser@testuser.com")
      cy.getByData("ui-message").should("have.text","Now, please enter the combination.")
      cy.getByData("login-button").should("not.be.disabled")
    })
      
    it("is the correct combination",function(){
      cy.getByData('email-input').type("testuser@testuser.com")
      cy.get("#button-1").click()
      cy.get("#button-2").click()
      cy.get("#button-3").click()
      cy.get("#button-4").click()
      cy.wait(1000)
      // cy.get("[data-test='login-component']").should("exist").and("be.hidden")
      //cy.getByData('dashboard').should("be.visible");

    })
    // testuser@testuser.com })
  })
})
export {}