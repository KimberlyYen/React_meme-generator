import React from 'react'
import MemesData from '../memesData.js'

export default function MemeImg() {
  // get Random
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  // get URL
  function getRandomURL() {
    const memeData = MemesData.data.memes
    let randomNumber = getRandomInt(memeData.length)
    return memeData[randomNumber].url
  }

  return (
    <>
      <img className="mt-4 w-full" src={getRandomURL()} alt="meme" />
    </>
  )
}
