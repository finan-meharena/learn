import { bugAdded, bugResolved , getUnresolvedBugs} from './store/bugs';
import configureStore from './store/configureStore' // import from store, not customStore
import {projectAdded} from './store/projects'


const store = configureStore();

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(projectAdded({ name: "Project 2" }));
store.dispatch(projectAdded({ name: "Project 3" }));
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState()); 

console.log(x === y); // true becase the selector is memoized and the result is cached
