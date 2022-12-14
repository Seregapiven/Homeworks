import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    state = {
        values: {
            title: '',
        },
        errors: {},
        isDirty: {},
        isValid: false,
    };

    onInputChange = (e) => {
        const values = {
            ...this.state.values,
            [e.target.name]: e.target.value,
        };

        const errors = this.validate(values);

        this.setState({
            values: values,
            errors: errors,
            isValid: !Object.keys(errors).length,
            isDirty: {
                ...this.state.isDirty,
                [e.target.name]: true,
            },
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave(this.state.values);

        this.setState({
            values: {
            title: '',
        },
        })

        // e.target.reset();
    };

    validate({title}) {
        const errors = {};
        if (title === '') {
            errors.title = 'Enter a task';
        }
        return errors;
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    name="title"
                    value={this.state.values.title}
                    onChange={this.onInputChange}
                />
                <button disabled={!this.state.isValid}>Save</button>
                {this.state.isDirty.title && this.state.errors.title ? (
                    <div className='error'>
                        {this.state.errors.title}
                    </div>
                ) : null}
            </form>
        );
    }
}