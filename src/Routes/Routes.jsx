import React from 'react';
import Container from '../components/Container/Container';
import Title from '../components/Title/Title';
import Dropdowns from '../components/Dropdowns/Dropdown';
import { Route } from 'react-router-dom';

export default class Routes extends React.Component{
    constructor() {
        super();
    }

    render(){
        return(<div>
            <Route exact path="/" component={Container} />
            <Route path="/about" component={Title} />
            <Route path="/dropdown" component={Dropdowns} />
        </div>);
    }
}
    