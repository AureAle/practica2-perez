describe ('Issue#2', function () {
    it('Visitar sitio”', function () {
        cy.visit('http://educ.ddns.net:88/pruebas-cypress/')
    })

    it('Agrega el campo Teléfono en la tabla datos después del campo Dirección', function () {
        cy.get('thead > tr > :nth-child(3)').next().contains('Teléfono')
    })

        it('Agrega el campo “Telefono” en la modal', function () {
            cy.get('thead > tr > :nth-child(5) > .btn').click();
            cy.get(':nth-child(1) > .col-md-7 > .form-control')
                .type('name').should('have.value','name')
            cy.get(':nth-child(2) > .col-md-11 > .form-control')
            .type('direccion').should('have.value','direccion')
            cy.get(':nth-child(3) > .col-md-11 > .form-control')
                .type('555').should('have.value','555')
                cy.get('.modal-footer > .btn-primary').click()
        })

    it('Editar con el campo “Teléfono”', function () {
        // cy.get('tr').length;
        cy.get(':nth-child(3) > :nth-child(5) > .btn-primary').click()
        cy.get(':nth-child(3) > .col-md-11 > .form-control')
        .type('556').should('have.value','555556')
        cy.get('.modal-footer > .btn-primary').click()
        // cy.get('.btn-primary').last().click({force:true})
    })
})