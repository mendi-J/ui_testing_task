class InventoryPage {
  validateSortOrderAtoZ() {
    this.validateURL();
    this.selectSortOrder("az");
    this.logItemNames(".inventory_item_name");
    this.validateAlphabeticalSortOrder();
  }

  validateSortOrderZtoA() {
    this.selectSortOrder("za");
    this.logItemNames(".inventory_item_label a");
    this.validateReverseAlphabeticalSortOrder();
  }

  validateURL() {
    cy.url().should("include", "inventory");
  }

  selectSortOrder(sortOrder) {
    cy.get(".product_sort_container").select(sortOrder);
    cy.get(".product_sort_container").invoke("val").should("eq", sortOrder);
  }

  logItemNames(selector) {
    cy.get(".inventory_item").then((items) => {
      items.each((index, item) => {
        const itemName = Cypress.$(item).find(selector).text().trim();
        cy.log(`Item ${index + 1}: ${itemName}`);
      });
    });
  }

  validateAlphabeticalSortOrder() {
    cy.get(".inventory_item").then((items) => {
      const itemNames = items.toArray().map((item) => {
        return Cypress.$(item).find(".inventory_item_name").text().trim();
      });
      for (let i = 0; i < itemNames.length - 1; i++) {
        expect(itemNames[i].localeCompare(itemNames[i + 1])).to.be.at.most(0);
      }
    });
  }

  validateReverseAlphabeticalSortOrder() {
    cy.get(".inventory_item").then((items) => {
      const itemNames = items.toArray().map((item) => {
        return Cypress.$(item).find(".inventory_item_label a").text().trim();
      });
      for (let i = 0; i < itemNames.length - 1; i++) {
        expect(itemNames[i + 1].localeCompare(itemNames[i])).to.be.at.most(0);
      }
    });
  }
}
export default InventoryPage;
