import React from "react";

function Jokes() {
  const [jokes, setJokes] = React.useState({value:""});

  function random(){
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJokes(data));
  }
  React.useEffect(()=>{
    random()
  },[])

  function copyJokes(){
    if(jokes){
        navigator.clipboard.writeText(jokes)
        .then(()=>{
            console.log("Joke copied")
            alert("joke copied to the clipboards")
        })
        .catch((error)=>{
            console.error('Error copying joke:', error);
            alert("Failed to copy joke.");
        })
    }
  }
  return (
    <div className="jokeContainer">
      <h1 className="title">Generate Jokes</h1>
      <p className="jokeLine">
        {jokes.value}
      </p>
      <button className="enerateBtn" onClick={random}>Generate</button>
      <button className="enerateBtn" onClick={copyJokes} disabled={!jokes}>Copy</button>
    </div>
  );
}

export default Jokes;
