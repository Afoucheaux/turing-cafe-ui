describe('Turing cafe', () => {

  it('Should confirm true is true', () => {
    expect(true).to.equal(true)
  });

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should create a header that says Turing Cafe Reservations', () => {
    cy.get("[class='app-title']").contains('Turing Cafe Reservations')
  });

  it('Should create reservation cards with a name, date, time, number of guests and a way to cancel', () => {
    cy.get("[data-cy=card]").should('exist')
    cy.get('article').should('have.length', 9)
    cy.get("[data-cy=name]").should('contain', "Christie")
    cy.get("[data-cy=date]").should('contain', "12/29")
    cy.get("[data-cy=time]").should('contain', "7:00")
    cy.get("[data-cy=number]").should('contain', "Number of guests 12")
  })

  it('Should create a form with inputs for name, date, time and number of guests', () => {
    cy.get('[data-cy=form]').should('exist')
    cy.get('[data-cy=form-name]').type("Aaron").should('have.value', 'Aaron')
    cy.get('[data-cy=form-date]').type('12/12').should('have.value', '12/12')
    cy.get('[data-cy=form-time]').type("9:00").should('have.value', '9:00')
    cy.get('[data-cy=form-number]').type('2').should('have.value', '02')
    cy.get('[data-cy=submit]').click()
    cy.get('article').should('have.length', 10)
  })


});
