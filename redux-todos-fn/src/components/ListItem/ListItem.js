import './ListItem.css';

import { deleteTodo, toggleTodo } from '../../store/actions/todos';

import React from 'react';
import { useDispatch } from 'react-redux';

function ListItem({ todo }) {
    const dispatch = useDispatch();

    function onDeleteClick(e) {
        e.stopPropagation();
        dispatch(deleteTodo(todo.id));
    }

    function onToggleClick() {
        dispatch(toggleTodo(todo.id));
  }

    return (
        <div
            className={'task-item' + (todo.isDone ? ' done' : '')}
            onClick={onToggleClick}
        >
            {todo.title}
            <span className="delete-btn" onClick={onDeleteClick}>
                x
            </span>
        </div>
    );
}

export default ListItem;