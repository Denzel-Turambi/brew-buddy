describe('home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.punkapi.com/v2/beers', {
      statusCode: 200,
      fixture: 'allBeers'
    }).as('beers')
  })

  it('should display all home components (nav and card container)', () => {
    cy.visit('http://localhost:3000/')
    .wait('@beers')
    cy.url().should('contain', '/')
    cy.get('.logo-title').contains('h1','Brew Buddy').should('be.visible')
    cy.get('.search-bar').should('be.visible')
    cy.get('.beer-container').should('be.visible')
    cy.get('.beer-container').children().first().contains('h1', 'Buzz').should('be.visible')
    .get('img[class="beer-img"]').should('have.attr', 'src').should('include', 'https://images.punkapi.com/v2/keg.png')
    cy.get('.beer-container').children().next().contains('h1', 'Trashy Blonde').should('be.visible')
    .get('[href="/2"] > .card > .beer-img').should('have.attr', 'src').should('include', 'https://images.punkapi.com/v2/2.png')
    cy.get('.beer-container').children().last().contains('h1', 'Berliner Weisse With Yuzu - B-Sides').should('be.visible')
    .get('[href="/3"] > .card > .beer-img').should('have.attr', 'src').should('include', 'https://images.punkapi.com/v2/keg.png')
  })

  it('should allow the user to search for beers by name', () => {
    cy.visit('http://localhost:3000/')
    .wait('@beers')
    cy.url().should('contain', '/')
    cy.get('#search-input').type('tra')
    cy.get('.beer-container').children().first().contains('h1', 'Trashy Blonde').should('be.visible')
    .get('[href="/2"] > .card > .beer-img').should('have.attr', 'src').should('include', 'https://images.punkapi.com/v2/2.png')
    cy.get('.beer-container').children().first().contains('h1', 'Buzz').should('not.exist')
    cy.get('.beer-container').children().first().contains('h1', 'Berliner Weisse With Yuzu - B-Sides').should('not.exist')
  })

  it('should display error message if there are no search results', () => {
    cy.visit('http://localhost:3000/')
    .wait('@beers')
    cy.url().should('contain', '/')
    cy.get('#search-input').type('asdf')
    cy.get('.beer-container').contains('h2', 'Sorry, no search results').should('be.visible')
  })
})