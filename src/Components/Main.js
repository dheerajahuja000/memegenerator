import React from "react";
import data from "../data";
export default function Main() {
  /**
   * Challenge:
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   *
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   *
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  React.useEffect(() => {
    fetch("http://example.com/movies.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  let [meme, setNewImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  let [allMemeImages, memeImage] = React.useState(data);

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
    const { name, value } = oEvent.target;
    setNewImage((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="main-form">
      <div className="input-fields">
        <input
          id="input1"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={onHandleChange}
        ></input>
        <input
          id="input2"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={onHandleChange}
        ></input>
      </div>

      <button type="button" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
