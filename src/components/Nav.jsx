export default function Nav() {
	return (
		<div className="flex flex-row items-center h-16 gap-4 px-5 text-white bg-gradient-to-r from-purple-650 to-purple-450">
			<div className="w-5 h-5">
				<img className="w-full h-full" src="src/img/Troll-Face.png" alt="home_icon" />
			</div>
			<div className="flex flex-row w-full">
				<h1 className="text-xl "> Meme Generator</h1>
				<p className="ml-auto">React Course - Project 3</p>
			</div>
		</div>
	);
}
