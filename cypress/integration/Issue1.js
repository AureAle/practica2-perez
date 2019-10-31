describe ('Issue#1', function () {
    it('Visitar sitio”', function () {
        cy.visit('http://educ.ddns.net:88/pruebas-cypress/')
    })

    it('Agrega al listado principal de personas el campo "Dirección" y quitar el campo "Fecha"', function () {
        cy.get('thead > tr > :nth-child(3)').contains('Dirección')
    })
})