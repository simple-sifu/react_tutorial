import React, { Component } from 'react';

export class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render(){
        return (
            <div>
                <h1>Welcome { this.state.name } </h1>
                <button onClick={ this.handleClick} >  {this.state.isToggleOn ? 'ON' : 'OFF'} </button>
            </div>
        );
    }

}
