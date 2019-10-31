describe ('Issue#3', function () {
    it('Visitar sitio”', function () {
        cy.visit('http://educ.ddns.net:88/pruebas-cypress/')
    })

    it('Eliminar registros de personas', function () {
        cy.get(':nth-child(3) > :nth-child(5) > .btn-danger').click()
    })
})