describe('Тестирование работоспособности приложения:', () => {
  it('Приложение доступно на localhost:3000', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('МБОУ АЛГОСОШ');
  });
});