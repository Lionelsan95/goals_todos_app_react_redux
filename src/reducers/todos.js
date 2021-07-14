import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../actions/todos";
import {RECEIVE_DATA} from "../actions/shared";

export default function todos (state = [], action) {
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo)
        case REMOVE_TODO:
            return state.filter(tod => tod.id !== action.id)
        case TOGGLE_TODO:
            return state.map((tod) => tod.id !== action.id ? tod: Object.assign({}, tod, {complete: !tod.complete}))
        case RECEIVE_DATA:
            return action.todos
        default:
            return state
    }
}