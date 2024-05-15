/// <reference types='cypress' />

import InventoryPage from "../pages/inventoryPage";
import LoginPage from "../pages/loginPage";

describe("Sauce Demo App Automation Task", () => {
  let login;
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  before(() => {
    cy.fixture("userLogin.json").then((data) => {
      if (!data || !data.login) {
        throw new Error("Failed to load user login data from fixture");
      }
      login = data.login;
    });
  });

  beforeEach(() => {
    cy.visit("/");
    loginPage.enterUsername(login.username);
    loginPage.enterPassword(login.password);
    loginPage.clickLogin();
  });

  it("Verify successful login", () => {
    cy.log("You have successfully logged in");
    cy.url().should("include", "/inventory");
  });

  it("Should correctly sort inventory item by name from A to Z", () => {
    inventoryPage.validateSortOrderAtoZ();
  });
  it("should correctly sort inventory item by name from Z to A", () => {
    inventoryPage.validateSortOrderZtoA();
  });
});
