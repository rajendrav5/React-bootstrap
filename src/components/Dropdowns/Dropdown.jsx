import React from 'react';


const getOpts = (data) => data.data.map((obj) =>  <option key-={obj.value} value={obj.value}>{obj.value}</option> );

const Select = (data) => (<select onChange={ (ev) => data.change(ev) }>
    {getOpts(data)}
</select>);

export default class Dropdowns extends React.Component {
    constructor(){
        super();
        this.drowdown1 = [{
            value: 'Bangalore',
        },
        {   value: 'chennai'
        }];

        this.drowdown2 = [{
            value: 'marathalli',
        },
        {   value: 'hebbal'
        }];
        this.state = {
            level0Enabled:false,
            
        }
    }

    dropped(ev) {
        this.setState({
            level0Enabled: true
        });
    }

    render(){
        return(<div>
            <Select data={this.drowdown1} change={this.dropped.bind(this)} />
            {this.state.level0Enabled ? <Select data={this.drowdown2} /> : null}
            {this.state.level0Enabled ? <button> Submit </button> : null}
        </div>);
    }
}