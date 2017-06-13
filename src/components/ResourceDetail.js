import React from 'react';

const ResourceDetail = (props) => {
    if(!props.resource){
        return (<div className="hidden"></div>);
    }
    
    const deleteItem = (id) => {
        props.deleteResource(props.resource.id);
    }

    const editItem = () => {
        props.onEditClick();
    }

    return (             
        <div className="well">
            <p><b>Name:</b> {props.resource.name}</p>
            <p><b>Type:</b> {props.resource.type}</p>
            <p><b>Author:</b> {props.resource.author}</p>
            <p><b>Description:</b> {props.resource.description}</p>
            <div className="form-group">
            <input className="btn btn-lg btn-danger" type="button" value="Delete" onClick={deleteItem}/>
            <input className="btn btn-lg btn-default" type="button" value="Edit" onClick={editItem}/>
            </div>
        </div>
    );
};

export default ResourceDetail;