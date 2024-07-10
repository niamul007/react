import "./App.css";
import React from "react";
import Form from "./components/Form";
import Jokes from "./components/Jokes";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Post from "./components/Post";
import { data } from "./components/Data";
import Edited from "./components/Edited";
import Footer from "./components/Footer";
import Weather from "./components/Weather";
import PrNav from "./components/PrNav";
import Prhero from "./Prhero";
import Ahero from "./components/Ahero";
import { logicData } from "./components/LogicData";
function App() {
  const [mode, setMode] = React.useState(true);
  function handleMode() {
    setMode((prevMode) => !prevMode);
    console.log("clicked");
  }
  console.log(mode);

  const info = data.map((data) => {
    return (
      <Post
        key={data.id}
        tag={data.tag}
        title={data.title}
        time={data.time}
        detail={data.detail}
        img={data.img}
        darkMode={mode}
      />
    );
  });
      {/* <NavBar darkMode={mode} handleMode={handleMode} />
      <Hero />
      {info}
      <Edited darkMode={mode}/>
      <Footer darkMode={mode}/> */}
      <Weather/>

  const lData = logicData.map((data)=>{
    return(
    <Ahero 
    key={data.id}
    para={data.para}
    />
    )
  })

  return (
    <div>
      <PrNav/>
      <Prhero/>
      {lData}
    </div>
  );
}

export default App;
