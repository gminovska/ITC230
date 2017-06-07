//TODO refactor the resourceList prop
import React, { Component } from 'react';

//make an ajax call to get the data
import axios from 'axios';

//import components
import Jumbotron from './Jumbotron';
import ResourceList from './ResourceList';
import ResourceDetail from './ResourceDetail';

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

    resourceSelected(resource) {
        this.setState({selectedResource: resource});
    }

    removeResource(id) {
        var confirmed = window.confirm("Are you sure you want to delete the resource?");
        if(confirmed){
        axios
        .delete(`/api/resource/${id}`)
        .then((response)=>{
            this.setState((prevState)=>({
                resources: prevState.resources.filter((resource)=>resource.id !== response.data),
                selectedResource: null
            }));
        })
        .catch(e => {console.log(e);})
        }
        /*
        How to access previous state correctly: https://facebook.github.io/react/docs/state-and-lifecycle.html

        this.setState({
            resources: this.state.resources.filter((resource)=>resource.id !== id),
            selectedResource: null
        })*/
    }

    render() {
        return (
            //pass the data from the App props to the Resource List Component
            <div className="container">
            <Jumbotron onInputChange={(text)=>{this.setState({filterText: text.toLowerCase()});}}/>       
            <ResourceDetail resource={this.state.selectedResource} deleteResource={(id)=> this.removeResource(id)} />
            <ResourceList onResourceSelect={this.resourceSelected.bind(this)} resources={this.state.resources.filter((resource)=> this.state.filterText === '' || resource.name.toLowerCase().includes(this.state.filterText) || resource.author.toLowerCase().includes(this.state.filterText))}/> 
            </div> 
        );
    }
}

export default App;