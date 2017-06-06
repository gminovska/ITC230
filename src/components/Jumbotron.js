import React, { Component } from 'react';
import ResourceSearch from './ResourceSearch';

class Jumbtron extends Component {
    
    render() {
        return (
            <div className="jumbotron">
            <h1>Resources Cataloque</h1>
            <ResourceSearch />
        </div>
        );
    }
}

export default Jumbtron;