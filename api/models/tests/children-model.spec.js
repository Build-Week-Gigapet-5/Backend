const db = require("../../../data/db.config");
const childMod = require("../children-model");

// refreshes seeds before tests
beforeEach(async () => {
  await db.seed.run();
});

describe("Childrens Model", () => {
  test("find children", async () => {
    const res = await childMod.findChildren();
    expect(res.length).toBeGreaterThan(0);
  });

  test("findChild By ID", async () => {
    const res = await childMod.findChildById(1);
    expect(res.child_name).toBe("Ben");
  });

  test("Add Child", async () => {
    const res = await childMod.addChild({
      child_name: "jennifer",
      child_age: 2,
      users_id: 2
    });
    const child = await db("children").select();
    expect(child.length).toBe(8);
  });
});

// PASS  api/models/tests/children-model.spec.js (6.604s)
// Childrens Model
//   √ find children (1550ms)
//   √ findChild By ID (1758ms)
//   √ Add Child (1584ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        8.277s
// Ran all test suites related to changed files.
