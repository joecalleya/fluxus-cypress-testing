
//this page will test the Homepage renders and can be interacted with


// Test 1 Page Loads
//this test checks if the page has loaded correctly, this is important in oder to make sure that the elements are working and that the code has compiled successfully

describe('Article Page', () => {
    it('successfully loads', () => {
      cy.visit('https://cities.trueid.net/article/genshin-impact-%E0%B8%9B%E0%B8%A5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B0%E0%B8%84%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-ganyu-%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9E%E0%B8%B4%E0%B8%97%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B9%8C%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B2-trueidintrend_204436') // change URL to match your dev URL
    })

// Test 2 Click on SearchIcon
//This Test makes sure that the Search button clicking is working. this allows the search bar to be interacted with

    it('.click() - click on Search icon element', () => {
        cy.get('.SearchDesktop__InputSearchButton-lttusx-2').click()
    })

//Test 3  Type into Search Icon
//This Test makes sure that the Search functionality - an important part of the user experience is working.

    it('.type() - type into a DOM element', () => {
        // https://on.cypress.io/type
        cy.get('.Input-wun2o8-0')
          .type('This is Working').should('have.value', 'This is Working')
    })
})