const supertest = require("supertest");
const server = require("./server.js");

describe("server test", () => {
  test("server route / ", async () => {
    const res = await supertest(server).get("/");
    expect(res.status).toBe(200);
    expect(res.type).toBe("application/json");
    // expect(res.body.message).toMatch("Welcome to Gigapet");
  });
});

// test results? 1 fail

// PASS  api/server/server.test.js
// server test
//   √ server route /  (18ms)

// Test Suites: 1 failed, 1 passed, 2 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        2.364s, estimated 3s
// Ran all test suites related to changed files.

// Watch Usage
// › Press a to run all tests.
// › Press f to run only failed tests.
// › Press p to filter by a filename regex pattern.
// › Press t to filter by a test name regex pattern.
// › Press q to quit watch mode.
// › Press Enter to trigger a test run.
