describe('Error Handling', () => {
  // beforeEach(() => {
  //   cy.intercept('GET', 'https://api.punkapi.com/v2/beers', {
  //     statusCode: 200,
  //     fixture: 'allBeers'
  //   }).as('beers')
  // })

  it('should show a 404 error when user reaches a bad url', () => {
    cy.intercept('GET', 'https://api.punkapi.com/v2/beers', {
      statusCode: 200,
      fixture: 'allBeers'
    }).as('beers')
    cy.visit('http://localhost:3000/')
    .wait('@beers')
    cy.url().should('contain', '/')
    cy.intercept('GET', 'https://api.punkapi.com/v2/beers/nonesense', {
      statusCode: 400
    }).as('404')
    cy.visit('http://localhost:3000/nonesense')
    .wait('@404')
    cy.get('div').contains('h1', "Oops! Looks like this page doesn't exist.").should('be.visible')
    cy.get('div').contains('p', "Please go back to home and try again.").should('be.visible')
    cy.get('div').contains('a', "Go Back Home").should('be.visible').click()
    cy.get('.beer-container').should('be.visible')
  })
  
  it('should show a 500 error when the server fails', () => {
    cy.intercept('GET', 'https://api.punkapi.com/v2/beers', {
        statusCode: 500
      })
    cy.visit('http://localhost:3000/')
    cy.get('div').contains('h1', 'Oops! Something went wrong with the server! Please try again later.').should('be.visible')
  })
})
