describe('smoke-test', () => {
  it('visit home page', () => {
    cy.visit('/');
    cy.get('.flex > .text-xl').should('have.text', 'NIMBUS');
    //cy.get('#slider-container-TRENDING\ NOW > .px-5').should('have.text', 'TRENDING NOW');
    cy.get('#hotspot-left > .m-auto > .text-4xl > .text-tricolorgreen').should('have.text', 'ICONIC');
    cy.get('.text-teal-400').should('have.text', 'PLACES');
  })
  
  it('visit plan page', () => {
    cy.visit('/')
    cy.contains('Plan').click()
    cy.get(':nth-child(1) > .text-2xl').should('have.text', 'Where would you like to go?')
  })
  it('visit discover page', () => {
    cy.visit('/');
    cy.contains('Discover').click();
    cy.get('.text-4xl').should('have.text', 'DISCOVER PLACES');
  })
  it('test plan button', () => {
    cy.visit('/');
    cy.get('.Button_button__HQfZU').click();
    cy.get(':nth-child(1) > .text-2xl').should('have.text', 'Where would you like to go?');
  })
  it('test tags button', () => {
    cy.visit('/');
    cy.contains('+Tags').click();
    cy.get('.text-left').should('have.text', 'FILTER BY TAGS');
  })
  /* 
  it('test search page', () => {
    cy.visit('/');
    cy.get('#searchbar-container-undefined > .bg-neutral-100').type('sam');
  })
  it('test search page', () => {
    cy.visit('/');
    cy.get('.null > :nth-child(1) > .overflow-hidden > .w-full').click();
  })
  

  it('click on iconic place component', () => {
    cy.visit('/') 
    cy.get('#hotspot-left').scrollIntoView().should('be.visible');
    cy.get('.left-\[18rem\]').click;

    cy.get('.md\:hover\:translate-y-3 > .w-\[18rem\] > .h-\[95\%\]').click
    cy.get('.md\:hover\:translate-y-3 > .w-\[18rem\] > .top-6 > .w-14 > .top-0 > .relative')
      .should('be.visible')
      .should('contain', 'View More');
  })
 */

  
})