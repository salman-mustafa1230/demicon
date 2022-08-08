
var request = require("supertest"); 
var app = require("./../app");


describe("server-routes", () => {

    it("POST /users/by-country - bad request", async () => {
     await request(app).post("/users/by-country").send({
        country: ["Spain","Turkey"]
      }).expect(422);
    });
  it("POST /users/by-country - success", async () => {
      await request(app).post("/users/by-country").send({
        country: ["Spain","Turkey"],
        pageNo: 0
      }).set('Accept', 'application/json')
      .expect(200);
    
    });
  });
