const TODO_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/';

export function getTodo() {
  return fetch(TODO_URL).then((res) => res.json());
};

export function deleteTodo(id) {
  return fetch(TODO_URL + id, {
    method: 'DELETE',
  }).then((res) => res.json());
}

export function updateTodo(todo) {
    return fetch(TODO_URL + todo.id, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export function createTodo(newTodo) {
  return fetch(TODO_URL, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-type': 'application/json'
    }
  }).then((res) => res.json());
}