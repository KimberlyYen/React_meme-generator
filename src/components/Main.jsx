export default function Inputbtn() {
  return (
    <>
      <div className=" flex flex-col gap-4 ">
        <div className="flex flex-row gap-4">
          <input
            type="Shut up"
            class="pl-2.5 text-xs h-9 rounded-md w-full border border-slate-350"
            value="Shut up"
          />
          <input
            type="Shut up"
            class="pl-2.5 text-xs h-9 rounded-md w-full border border-slate-350"
            value="and take my money"
          />
        </div>
        <button className="text-white rounded-md h-9 bg-gradient-to-r from-purple-650 to-purple-450">
          Get a new meme image 🖼
        </button>
      </div>
    </>
  )
}