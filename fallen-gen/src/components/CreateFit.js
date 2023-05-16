import React, {useState} from 'react';
import axios from 'axios'
import ApparelForm from './ApparelForm';
import { useNavigate, useParams } from 'react-router-dom';

const CreateFit = (props) => {
    const {apparel, setApparel, errors, setErrors} = props
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newApparel', apparel, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                // setErrors(err.response.data.errors)
            })
    }
    return (
        <>
            <ApparelForm 
            submitHandler={submitHandler}
            apparel={apparel} 
            setApparel={setApparel} 
            errors={errors} 
            setErrors={setErrors}
            />
        </>
)}

export default CreateFit;