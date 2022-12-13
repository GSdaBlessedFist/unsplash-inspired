describe('Home page', () => {
  
  beforeEach(()=>{
    cy.viewport(1440,1000)
    cy.visit("http://localhost:3000/")
  })
  context("header-section",()=>{

    it.only("resets the page when the logo link is pressed",()=>{
      cy.getByData("logo-link").should("exist");
      cy.getByData("logo-link").click();
      cy.location("pathname").should("eq", "/")
    })

    it("adds opens up a modal interface to add a photo",()=>{

    })
  })
})

