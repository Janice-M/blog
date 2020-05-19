import React, {useState, useEffect } from 'react';
import axios from 'axios';

const  Home = props => {
    useEffect (()=> {

        axios.get('api/hello')
        .then (res=>setState(res.data))
    }, [])
    const [state, setState] = useState ('')

    return (
        <div>
        <h3>welcome home</h3>
        <p> {state}</p>
        </div>
    )
};