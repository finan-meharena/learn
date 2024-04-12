import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import reducer from './reducer';
import logger from './middleware/loggger';
import toast from './middleware/toast';


export default function(){
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            logger({destination : "Console"}),
            toast
        ],
        // middleware: [logger( "Console")]
    });  
}

