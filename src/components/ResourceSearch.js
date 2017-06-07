import React from 'react';

const ResourceSearch = (props) => {
    const searchTerm = (event) => {props.onSearch(event.target.value);}
    return (
        <div>
            <input type="text" onChange={searchTerm}/>
        </div>
    );
};

export default ResourceSearch;