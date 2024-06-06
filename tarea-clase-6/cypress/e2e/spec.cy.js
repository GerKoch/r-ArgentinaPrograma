///<reference types="Cypress" />

describe("Test de tarea 11", () => {
  before(() => {
    cy.visit("http://localhost:8080/tarea-6.html"); 
  });

  it("Testea la funcionalidad de la tarea 6", () => {
    cy.get("#cantidad-integrantes-trabajan").type("3");
    cy.get("#agregar").click();
    cy.get(".integrante input").eq(0).type("20");
    cy.get(".integrante input").eq(1).type("25");
    cy.get(".integrante input").eq(2).type("30");
    cy.get("#calcular").click();
    cy.get("#quitar").click();

    cy.get("#mayor-salario").should("have.text", "30");
    cy.get("#menor-salario").should("have.text", "20");
    cy.get("#anual-salario").should("have.text", "25.00");
    cy.get("#mensual-salario").should("have.text", "2.08");
    cy.get("#resetear").click();
  });
});
