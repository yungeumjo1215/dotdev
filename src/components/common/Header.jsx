import React, { useState } from "react";
import { navItems, authLink } from "../../constants/data";

// import "./Header.css";
import { Link } from "react-router-dom";
import ModeCtrl from "./ModeCtrl";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-700/80 backdrop-blur-lg">
      <div className="container relative">
        <div className="nav-inside-wrapper flex justify-between items-center">
          <div className="logo-wrapper flex items-center gap-2">
            <div className="logo w-10 h-10 rounded-full border border-neutral-700/80 flex items-center justify-center">
              <div className="round-dot w-8 h-8 rounded-full bg-indigo-800"></div>
            </div>
            <span className="logo-text text-lg">AceDot.Dev</span>
          </div>
          <ul className="nav-wrapper hidden lg:flex gap-3">
            {navItems.map((item, index) => (
              <li key={index}>
                {/* 리액트에서는 a 태그를 사용하지 않고, Link 컴포넌트를 사용한다.
                  경로는 href 대신 to를 사용한다. */}
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="info-wrapper hidden lg:flex items-center gap-2">
            {authLink.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                className={`py-2 px-3 rounded-md ${
                  index === 1
                    ? "bg-gradient-to-r from-indigo-500 to-indigo-800 border-0 light: text-neutral-200"
                    : "border border-neutral-700/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ModeCtrl />
          </div>
          {/* <button>{darkMode ? "light" : "dark"}</button> */}
          <div className="lg:hidden flex justify-end">
            <button onClick={toggleMenu}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
            <ModeCtrl />
          </div>
        </div>

        {/* Mobile Menu Drop */}
        {mobileOpen && (
          <div className="absolute right-0 z-50 bg-white w-full pb-0 flex flex-col justify-center items-center lg:hidden top-full dark:bg-neutral-900 border-b border-neutral-700 mt-1">
            <ul className="w-full">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 border-b border-neutral-700 w-full text-center"
                >
                  <Link to={item.to} className="block w-full h-full">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex py-4 gap-2">
              {authLink.map((item, index) => (
                <Link
                  to={item.to}
                  key={index}
                  className={`py-2 px-3 rounded-md ${
                    index === 1
                      ? "bg-gradient-to-r from-indigo-500 to-indigo-800 border-0 light: text-neutral-200"
                      : "border border-neutral-700/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
