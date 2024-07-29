import React from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image1 from "../contents/image/postImage 1.webp";
import Image2 from "../contents/image/postImage 2.webp";
import Image3 from "../contents/image/postImage 3.webp";
import Icon from "./blog-img/arrow-up.png";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper/blog.css";
import "./swiper/pagination.css";
import "./swiper/navigation.css";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogSlide = () => {
  const swiper = useSwiper();

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <div className=" blog-container w-full flex flex-col items-start overflow-hidden lg:overflow-visible">
      <Swiper
        className=" relative flex flex-col sm:!py-[30px] !overflow-visible"
        style={{ width: "100%" }}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={25}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next-blog",
          prevEl: ".swiper-button-prev-blog",
        }}
        // pagination={{ clickable: true }}
      >
        <SwiperSlide className=" md:right-[-8px] z-[4]">
          <div className=" bg-[#E6EFFD] overflow-hidden rounded-b-[14px]">
            <div className="h-[320px] w-full">
              <img src={Image1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-[20px] p-[30px]">
              <span className="txt4 text-[#0260EE] leading-[24px]">Blog</span>
              <div className="flex justify-between items-center w-full gap-[4px] hover:gap-[12px]">
                <h5 className="text-[#101828] !leading-[30px] w-[268px]">
                  How to effectively price for your tickets
                </h5>
                {/* <div data-aos="fade-up" className="relative w-[24px] h-[28px] cursor-pointer">
                      <img className="relative hover:right-[-6px] w-[11px] transition-all duration-75 ease-in-out" src={Icon} alt="arrow up" />
                  </div> */}
                <a
                  href="#"
                  className="relative w-[24px] h-[28px] cursor-pointer"
                >
                  <img
                    className="relative hover:right-[-6px] w-[11px] transition-all duration-75 ease-in-out"
                    src={Icon}
                    alt="arrow up"
                  />
                </a>
              </div>
              <span className="txt5 text-[#667085]">
                How do you create compelling presentations that wow your
                colleagues...
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" md:right-[-8px] z-[4]">
          <div className=" bg-[#E6EFFD] overflow-hidden rounded-b-[14px]">
            <div className="h-[370px] w-full">
              <img src={Image2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-[20px] p-[30px]">
              <span className="txt4 text-[#0260EE] leading-[24px]">
                Industry Insight
              </span>
              <div className="flex justify-between items-center w-full gap-[4px] hover:gap-[12px]">
                <h5 className="text-[#101828] !leading-[30px] w-[268px]">
                  Migrating to automated platform for bookings
                </h5>
                {/* <div data-aos="fade-up" className="relative w-[24px] h-[28px] cursor-pointer">
                      <img className="relative hover:right-[-6px] w-[11px] transition-all duration-75 ease-in-out" src={Icon} alt="arrow up" />
                  </div> */}
                <a
                  href="#"
                  className="relative w-[24px] h-[28px] cursor-pointer"
                >
                  <img
                    className="relative hover:right-[-6px] w-[11px] transition-all duration-75 ease-in-out"
                    src={Icon}
                    alt="arrow up"
                  />
                </a>
              </div>
              <span className="txt5 text-[#667085]">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here’s how to get started.
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" md:right-[-8px] z-[4]">
          <div className=" bg-[#E6EFFD] overflow-hidden rounded-b-[14px]">
            <div className="h-[320px] w-full">
              <img src={Image3} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-[20px] p-[30px]">
              <span className="txt4 text-[#0260EE] leading-[24px]">Blog</span>
              <div className="flex justify-between items-center w-full gap-[4px] hover:gap-[12px]">
                <h5 className="text-[#101828] !leading-[30px] w-[268px]">
                  Building your API Stack
                </h5>
                <span className="relative w-[24px] h-[28px] cursor-pointer">
                  <Link to="/">
                    <img
                      className="relative hover:right-[-6px] w-[11px] transition-all duration-75 ease-in-out"
                      src={Icon}
                      alt="arrow up"
                    />
                  </Link>
                </span>
              </div>

              <span className="txt5 text-[#667085]">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and managing them.
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" md:right-[-8px] z-[4]">
          <div className=" bg-[#E6EFFD] overflow-hidden rounded-b-[14px]">
            <div className="h-[320px] w-full">
              <img src={Image1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-[20px] p-[30px]">
              <span className="txt4 text-[#0260EE] leading-[24px]">Blog</span>
              <div className="flex justify-between items-center w-full gap-[4px] hover:gap-[12px]">
                <h5 className="text-[#101828] !leading-[30px] w-[268px]">
                  How to effectively price for your tickets
                </h5>
                {/* <div data-aos="fade-up" className="relative w-[24px] h-[28px] cursor-pointer">
                      <img className="relative hover:right-[-6px] w-[11px] transition-all duration-75 ease-in-out" src={Icon} alt="arrow up" />
                  </div> */}
                <a
                  href="#"
                  className="relative w-[24px] h-[28px] cursor-pointer"
                >
                  <img
                    className="relative hover:right-[-6px] w-[11px] transition-all duration-75 ease-in-out"
                    src={Icon}
                    alt="arrow up"
                  />
                </a>
              </div>
              <span className="txt5 text-[#667085]">
                How do you create compelling presentations that wow your
                colleagues...
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" md:right-[-8px] z-[4]">
          <div className=" bg-[#E6EFFD] overflow-hidden rounded-b-[14px]">
            <div className="h-[320px] w-full">
              <img src={Image3} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-[20px] p-[30px]">
              <span className="txt4 text-[#0260EE] leading-[24px]">Blog</span>
              <div className="flex justify-between items-center w-full gap-[4px] hover:gap-[12px]">
                <h5 className="text-[#101828] !leading-[30px] w-[268px]">
                  Building your API Stack
                </h5>
                {/* <div data-aos="fade-up" className="relative w-[24px] h-[28px] cursor-pointer">
                      <img className="relative hover:right-[-6px] w-[11px] transition-all duration-75 ease-in-out" src={Icon} alt="arrow up" />
                  </div> */}
                <a
                  href="#"
                  className="relative w-[24px] h-[28px] cursor-pointer"
                >
                  <img
                    className="relative hover:right-[-6px] w-[11px] transition-all duration-75 ease-in-out"
                    src={Icon}
                    alt="arrow up"
                  />
                </a>
              </div>
              <span className="txt5 text-[#667085]">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and managing them.
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" md:right-[-8px] z-[4]">
          <div className=" bg-[#E6EFFD] overflow-hidden rounded-b-[14px]">
            <div className="h-[320px] w-full">
              <img src={Image1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-[20px] p-[30px]">
              <span className="txt4 text-[#0260EE] leading-[24px]">Blog</span>
              <div className="flex justify-between items-center w-full gap-[4px] hover:gap-[12px]">
                <h5 className="text-[#101828] !leading-[30px] w-[268px]">
                  How to effectively price for your tickets
                </h5>
                {/* <div data-aos="fade-up" className="relative w-[24px] h-[28px] cursor-pointer">
                      <img className="relative hover:right-[-6px] w-[11px] transition-all duration-75 ease-in-out" src={Icon} alt="arrow up" />
                  </div> */}
                <a
                  href="#"
                  className="relative w-[24px] h-[28px] cursor-pointer"
                >
                  <img
                    className="relative hover:right-[-6px] w-[11px] transition-all duration-75 ease-in-out"
                    src={Icon}
                    alt="arrow up"
                  />
                </a>
              </div>
              <span className="txt5 text-[#667085]">
                How do you create compelling presentations that wow your
                colleagues...
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="relative  flex  !justify-end !items-end w-full !gap-2 max-w-[1280px] px-[15px] pt-[30px] at500:px-[10px] my-0 mx-auto ">
        <div className="next !float-right p-2 ">
          <FaArrowLeft className="swiper-button-prev-blog !relative !left-[-3px] !top-0 !text-[#05284C] hover:!text-[#05284C] !w-[20px]" />
        </div>
        <div className="prev float-right p-2">
          <FaArrowRight className="swiper-button-next-blog !relative !text-[#05284C] !top-0 hover:!text-[#05284C] !w-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default BlogSlide;
