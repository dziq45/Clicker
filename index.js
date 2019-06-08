/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { name as appName } from './app.json';
import friendReducer from './reducers/reducer';

export default function configureStore(
) {
    
	return createStore(friendReducer, applyMiddleware(thunk))
}

const AppProvider = () => {
    return (
        <Provider store={configureStore()}>
            <App></App>
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => AppProvider);
