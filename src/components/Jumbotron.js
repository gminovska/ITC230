import React, {Component} from 'react';
import ResourceSearch from './ResourceSearch';

class Jumbtron extends Component {

    render() {
        return (
            <div className="jumbotron">
                <h1 className="text-center">Resources Catalogue</h1>
                <div className="row"> 
                    <div className="col col-sm-8 col-sm-offset-2 text-center form-group">
                        <ResourceSearch onSearch={this.props.onInputChange}/>
                    </div>
                    <div className="col col-sm-8 col-sm-offset-2 text-center form-group">
                        <p><input type="button" className="btn btn-lg btn-primary" value="Add New" 
                        onClick={this.props.onAddClick}/></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbtron;