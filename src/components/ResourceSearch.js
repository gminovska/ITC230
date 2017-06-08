import React from 'react';

const ResourceSearch = (props) => {
    const searchTerm = (event) => {props.onSearch(event.target.value);}
    return (
        <div>
            <input type="text" className="input-lg" placeholder="Filter by name or author" onChange={searchTerm}/>
        </div>
    );
};

export default ResourceSearch;