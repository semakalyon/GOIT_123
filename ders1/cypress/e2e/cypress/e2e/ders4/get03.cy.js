describe("API Testing", ()=> {

it("tc01_GET isteği ", ()=> {

        const rq = {
        method : 'GET',
        url : "https://httpbin.org/get",

        failOnStatusCode: false 

        }

        cy.request(rq).then((response)=> {
       // debugger;
        assert.equal(response.status,200);
       // debugger;
        expect(response.status).to.equal(200);
       // debugger;
        assert.equal("https://httpbin.org/get", response.body["url"])
       // debugger;
        assert.equal("application/json", response.headers['content-type'])
        assert.isTrue(response.duration <= 15000);
        expect(response.duration).to.be.most(15000);
        })
    });

 });