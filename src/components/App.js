import React, { Component } from 'react';

//import components
import Jumbotron from './Jumbotron';
import ResourceList from './ResourceList';

class App extends Component {
    
    render() {
        return (
            //pass the data from the App props to the Resource List Component
            <div className="container">
            <Jumbotron />
            <ResourceList resources={this.props.resources}/> 
            </div> 
        );
    }
}

export default App;