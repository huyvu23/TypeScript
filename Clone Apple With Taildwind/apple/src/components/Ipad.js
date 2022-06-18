import React from "react";

function Ipad() {
  return (
    <div className="w-full ">
      <div
        className="bg-[url('https://www.apple.com/v/home/an/images/heroes/ipad-air/hero_ipadair_avail__dsqv5nn0tpsi_small.jpg')]
      md:bg-[url('https://www.apple.com/v/home/an/images/heroes/ipad-air/hero_ipadair_avail__dsqv5nn0tpsi_large.jpg')]
      w-full h-[580px] bg-cover bg-center bg-no-repeat
      "
      >
        <div className="flex flex-col items-center pt-5 md:relative md:top-[200px] md:left-[-200px]">
          <div>
            <img
              src="https://www.apple.com/v/home/an/images/logos/ipad-air/hero_logo_ipadair__em8hublxa0om_large.png"
              alt="ipad"
            />
          </div>
          <h3 className="text-white text-[19px]">Light. Bright. Full of might.</h3>
          <div className="flex w-[204px] justify-between text-[21px] mt-[15px]">
            <a
              href="#"
              className="flex text-[17px] md:text-[19px] text-[#0066cc]"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex text-[17px] md:text-[19px] text-[#0066cc]"
            >
              Buy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 mt-1 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ipad;
