import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../store/actions/todos';

function Form() {
  const dispatch = useDispatch();

      function onFormSubmit(e) {
        e.preventDefault();
        dispatch(addNewTodo({
          title: e.target.todo.value,
        }));
          e.target.reset();
      }

      return (
          <form onSubmit={onFormSubmit}>
              <div className="row">
                  <div className="ten columns">
                      <input type="text" name="todo" className="u-full-width" />
                  </div>
                  <div className="two columns">
                      <input type="submit" id="submitBtn" value="Add" />
                  </div>
              </div>
          </form>
      );
}

export default Form;