import React, { useState } from 'react';
import { FaStar } from 'react-icons'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const ApparelForm = (props) => {
    const [apparelName, setApparelName] = useState("");
    const [size, setSize] = useState("");
    const [type, setType] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const [errors, setErrors] = useState("");
    const navigate = useNavigate()
    const submitHandler = (e) => {
        if (e.target.value.length < 1) {
            setErrors("is required!");
        } else {
            setErrors("");
        };
        e.preventDefault();
        axios.post('http://localhost:8000/api/newApparel', apparelName,size,type,rating,image,price, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const changeHandler = (e) => {
    setApparelName({apparelName, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h2>Add a listing</h2>
            <form className='col-4 mx-auto' onSubmit={submitHandler}>
                <label className='form-label'>Apparel Name:</label>
                <input className='form-control' type="text" onChange={changeHandler} value={apparel.apparelName} name='apparelName' />
                {
                    errors.apparelName ?
                        <p className='text-danger'>{errors.apparelName.message}</p> :
                        null
                }
                <label className='form-label'>Price:</label>
                <input className='form-control' type="text" onChange={changeHandler} value={apparel.price} name='price' />
                {
                    errors.price ?
                        <p className='text-danger'>{errors.price.message}</p> :
                        null
                }
                <label className='form-label'>Apparel image address:</label>
                <input className='form-control' type="text" onChange={changeHandler} value={apparel.img} name='img' />
                {
                    errors.img ?
                        <p className='text-danger'>{errors.img.message}</p> :
                        null
                }
                <label className='form-label' >Size:</label>
                <input className='form-control' type="text" onChange={changeHandler} value={apparel.size} name='size' />
                {
                    errors.size ?
                        <p className='text-danger'>{errors.size.message}</p> :
                        null                        
                }
                <label className='form-label'>Type:</label>
                <select className="form-select" name="genre" onChange={changeHandler} value={apparel.type}>
                    <option value="shirt">shirt</option>
                    <option value="pants">pants</option>
                    <option value="jeans">jeans</option>
                    <option value="outfit">outfit</option>
                    <option value="T-shirt">T-shirt</option>
                    <option value="sweater">sweater"</option>
                </select>
                {
                    errors.type ?
                        <p className='text-danger'>{errors.type.message}</p> :
                        null
                }
                <label className='form-label'>Rating:</label>
                <input className="form-check-input" type="number" name="rating" onChange={changeHandler} value={null} />
                {
                    errors.rating ?
                        <p className='text-danger'>{errors.rating.message}</p> :
                        null
                }
                <br />
                <input className='btn btn-primary' type='submit' Value='Post Apparel'/>
            </form>
        </div>
    )
}

export default ApparelForm;