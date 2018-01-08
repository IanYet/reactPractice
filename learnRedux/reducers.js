import { combineReducers } from 'redux'
import * as actions from './actions'
// import { ADD_TODO } from './actions';
// import { VisibilityFilters, SET_VISIBILITY_FILTER } from './actions';

const { SHOW_ALL } = actions.VisibilityFilters

console.log(actions)

function visibilityFilter( state = SHOW_ALL, action) {
    switch (action.type) {
        case actions.SET_VISIBILITY_FILTER:
        return actions.filter
        default:
        return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case actions.ADD_TODO:
        return [
            ...state,
            {
                text: action.text,
                completed: false
            }
        ]
        case actions.TOGGLE_TODO:
        return state.map((todo, index) => {
            if( index === action.index){
                return Object.assign({}, todo, {
                    completed: !todo.completed
                })
            }

            return todo
        })
        default:
        return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp