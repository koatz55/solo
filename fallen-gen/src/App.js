import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Nav from './components/Nav';
import CreateFit from './components/CreateFit';
import EditApparel from './components/EditApparel';

function App() {
  const [errors, setErrors] = useState({})
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/createFit/form' element={<CreateFit 
            apparel={apparel} 
            setApparel={setApparel} 
            errors={errors} 
            setErrors={setErrors}/>} 
          />
          <Route path='/oneItem/:id' element={ <OneItem />} />
          <Route path='/editApparel/:id' element={<EditApparel 
            apparel={apparel} 
            setApparel={setApparel} 
            errors={errors} 
            setErrors={setErrors}/>} 
          />
          {/* 

          <Route path='/profile' element={<Profile/>}/> */}
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
