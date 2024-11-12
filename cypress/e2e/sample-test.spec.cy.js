describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://staging-fuse-aws.flatirons.com");
  });

  it("Sign up", () => {
    cy.visit("https://staging-fuse-aws.flatirons.com");
    cy.contains("Sign Up").click();
    const random = Math.random().toString(36).substring(7);
    cy.get("input[id='first_name']").type("Test");
    cy.get("input[id='last_name']").type("Test");
    cy.get("input[id='email']").type("test" + random + "@test.com");
    cy.get("input[id='password']").type("Password@2024");
    cy.get("input[id='company_name']").type("Test");
    cy.contains("Sign Up").click();
    cy.contains("Check your email").should("be.visible");
  });
});
