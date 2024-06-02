import './App.css'
import React from 'react';
import Form from './components/Form'
import Jokes from './components/Jokes'
import NavBar from './components/NavBar'
function App() {
  const [mode,setMode] =React.useState(true)
  function handleMode(){
    setMode(prevMode=> !prevMode)
  }
  console.log(mode)
  return (
    <div className="body">
    <NavBar darkMode ={mode} handleMode={handleMode}/>
    </div>
  )
}

export default App
