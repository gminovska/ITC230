//TODO refactor the resourceList prop
import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
//make an ajax call to get the data
import axios from 'axios';

//import components
import Jumbotron from './Jumbotron';
import ResourceList from './ResourceList';
import ResourceDetail from './ResourceDetail';
import NewResource from './NewResource';
import EditResource from './EditResource';
class App extends Component {

    constructor(props){
    super(props);
     this.state = { 
         resources: []
         , filterText: ''
         , selectedResource: null
         , newResource: false
         , editResource: false 
         , showResourceModal: false
     };   
    }
    
    componentWillMount() {
        axios
        .get('/api/resources')
        .then((response) => { this.setState({resources: response.data});})
        .catch(e => {console.log(e);})
    }

    resourceSelected(resource) {
        this.setState({selectedResource: resource, showResourceModal: true});
    }

    removeResource(id) {
        var confirmed = window.confirm("Are you sure you want to delete the resource?");
        if(confirmed){
        axios
        .delete(`/api/resource/${id}`)
        .then((response)=>{
            this.setState((prevState)=>({
                resources: prevState.resources.filter((resource)=>resource.id !== response.data),
                selectedResource: null,
                showResourceModal: false
            }));
        })
        .catch(e => {console.log(e);})
        }    
    } //end of removeResource

    editResource(obj) {
        axios.post('/api/resource/' + obj.id, obj)
        .then((response)=>this.setState({
            editResource: false
        }))
        .catch((err)=>console.log(err))
    }

    saveResource(obj) {
        axios.post('/api/resource/', obj)
        .then((response)=>{
            obj.id = response.data._id
            this.setState((prevState)=>({
                resources: [...prevState.resources, obj],
                newResource: false,
                showAddModal: false,
            }));
        })
        .catch((e)=>console.log(e));
        
    }

    render() {
        return (
            //pass the data from the App props to the Resource List Component
            <div className="container">
            <Jumbotron 
                onInputChange={(text)=>{this.setState({filterText: text.toLowerCase()});}} 
                onAddClick={()=>{this.setState({
                                    showAddModal: true,
                                    newResource: true
                                    })
                                }} />

            <Modal show={this.state.showAddModal} 
                   onHide={()=>this.setState({showAddModal:false})}>
                   <NewResource 
                    add={this.state.newResource} 
                    onCancel={()=>{this.setState({newResource: false, showAddModal: false})}}
                    onSave={(newResource)=>this.saveResource(newResource)}/>
            </Modal>
            
            <Modal show={this.state.editResource}>
            <EditResource
                edit={this.state.editResource}
                resource={this.state.selectedResource}
                onCancel={()=>{this.setState({editResource: false})}}
                onSave={(res)=>this.editResource(res)} />
            </Modal>
            <ResourceList 
                onResourceSelect={this.resourceSelected.bind(this)} resources={this.state.resources.filter((resource)=> this.state.filterText === '' || resource.name.toLowerCase().includes(this.state.filterText) || resource.author.toLowerCase().includes(this.state.filterText))}/> 
            <Modal show={this.state.showResourceModal}
                   onHide={()=>this.setState({showResourceModal:false})}>
                   <ResourceDetail 
                resource={this.state.selectedResource} 
                deleteResource={(id)=> this.removeResource(id)}
                onEditClick={() => {this.setState({editResource: true})}}
                editResource = {(id) => this.editResource(id)} />
            </Modal>
            </div> 
        );
    }
}

export default App;