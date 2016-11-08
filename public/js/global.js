var baseUrl = 'http://localhost:8080/api/v1'
var init = {
    method: 'GET',
    format: 'json'
}

var usersRequest = new Request(baseUrl + '/users?format=json', init)
var itemsRequest = new Request(baseUrl + '/items?format=json', init)
var ordersRequest = new Request(baseUrl + '/orders?format=json', init)
var addressesRequest = new Request(baseUrl + '/addresses?format=json', init)

//Test users
function testEndpoint(endPointRequest) {
    fetch(endPointRequest)
    .then(response => response.json())
    .then(handleResponse)
}

function handleResponse(response ) {
    console.log(response)
}

testEndpoint(usersRequest)
testEndpoint(itemsRequest)
testEndpoint(ordersRequest)
testEndpoint(addressesRequest)
