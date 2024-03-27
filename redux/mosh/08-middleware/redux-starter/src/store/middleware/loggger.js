// next is reference to the next middleware function 
// (if onl one middleware fucntion next is the root reducer)

// SNA, like DNA (Store, Next, Action)
const logger = store => next => action => { 
    console.log("store : ", store);
    console.log("next : ", next);
    console.log("action : ", action);
    next(action); // calling the next middleware function (rooter reducer, in our case) so our state gonna be updated.
}

export default logger;