import { bugAdded, bugResolved } from './store/bugs';
import configureStore from './store/configureStore' // import from store, not customStore
import {projectAdded} from './store/projects'

const store = configureStore();

store.dispatch(projectAdded({name : "Project 1"})) // pass actions as objects
store.dispatch(projectAdded({name : "Project 2"}))
store.dispatch(bugAdded({description : "Bug 1"}))
store.dispatch(bugResolved({id : 1}))


console.log(store.getState())