import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background = "#1b323c";
      document.body.style.color = "white";
      showAlert("dark mode has been enabled", "success");
    } else {
      setmode('light');
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="textutilies" mode={mode} togglemode={togglemode} aboutText="about" />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="enter the text" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
