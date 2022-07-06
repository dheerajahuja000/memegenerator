import React from "react";
import data from "../data";
export default function Main() {

let [saveState, setNewImage]= React.useState("");


function onButtonClick(){
       const memeArray= data.data.memes;
       const randomMemeIndex=Math.floor(Math.random() * memeArray.length);
       const memeUrl=memeArray[randomMemeIndex].url;
       setNewImage(memeUrl);
}

  return (
    <div className="main-form">
      <div className="input-fields">
        <input id="input1" placeholder="First text"></input>
        <input id="input2" placeholder="Last text"></input>
      </div>

      <button type="button" onClick={onButtonClick}>
        Get a new meme image 🖼
      </button>

      <img className="meme-img" src={saveState}/>
    </div>
  );
}
