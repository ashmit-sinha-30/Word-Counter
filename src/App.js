import React, { useState } from 'react';
import './App.css';
import About from './compomnents/About';
import Navbar from './compomnents/Navbar';
import TextForm from './compomnents/TextForm';
import Alert from './compomnents/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
   setAlert({
    msg: message,
    type: type
   })
   setTimeout(() => {
    setAlert(null);
   }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#31363F'
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled','success')
    }
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light mode has been enabled','success')
    }
  } 

  return (
    <>
      <Router>
      <Navbar title="Word Counter" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert} /> */}
      <div className="container my-5">
        <Routes>
            <Route index element={<TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />}/>
            <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>  
      </div>
      </Router>
    </>
  );
}

export default App;
