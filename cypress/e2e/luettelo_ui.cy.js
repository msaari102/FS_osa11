/* eslint-disable no-undef */
describe('Puhelinluettelo', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3001')
    cy.contains('Phonebook')
    cy.contains('filter shown with')
  })
})