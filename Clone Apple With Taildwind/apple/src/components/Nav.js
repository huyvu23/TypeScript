import React, { useState } from "react";

function Nav() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-full h-11 bg-[#000000] md:bg-[#313132] fixed z-50">
      <div>
        <ul className="lg:mx-auto lg:max-w-[980px] flex justify-between items-center text-[#ccc] text-xs ">
          <li className="flex md:hidden pl-[8px]" onClick={handleClick}>
            {!nav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </li>
          <li className="pl-[8px] ">
            <a href="#">
              <img
                src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
                alt="error"
              />
            </a>
          </li>

          <li className="hidden md:flex">
            <a className="hover:text-[white]" href="#">
              Store
            </a>
          </li>
          <li className="hidden md:flex">
            <a className="hover:text-[white]" href="#">
              Mac
            </a>
          </li>
          <li className="hidden md:flex">
            <a className="hover:text-[white]" href="#">
              iPad
            </a>
          </li>
          <li className="hidden md:flex">
            <a className="hover:text-[white]" href="#">
              iPhone
            </a>
          </li>
          <li className="hidden md:flex">
            <a className="hover:text-[white]" href="#">
              Watch
            </a>
          </li>
          <li className="hidden md:flex">
            <a className="hover:text-[white]" href="">
              AirPods
            </a>
          </li>
          <li className="hidden md:flex">
            <a className="hover:text-[white]" href="#">
              TV & Home
            </a>
          </li>
          <li className="hidden md:flex">
            <a className="hover:text-[white]" href="#">
              Only on Apple
            </a>
          </li>
          <li className="hidden md:flex">
            <a className="hover:text-[white]" href="#">
              Accessories
            </a>
          </li>
          <li className="hidden md:flex">
            <a className="hover:text-[white]" href="#">
              Support
            </a>
          </li>
          <li className="hidden md:flex">
            <a href="#" className="text-[#ccc] hover:text-[white]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li className="pr-[8px] md:cursor-pointer">
            <span>
              <img
                src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg"
                alt="error"
              />
            </span>
          </li>
        </ul>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute w-full h-screen px-8 bg-[#000000] text-[rgba(201,201,201,1)] text-[17px] border-t-2 border-[rgba(69,69,69,1)] "
        }
      >
        <li className="border-b-2 border-[rgba(69,69,69,1)] w-full py-[12px]">
          Store
        </li>
        <li className="border-b-2 border-[rgba(69,69,69,1)] w-full  py-[12px]">
          Mac
        </li>
        <li className="border-b-2 border-[rgba(69,69,69,1)] w-full  py-[12px]">
          iPhone
        </li>
        <li className="border-b-2 border-[rgba(69,69,69,1)] w-full  py-[12px]">
          iPad
        </li>
        <li className="border-b-2 border-[rgba(69,69,69,1)] w-full  py-[12px]">
          Watch
        </li>
        <li className="border-b-2 border-[rgba(69,69,69,1)] w-full  py-[12px]">
          AirPods
        </li>
        <li className="border-b-2 border-[rgba(69,69,69,1)] w-full  py-[12px]">
          TV & Home
        </li>
        <li className="border-b-2 border-[rgba(69,69,69,1)] w-full  py-[12px]">
          Only on Apple
        </li>
        <li className="border-b-2 border-[rgba(69,69,69,1)] w-full  py-[12px]">
          Accessories
        </li>
        <li className="border-b-2 border-[rgba(69,69,69,1)] w-full  py-[12px]">
          Support
        </li>
      </ul>
    </div>
  );
}

export default Nav;
