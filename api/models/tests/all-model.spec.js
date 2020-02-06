const db = require("../../../data/db.config");
const userMod = require("../users-model");
const childMod = require("../children-model");
const foodMod = require("../food-journal-model");

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

describe("Food Model", () => {
  test("find Food", async () => {
    const res = await foodMod.getAllFood();
    expect(res.length).toBeGreaterThan(0);
  });

  test("Add Food", async () => {
    const res = await foodMod.addFood({
      food_name: "Fish",
      qty: 1,
      date: "2020-02-05",
      children_id: 1,
      category_id: 3
    });
    const food = await db("foods").select();
    expect(food.length).toBe(7);
  });

  test("remove food", async () => {
    await foodMod.removeFood(1);
    const food = await foodMod.getAllFood();
    expect(food.length).toBe(5);
  });
});

// * All tests pass
// PASS  api/server/server.test.js
// server test
//   √ server route /  (19ms)

// console.log node_modules/knex/lib/logger.js:44
//   .returning() is not supported by sqlite3 and will not have any effect.

// PASS  api/models/tests/users-model.spec.js (19.497s)
// Users Model
//   √ find (1889ms)
//   √ find By Id (1349ms)
//   √ Find Children By User ID (1675ms)
//   √ Add User (2044ms)
// Childrens Model
//   √ find children (1465ms)
//   √ findChild By ID (1625ms)
//   √ Add Child (2150ms)
// Food Model
//   √ find Food (1515ms)
//   √ Add Food (1617ms)
//   √ remove food (2117ms)

// Test Suites: 2 passed, 2 total
// Tests:       11 passed, 11 total
// Snapshots:   0 total
// Time:        21.321s, estimated 26s
// Ran all test suites related to changed files.
