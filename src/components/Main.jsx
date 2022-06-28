import React from 'react';
import MemesData from '../memesData.js';

export default function Inputbtn() {
	function MemeImg() {
		console.log('message');
		// get Random
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}

		// get URL
		function getRandomURL() {
			const memeData = MemesData.data.memes;
			let randomNumber = getRandomInt(memeData.length);
			return memeData[randomNumber].url;
		}

		return <img className="w-full mt-4" src={getRandomURL()} alt="meme" />;
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
				onClick={MemeImg}
			>
				Get a new meme image 🖼
			</button>
			<MemeImg />
		</div>
	);
}
