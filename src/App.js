import React, { Component } from 'react';

export class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "Tommy"
        }

    }

    render(){
        return (
            <div>
                <h1>Welcome { this.state.name } </h1>
                <button onClick={ () => this.setState({name: "Jeremy"})} > change name</button>
            </div>
        );
    }

}
