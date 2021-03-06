/* global cy */
import { mount } from "@cypress/react";
import App from "./App";

describe("App", () => {
  function interceptApiCall() {
    cy.intercept(
      `${process.env.REACT_APP_URL}?api_key=${process.env.REACT_APP_API_KEY}`,
      (req) => {
        req.reply({});
      }
    );
  }
  it("should contain title heading", () => {
    interceptApiCall();
    mount(<App title="Test" imageUrl="../public/image.jpg" />);
    cy.get("[data-cy=Title]").contains("Test");
  });
  it("should contain image element node", () => {
    interceptApiCall();
    mount(<App title="Test" imageUrl="../public/image.jpg" />);
    cy.get("[data-cy=Image]").should("exist");
  });
  it("should show description toggle button", () => {
    interceptApiCall();
    mount(
      <App
        title="Test"
        imageUrl="../public/image.jpg"
        buttonText="Show description"
        descrition="Test description"
      />
    );
    const button = "[data-cy=description-button]";
    cy.get(button)
      .contains("Show description")
      .click({ force: true })
      .contains("Hide description");
  });
});
