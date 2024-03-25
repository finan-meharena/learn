import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension' // enhancer 
import reducer from './bugs';



export default function configureStore(){
    const store = createStore(
        reducer,
        devToolsEnhancer({trace: true})
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // allows our store to talk to dev tools
        );

    return store;
}