import { IoVideocamSharp } from "react-icons/io5";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GoSmiley } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import { PiShareFatLight } from "react-icons/pi";

export default function Feed() {
  return (
    <div className="mx-auto mt-2 max-w-[700px] 2xl:max-w-[800px] mb-10">
      <div className="px-4 py-6 bg-white rounded-[17px] shadow-md mt-5">
        <div className="flex gap-4 border-b border-gray-300 pb-4">
          <img
            className="w-[44px] h-[44px] object-cover rounded-full"
            src="dp.jpg"
            alt="dp"
          />

          <input
            className="outline-none border-none w-[100%] text-[18px] placeholder:text-gray-600"
            type="text"
            placeholder="What's on your mind?"
          />
        </div>

        <div className="bg-gray-300 text-gray-500 absolute top-0 right-0 m-[10px] text-[18px] h-[30px] w-[30px] rounded-full cursor-pointer grid place-items-center">
          <MdOutlineClose />
        </div>
      </div>
      <div className="flex justify-between px-4 pt-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <IoVideocamSharp className="text-[#E42645] text-[30px]" />
          <p className="text-gray-500 font-medium">Live Video</p>
        </div>

        <label htmlFor="filePicker">
          <div className="flex items-center gap-2 cursor-pointer">
            <MdOutlinePhotoLibrary className="text-[#41B35D] text-[30px]" />
            <p className="text-gray-500 font-medium">Photo/video</p>
          </div>

          <input
            type="file"
            name="filePicker"
            id="filePicker"
            accept="image/*"
            hidden
          />
        </label>

        <div className="hidden sm:flex items-center gap-2 cursor-pointer">
          <GoSmiley className="text-[#ECBF55] text-[30px]" />
          <p className="text-gray-500 font-medium">Feeling/activity</p>
        </div>
      </div>
      <button className="bg-primary text-white w-[100%] py-2 px-5 rounded-lg mt-[30px] disabled:bg-gray-300 disabled:text-gray-500">
        Post
      </button>
      <div className="py-4 bg-white rounded-[12px] shadow-md">
        <div className="px-4 flex justify-between items-center">
          <div className="flex gap-2">
            <img
              className="w-[44px] h-[44px] object-cover rounded-full"
              src="dp.jpg"
              alt="dp"
            />
            <div>
              <h1 className="text-[16px] font-semibold">Shoaib Khan</h1>
              <div className="text-gray-500 flex items-center gap-1">
                <p>1 d</p>
                <p>·</p>
                <FaGlobeAmericas />
              </div>
            </div>
          </div>

          <div className="text-gray-500 text-[26px] flex gap-4">
            <FiMoreHorizontal className="cursor-pointer" />

            <MdOutlineClose className="cursor-pointer" />
          </div>
        </div>

        <p className="px-4 mt-[15px] text-gray-800 font-normal">Hr-Zilla</p>

        <div className="mt-[15px]">
          <img src="hr-zilla.jpg" alt="hr" />
        </div>

        <div className="mx-4 h-[1px] bg-gray-300 mt-[15px]"></div>

        <div className="flex mt-[7px] text-gray-500">
          <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
            <AiOutlineLike className="text-[22px]" />
            <p className="font-medium">Like</p>
          </div>
          <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
            <TfiComment className="text-[20px] translate-y-[2px]" />
            <p className="font-medium">Comment</p>
          </div>
          <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
            <PiShareFatLight className="text-[20px] translate-y-[2px]" />
            <p className="font-medium">Share</p>
          </div>
        </div>
      </div>
      <div className="py-4 bg-white rounded-[12px] shadow-md mt-5">
        <div className="px-4 flex justify-between items-center">
          <div className="flex gap-2">
            <img
              className="w-[44px] h-[44px] object-cover rounded-full"
              src="dp.jpg"
              alt="dp"
            />
            <div>
              <h1 className="text-[16px] font-semibold">Shoaib Khan</h1>
              <div className="text-gray-500 flex items-center gap-1">
                <p>1 d</p>
                <p>·</p>
                <FaGlobeAmericas />
              </div>
            </div>
          </div>

          <div className="text-gray-500 text-[26px] flex gap-4">
            <FiMoreHorizontal className="cursor-pointer" />

            <MdOutlineClose className="cursor-pointer" />
          </div>
        </div>

        <p className="px-4 mt-[15px] text-gray-800 font-normal">RubyCart</p>

        <div className="mt-[15px]">
          <img src="rubycart.png" alt="hr" />
        </div>

        <div className="mx-4 h-[1px] bg-gray-300 mt-[15px]"></div>

        <div className="flex mt-[7px] text-gray-500">
          <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
            <AiOutlineLike className="text-[22px]" />
            <p className="font-medium">Like</p>
          </div>
          <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
            <TfiComment className="text-[20px] translate-y-[2px]" />
            <p className="font-medium">Comment</p>
          </div>
          <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
            <PiShareFatLight className="text-[20px] translate-y-[2px]" />
            <p className="font-medium">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}
