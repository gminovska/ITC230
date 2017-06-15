//this component should display a list of resources that are in the database.
import React from 'react';
import { Image } from 'react-bootstrap';
const ResourceList = (props) => {
    // const itemSelected = (id) => { onResourceSelect(id) };
    function itemSelected(resource) {
        props.onResourceSelect(resource);
    }
    return (
        <div className="resource_row">
            {props.resources.map((resource)=>
                <div onClick={() => { itemSelected(resource);}} className="item well" key={resource.id}>
                    <h3>{resource.name}</h3>
                    <Image className="resource_image" src={ resource.image } alt="Resource image" />
                </div>
            )}
        </div>
    );
};

export default ResourceList;

//get the data from the database by making an ajax call.
//loop through the data and display it..