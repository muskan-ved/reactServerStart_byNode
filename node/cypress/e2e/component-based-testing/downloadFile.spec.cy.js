

describe('Downloadfile my anchor tag', () => {
	it('download',() => {
		cy.visit('http://localhost:3000/')
		cy.get('a[download]').click();
	})
})

 
context('downloadFile by custom url', () => {
  it('download file in mentioned dir', () => {
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','cypress/downloads','example.jpg')
    cy.downloadFile('https://sample-videos.com/doc/Sample-doc-file-100kb.doc','cypress/downloads','example.doc')

  })
 })