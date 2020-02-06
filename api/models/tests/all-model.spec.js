const db = require("../../../data/db.config");
const userMod = require("../users-model");
const childMod = require("../children-model");
const foodMod = require("../food-journal-model");

// refreshes seeds before tests
// beforeEach(async () => {
//   await db.seed.run();
// });

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
    expect(food.length).toBe(6);
  });
});

// * All tests pass
// PASS  api/models/tests/all-model.spec.js
// Users Model
//   √ find (10ms)
//   √ find By Id (2ms)
//   √ Find Children By User ID (1ms)
//   √ Add User (130ms)
// Childrens Model
//   √ find children (1ms)
//   √ findChild By ID (1ms)
//   √ Add Child (79ms)
// Food Model
//   √ find Food (1ms)
//   √ Add Food (96ms)
//   √ remove food (85ms)

// console.log node_modules/knex/lib/logger.js:44
//   .returning() is not supported by sqlite3 and will not have any effect.

// PASS  api/server/server.test.js
// server test
//   √ server route /  (18ms)
// User Registration
//   √ Should register with 201  (312ms)
// User Login
//   √ Should Login user  (10ms)
// login failure
//   √ should return 401 (4ms)

// Test Suites: 2 passed, 2 total
// Tests:       14 passed, 14 total

// PASS  api/server/server.test.js
// server test
//   √ server route /  (18ms)
// User Registration
//   √ Should register with 201  (312ms)
// User Login
//   √ Should Login user  (10ms)
// login failure
//   √ should return 401 (4ms)

// Test Suites: 2 passed, 2 total
// Tests:       14 passed, 14 total
// Snapshots:   0 total
// Time:        4.336s
// Ran all test suites related to changed files.
