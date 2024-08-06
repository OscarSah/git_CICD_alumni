describe("Verify bookit api", () => {
    it('get user info test', () => {
// since JS has sync/async code situation, we need to put second request inside the first request function otherwise you will get undefined object error
            cy.request({
                method: 'GET',
                url: 'https://api.qa3.bookit.cydeo.com/sign',
                qs: {
                    email:"nsonger0@cmu.edu",
                    password:"nilsonger"
                }
            }).then((tokenResponse) => {
                const token = tokenResponse.body.accessToken;
                cy.request({
                    method: 'GET',
                    url: 'https://api.qa3.bookit.cydeo.com/api/users/me',
                    auth:{
                        'bearer' : token
                    }
                }).then((userResponse) => {
                    console.log(userResponse);
                    expect(userResponse.status).to.equal(200);
                    expect(userResponse.body.firstName).to.equal('Nil');
                })
            })

           // cy.request() ----> WORNG



    })




})