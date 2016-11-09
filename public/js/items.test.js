var title = faker.commerce.productName()
var category = faker.commerce.department()
var description = faker.commerce.productAdjective()
var price = faker.commerce.price()
var id = 4

//Orders: Get
var allItems = new Request(baseUrl + '/items?format=json', {
    method: 'GET',
})
testEndpoint(allItems)

//Orders: insert
var insertItems = new Request(baseUrl + '/items',
    {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            category: category,
            description: description,
            price: price
        })
    })
testEndpoint(insertItems)

//Orders: Update
var updateItems = new Request(baseUrl + `/item/${id}`,
    {
        method: 'PATCH',
        body: JSON.stringify({
            title: title,
            category: category,
            description: description,
            price: price
        })
    })
testEndpoint(updateItems)

//Users: Delete
var deleteItems = new Request(baseUrl + '/item/' + id, {method: 'DELETE'})
testEndpoint(deleteItems)
