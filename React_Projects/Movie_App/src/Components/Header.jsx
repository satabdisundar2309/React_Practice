import React, { useState } from "react";
import logo from "./../assets/Images/logoNBorder2.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  const [toggle, setToggle] = useState(false)
  return (
    <div className="flex items-center p-5 justify-between">
      <div className="flex gap-8 items-center">
        <img src={logo} className=" w-[80px] md:w-[120px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item, i) => {
            return <HeaderItem key={i} name={item.name} Icon={item.icon} />;
          })}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map((item, i) => {
            return i <= 2 && <HeaderItem key={i} name={""} Icon={item.icon} />;
          })}
          <div className="md:hidden" onClick={()=>{setToggle(!toggle)}}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle? <div className="absolute right-[15px] mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
              {menu.map((item, i) => {
                return (
                  i > 2 && (
                    <HeaderItem key={i} name={item.name} Icon={item.icon} />
                  )
                );
              })}
            </div> : null}
          </div>
        </div>
      </div>

      <div>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          className="w-[40px] rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
