import { BsChevronDown } from "react-icons/bs";

export default function () {
  return (
    <div className="px-4 fixed mt-5 hidden lg:block">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <img
            className="h-[30px] w-[30px] rounded-full"
            src="dp.jpg"
            alt="icon"
          />
          <h1 className="text-[16px] font-medium">Shoaib Khan</h1>
        </div>

        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <img
            className="h-[30px] w-[30px] rounded-full"
            src="friends.png"
            alt="icon"
          />
          <h1 className="text-[16px] font-medium">Friends</h1>
        </div>
        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <img
            className="h-[30px] w-[30px] rounded-full"
            src="group.png"
            alt="icon"
          />
          <h1 className="text-[16px] font-medium">Group</h1>
        </div>
        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <img
            className="h-[30px] w-[30px] rounded-full"
            src="market.png"
            alt="icon"
          />
          <h1 className="text-[16px] font-medium">Marketplace</h1>
        </div>
        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <img
            className="h-[30px] w-[30px] rounded-full"
            src="events.png"
            alt="icon"
          />
          <h1 className="text-[16px] font-medium">Events</h1>
        </div>
        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <img
            className="h-[30px] w-[30px] rounded-full"
            src="memories.png"
            alt="icon"
          />
          <h1 className="text-[16px] font-medium">Memories</h1>
        </div>
        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <img
            className="h-[30px] w-[30px] rounded-full"
            src="saved.png"
            alt="icon"
          />
          <h1 className="text-[16px] font-medium">Saved</h1>
        </div>
        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <div className="bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full">
            <BsChevronDown />
          </div>
          <h1 className="text-[16px] font-medium">See More</h1>
        </div>
      </div>
    </div>
  );
}
