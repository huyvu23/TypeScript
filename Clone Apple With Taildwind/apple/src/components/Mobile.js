import React from "react";
function Mobile() {
  return (
    <section className="w-full mt-11">
      <div
        className="w-full h-[580px] bg-cover bg-center bg-no-repeat
      bg-[url('https://www.apple.com/v/home/an/images/heroes/iphone-13-pro/hero_iphone13pro_avail__iy77cld0zwii_small.jpg')]
      md:bg-[url('https://www.apple.com/v/home/an/images/heroes/iphone-13-pro/hero_iphone13pro_avail__iy77cld0zwii_large.jpg')]
      "
      >
        <div className="flex flex-col items-center mt-[5px]">
          <h2 className="text-[32px] md:text-[56px] font-semibold ">
            iPhone 13 Pro
          </h2>
          <h3 className="text-[19px] md:text-[44px] font-normal mt-[2px]">
            Oh.So.Pro
          </h3>
          <div className="flex w-[204px] justify-between text-[21px] mt-[15px]">
            <a
              href="#"
              className="flex text-[#0066cc] text-[17px] md:text-[19px] "
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

      <div
        className="w-full h-[580px] bg-cover bg-center bg-no-repeat
      bg-[url('https://www.apple.com/v/home/an/images/heroes/iphone-se/hero_iphonese_avail__eg8srhcnpo66_small.jpg')]
      md:bg-[url('https://www.apple.com/v/home/an/images/heroes/iphone-se/hero_iphonese_avail__eg8srhcnpo66_large.jpg')]
      "
      >
        <div className="flex flex-col items-center mt-[20px]">
          <p className="font-semibold text-[21px] mt-[20px]">The New</p>
          <h2 className="text-[32px] md:text-[56px] font-semibold">
            iPhone SE
          </h2>
          <h3 className="text-[19px] md:text-[44px] font-normal mt-[2px]">
            Love the power. Love the price.
          </h3>
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
    </section>
  );
}

export default Mobile;
