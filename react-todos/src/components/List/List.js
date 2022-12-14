import React, { Component } from 'react';

import ListItem from '../ListItem/ListItem';

export default class List extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((item) => (
                    <ListItem
                        key={item.id}
                        todo={item}
                        onToggle={this.props.onToggle}
                        onDelete={this.props.onDelete}
                    />
                ))}
            </ul>
        );
    }
}