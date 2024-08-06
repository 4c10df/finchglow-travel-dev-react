import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageLayer from "../image/Vector squre.webp";
import ImageMap from "../image/Layer_1.webp";
import icon from "../image/icons/arrow-up-min.png";
import Link from "../link";
import LoadBlurHashImage from "../../lazy/loadBlurHash";

const SectionWhereWeAre = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section className="relative regale-blue flex justify-center flex-col items-center w-full h-auto overflow-hidden">
      <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] pt-[70px] pb-[55px] at500:pl-[80px] at500:pr-0 2xl:px-[20px] my-0 mx-auto  overflow-hidden">
        <div className="relative flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="relative flex flex-col justify-center items-start gap-[30px] w-full xl:w-[404px] h-auto text-left mb-[30px]">
            <div className="flex flex-col gap-[17px]">
              <span
                data-aos="fade-up"
                className="txt2 text-[#3580F1] capitalize"
              >
                Where we are
              </span>
              <h3 data-aos="fade-up" className="text-[#05284C] xl:w-[390px]">
                We are strategically positioned to serve your business needs
              </h3>
            </div>
            <span
              data-aos="fade-up"
              className="txt3 !text-[#375370] xl:w-[367px]"
            >
              We have a strong presence in four states across Nigeria, with nine
              offices in key locations in Lagos, Port Harcourt, Kano and Abuja.
            </span>

            <Link to="/contact-us">
              <span className="arrow !text-[#0260EE]">
                Contact us
                <img src={icon} alt="" />
              </span>
            </Link>
          </div>

          <div className="relative flex justify-center items-end w-full">
            <div className="relative flex flex-col justify-center items-end w-full">
              <LoadBlurHashImage
                src={ImageLayer}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="absolute right-[-26px] bottom-[-56px] md:w-[691.5px] h-auto md:h-[590.5px] object-cover"
                alt="Map Background"
              />
              <div className="p-5 z-[33]">
                <LoadBlurHashImage
                  src={ImageMap}
                  blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                  className="w-full md:w-[646.5px] h-auto md:h-[524.5px] object-cover"
                  alt="Map"
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
