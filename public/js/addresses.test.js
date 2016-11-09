var user_id = faker.random.number()
var street = faker.address.streetAddress()
var city = faker.address.city()
var state = faker.address.stateAbbr()
var zip = faker.address.zipCode()
var id = 4

//Addresses: Get
var allAddresses = new Request(baseUrl + '/addresses?format=json', {
    method: 'GET',
})
testEndpoint(allAddresses)

//Addresses: insert
var insertAddresses = new Request(baseUrl + '/addresses',
    {
        method: 'POST',
        body: JSON.stringify({
            user_id: user_id,
            street: street,
            city: city,
            state: state,
            zip: zip
        })
    })
testEndpoint(insertAddresses)

//Addresses: Update
var updateAddresss = new Request(baseUrl + `/address/${id}`,
    {
        method: 'PATCH',
        body: JSON.stringify({
            user_id: user_id,
            street: street,
            city: city,
            state: state,
            zip: zip
        })
    })
testEndpoint(updateAddresss)

//Addresses: Delete
var deleteAddresses = new Request(baseUrl + '/address/' + id, {method: 'DELETE'})
testEndpoint(deleteAddresses)
