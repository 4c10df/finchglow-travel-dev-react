import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadBlurHashImage from '../lazy/loadBlurHash';







function TicketingSupport(props) {
    const location = useLocation();
    const isTravelPackagesPage = location.pathname === '/customised-travel-packages';

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

  return (
    <section className="relative bg-[#EEF5FF] flex flex-col justify-center items-center w-full h-auto lgh-[294.67px] overflow-hidden z-[2] lg:overflow-visible">
      <div className="static w-[95%] flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-between w-full h-auto">
          <div className="relative flex flex-col justify-center items-start gap-[20px] w-full h-auto text-left">
            <h3 className="text-[#05284C] mb-[20px]">{props.title}</h3>

            <div className="relative flex justify-start items-start gap-[20px] w-full h-auto text-left">
              <span className="pb-[7px] w-[20px] h-[20px]">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  src={props.imgURL}
                  className="h-auto w-full object-cover"
                  alt=""
                />
              </span>

              <div className="flex flex-col justify-start items-start gap-[10px] text-left w-full silver:w-[366px]">
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt6 text-[#05284C]"
                >
                  {props.subTitle1}
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt2 text-[#667085] text-left w-full"
                >
                  {props.details1}
                </span>
              </div>
            </div>

            <div className="relative flex justify-start items-start gap-[20px] w-full h-auto text-left">
              <span className="pb-[7px] w-[20px] h-[20px]">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  src={props.imgURL}
                  className="h-auto w-full object-cover"
                  alt=""
                />
              </span>

              <div className="flex flex-col justify-center items-start gap-[10px] text-left w-full silver:w-[366px]">
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt6 text-[#05284C]"
                >
                  {props.subTitle2}
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt2 text-[#667085] text-left w-full"
                >
                  {props.details2}
                </span>
              </div>
            </div>

            <div className="relative flex justify-start items-start gap-[20px] w-full h-auto text-left">
              <span className="pb-[7px] w-[20px] h-[20px]">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  src={props.imgURL}
                  className="h-auto w-full object-cover"
                  alt=""
                />
              </span>

              <div className="flex flex-col justify-center items-start gap-[10px] text-left w-full silver:w-[366px]">
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt6 text-[#05284C]"
                >
                  {props.subTitle3}
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt2 text-[#667085] text-left w-full"
                >
                  {props.details3}
                </span>
              </div>
            </div>

            <div
              className={`relative flex justify-start items-start gap-[20px] w-full h-auto text-left  ${isTravelPackagesPage ? "block " : "hidden"}`}
            >
              <span className="pb-[7px] w-[20px] h-[20px]">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  src={props.imgURL}
                  className="h-auto w-full object-cover"
                  alt=""
                />
              </span>

              <div className="flex flex-col justify-center items-start gap-[10px] text-left w-full silver:w-[366px]">
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt6 text-[#05284C]"
                >
                  {props.subTitle4}
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt2 text-[#667085] text-left w-full"
                >
                  {props.details4}
                </span>
              </div>
            </div>

            <div
              className={`relative flex justify-start items-start gap-[20px] w-full h-auto text-left ${isTravelPackagesPage ? "block" : "hidden"}`}
            >
              <span className="pb-[7px] w-[20px] h-[20px]">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  src={props.imgURL}
                  className="h-auto w-full object-cover"
                />
              </span>

              <div className="flex flex-col justify-center items-start gap-[10px] text-left w-full silver:w-[366px]">
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt6 text-[#05284C]"
                >
                  {props.subTitle5}
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt2 text-[#667085] text-left w-full"
                >
                  {props.details5}
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-end items-center w-full h-auto mb-[30px] lg:mb-0 overflow-hidden">
            
            <LoadBlurHashImage
              src={props.imgURL1}
              blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
              className="w-full lg:w-[478px] h-[300px] lg:h-[561px] object-cover"
              alt="Affiliate Programs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketingSupport;
