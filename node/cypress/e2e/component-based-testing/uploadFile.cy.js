context('Window',() =>{
	beforeEach(()=>{
		cy.visit('http://localhost:3000/')
	})

	  it('check view port mac 15', () => {
		cy.viewport('macbook-15')
		cy.screenshot()
		cy.wait(200)

  })

	   it('check next view port mac 13', () => {
		cy.viewport('iphone-6','landscape')
		cy.screenshot()
		cy.wait(200)

  })
})