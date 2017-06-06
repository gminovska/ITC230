//this component should display a list of resources that are in the database.
import React from 'react';

const ResourceList = ({resources}) => {
    return (
        <div className="resource_row">
            {resources.map((resource)=>
                <div className="item well" key={resource.id}>
                    <h3>{resource.name}</h3>
                    <img className="resource_image" src={ resource.image } alt="Resource image" />
                </div>
            )}
        </div>
    );
};

export default ResourceList;

//get the data from the database by making an ajax call.
//loop through the data and display it..