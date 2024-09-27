describe('Flujos Alternos - Consultorio Dental', () => {

    // Flujo alterno 1: Error de credenciales incorrectas en el login 
    it('Debe mostrar un error si el login falla por credenciales incorrectas', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('input[name="email"]').type('usuario.incorrecto@dentalclinic.com') // Email incorrecto 
      cy.get('input[name="password"]').type('contraseña_incorrecta') // Contraseña incorrecta
      cy.get('button[type="submit"]').click()
      cy.contains('Credenciales incorrectas').should('be.visible')
    })
  
    // Flujo alterno 2: Manejo de errores de validación en el formulario de nueva cita con datos faltantes
    it('Debe manejar errores de validación en el formulario de nueva cita', () => {
      cy.visit('http://localhost:3000/citas')
      cy.get('button#add-new-cita').click()
      cy.get('input[name="paciente"]').clear() // Deja el campo vacío
      cy.get('button[type="submit"]').click()
      cy.contains('El nombre del paciente es obligatorio').should('be.visible')
    })
  
    // Flujo alterno 3: Redirección al login si el usuario no está autenticado
    it('Debe redirigir al inicio de sesión si el usuario no está autenticado', () => {
      cy.visit('http://localhost:3000/dashboard')
      cy.url().should('include', '/login') // Verifica que redirige al login si no está autenticado
    })
  
  })
  