describe("API Testing -assertions", ()=> {

    it("tc01_POST isteği- assertions", ()=> {

        const rq = {
        method : 'POST',
        url : "https://httpbin.org/post",
         body : {
            name : "Ms.",
            role : "QA",
            age: "27"
        },
        
        failOnStatusCode: false 

        }

        cy.request(rq).then((response)=> {
        assert.equal(response.status,200);
        expect(response.status).to.equal(200);
        cy.log("response body::::::",JSON.stringify(response.body))           

        assert.equal(response.body.json.name, "Ms.");
        expect(response.body.json.role).to.equal ("QA");
        assert.equal(response.body.json.age, "27")
        assert.equal(response.body.url, "https://httpbin.org/post");
        expect(response.body.json).to.deep.eq({
            name : "Ms.",
            role : "QA",
            age: "27"
        });

        expect(response.headers['content-type']).to.eq('application/json');
        expect(response.headers['content-type']).to.include('application/json');
        expect(response.duration).to.be.lessThan(1800)

        })
    });



})