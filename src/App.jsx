import './App.css'
import React from 'react';
import Form from './components/Form'
import Jokes from './components/Jokes'
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import Post from './components/Post';
import { data } from './components/Data';
function App() {
  const [mode,setMode] =React.useState(true)
  function handleMode(){
    setMode(prevMode=> !prevMode)
    console.log("clicked")
  }
  console.log(mode)

  const info = data.map(data=>{
    return(
      <Post key ={data.id}
      tag={data.tag}
      title={data.title}
      time={data.time}
      detail={data.detail}
      img={data.img}
      darkMode={mode}
      />

    )
    
  })
  return (
    <div className={`body ${mode? "dark":''}`} >
    <NavBar darkMode ={mode} handleMode={handleMode}/>
    <Hero/>
    {info }

    </div>

// {
//   id: 1,
//   tag: "Fashion",
//   title: "How Lovely Yellow is! It Stands for the Sun",
//   author: "Gello Due",
//   time: "GELLO DOE | March 26 2021 | 260 Views",
//   detail:"Venus has a runaway greenhouse effect. I kind of want to know what happened there because we’re twirling knobs here on Earth without knowing the consequences of it. Mars once",
//   img:"post1.jpeg"
// },
  )
}

export default App
