import { bugAdded, bugResolved , getUnresolvedBugs, assingBugToUser, getBugsByUser} from './store/bugs';
import configureStore from './store/configureStore' // import from store, not customStore
import {projectAdded} from './store/projects'
import {userAdded } from './store/users';


const store = configureStore();

store.dispatch(userAdded({name : "finan"}))
// store.dispatch(userAdded({name : "kidane"}))
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(projectAdded({ name: "Project 2" }));
// store.dispatch(projectAdded({ name: "Project 3" }));
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(assingBugToUser({bugId : 1, userId : 1}))
// store.dispatch(assingBugToUser({bugId : 2, userId : 1}))
// store.dispatch(bugResolved({ id: 1 }));


