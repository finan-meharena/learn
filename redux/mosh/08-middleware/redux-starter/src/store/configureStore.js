import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducer';
import logger from './middleware/loggger';
import func from './middleware/func';


export default function(){
    return configureStore({
        reducer,
        middleware: [
            logger({destination : "Console"}),
            func
        ],
        // middleware: [logger( "Console")]
    });  
}

