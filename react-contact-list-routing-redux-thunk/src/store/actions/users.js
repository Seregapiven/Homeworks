import api from "../../api";

export const SET_IS_LOADING = 'SET_IS_LOADING';
export function setIsLoading(payload) {
    return { type: SET_IS_LOADING, payload };
};

export const ADD_USER = 'ADD_USER';
export function addUser(newUser) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    api.post('users', {
      ...newUser,
    }).then(({ data }) => dispatch({ type: ADD_USER, payload: data }));
    dispatch(setIsLoading(false));
  }
};

export const DELETE_USER = 'DELETE_USER';
export function deleteUser(id) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    api.delete('users/' + id).then(() =>
      dispatch({ type: DELETE_USER, payload: id })
    );
    dispatch(setIsLoading(false));
  };
};

export const UPDATE_USER = 'UPDATE_USER';
export function updateUser (user){
  return (dispatch) => {
    dispatch(setIsLoading(true));
    api.put('users/' + user.id, {
      ...user}).then(({ data }) => {
      dispatch({ type: UPDATE_USER, payload: data });
      dispatch(setIsLoading(false))
    });
  };
};

export const SET_USERS = 'SET_USERS';
export function setUsers(payload) {
  return {type: SET_USERS, payload}
};

export function getUsers() {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    api.get('users').then(({ data }) => dispatch(setUsers(data)));
    dispatch(setIsLoading(false));
  }
}