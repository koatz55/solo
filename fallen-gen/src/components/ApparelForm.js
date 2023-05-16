import { set } from 'mongoose';
import React, { useState } from 'react';
import { FaStar } from 'react-icons'

const ApparelForm = (props) => {
    const {submitHandler, apparel, setApparel, errors, setErrors} = props
    const changeHandler = (e) => {
        // if (e.target.name === 'rating') {
        //     setApparel({ ...apparel, rating: null })
        // } else {
            setApparel({ ...apparel, [e.target.name]: e.target.value })
        // }
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
                <button className='btn btn-primary'>Post Apparel</button>
            </form>
        </div>
    )
}

export default ApparelForm;