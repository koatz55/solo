import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
const OneItem = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [oneApparel, setOneApparel] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneApparel/${id}`)
            .then((res) => {
                console.log(res);
                setOneApparel(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteApparel/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <h2>{oneApparel.img}</h2>
            <h2>{oneApparel.apparelName}</h2>
            <h2>{oneApparel.size}</h2>
            <h2>{oneApparel.type}</h2>
            <h2>{oneApparel.rating}</h2>
            <h2>{oneApparel.price}</h2> 
            <br />
            <button onClick={() => deleteHandler(oneApparel._id)}>Delete Apparel</button>

        </div>
)}

export default OneItem;