import configureStore from './store/configureStore' // import from store, not customStore
import {projectAdded} from './store/projects'

const store = configureStore();

store.dispatch(projectAdded({name : "Project 1"})) // pass actions as objects

console.log(store.getState())