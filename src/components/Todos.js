import React from "react";
import {connect} from "react-redux";
import {handleAddTodo, handleDeleteTodo, handleToggleTodo} from "../actions/todos";

import List from "./List";

class Todos extends React.Component {
    addItem = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddTodo(this.input))
    }
    removeItem = (item) => {
        this.props.dispatch(handleDeleteTodo(item))
    }
    toggleItem = (item) => {
        this.props.dispatch(handleToggleTodo(item.id))
    }
    render(){
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    id='todo'
                    type='text'
                    placeholder="add todo"
                    ref={(input) => this.input = input} />

                <button onClick={this.addItem}>Add todo</button>
                <ul id='todos'></ul>

                <List items={this.props.items} remove={this.removeItem} toggle={this.toggleItem} />
            </div>
        )
    }
}

export default connect((state) => ({
    items: state.todos
}))(Todos)