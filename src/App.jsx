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


  return (
    <div>
      {/* <NavBar darkMode={mode} handleMode={handleMode} />
      <Hero />
      {info}
      <Edited darkMode={mode}/>
      <Footer darkMode={mode}/> */}
      <Weather/>
    </div>
  );
}

export default App;
