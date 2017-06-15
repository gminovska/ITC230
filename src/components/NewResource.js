import React from 'react';
import {Modal} from 'react-bootstrap';
const NewResource = (props) => {
    if(props.add){
        const newResource = {
                name: '',
                image: '',
                type: '',
                author: '',
                description: ''
            }
        const addNew = (obj) => {
            // console.log(newResource);
            props.onSave(newResource);
        }

        return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <Modal.Header closeButton>
            <Modal.Title>You know of a good learning resource? Add it below:</Modal.Title>
          </Modal.Header>
            </div>
            <div className="well col-md-8 col-md-offset-2">
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            name="resource[name]" 
                            placeholder="Name" 
                            required 
                            onChange={(e) => newResource.name = e.target.value }/>
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            name="resource[image]" 
                            placeholder="Image URL" 
                            required
                            onChange={(e) => newResource.image = e.target.value } />
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            name="resource[type]" 
                            placeholder="Type" 
                            required
                            onChange={(e) => newResource.type = e.target.value } />
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            name="resource[author]" 
                            placeholder="Author" 
                            required
                            onChange={(e) => newResource.author = e.target.value } />
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            name="resource[description]" placeholder="Description" 
                            required
                            onChange={(e) => newResource.description = e.target.value } />
                    </div>
                    <div className="form-group">
                        <input 
                            className="btn btn-primary pull-right" 
                            type="button" 
                            value="Save" 
                            onClick={addNew}/>
                        <input 
                            className="btn btn-default" 
                            type="button" 
                            value="Cancel" 
                            onClick={props.onCancel}/>
                    </div>
                    <div className="form-group">
                        
                    </div>
            </div>
        </div>
    );
    } else {
        return (
            <div></div>
        );
    }
    
};

export default NewResource;