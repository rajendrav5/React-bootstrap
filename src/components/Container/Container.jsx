// import ReactDOM from 'react-dom';
import React from 'react';
import Title from '../Title/Title';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';

class Container extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(<section>
            <Link to='/about'>To title page</Link>
            <Title />
            <Counter />
        </section>);
    }
}

export default Container;