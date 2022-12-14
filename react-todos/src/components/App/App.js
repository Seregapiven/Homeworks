import './App.css';

import { Component } from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import { createTodo, deleteTodo, getTodo, updateTodo } from '../../services/usersService';

class App extends Component {
    state = {
        todos: [],
    };


    toggleTodo = (id) => {
        const todo = this.state.todos.find((item) => item.id === id);
        updateTodo({ ...todo, isDone: !todo.isDone }).then((data) => {
            this.setState({
                todos: this.state.todos.map((item) =>
                    item.id !== id ? item : data
                ),
            });
        });
    };

    deleteTodo = (id) => {
        deleteTodo(id).then(() => {
            this.setState({
                todos: this.state.todos.filter((item) => item.id !== id),
            });
        });
    };

    createTodo = (newTodo) => {
        createTodo(newTodo).then((data) => {
            this.setState({
            todos: [
                ...this.state.todos, data],
        });
        })
    };

    componentDidMount() {
    getTodo().then((data) =>
        this.setState({
            todos: data,
        })
    );
}

    render() {
        return (
            <div className='container'>
                <List
                    todos={this.state.todos}
                    onToggle={this.toggleTodo}
                    onDelete={this.deleteTodo}
                />
                <Form onSave={this.createTodo} />
            </div>
        );
    }
}



export default App;