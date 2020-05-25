
export function getList() { 
    return fetch('https://private-610ea7-reactdemoapi.apiary-mock.com/task')
        .then(response => response.json())
}

export function createItem(description) {
    const newRequestOptions = {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Eco Pass123', 
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            'description': description,
        })
    };

    return fetch('https://private-610ea7-reactdemoapi.apiary-mock.com/task', newRequestOptions)
}

export function deleteItem() {
    const deleteRequestOptions = {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Eco Pass123', 
            'Content-Type': 'application/json'
        })
    };
    
    return fetch('https://private-610ea7-reactdemoapi.apiary-mock.com/task/1', deleteRequestOptions)
}