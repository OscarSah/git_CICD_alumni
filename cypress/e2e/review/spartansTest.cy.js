describe('Verify that spartans end point returns expected values', () => {
  qase(1, 
    it('Verify all spartans', () => {
    // we cy.request function with parameters in it as JSON format
    cy.request({
      method: 'GET',
      url: 'http://3.84.34.15:8000/api/spartans',
    }).then((response) => {
      cy.log(response); // print to Cypress CLI
      expect(response.status).to.equal(200);
      expect(response.body[0].name).to.equal('Meade');
      expect(response.headers['content-type']).to.equal('application/json');
      expect(response.headers.connection).to.equal('keep-alive');
    });
  })
  );
  qase(2, 
  it('Verify query parameter spartans', () => {
    // we cy.request function with parameters in it as JSON format
    cy.request({
      method: 'GET',
      url: 'http://3.84.34.15:8000/api/spartans/search',
      qs: {
        gender: 'Female',
        nameContains: 'j',
      },
    }).then((response) => {
      cy.log(response); // print to Cypress CLI
      expect(response.status).to.equal(200);
      expect(response.body.content.length).to.equal(13); // to verify we have 13 elements in content array
    });
  })
  );
});
