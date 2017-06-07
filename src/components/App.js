import React, { Component } from 'react';

//make an ajax call to get the data
import axios from 'axios';

//import components
import Jumbotron from './Jumbotron';
import ResourceList from './ResourceList';

class App extends Component {

    constructor(props){
    super(props);
     this.state = { 
         resources: []
         , filterText: ''
         , selectedResource: null
     };   
    }
    
    componentWillMount() {
        axios
        .get('/api/resources')
        .then((response) => { this.setState({resources: response.data});})
        .catch(e => {console.log(e);})
    }
    
    
    render() {
        return (
            //pass the data from the App props to the Resource List Component
            <div className="container">
            <Jumbotron onInputChange={(text)=>{this.setState({filterText: text.toLowerCase()});}}/>
            <ResourceList onResourceSelect={this.resourceSelected.bind(this)} resources={this.state.resources.filter((resource)=> this.state.filterText === '' || resource.name.toLowerCase().includes(this.state.filterText) || resource.author.toLowerCase().includes(this.state.filterText))}/> 
            </div> 
        );
    }
}

export default App;