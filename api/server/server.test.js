const supertest = require("supertest");
const server = require("./server.js");
const db = require("../../data/db.config");

// beforeEach(async () => {
//   await db.seed.run();
// });

describe("server test", () => {
  test("server route / ", async () => {
    const res = await supertest(server).get("/");
    expect(res.status).toBe(200);
    expect(res.type).toBe("application/json");
  });
});

describe("User Registration", () => {
  it("Should register with 201 ", async () => {
    await db("users").del();
    const res = await supertest(server)
      .post("/auth/register")
      .send({ name: "ken", email: "ken@gmail.com", password: "nothing" });
    expect(res.status).toBe(201);
  });
});

describe("User Login", () => {
  it("Should Login user ", async () => {
    const res = await supertest(server)
      .post("/auth/login")
      .send({ email: "ken@gmail.com", password: "nothing" });
    expect(res.status).toBe(200);
    expect(res.text).toContain("token");
  });
});

describe("login failure", () => {
  it("should return 401", async () => {
    const res = await supertest(server)
      .post("/auth/login")
      .send({ userEmail: "ken@gmail.co" });
    expect(res.status).toBe(401);
  });
});

// * Pass
// PASS  api/server/server.test.js
// server test
//   √ server route /  (17ms)
// User Registration
//   √ Should register with 201  (253ms)
// User Login
//   √ Should Login user  (8ms)
// login failure
//   √ should return 401 (3ms)

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        4.075s
// Ran all test suites related to changed files.
