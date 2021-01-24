
const page = `https://cities.trueid.net`;

//this page will test the Homepage renders and can be interacted with


// Test 1 Page Loads
//this test checks if the page has loaded correctly, this is important in oder to make sure that the elements are working and that the code has compiled successfully
describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit(page) 
   })
// Test 2 Click on SearchIcon
//This Test makes sure that the Search button clicking is working. this allows the search bar to be interacted with

    it('.click() - click on Search icon element', () => {
        cy.get('.SearchDesktop__InputSearchButton-lttusx-2').click()
    })

//Test 3  Type into Search Icon
//This Test makes sure that the Search functionality - an important part of the user experience is working.

    it('.type() - type into a DOM element', () => {
        cy.get('.Input-wun2o8-0')
          .type('Where is my article').should('have.value', 'Where is my article')
    })

//Test 4  Type into Search Icon
//This Test makes sure that the page look the same as previous image snapshot. 
//this is very powerful for testing impact on visual elements without updating code.


    it('Visual Test - home page screenshot', () => {
        cy.document()
              .toMatchImageSnapshot();
      });
})
