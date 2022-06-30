const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("responds with Hello Ralph!", (done) => {
    request(app).get("/").expect("Hello Ralph!", done);
  });
});
