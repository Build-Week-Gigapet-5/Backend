const db = require("../../../data/db.config");
const userMod = require("../users-model");

// refreshes seeds before tests
beforeEach(async () => {
  await db.seed.run();
});

describe("Users Model", () => {
  test("find", async () => {
    const res = await userMod.find();
    expect(res.length).toBeGreaterThan(0);
  });

  test("find By Id", async () => {
    const res = await userMod.findById(1);
    expect(res.name).toBe("Jane");
  });

  test("Find Children By User ID", async () => {
    const res = await userMod.findChildrenByUserId(1);
    expect(res.length).toBe(2);
  });

  test("Add User", async () => {
    const res = await userMod.addUser({
      name: "jennifer",
      email: "jennifer@gmail.com",
      password: "password"
    });
    const user = await db("users").select();
    expect(user.length).toBe(6);
  });
});

// PASS  api/models/tests/users-model.spec.js (8.695s)
// Users Model
//   √ find (1692ms)
//   √ find By Id (1615ms)
//   √ Find Children By User ID (1633ms)
//   √ Add User (1486ms)

// console.log node_modules/knex/lib/logger.js:44
//   .returning() is not supported by sqlite3 and will not have any effect.

// Test Suites: 2 passed, 2 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        10.315s
// Ran all test suites related to changed files.
