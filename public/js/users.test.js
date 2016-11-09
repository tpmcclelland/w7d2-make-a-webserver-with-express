var first_name = faker.name.firstName()
var last_name = faker.name.lastName()
var email = faker.internet.email()
var id = 4

//Users: Get
var allUsers = new Request(baseUrl + '/users?format=json', {
    method: 'GET',
})
testEndpoint(allUsers)

//Users: insert
var insertUsers = new Request(baseUrl + '/users',
    {
        method: 'POST',
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email
        })
    })
testEndpoint(insertUsers)

//Users: Update
var updateUsers = new Request(baseUrl + `/user/${id}`,
    {
        method: 'PATCH',
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email
        })
    })
testEndpoint(updateUsers)

//Users: Delete
var deleteUsers = new Request(baseUrl + '/user/' + id, {method: 'DELETE'})
testEndpoint(deleteUsers)
