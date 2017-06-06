import React from 'react';
import ReactDOM from 'react-dom';
//import components
import App from './components/App.js';

//make an ajax call to get the data
import axios from 'axios';
axios
    .get('/api/resources')
    .then((response) => {
        ReactDOM.render(
            //pass the data returned from the api call to the app component
        <App resources={response.data}/>, 
        document.getElementById("root"));
    })
    .catch(err => console.log(err))
    
    