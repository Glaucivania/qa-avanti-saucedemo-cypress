# BugsCrushers — Automação SauceDemo com Cypress

Testes end-to-end automatizados para o [SauceDemo](https://www.saucedemo.com) utilizando Cypress, desenvolvidos pela **Equipe BugsCrushers** como parte do Bootcamp de QA Atlântico Avanti (2026).

---

## Sobre o Projeto

Este repositório contém a suíte de testes automatizados para o fluxo de **Checkout** do SauceDemo — cenário identificado como o mais crítico para o negócio. Os 3 casos de teste automatizados foram selecionados com base nos resultados da execução manual, priorizando a cobertura de bugs e a validação E2E do fluxo principal de compra.

---

## Casos de Teste

| ID | Nome do Teste | Prioridade | Resultado Esperado |
|---|---|---|---|
| CT002 | Envio do formulário com campos obrigatórios em branco | Alta | Sistema exibe mensagem de erro para cada campo vazio |
| CT005 | Conclusão do pedido — botão Finish e tela de confirmação | Alta | Pedido confirmado, carrinho zerado, redirecionamento ao início |
| CT006 | Caracteres especiais e números nos campos de nome | Média | Sistema deve rejeitar dados inválidos (BUG: atualmente aceita) |

> **Observação:** O CT006 documenta um bug conhecido (BUG002). O teste está escrito para falhar intencionalmente, funcionando como alerta de regressão caso o problema seja corrigido sem atualização da suíte.

---

## Stack Utilizada

- **Cypress** — framework de testes E2E
- **JavaScript** — linguagem dos testes
- **Node.js** — ambiente de execução
- **GitHub Actions** *(opcional)* — pipeline de CI

---

## Estrutura do Projeto

```
qa-avanti-saucedemo-cypress/
├── cypress/
│   ├── e2e/
│   │   ├── checkout.cy_CT02.cy.js     # CT002 — campos obrigatórios em branco
│   │   ├── checkout.cy_CT05.cy.js     # CT005 — conclusão do pedido
│   │   └── checkout.cy_CT06.cy.js     # CT006 — caracteres especiais
│   ├── fixtures/                      # dados de teste (credenciais e massa)
│   └── support/                       # comandos customizados e configurações
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

---

## Instalação e Execução

**Pré-requisitos:** Node.js v18+ e npm instalados.

```bash
# Clonar o repositório
git clone https://github.com/Glaucivania/qa-avanti-saucedemo-cypress.git
cd qa-avanti-saucedemo-cypress

# Instalar dependências
npm install

# Abrir o Cypress em modo interativo
npx cypress open

# Executar todos os testes em modo headless
npx cypress run
```

---

## Credenciais de Teste

| Usuário | Senha | Utilizado em |
|---|---|---|
| `standard_user` | `secret_sauce` | CT002, CT005, CT006 |

As credenciais são armazenadas em `cypress/fixtures/` e **não devem** ser inseridas diretamente nos arquivos de teste.

---

## Ambiente de Teste

| Item | Valor |
|---|---|
| URL da Aplicação | https://www.saucedemo.com |
| Navegador | Chrome |
| Modo de execução | Headless (CI) / Interativo (local) |
| Tipo de teste | Funcional — Caixa Preta — E2E |

---

## Resultados da Execução

| Teste | Arquivo | Status | Duração Aproximada |
|---|---|---|---|
| CT002 — Campos em branco | `checkout.cy_CT02.cy.js` | ✅ Passou | ~18 min |
| CT005 — Conclusão do pedido | `checkout.cy_CT05.cy.js` | ✅ Passou | ~24 min |
| CT006 — Caracteres especiais | `checkout.cy_CT06.cy.js` | ❌ Falhou (bug conhecido) | ~18 min |

> Tempo total de execução automatizada: **~1 hora**
> Equivalente manual: **~2 dias**
> Redução de tempo por ciclo de regressão: **96%**

---

## Bugs Cobertos

| ID do Bug | Cenário | Descrição | Status |
|---|---|---|---|
| BUG002 | Checkout CT006 | Sistema aceita caracteres especiais e números nos campos First/Last Name | Aberto |
| BUG003 | Checkout | Campo de CEP aceita quantidade ilimitada de caracteres sem restrição de formato | Aberto |

---

## Equipe

**BugsCrushers — Squad 1**

| Nome | Função |
|---|---|
| Glaucivania Gomes | Team Leader e Analista de QA |
| Diogo Ferreira | Analista de QA |


---

## Documentos Relacionados

- Plano de Testes
- Especificação de Testes
- Relatório de Testes
- Especificação de Bugs

---

*Bootcamp Atlântico Avanti — Trilha QA — Agosto de 2026*
