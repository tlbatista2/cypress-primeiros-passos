describe('Orange HRM Test', () => {
  it('Login realizado com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('include', '/dashboard')
    cy.get('.oxd-topbar-header-breadcrumb-module > .oxd-text').contains('Dashboard')
  })
  it('Login Failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Test')
    cy.get("[name='password']").type('Test')
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert')
  })
})