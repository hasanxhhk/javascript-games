
import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
// import About from './Components/About.js';
import Alert from './Components/Alert.js'
import { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


function App() {
  const[mode , setMode] = useState('light')
  const[alert , setAlert] = useState(null)
  // const [btnStyle , setBtnStyle] = useState({backgroundColor : ''})

  const showAlert = (messege, type)=>{
    setAlert({
      msg:messege,
      type:type
    })
    setTimeout(() => {
      setAlert (null);
    }, 3000);
  }
  const toDarkMode = ()=>{
    if(mode === 'light' || 'red' || 'blue'){
      setMode('dark')
      document.body.style.backgroundColor='#3C3D37'

      showAlert('Dark mode has been enabled','success')
    }
  }
  const toRedMode = ()=>{
    if(mode === 'light' || 'Dark' || 'blue'){
      setMode('red')
      document.body.style.backgroundColor='#982B1C'
      showAlert('Red mode has been enabled','success')
    }
}
  const toBlueMode = ()=>{
    if(mode === 'light' || 'Dark' || 'red'){
      setMode('blue')
      document.body.style.backgroundColor='#042743'
      showAlert('Blue mode has been enabled','success')
    }
}
  const toLightMode = ()=>{
    if(mode === 'red' || 'Dark' || 'blue'){
      setMode('light')
      document.body.style.backgroundColor='#E0E5B6'
      showAlert('Light mode has been enabled','success')
    }
}
  return (
    <>
      <Navbar title="MYNAV" home="Home" mode={mode} toLightMode={toLightMode} toBlueMode={toBlueMode} toRedMode={toRedMode} toDarkMode={toDarkMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
            <TextForm heading="Enter your text" mode={mode} toLightMode={toLightMode} toBlueMode={toBlueMode} toRedMode={toRedMode} toDarkMode={toDarkMode} showAlert={showAlert} />
            </div>
      {/* <Router>
      <Navbar title="MYNAV" home="Home" mode={mode} toLightMode={toLightMode} toBlueMode={toBlueMode} toRedMode={toRedMode} toDarkMode={toDarkMode}/>
      <Alert alert={alert}/>
        <Routes>
          <Route
          exact path="/about"
          element={<About mode={mode} toLightMode={toLightMode} toBlueMode={toBlueMode} toRedMode={toRedMode} toDarkMode={toDarkMode}/>}
           /> 
          <Route
          exact path="/"
          element={<div className='container my-3'>
            <TextForm heading="Enter your text" mode={mode} toLightMode={toLightMode} toBlueMode={toBlueMode} toRedMode={toRedMode} toDarkMode={toDarkMode} showAlert={showAlert} />
            </div>}
           /> 
           
        </Routes>
      </Router> */}
    </>
  );
}
export default App;
