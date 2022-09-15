/* eslint-disable no-unused-expressions */
import { html, fixture, expect, fixtureCleanup } from "@open-wc/testing";

import "../src/Components/a11yInput.js";

/**
 * @typedef {import('../src/a11y-input.js').A11yInput} A11yInput
 */

describe("a11y input", () => {
  afterEach(() => {
    fixtureCleanup();
  });
  it("has by default an empty string as label", async function (done) {
    parentNode = document.createElement("div");
    const el = /** @type {A11yInput} */ (
      await fixture(html`"<a11y-input></a11y-input>"`, parentNode)
    );
    expect(el).to.be.true;
    done();
    expect(el.label).to.equal("");
  });
});
