import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const Home = (props) => {
    const [allApparel, setAllApparel] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/allApparel')
            .then((res) => {
                console.log(res);
                setAllApparel(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div className='border border-primary d-flex justify-content-evenly flex-wrap p-5'>
            {
                allApparel.map((apparel) => (
                    <div className='border border-success w-25 m-5' key={apparel._id}>
                        <h2>{apparel.Size}</h2>
                        <h2>{apparel.about}</h2>
                        <h2>{apparel.rating}</h2>
                        <span>Explicit? </span>
                        {
                            apparel.explicit?
                            <span>Yes</span>:
                            <span>No</span>
                        }
                        <br />
                        <Link to={`/oneItem${apparel._id}`}>Details</Link>
                        <Link to={`/editItem/${apparel._id}`}>Edit</Link>
                    </div>
                ))
            }
        </div>
)}

export default Home;