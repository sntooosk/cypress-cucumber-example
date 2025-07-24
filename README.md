
[![Cypress](https://img.shields.io/badge/Cypress-f0fcf8?logo=cypress\&logoColor=058a5e)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-1dbb68?logo=cucumber\&logoColor=212529)](https://cucumber.io/)

---

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── feature/                 # Arquivos .feature (cenários em Gherkin)
│   │   └── login.feature
│   └── step_definitions/        # Mapeamento dos steps (passos dos testes)
│       └── login.js
├── plugins/
│   └── index.js                 # Configuração do preprocessor Cucumber
└── support/
    └── e2e.js                   # Configuração global do Cypress
```

---

## ✅ Exemplo de Feature (Gherkin)

### `cypress/e2e/feature/login.feature`

```gherkin
Feature: Login no site de exemplo do Cypress

  Scenario: Preenchimento e validação dos campos de login
    Given que o usuário acessa o site de exemplo do Cypress
    When ele clica no link "type"
    Then a URL deve conter "/commands/actions"
    When ele digita "fake@email.com" no campo de e-mail
    Then o campo de e-mail deve conter "fake@email.com"
    When ele digita "fake@password" no campo de password
    Then o campo de password deve conter "fake@password"
```

---

## 🔧 Steps Definition

### `cypress/e2e/step_definitions/login.js`

```js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que o usuário acessa o site de exemplo do Cypress", () => {
  cy.visit("https://example.cypress.io");
});

When("ele clica no link {string}", (linkText) => {
  cy.contains(linkText).click();
});

Then("a URL deve conter {string}", (expectedUrl) => {
  cy.url().should("include", expectedUrl);
});

When("ele digita {string} no campo de e-mail", (email) => {
  cy.get('#email1').type(email);
});

Then("o campo de e-mail deve conter {string}", (emailExpected) => {
  cy.get('#email1').should("have.value", emailExpected);
});

When("ele digita {string} no campo de password", (password) => {
  cy.get('#password1').type(password);
});

Then("o campo de password deve conter {string}", (passwordExpected) => {
  cy.get('#password1').should("have.value", passwordExpected);
});
```

---

## ⚙️ Configurações

### `cypress.config.js`

```js
const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  video: true,
  defaultCommandTimeout: 120000,
  pageLoadTimeout: 180000,
  e2e: {
    setupNodeEvents(on) {
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/feature/*.{js,ts,feature}',
    baseUrl: 'https://example.cypress.io',
  },
});
```

### `cypress/plugins/index.js`

```js
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on) => {
  on('file:preprocessor', cucumber());
};
```

### `cypress/support/e2e.js`

```js
import './commands';

Cypress.on('uncaught:exception', () => {
  return false; // Ignora exceções não relacionadas ao teste
});
```


## 📦 Dependências

### `package.json`

```json
{
  "name": "cypress-cucumber-example",
  "version": "1.0.0",
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  },
  "devDependencies": {
    "cypress": "^13.3.3",
    "cypress-cucumber-preprocessor": "^4.3.1"
  },
  "cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/e2e/step_definitions"
  }
}
```


## ▶️ Execução dos Testes

### 1. Instalar dependências

```bash
npm install
```

### 2. Abrir o Cypress com interface (GUI)

```bash
npm run cy:open
```

### 3. Rodar os testes em modo headless

```bash
npm run cy:run
```

## 📚 Referências
* [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
