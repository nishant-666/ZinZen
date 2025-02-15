describe("DashboardUserChoice Test", () => {
  it("Should have 5 Choices to navigate My Goals/My Feelings/My Time/Explore/ZinZen", () => {
    cy.visit("/");
    cy.get(".lang-btn1").contains("English").click();
    cy.get(".theme-choice-btn").first().click();
    cy.contains("I already know ZinZen").click();
    cy.get(".dashboard-choice-light1").should("have.length", 1);
    cy.get(".dashboard-choice-light").should("have.length", 4);
  });

  it("Should have option to add Goals and Feelings", () => {
    cy.get(".add-icon").should("have.length", 2);
    // cy.get('.add-icon').eq(0).click().location('pathname')
    // .should('include', 'MyGoals')
    // .go('back');
    cy.get(".add-icon").eq(1).click().location("pathname")
      .should("include", "AddFeelings")
      .go("back");
  });
  it("Should have ZinZen button working", () => {
    cy.contains("ZinZen")
      .click()
      .location("pathname")
      .should("include", "ZinZen")
      .go("back");
  });

  it("Should have ZinZen button working", () => {
    cy.contains("ZinZen")
      .click()
      .location("pathname")
      .should("include", "ZinZen")
      .go("back");
  });

  it("Should have My Goals button working", () => {
    cy.contains("My Goals")
      .click()
      .wait(10000)
      .location("pathname")
      .should("include", "AddGoals");
    cy.get('[alt="Back arrow"]').click();
  });

  it("Should have My Time button", () => {
    cy.contains("My Time");
  });

  it("Should have Explore button working", () => {
    cy.contains("Explore")
      .click()
      .location("pathname")
      .should("include", "Explore")
      .go("back");
  });

  it("Should have My Feelings button working", () => {
    cy.contains("My Feelings")
      .click()
      .wait(10000)
      .location("pathname")
      .should("include", "AddFeelings");
    cy.get('[alt="Back arrow"]').click();
  });
});
