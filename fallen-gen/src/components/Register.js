import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const Register = (props) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        address:'',
        state:'',
        city:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    // !SubmitHandler

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <form className='col-4 mx-auto' onSubmit={submitHandler}>
                <div>
                    <label className='form-label'>First Name: </label>
                    <input className='form-control' type="text" onChange={changeHandler} value={user.firstName} name='firstName'/>
                </div>
                <div>
                    <label className='form-label'>Last Name: </label>
                    <input className='form-control' type="text" onChange={changeHandler} value={user.lastName} name='lastName'/>
                </div>
                <div>
                    <label className='form-label'>Email: </label>
                    <input className='form-control' type="text" onChange={changeHandler} value={user.email} name='email'/>
                </div>
                <div>
                    <label className='form-label'>Address: </label>
                    <input className='form-control' type="text" onChange={changeHandler} value={user.address} name='address'/>
                </div>
                <div>
                    <label className='form-label'>State: </label>
                    <input className='form-control' type="text" onChange={changeHandler} value={user.state} name='state'/>
                </div>
                <div>
                    <label className='form-label'>city: </label>
                    <input className='form-control' type="text" onChange={changeHandler} value={user.city} name='city'/>
                </div>
                <div>
                    <label className='form-label'>Password: </label>
                    <input className='form-control' type="password" onChange={changeHandler} value={user.password} name='password'/>
                </div>
                <div>
                    <label className='form-label'>Confirm Password: </label>
                    <input className='form-control' type="password" onChange={changeHandler} value={user.confirmPassword} name='confirmPassword'/>
                </div>
                <button>Register</button>
            </form>
            <Link to={'/login'}>Already have an account?</Link>
        </div>
)}

export default Register;