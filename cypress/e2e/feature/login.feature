Feature: Acessar, digitar e verificar no site de exemplo do Cypress

  Scenario: O usuário acessa a página, digita um e-mail e senha e valida o campo
    Given que o usuário acessa o site de exemplo do Cypress
    When ele clica no link "type"
    Then a URL deve conter "/commands/actions"
    When ele digita "fake@email.com" no campo de e-mail
    Then o campo de e-mail deve conter "fake@email.com"
    When ele digita "fake@password" no campo de password
    Then o campo de password deve conter "fake@password"
