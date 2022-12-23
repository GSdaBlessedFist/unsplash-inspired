/// <reference types="Cypress"/>


describe('Home page', () => {
  
  beforeEach(()=>{
    cy.viewport(1440,1000)
    cy.visit("/")
  })
  context("header-section",()=>{

    it.only("resets the page when the logo link is pressed",()=>{
      cy.get("[data-test='logo-link']").should("exist");
      cy.get("[data-test='logo-link']").click();
      cy.location("pathname").should("eq", "/")
    })

    // it("adds opens up a modal interface to add a photo",()=>{

    // })
  })
})
