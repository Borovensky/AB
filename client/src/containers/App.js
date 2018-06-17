import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {

    constructor() {
        super();
        
    };

    componentDidMount() {
        axios.get('/api/test')
            .then((result) => {
                console.log(result.data);
            }) 
    }

    render() {

        return <div>Loading from node</div>

    }
    
};

export default App;