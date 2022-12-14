import './App.css';

import { Component } from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import { createTodo, deleteTodo, getTodo } from '../../services/usersService';

class App extends Component {
    state = {
        todos: [],
    };

    toggleTodo = (id) => {
        this.setState({
            todos: this.state.todos.map((item) =>
                item.id !== id
                    ? item
                    : {
                        ...item,
                        isDone: !item.isDone,
                    }
            ),
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