var user_id = faker.random.number()
var item_id = faker.random.number()
var quantity = faker.random.number()
var id = 4

//Orders: Get
var allOrders = new Request(baseUrl + '/orders?format=json', {
    method: 'GET',
})
testEndpoint(allOrders)

//Orders: insert
var insertOrders = new Request(baseUrl + '/orders',
    {
        method: 'POST',
        body: JSON.stringify({
            user_id: user_id,
            item_id: item_id,
            quantity: quantity,
            created_at: Date.now()
        })
    })
testEndpoint(insertOrders)

//Orders: Update
var updateOrders = new Request(baseUrl + `/order/${id}`,
    {
        method: 'PATCH',
        body: JSON.stringify({
            user_id: user_id,
            item_id: item_id,
            quantity: quantity,
            created_at: Date.now()
        })
    })
testEndpoint(updateOrders)

//Users: Delete
var deleteOrders = new Request(baseUrl + '/order/' + id, {method: 'DELETE'})
testEndpoint(deleteOrders)
