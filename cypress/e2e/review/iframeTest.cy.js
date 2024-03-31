describe('Testing Iframes with Cypress Framework', () => {
   beforeEach("Open the link", () => {
        cy.visit('/iframe');
   } )
   
   const runTests = () => {
        it('Verify that we have iframe body and text', () => {
            // we create a function that will return iframe body
            const getIframeBody = () => 
            cy.get('#mce_0_ifr').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap);

            // Assert the necessary test cases
            getIframeBody().should('be.visible');
            getIframeBody().should('contain','Your content goes here.');
        })
        it('more tests', ()=>{
            // you can put as many it blocks as you need
        })
   }
   
    describe("Desktop view [macbook-16]",() => {
        beforeEach(() => {
            cy.viewport("macbook-16");
        })
        runTests();
    })
    describe("Mobile view [iphone-x]",() => {
        beforeEach(() => {
            cy.viewport("iphone-x");
        })
        runTests();
    })
})