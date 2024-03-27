import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducer';
import logger from './middleware/loggger';

export default function(){
    return configureStore({
        reducer,
        middleware: [logger({destination : "Console"})],
        // middleware: [logger( "Console")]
    });  
}

