import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actionCreator';


const unsubscribe = store.subscribe(() => {         // subscribe method returns a function that can be used to unsubscribe the listener.
    console.log("Store changed!", store.getState());
})

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugAdded("Bug 3"));
store.dispatch(bugResolved(1))
store.dispatch(bugResolved(2))

unsubscribe(); // unsubscribing the listener, no notification will be received after this line.

store.dispatch(bugRemoved(1));
console.log(store.getState()); // initialy state is empty array coz we have dispatched no action yet.


