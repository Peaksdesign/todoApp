export async function getList() {
    const response = await fetch(
        'https://private-610ea7-reactdemoapi.apiary-mock.com/task',
    );
    return await response.json();
}

export async function createItem(description: string) {
    const newRequestOptions = {
        method: 'POST',
        headers: new Headers({
            Authorization: 'Eco Pass123',
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            description: description,
        }),
    };

    const response = await fetch(
        'https://private-610ea7-reactdemoapi.apiary-mock.com/task',
        newRequestOptions,
    );
    return await response.json();
}

export function deleteItem() {
    const deleteRequestOptions = {
        method: 'DELETE',
        headers: new Headers({
            Authorization: 'Eco Pass123',
            'Content-Type': 'application/json',
        }),
    };

    return fetch(
        'https://private-610ea7-reactdemoapi.apiary-mock.com/task/1',
        deleteRequestOptions,
    );
}
