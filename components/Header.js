import { BsFacebook, BsMessenger } from "react-icons/bs";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { IoStorefrontOutline, IoNotifications } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { CgGames } from "react-icons/cg";

export default function Header() {
  return (
    <div className="py-2 px-4 bg-white shadow-md flex justify-between items-center top-0 sticky z-50">
      <div className="flex items-center gap-1">
        <BsFacebook className="text-primary text-[40px]" />

        <div className="relative hidden sm:block">
          <AiOutlineSearch className="absolute text-[20px] top-[8px] left-[10px] text-gray-500" />
          <input
            className="bg-[#F0F2F5] p-2 rounded-full pl-9 outline-none placeholder:text-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-[100px] text-[30px] text-gray-400">
        <AiFillHome className="text-primary" />
        <FaUserFriends />
        <MdOndemandVideo />
        <IoStorefrontOutline />
        <CgGames />
      </div>
      <div className="flex items-center gap-4">
        <div className="icon text-[28px]">
          <CgMenuGridO />
        </div>

        <div className="icon text-[20px]">
          <BsMessenger />
        </div>

        <div className="icon text-[20px]">
          <IoNotifications />
        </div>

        <img
          className="w-[42px] cursor-pointer rounded-full"
          src="dp.jpg"
          alt="dp"
        />
      </div>
    </div>
  );
}
