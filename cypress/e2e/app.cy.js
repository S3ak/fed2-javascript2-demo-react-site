describe("Post page", () => {
  it("navigates to a single post", () => {
    cy.visit("http://localhost:5173/");
    cy.intercept("GET", `https://jsonplaceholder.typicode.com/posts`).as(
      "get-posts",
    );

    cy.debug();

    cy.get("@get-posts").should(
      "have.nested.property",
      "response.statusCode",
      201,
    );

    cy.contains(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    ).click();

    cy.url().should("include", "/posts/1");
  });

  it("creates a new post", () => {
    cy.visit("http://localhost:5173/");
    cy.intercept("POST", `https://jsonplaceholder.typicode.com/posts`).as(
      "new-post",
    );

    cy.get("#title").type("fake title");
    cy.get("[name='userId']").type("123456");
    // cy.contains("Create Post").click();

    cy.get("@new-post").should(
      "have.nested.property",
      "response.statusCode",
      201,
    );
  });
});
