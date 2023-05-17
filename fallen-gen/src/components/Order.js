import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Order = (props) => {
    useEffect(() => {
        axios.get('http://localhost:8000/api/myApperal', {withCredentials:true})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <h2>Order</h2>
        </div>
)}

export default Order;