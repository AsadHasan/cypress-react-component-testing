/* global cy */
import { mount } from "@cypress/react";
import App from "./App";

describe("App", () => {
  it("should contain title heading", () => {
    mount(<App />);
    cy.get("div>h1").should("be.visible");
  });
  it("should contain image element node", () => {
    mount(<App />);
    cy.get("div>img").should("be.visible");
  });
});
