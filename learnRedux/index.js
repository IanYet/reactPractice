import { createStore } from 'redux'
import todoApp from './reducers'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';

let store  = createStore(todoApp)

console.log(store)
console.log(store.getState())

const unsubscribe = store.subscribe(() => 
    console.log(store.getState())
)

store.dispatch(addTodo('actions to learn'))
store.dispatch(addTodo('reducers to learn'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()