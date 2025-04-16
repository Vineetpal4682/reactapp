import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Firstform from './components/Firstform';
import Footer from './components/Footer';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';

// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() 
{
  const [mode, setMode] = useState('light');
  const [alertmessage, setalertmessage] = useState(null);
  const setAlert=(message,type)=>
    {
      setalertmessage({
        msg:message,
        type: type
      })

      setTimeout(() => {
        setalertmessage(null);
      }, 1000);    
    }

    const toggelModef=()=>
      {
        if(mode === 'light')
          {
            setMode('dark');
            setAlert('Dark mode has been enabled!!','success'); 
            document.title = "Dark Mode Enabled !!";            
          }
        else
        {
          setMode('light');
          setAlert('Light mode has been enabled!!','success');
          document.title = "Light Mode Enabled !!"; 
        }
      }
  return (
<>
{/* <Router> */}
  <Navbar tname="My First App" mode={mode} toggelMode={toggelModef}/>
  <Alert alert={alertmessage}/>
  <Firstform textHeadding = "Enter The Text" setAlert={setAlert}/>
  <div className="container">   
    {/* <Routes>
    <Route path="/" element={<Firstform textHeadding = "Enter The Text" setAlert={setAlert}/>} />
    <Route path="/about" element={<About title='About Us'/>} />
    </Routes> */}
  </div>
  <Footer/>
{/* </Router> */}
</>
    );
}

export default App;
