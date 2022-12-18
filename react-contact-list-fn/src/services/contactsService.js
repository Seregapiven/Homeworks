import { API_URL } from '../config';

export function getList() {
    return fetch(API_URL).then((res) => res.json());
}

export function deleteItem(id) {
    return fetch(API_URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export function createItem(item) {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

