import {
  DELETE_USER,
  SET_IS_LOADING,
  ADD_USER,
  SET_USERS,
  UPDATE_USER,
} from "../actions/users";

const INITIAL_STATE = {
  list: [],
  isLoading: false,
};


export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case DELETE_USER: return {
      ...state,
      list: state.list.filter((item) => payload !== item.id),
    };
    case SET_IS_LOADING:
            return { ...state, isLoading: payload };
        case DELETE_USER:
            return {
                ...state,
                list: state.list.filter((item) => payload !== item.id),
            };
    case ADD_USER: return {
            ...state,
            list: [...state.list,
            payload
            ]
    };
    case  UPDATE_USER: return {
                ...state,
                list: state.list.map((item) =>
                    item.id === payload.id ? payload : item
                ),
            };
    case SET_USERS: return {
      ...state,
      list: payload,
    };
    default:
      return state;

  }
}