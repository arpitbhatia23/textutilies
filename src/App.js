import React ,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


{/*import About from './components/About';*/}

function App() {
  const [mode, setmode]=useState('light');
  const [alert,setalert]=useState(null);
  const showAlert =(message,type)=>{
setalert({msg:message,
  type:type
})
setTimeout(()=>{
  setalert(null);
},1500);
  }
  const togglemode=()=>{
    if(mode==='light')
    {setmode('dark')
  document.body.style.background="grey"
  document.body.style.color="black"
  showAlert("dark mode has been enable" ,"success")

}
    else{
      setmode('light')
      document.body.style.background="white"
      document.body.style.color="black"
      showAlert("light mode has been enable","success")

    }
  }

  return (
    <>

<Navbar title="textutilies blog"  mode={mode}  togglemode={togglemode} aboutText="about textutilies"/>
<Alert alert={alert}/>
<div className='container'>
{/*<About/>*/}
<TextForm showAlert={showAlert} heading="enter the text" />
</div>

   </>
   
  );
}

export default App;
