import React, { useState } from "react";
import MemesData from "../memesData.js";

export default function Inputbtn() {
  const [memeObj, setMemeObj] = useState({
    topText: "",
    bottomText: "",
  });
  const [state, setState] = useState("https://i.imgflip.com/3si4.jpg");

  // onClick
  const getMemeImage = function () {
    const memesArray = MemesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeObj((prevMemeObj) => {
      return { topText: "", bottomText: "" };
    });
    setState(memesArray[randomNumber].url);
  };

  const handleMemeData = (e) => {
    const { name, value } = e.target;
    setMemeObj((prevMemeObj) => {
      return { ...prevMemeObj, [name]: value };
    });
  };

  console.log(memeObj);

  return (
    <div className="flex flex-col gap-4 relative max-w-2xl mx-auto">
      <div className="flex flex-row gap-4">
        <input
          type="Shut up"
          className="pl-2.5 text-xs h-9 rounded-md w-full border border-slate-350"
          name="topText"
          value={memeObj.topText}
          onChange={(e) => {
            handleMemeData(e);
          }}
        />
        <input
          type="Shut up"
          name="bottomText"
          className="pl-2.5 text-xs h-9 rounded-md w-full border border-slate-350"
          value={memeObj.bottomText}
          onChange={(e) => {
            handleMemeData(e);
          }}
        />
      </div>
      <button
        className="text-white rounded-md h-9 bg-gradient-to-r from-purple-650 to-purple-450"
        onClick={getMemeImage}
      >
        Get a new meme image 🖼
      </button>
      <img className="w-full mt-4" src={state} alt="meme" />
      <div className="absolute font-sans text-2xl font-bold top-32 left-56 text-white shadow-lg tracking-wide uppercase">
        {memeObj.topText}
      </div>
      <div className="absolute font-sans  font-bold text-2xl bottom-8 text-white shadow-lg tracking-wide mx-auto uppercase left-44">
        {memeObj.bottomText}
      </div>
    </div>
  );
}
