
//this page will test the Homepage renders and can be interacted with

// Test 1 Page Loads
// Test 2 Click on SearchIcon
//Test 3  Type into Search Icon

describe('Article Page', () => {
    it('successfully loads', () => {
      cy.visit('https://cities.trueid.net/article/genshin-impact-%E0%B8%9B%E0%B8%A5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B0%E0%B8%84%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-ganyu-%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9E%E0%B8%B4%E0%B8%97%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B9%8C%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B2-trueidintrend_204436') // change URL to match your dev URL
    })
    it('.click() - click on Search icon element', () => {
        // https://on.cypress.io/click
        cy.get('.SearchDesktop__InputSearchButton-lttusx-2').click()
    })

    it('.type() - type into a DOM element', () => {
        // https://on.cypress.io/type
        cy.get('.Input-wun2o8-0')
          .type('This is Working').should('have.value', 'This is Working')
    })
})