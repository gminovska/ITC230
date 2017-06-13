import React from 'react';

const EditResource = (props) => {
    if(props.edit){
        const modifyThis = props.resource;
        const addNew = (obj) => {
            // console.log(newResource);
            props.onSave(modifyThis);
        }

        return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1>Modify resource and save</h1>
            </div>
            <div className="well col-md-8 col-md-offset-2">
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            name="resource[name]" 
                            placeholder="Name" 
                            required 
                            defaultValue={props.resource.name}
                            onChange={(e) => modifyThis.name = e.target.value }/>
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            name="resource[image]" 
                            placeholder="Image URL" 
                            required
                            defaultValue={props.resource.image}
                            onChange={(e) => modifyThis.image = e.target.value } />
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            name="resource[type]" 
                            placeholder="Type" 
                            required
                            defaultValue={props.resource.type}
                            onChange={(e) => modifyThis.type = e.target.value } />
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            name="resource[author]" 
                            placeholder="Author" 
                            required
                            defaultValue={props.resource.author}
                            onChange={(e) => modifyThis.author = e.target.value } />
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            name="resource[description]" placeholder="Description" 
                            required
                            defaultValue={props.resource.description}
                            onChange={(e) => modifyThis.description = e.target.value } />
                    </div>
                    <div className="form-group">
                        <input 
                            className="btn btn-primary pull-right" 
                            type="button" 
                            defaultValue="Save" 
                            onClick={addNew}/>
                        <input 
                            className="btn btn-default" 
                            type="button" 
                            defaultValue="Cancel" 
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

export default EditResource;