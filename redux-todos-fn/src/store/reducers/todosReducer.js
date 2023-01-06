import { DELETE_TODO, TOGGLE_TODO, ADD_NEW_TODO } from '../actions/todos';

const INITIAL_STATE = {
    list: [
        { id: 1, title: 'Item 1', isDone: false },
        { id: 2, title: 'Item 2', isDone: true },
        { id: 3, title: 'Item 3', isDone: true },
        { id: 4, title: 'Item 4', isDone: false },
    ],
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case DELETE_TODO:
            return {
                ...state,
                list: state.list.filter((item) => payload !== item.id),
            };
        case TOGGLE_TODO:
            return {
                ...state,
                list: state.list.map((item) =>
                    payload !== item.id
                        ? item
                        : { ...item, isDone: !item.isDone }
                ),
            };
      case ADD_NEW_TODO:
          return {
            ...state,
            list: [...state.list,
            {
              id: Date.now(),
              ...payload,
              isDone: false,
            },
            ]
          };
        default:
            return state;
    }
}