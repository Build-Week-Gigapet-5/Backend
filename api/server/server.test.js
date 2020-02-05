const supertest = require("supertest");
const server = require("./server.js");

describe("server test", () => {
  test("server route / ", async () => {
    const res = await supertest(server).get("/");
    expect(res.status).toBe(200);
    expect(res.type).toBe("application/json");
  });
});

beforeEach(async done => {
  let token;

  const login = await supertest(server)
    .post("/auth/login")
    .send({
      name: "Jane",
      password: "abcde"
    });
  token = login.body.token;
  done();
});

// * Pass
// api/server/server.test.js
//   server test
//     √ server route /  (18ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        2.957s, estimated 3s
// Ran all test suites related to changed files.

// Watch Usage: Press w to show more.
