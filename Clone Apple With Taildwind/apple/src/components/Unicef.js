import React from "react";

function Unicef() {
  return (
    <div className=" w-full h-[130px] pt-[44px]  ">
      <div className="w-[100%] h-[100%] flex flex-wrap text-center justify-center items-center bg-[#f5f5f7]">
        <img
          src="https://www.apple.com/v/home/an/images/logos/unicef-relief-fund/unicef_logo_dark__ejvlglygb3ee_large.png"
          alt="unicef"
          className="object-cover "
        />
        <p className="text-[#06c] pl-[14px]">
          <a href="#">
            Donate to support families affected by the war in Ukraine
          </a>
        </p>
      </div>
    </div>
  );
}

export default Unicef;
