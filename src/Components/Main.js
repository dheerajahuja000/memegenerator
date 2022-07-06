import data from "../data";
export default function Main() {

function onButtonClick(){
       const memeArray= data.data.memes;
       const randomMemeIndex=Math.floor(Math.random() * memeArray.length);
       const memeUrl=memeArray[randomMemeIndex].url;
       console.log(memeUrl);
}

  return (
    <div className="main-form">
      <div className="input-fields">
        <input placeholder="First text"></input>
        <input placeholder="Last text"></input>
      </div>

      <button type="button" onClick={onButtonClick}>
        Get a new meme image 🖼
      </button>

      {/* <img className="test" src={memeUrl}/> */}
    </div>
  );
}
