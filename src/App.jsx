import './App.css'
import React from 'react';
import Form from './components/Form'
import Jokes from './components/Jokes'
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import Post from './components/Post';
function App(props) {
  const [mode,setMode] =React.useState(false)
  function handleMode(){
    setMode(prevMode=> !prevMode)
  }
  console.log(mode)
  return (
    <div className={`body ${mode? "dark" :''}`}>
    <NavBar darkMode ={mode} handleMode={handleMode}/>
    <Hero/>
    <Post/>
    </div>

  )
}

export default App
