import configureStore from './store/configureStore' // import from store, not customStore
import {bugAdded, bugResolved} from './store/bugs'

const store = configureStore();

store.dispatch(bugAdded({description : "Bug 1"})) // pass actions as objects
store.dispatch(bugAdded({description : "Bug 2"}))
store.dispatch(bugAdded({description : "Bug 3"}))
store.dispatch(bugResolved({id : 1}));
console.log(store.getState())