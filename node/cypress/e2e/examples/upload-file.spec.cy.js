describe('upload file',function(){
	it('upload files',function(){
		const filePath = 'logo512.png';
		cy.visit('https://the-internet.herokuapp.com/upload');
		cy.get('#file-upload').attachFile(filePath);
		cy.get('#file-submit').click();
		cy.get('#uploaded-files').contains('logo512.png')
	})
})