import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers/index';
import Routes from './Routes/Routes';

const store = createStore(rootReducer);

export default class MarkUpWrapper extends React.Component{
    constructor(){
        super();
    }

    render(){
        const compiledMarkUp = ReactDOMServer.renderToString(
            <Provider store={store}>
                <Router>
                    <Routes />
                </Router>
            </Provider>
           );
        return(
            // <div dangerouslySetInnerHTML={{__html: compiledMarkUp}} />
            <Provider store={store}>
                <Router>
                    <Routes />
                </Router>
            </Provider>
        );
    }
}