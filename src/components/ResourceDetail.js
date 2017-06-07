import React from 'react';

const ResourceDetail = (props) => {
    if(!props.resource){
        return (<div className="hidden"></div>);
    }
    
    const deleteItem = (id) => {
        props.deleteResource(props.resource.id);
    }

    return (             
        <div className="col col-lg-4 col-lg-offset-4 well">
            <img className="resource_image" src={props.resource.image} alt="" />
            <p><b>Name:</b> {props.resource.name}</p>
            <p><b>Type:</b> {props.resource.type}</p>
            <p><b>Author:</b> {props.resource.author}</p>
            <p><b>Description:</b> {props.resource.description}</p>
            <input className="btn btn-lg btn-danger" type="button" value="Delete" onClick={deleteItem}/>
        </div>
    );
};

export default ResourceDetail;