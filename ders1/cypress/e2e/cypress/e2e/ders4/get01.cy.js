describe("API Testing", ()=> {

    it("tc01_GET isteği", ()=> {

        cy.request("https://httpbin.org/get").then((response)=> {
        assert.equal(response.status,200);
        expect(response.status).to.equal(200);
    
        })
    });

    it("tc02_GET isteği", ()=> {

        const rq = {
        method : 'GET',
        url : "https://httpbin.org/get",
        
        failOnStatusCode: false 

        }

        cy.request("https://httpbin.org/get").then((response)=> {
        assert.equal(response.status,200);
        expect(response.status).to.equal(200);
        console.log("response ::::::", response)
        cy.log("response ::::::",JSON.stringify(response))
        cy.log("response body::::::",JSON.stringify(response.body))           
        cy.log("response headers::::::",JSON.stringify(response.headers))
        cy.log("response status::::::",JSON.stringify(response.status))
        cy.log("response statusText::::::",JSON.stringify(response.statusText))
        cy.log("response duration::::::",JSON.stringify(response.duration))

    
        })
    });

    it("tc03_GET isteği with qs", ()=> {

        const rq = {
        method : 'GET',
        url : "https://httpbin.org/get",
        qs : {
            id : "1",
            name : "Mr."
        },
        failOnStatusCode: false 

        }

        cy.request(rq).then((response)=> {
        assert.equal(response.status,200);
        expect(response.status).to.equal(200);
        cy.log("response body::::::",JSON.stringify(response.body))           

    
        })
    });


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



})