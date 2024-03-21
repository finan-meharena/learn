import store from './customStore'
import * as actions from './actionCreator'


store.dispatch(actions.bugAdded("Bug 1"))
console.log(store.getState())