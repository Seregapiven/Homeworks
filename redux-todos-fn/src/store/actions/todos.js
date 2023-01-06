export const DELETE_TODO = 'DELETE_TODO';
export function deleteTodo(payload) {
    return { type: DELETE_TODO, payload };
}

export const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(payload) {
    return { type: TOGGLE_TODO, payload };
}

export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export function addNewTodo(payload) {
    return { type: ADD_NEW_TODO, payload };
}