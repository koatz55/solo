import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import ApparelForm from './ApparelForm';
const EditApparel = (props) => {
    const {album, setApparel, errors, setErrors} = props
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneApparel/${id}`)
            .then((res) => {
                console.log(res);
                setApparel(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])


    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateApparel/${id}`, album)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <>
            <ApparelForm 
            submitHandler={submitHandler}
            album={album} 
            setApparel={setApparel} 
            errors={errors} 
            setErrors={setErrors}
            />
        </>
)}

export default EditApparel;