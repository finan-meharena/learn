// next is reference to the next middleware function 
// (if onl one middleware fucntion next is the root reducer)

// SNA, like DNA (Store, Next, Action)

// const logger = ({destination}) => store => next => action => { // destructure param
const logger = (param) => store => next => action => { // add param
    console.log("Logging at  : ",param.destination );
    // console.log("Logging at  : ",destination );
    next(action); // calling the next middleware function (rooter reducer, in our case) so our state gonna be updated.
}

export default logger;


