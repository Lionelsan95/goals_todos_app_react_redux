import React from "react";
import {connect} from "react-redux";
import {handleAddGoal, handleDeleteGoal} from "../actions/goals";
import List from "./List";



class Goals extends React.Component {
    addItem = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddGoal(this.input))
    }

    removeItem = (item) => {
        this.props.dispatch(handleDeleteGoal(item))
    }
    render(){
        return (
            <div>
                <h1>Goals List</h1>
                <input
                    id='goal'
                    type='text'
                    placeholder="add goal"
                    ref={(input) => this.input = input} />

                <button onClick={this.addItem}>Add goal</button>

                <List items={this.props.items} remove={this.removeItem} />
            </div>
        )
    }
}

export default connect((state) => ({
    items: state.goals
}))(Goals);