describe("HTTP Example",function (){
	it('GET',function(){
		cy.request({
			method : 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts/1'
		}).then(function (response) {
			expect(response.body).have.property('id')
		})
	})

	it('POST',function(){
		cy.request({
			method : 'POST',
			url: 'https://jsonplaceholder.typicode.com/posts',
		    body: JSON.stringify({
		    	title: 'foo',
		    	json:{title: 'hello'},
		    	body: 'bar',
		    	userId: 1,
		    }),
  			headers: {
    			'Content-type': 'application/json; charset=UTF-8',
  			},
		}).then(function (response) {
			expect(response.body).have.property('title')
			expect(response.body.json).to.deep.equal({title: 'hello'})
		})
	})

	it('PUT',function(){
		cy.request({
			method : 'PUT',
			url: 'https://jsonplaceholder.typicode.com/posts/1',
			body: JSON.stringify({
			    id: 1,
			    title: 'foo',
			    json:{title: 'hello',id: 1},
			    body: 'bar',
			    userId: 1,
			}),
			headers: {
			    'Content-type': 'application/json; charset=UTF-8',
			},

		}).then(function (response) {
			expect(response.body).have.property('id')
			expect(response.body.json).to.deep.equal({title: 'hello',id: 1})

		})
	})

	it('PATCH',function(){
		cy.request({
			method: 'PATCH',
			url: 'https://jsonplaceholder.typicode.com/posts/1',
		  	body: JSON.stringify({
		    	title: 'foo',
		  	}),
		  	headers: {
		    	'Content-type': 'application/json; charset=UTF-8',
		  	},

		}).then(function (response) {
			expect(response.body).have.property('id')
			// expect(response.body.json).to.deep.equal({title: 'hello',id: 1})

		})
	})

	it('DELETE',function(){
		cy.request({
			method: 'DELETE',
			url: 'https://jsonplaceholder.typicode.com/posts/1',

		}).then(function (response) {
		})
	})
})