import React, { useState } from 'react';
import './App.css';
import About from './compomnents/About';
import Navbar from './compomnents/Navbar';
import TextForm from './compomnents/TextForm';
import Alert from './compomnents/Alert';

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
      <Navbar title="Word Counter" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
        
      </div>
    </>
  );
}

export default App;
