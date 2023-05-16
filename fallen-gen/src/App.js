import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  // const [errors, setErrors] = useState({})
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          {/* <Route path='/createAlbum/form' element={<CreateAlbum 
            album={album} 
            setAlbum={setAlbum} 
            errors={errors} 
            setErrors={setErrors}/>} 
          />
          <Route path='/oneAlbum/:id' element={ <OneAlbum />} />
          <Route path='/editAlbum/:id' element={<EditAlbum 
            album={album} 
            setAlbum={setAlbum} 
            errors={errors} 
            setErrors={setErrors}/>} 
          />
          <Route path='/profile' element={<Profile/>}/> */}
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
