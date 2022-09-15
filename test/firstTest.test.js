import {
  html,
  fixture,
  assert,
  fixtureCleanup,
  elementUpdated,
} from "@open-wc/testing";
//import { expect } from "chai";

import { App } from "../src/main.js";
//import { App } from "../src/main.js";

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
function add(args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

describe("add()", function () {
  const tests = [
    { args: [1, 2], expected: 3 },
    { args: [1, 2, 3], expected: 6 },
    { args: [1, 2, 3, 4], expected: 10 },
  ];

  tests.forEach(({ args, expected }) => {
    it(`correctly adds ${args.length} args`, function () {
      const res = add(args);
      assert.strictEqual(res, expected);
    });
  });
  it("prueba fixture del test", async function (done) {
    const el = await fixture(html`<div><lit-app></lit-app></div> `);
    console.log(el);
    done;
    await elementUpdated(el);
  });
});
