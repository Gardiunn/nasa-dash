import { html, fixture, expect } from '@open-wc/testing';
import "../nasa-dash.js";

describe("nasaDash test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <nasa-dash
        title="title"
      ></nasa-dash>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
