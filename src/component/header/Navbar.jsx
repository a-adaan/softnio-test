import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Dropdown from "./Dropdown";
import DesktopView from "./DesktopView";
import logo from "/assets/Logo(test).png";
export default function Navbar() {
  const [toggle, setToggled] = useState(false);
  return (
    <div className="w-svw bg-[#c1332a] fixed top-0 left-0 z-40">
      <div className=" container h-[77px] md:h-[108px] bg-[#c1332a] flex justify-between items-center md:space-x-7">
        <div>
          <img src={logo} alt="Logo" height={100} width={200} />
        </div>
        <div className="md:hidden" onClick={() => setToggled(!toggle)}>
          <FaBars size={32} />
        </div>
        {toggle && <Dropdown />}
        <DesktopView />
      </div>
    </div>
  );
}
