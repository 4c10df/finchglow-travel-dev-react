import React from "react";
import { useLocation } from "react-router-dom";
import LazyBlurHashImage from "../lazy/LazyBlurHashImage";
import "aos/dist/aos.css";

function Title(props) {
  const location = useLocation();
  const isBlogPage = location.pathname === "/blog-home";
  const isContactPage = location.pathname === "/contact-us";
  const isBlogPostPage = location.pathname === "/blog-read";

  // const blurHash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";
  // const parallaxStrength = 500; // Adjust this value as needed

  return (
    <section className="relative bg-[#EEF5FF] flex flex-col justify-center items-center w-full overflow-hidden">
      <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[60px] at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between justify-start items-start xl:items-center w-full gap-[30px] xl:gap-[168px]">
          <div className="relative flex flex-col justify-center items-start w-full silver:w-[513px] text-left gap-[17px]">
            <span className="txt2 capitalize text-[#0260EE]">
              {props.title}
            </span>
            <h3
              className={`text-[#101828] ${
                isBlogPage
                  ? "lg:!w-[513px]"
                  : isContactPage
                    ? "lg:!w-[396px]"
                    : "xl:w-[595px]"
              }`}
            >
              {props.subTitle}
            </h3>
            <span
              className={`text-[#697E94] txt2 !leading-[26px] xl:w-[407px] ${
                isBlogPostPage ? "block" : "hidden"
              }`}
            >
              {props.subTitle2}
            </span>
          </div>

          <div className="relative flex flex-col xl:justify-center justify-start items-start xl:items-end xl:px-[30px] py-0 w-full h-auto">
            <div className="flex flex-col justify-center items-center border-l-[#CCDFFC] border-l-[4px] px-[20px]">
              <span className="txt2 py-0 text-[#697E94] text-left xl:w-[340px]">
                {props.riteContent}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <LazyBlurHashImage
        className={`!h-[474px] !py-[90px] w-full !overflow-hidden ${
          isContactPage ? "hidden" : "block"
        }`}
        src={props.imgURL} // Calling the imgURL function
        blurHash={blurHash}
        alt="Descriptive alt text"
        parallaxStrength={parallaxStrength}
      /> */}

      {/* <LazyBlurHashImage
        className={`relative flex flex-col justify-center items-center bg-no-repeat bg-cover bg-top !h-[474px] !py-[90px] w-full overflow-hidden ${isContactPage ? "hidden" : "block"}`}
        style={{ backgroundImage: `url(${props.imgURL})` }}
        // src={props.imgURL}
        blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
        alt="Descriptive alt text"
      /> */}
      <div
        className={`relative flex flex-col justify-center items-center at500:bg-fixed bg-no-repeat bg-cover bg-top h-[474px] py-[90px] w-full overflow-hidden  ${isContactPage ? "hidden" : "block"}`}
        style={{ backgroundImage: `url(${props.imgURL})` }}
      ></div>
    </section>
  );
}

export default Title;
