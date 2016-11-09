var baseUrl = '/api/v1'

function testEndpoint(endPointRequest) {
    fetch(endPointRequest)
    .then(response => response.json())
    .then(handleResponse)
}

function handleResponse(response ) {
    console.log(response)
}
