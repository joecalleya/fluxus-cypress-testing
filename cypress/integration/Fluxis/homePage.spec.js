
//this page will test the Homepage renders and can be interacted with

// Test 1 Page Loads
// Test 2 Click on SearchIcon
//Test 3  Type into Search Icon

describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('https://cities.trueid.net') // change URL to match your dev URL
    })

    it('.click() - click on Search icon element', () => {
        // https://on.cypress.io/click
        cy.get('.SearchDesktop__InputSearchButton-lttusx-2').click()
    })

    it('.type() - type into a DOM element', () => {
        // https://on.cypress.io/type
        cy.get('.Input-wun2o8-0')
          .type('Where is my article').should('have.value', 'Where is my article')
    })
})
