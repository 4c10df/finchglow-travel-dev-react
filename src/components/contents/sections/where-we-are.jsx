import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GoArrowUpRight } from "react-icons/go";
import ImageMap from '../images/Vector squre.png';
import ImageLayer from '../images/Layer_1.png'


const SectionWhereWeAre = () => {

    useEffect(() => {
        AOS.init({ duration: 3000, once: true });
    }, []);

      
  return (
    <section className="relative regale-blue flex justify-center flex-col items-center w-full h-auto overflow-hidden">
      <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] pt-[70px] pb-[55px] at500:pl-[80px] at500:pr-0 2xl:px-[20px] my-0 mx-auto">
        <div className="relative flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="relative flex flex-col justify-center items-start gap-[30px] w-full xl:w-[404px] h-auto text-left mb-[30px]">
            <span
              data-aos="fade-up"
              className="txt2 text-[#3580F1]"
            >
              Where we are
            </span>
            <h3
              data-aos="fade-up"
              className="text-[#05284C] xl:w-[390px]"
            >
              We are strategically positioned to serve your business needs
            </h3>
            <span
              data-aos="fade-up"
              className="txt3 !text-[#375370] xl:w-[367px]"
            >
              We have a strong presence in four states across Nigeria, with nine offices 
              in key locations in Lagos, Port Harcourt, Kano and Abuja.
            </span>
            <a
              data-aos="fade-up"
              href="#"
              className="arrow !text-[#0260EE]"
            >
              Contact us
              <GoArrowUpRight className="w-[11px]"  alt="arrow up" />
            </a>
          </div>

          <div className="relative flex justify-center items-end w-full">
            <div className="relative flex flex-col justify-center items-end w-full">
              <img
                src={ImageMap}
                className="absolute right-[-26px] bottom-[-56px] md:w-[691.5px] h-auto md:h-[590.5px] object-cover"
                alt=""
              />
              <div className="p-5 z-[33]">
                <img
                  src={ImageLayer}
                  className="w-full md:w-[646.5px] h-auto md:h-[524.5px] object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhereWeAre;
