import React from 'react';
import PropTypes from 'prop-types';
import bindActionCreators from 'redux';
import { connect } from 'react-redux';

const counterActions = {
    INC_COUNT: "INC_COUNT",
    DEC_COUNT: "DEC_COUNT",
}

function counterAction(type) {
    let action ;

    switch(type){
        case 'inc':
            action = 'INC_COUNT';
            break;

        case 'dec':
            action = 'DEC_COUNT';
            break;
    }
    return {
        type: action,
    }
}

class Counter extends React.Component{

    constructor(){
        super();
    }

    incVal() {
        this.props.counterAction('inc');
    }

    decVal() {
        this.props.counterAction('dec');
    }

    render(){
        return (<div>
            counter value is being show here : {this.props.counterValue}
            <div>
                Let's see if I can the valuesssss:
                <button onClick={this.incVal.bind(this)}>Inc Counter</button>
                <button onClick={this.decVal.bind(this)}>Dec Counter</button>
            </div>
        </div>);
    }
}

const mapStateToProps = (state) => ({
    counterValue : state.counterVal.count, 
});

const mapDispatchToProps = {
    counterAction: counterAction,
};

Counter.propTypes = {
    counterValue: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);