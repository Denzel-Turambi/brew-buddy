describe('Focus page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.punkapi.com/v2/beers', {
      statusCode: 200,
      fixture: 'allBeers'
    }).as('beers')
  })
  
  it('should allow the user to click on a card to see more, and click the logo to go back to home', () => {
    cy.intercept('GET', 'https://api.punkapi.com/v2/beers/1', {
      statusCode: 200,
      fixture: 'beer1'
    })
    cy.visit('http://localhost:3000/')
    .wait('@beers')
    cy.url().should('contain', '/')
    cy.get('.beer-container').children().first().click()
    cy.url().should('contain', '/1')
    cy.get('.single-beer-icon').should('be.visible')
    cy.get('.search-bar').should('not.exist')
    cy.get('.single-beer-description').contains('h1', 'Buzz').should('be.visible')
    cy.get('.single-beer-description').contains('h2', 'A Real Bitter Experience.').should('be.visible')
    cy.get('.single-beer-description').contains('p', 'First Brewed: 09/2007').should('be.visible')
    cy.get('.single-beer-description').contains('p', 'Description: A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.').should('be.visible')
    cy.get('.single-beer-description').contains('p', 'Alcohol by volume (ABV): 4.5').should('be.visible')
    cy.get('.single-beer-description').contains('p', 'Food Pairings: Spicy chicken tikka masalaGrilled chicken quesadillaCaramel toffee cake').should('be.visible')
    cy.get('.single-beer-description').contains('p', 'Brewers Tips: The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.').should('be.visible')
    cy.get('.logo-title').click()
    cy.url().should('contain', '/')
    cy.get('.beer-container').should('be.visible')
  })
})