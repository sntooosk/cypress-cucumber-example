import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que o usuário acessa o site de exemplo do Cypress", () => {
  cy.visit("https://example.cypress.io");
});

When("ele clica no link {string}", (linkText) => {
  cy.contains(linkText).click();
});

Then("a URL deve conter {string}", (urlParte) => {
  cy.url().should("include", urlParte);
});

When("ele digita {string} no campo de e-mail", (email) => {
   cy.get('#email1').type(email);
});

Then("o campo de e-mail deve conter {string}", (emailEsperado) => {
   cy.get('#email1').should("have.value", emailEsperado);
});

When("ele digita {string} no campo de password", (password) => {
   cy.get('#password1').type(password);
});

Then("o campo de password deve conter {string}", (passwordEsperado) => {
  cy.get('#password1').should("have.value", passwordEsperado);
});

