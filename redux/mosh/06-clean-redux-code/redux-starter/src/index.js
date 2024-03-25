import store from './store/store' // import from store, not customStore
import {bugAdded, bugRemoved, bugResolved} from './store/bugs'

store.dispatch(bugAdded("Bug 1"))
store.dispatch(bugAdded("Bug 2"))
store.dispatch(bugAdded("Bug 3"))
store.dispatch(bugResolved(1));
console.log(store.getState())