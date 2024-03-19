import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav>
      {/* navbar */}
      <div className="flex flex-row items-center justify-between bg-blue-500 py-5 px-10">
        <div className="w-10 h-10 bg-red-500 rounded-xl"></div>
        <div className="flex flex-row items-center gap-5">
          <ul className="hidden md:flex flex-row gap-5">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
          {!showSidebar ? (
            <FaBars
              className="block md:hidden cursor-pointer"
              onClick={toggleSidebar}
            />
          ) : (
            <FaTimes
              className="block md:hidden cursor-pointer"
              onClick={toggleSidebar}
            />
          )}
        </div>
      </div>
      {/* sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[120px] bg-blue-500 transition-transform duration-300 ease-in-out transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-row justify-center py-5">
            <div className="w-10 h-10 bg-red-500 rounded-xl"></div>
          </div>
          <div className="flex flex-col gap-5 w-full h-full">
          <div className="w-full h-2/3 bg-orange-300"></div>
          <div className="w-full h-1/3 bg-orange-300"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
