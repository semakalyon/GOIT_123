describe("API Testing ReqRes", ()=> {

    it("tc01_GET isteği", ()=> {

        cy.request("https://reqres.in/api").then((response)=> {
        assert.equal(response.status,200);
        expect(response.status).to.equal(200);
    
        })
    });

    

    it("tc02_GET isteği", ()=> {

        const rq = {
        method : 'GET',
        //url : "https://reqres.in/api/users",
        url : "https://reqres.in/api/users?x-api-key=reqres-free-v1",
        
        failOnStatusCode: false 

        }

        cy.request("https://reqres.in/api/users?x-api-key=reqres-free-v1").then((response)=> {
        assert.equal(response.status,401);
        expect(response.status).to.equal(401);        

        })
    });

    it("tc03_GET isteği with qs", ()=> {

        const rq = {
        method : 'GET',
        url : "https://reqres.in/api/users",
        qs : {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        },
        failOnStatusCode: false 

        }

        cy.request(rq).then((response)=> {
        assert.equal(response.status,401);
        expect(response.status).to.equal(401);
        cy.log("response body::::::",JSON.stringify(response.body))           

    
        })
    });

/*
    it("tc04_POST isteği with body_1", ()=> {

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

    
        })
    });

    it("tc05_POST isteği with body_2", ()=> {

        const body = { 
            name : "Ms.",
            role : "QA",
            age: "27"
        }

        const rq = {
        method : 'POST',
        url : "https://httpbin.org/post",
        body : body,
        failOnStatusCode: false 

        }

        cy.request(rq).then((response)=> {
        assert.equal(response.status,200);
        expect(response.status).to.equal(200);
        cy.log("response body::::::",JSON.stringify(response.body))           

    
        })
    });

    
    it("tc06_POST isteği with body_2 & Header", ()=> {

        const body = { 
            name : "Ms.",
            role : "QA",
            age: "27"
        }

        const rq = {
        method : 'POST',
        url : "https://httpbin.org/post",
        body : body,
        headers : {
            'Content-Type' : 'application/json',
            'Connection' : 'keep-alive',
            'User-Agent' : 'Mozilla 5.0'
        },

        failOnStatusCode: false 

        }

        cy.request(rq).then((response)=> {
        assert.equal(response.status,200);
        expect(response.status).to.equal(200);
        cy.log("response body::::::",JSON.stringify(response.body))           
        cy.log("response body::::::",JSON.stringify(response.headers))           

    
        })
    });

*/

})