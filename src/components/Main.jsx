import React , { useState } from 'react';
import MemesData from '../memesData.js';

export default function Inputbtn() {
	const [state, setState] = useState("");
	
	// onClick
	const getMemeImage = function() {
		const memesArray = MemesData.data.memes
		const randomNumber = Math.floor(Math.random() * memesArray.length)

		return setState(memesArray[randomNumber].url)
	}


	return (
		<div className="flex flex-col gap-4 ">
			<div className="flex flex-row gap-4">
				<input
					type="Shut up"
					className="pl-2.5 text-xs h-9 rounded-md w-full border border-slate-350"
					value="Shut up"
				/>
				<input
					type="Shut up"
					className="pl-2.5 text-xs h-9 rounded-md w-full border border-slate-350"
					value="and take my money"
				/>
			</div>
			<button
				className="text-white rounded-md h-9 bg-gradient-to-r from-purple-650 to-purple-450"
				onClick={getMemeImage}
			>
				Get a new meme image 🖼
			</button>
			<img
				className="w-full mt-4"
				src={state}
				alt="meme" />
		</div>
	);
}
