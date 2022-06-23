export default function Nav() {
  return (
    <>
      <div className="text-white px-5 flex items-center flex-row gap-4 h-16 bg-gradient-to-r from-purple-650 to-purple-450">
        <div className="w-5 h-5">
          <img
            className="w-full h-full"
            src="src/img/Troll-Face.png"
            alt="home_icon"
          />
        </div>
        <div className="flex flex-row w-full">
          <h1 className="text-xl "> Meme Generator</h1>
          <p className="ml-auto">React Course - Project 3</p>
        </div>
      </div>
    </>
  )
}
