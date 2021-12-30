/* global cy */
import { mount } from "@cypress/react";
import App from "./App";

describe("App", () => {
  it("should contain title heading", () => {
    mount(<App />);
    cy.get("[data-cy=Title]").should("be.visible");
  });
  it("should contain image element node", () => {
    mount(<App />);
    cy.intercept(
      `${process.env.REACT_APP_URL}?api_key=${process.env.REACT_APP_API_KEY}`,
      {
        title: "Test image",
        hdurl:
          "https://apod.nasa.gov/apod/image/2112/JupiterStorms_JunoGill_1024.jpg",
      }
    );
    cy.get("[data-cy=Image]").should("be.visible");
  });
});
