import React from 'react';
import {Modal} from 'react-bootstrap';
const ResourceDetail = (props) => {
    if (!props.resource) {
        return (
            <div className="hidden"></div>
        );
    }

    const deleteItem = (id) => {
        props.deleteResource(props.resource.id);
    }

    const editItem = () => {
        props.onEditClick();
    }

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>{props.resource.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <b>Type: </b>
                    {props.resource.type}</p>
                <p>
                    <b>Author: </b>
                    {props.resource.author}</p>
                <p>
                    <b>Description: </b>
                    {props.resource.description}</p>
            </Modal.Body>
            <Modal.Footer>      
            <div className="form-group">
                <input
                    className="btn btn-danger"
                    type="button"
                    value="Delete"
                    onClick={deleteItem}/>
                <input
                    className="btn btn-default"
                    type="button"
                    value="Edit"
                    onClick={editItem}/>
            </div>
            </Modal.Footer>
        </div>
    );
};

export default ResourceDetail;