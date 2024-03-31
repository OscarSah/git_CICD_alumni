describe("Testing hover over action in cypress", () => {

    it('amazon hover over test',{baseUrl: "https://www.amazon.com/" },() => {
        // even though we have a base url defined we need to provide cy.visit() command
        cy.visit('');
        // locate the element that you want to hover over, this element should have 'mouseover' defined as event listener, trigger is similar to actions in selenium
        cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover');

        // locate an element using linktext
        cy.contains('Create a List').click();

        // verify my url has 'wishlist/intro' in it
        cy.url().should('include','wishlist/intro');

    })
})