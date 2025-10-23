describe("API Testing for Bhagavad Gita", () => {

    it("tc01_GET isteği", () => {
        cy.request("https://gita-api.vercel.app/").then((response) => {
            assert.equal(response.status, 200);
            expect(response.status).to.equal(200);
        });
    });

    it("tc02_GET isteği for Verse (chapter default)", () => {
        const rq = {
            method: 'GET',
            url: "https://gita-api.vercel.app/tel/verse/7/22",
            failOnStatusCode: false
        };

        cy.request(rq).then((response) => {
            assert.equal(response.status, 200);
            expect(response.status).to.equal(200);
            cy.log("response body::::::", JSON.stringify(response.body));
            cy.log("response headers::::::", JSON.stringify(response.headers));
        });
    });

    it("tc03_GET isteği with qs", () => {
        const rq = {
            method: 'GET',
            url: "https://gita-api.vercel.app/eng/verse/2",
            qs: {
                language: "eng",
                verse_no_serial: "2"
            },
            failOnStatusCode: false
        };

        cy.request(rq).then((response) => {
            assert.equal(response.status, 200);
            expect(response.status).to.equal(200);
            cy.log("response body::::::", JSON.stringify(response.body));
            cy.log("response statusText::::::",JSON.stringify(response.statusText))
            cy.log("response duration::::::",JSON.stringify(response.duration))
        });
    });

    it("tc04_POST isteği", () => {
        const rq = {
            method: 'POST',
            url: "https://gita-api.vercel.app/tel/verse/7/22",
            failOnStatusCode: false
        };

        cy.request(rq).then((response) => {
            assert.equal(response.status, 405);
            expect(response.status).to.equal(405);
            cy.log("response body::::::", JSON.stringify(response.body));
        });
    });

    it("tc05_GET isteği with body & Header", () => {
        const body = {
            chapter_no: "7",
            verse_no: "22",
        };

        const rq = {
            method: 'GET',
            url: "https://gita-api.vercel.app/tel/verse/7/22",
            body: body, 
            headers: {
                'Age': '0',
                'Connection': 'keep-alive',
                'Server': 'Vercel'
            },
            failOnStatusCode: false
        };

        cy.request(rq).then((response) => {
            assert.equal(response.status, 200);
            expect(response.status).to.equal(200);
            cy.log("response body::::::", JSON.stringify(response.body));
            cy.log("response headers::::::", JSON.stringify(response.headers));
        });
    });

    it("tc06_GET isteği - assertions", () => {
        const rq = {
            method: 'GET',
            url: "https://gita-api.vercel.app/",
            failOnStatusCode: false
        };

        cy.request(rq).then((response) => {
            assert.equal(response.status, 200);
            expect(response.status).to.equal(200);

            cy.log("response body::::::", JSON.stringify(response.body));
            expect(response.body).to.include("GitaTeluguAPI"); 
            expect(response.headers).to.have.property('content-type');
            expect(response.headers['content-type']).to.include('text/html');
            expect(response.duration).to.be.lessThan(2000);
        });

    });

    it("tc07_POST isteği - assertions", () => {
        const rq = {
            method: 'POST',
            url: "https://gita-api.vercel.app/",
            failOnStatusCode: false
        };

        cy.request(rq).then((response) => {
            assert.equal(response.status, 405);
            expect(response.status).to.equal(405);

            cy.log("response body::::::", JSON.stringify(response.body));
            expect(response.body.detail).to.include("Method Not Allowed");
            expect(response.headers).to.have.property('cache-control');
            expect(response.headers['content-type']).to.include('application/json');
            expect(response.duration).to.be.lessThan(700);
        });

    });


    it("tc08_GET isteği - No cookies kontrolü", () => {
  const rq = {
    method: "GET",
    url: "https://gita-api.vercel.app/",
    failOnStatusCode: false
  };

  cy.request(rq).then((response) => {
    expect(response.status).to.eq(200);
    cy.log("Response headers::::", JSON.stringify(response.headers));
    expect(response.headers).to.not.have.property('set-cookie');
  });

});
 it("tc09_POST isteği - No cookies kontrolü", () => {
  const rq = {
    method: "POST",
    url: "https://gita-api.vercel.app/",
    failOnStatusCode: false
  };

  cy.request(rq).then((response) => {
    expect(response.status).to.eq(405);
    cy.log("Response headers::::", JSON.stringify(response.headers));
    expect(response.headers).to.not.have.property('set-cookie');
    expect(response.duration).to.be.lessThan(700)
  });
  
});

});
