describe('Flujos Críticos - Consultorio Dental', () => {
  
    // Flujo crítico 1: Inicio de sesión con datos reales
    it('Debe permitir a un usuario iniciar sesión', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('input[name="email"]').type('maria.gonzalez@dentalclinic.com') 
      cy.get('input[name="password"]').type('ContraseñaSegura2024') 
      cy.get('button[type="submit"]').click()
      cy.url().should('include', '/dashboard') 
    })
  
    // Flujo crítico 2: Crear una nueva cita con datos de paciente realista
    it('Debe permitir agregar una nueva cita', () => {
      cy.visit('http://localhost:3000/citas')
      cy.get('button#add-new-cita').click()
      cy.get('input[name="paciente"]').type('Carlos López') 
      cy.get('input[name="fecha"]').type('2024-10-15') 
      cy.get('textarea[name="descripcion"]').type('Dolor intenso en la muela superior derecha') 
      cy.get('button[type="submit"]').click()
      cy.contains('Cita creada exitosamente').should('be.visible')
    })
  
    // Flujo crítico 3: Editar los datos de un paciente con información realista
    it('Debe permitir editar los datos de un paciente', () => {
      cy.visit('http://localhost:3000/pacientes')
      cy.get('button#edit-paciente').click()
      cy.get('input[name="nombre"]').clear().type('Luis Martínez') 
      cy.get('input[name="telefono"]').clear().type('555-6789') 
      cy.get('button[type="submit"]').click()
      cy.contains('Paciente actualizado').should('be.visible')
    })
  
    // Flujo crítico 4: Eliminar una cita con datos realistas
    it('Debe permitir eliminar una cita existente', () => {
      cy.visit('http://localhost:3000/citas')
      cy.get('button#delete-cita').click()
      cy.contains('Cita eliminada exitosamente').should('be.visible')
    })
  
    // Flujo crítico 5: Ver historial de citas de un paciente
    it('Debe mostrar el historial de citas de un paciente', () => {
      cy.visit('http://localhost:3000/pacientes')
      cy.get('button#view-historial').click()
      cy.contains('Historial de Citas').should('be.visible')
    })
  
  })
  