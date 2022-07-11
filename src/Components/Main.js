import React from "react";
import data from "../data";
export default function Main() {
  let [meme, setNewImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  let [allMemeImages, memeImage] = React.useState(data);

  const [formData, setFormData] = React.useState({
    firstName : "",
    lastName: ""
  });

  function getMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const randomMemeIndex = Math.floor(Math.random() * memeArray.length);
    const memeUrl = memeArray[randomMemeIndex].url;
    setNewImage((prevMeme) => ({
      ...meme,
      randomImage: memeUrl,
    }));
  }

  function onHandleChange(oEvent) {
    debugger;
    console.log(oEvent.target.value);
  }

  return (
    <div className="main-form">
      <div className="input-fields">
        <input
          id="input1"
          placeholder="First text"
          onChange={onHandleChange}
        ></input>
        <input id="input2" placeholder="Last text"></input>
      </div>

      <button type="button" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>

      <img className="meme-img" src={meme.randomImage} />
    </div>
  );
}
