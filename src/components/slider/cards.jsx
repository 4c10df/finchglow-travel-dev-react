import React from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Icon1 from "../contents/image/icons/Group 781-min.png";
import Icon2 from "../contents/image/icons/Group 782-min.png";
import Icon3 from "../contents/image/icons/Group 783-min.png";
import Icon4 from "../contents/image/icons/Group 784-min.png";
import Icon5 from "../contents/image/icons/Group 785-min.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper/cards.css";
import "./swiper/pagination.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Slideshow = () => {
  const swiper = useSwiper();

  // useEffect(() => {
  //   AOS.init({ duration: 3000, once: true });
  // }, []);

  return (
    <div className=" w-full flex flex-col justify-start items-start   overflow-hidden lg:overflow-visible">
      <Swiper
        className="card_wrapper relative  sm:!py-[30px] !overflow-visible"
        style={{ width: "100%" }}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={4}
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
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // pagination={{ clickable: true }}
      >
        <SwiperSlide className=" md:right-[-8px] z-[4]">
          <div className="card shadow-2xl bg-[#FFFFFF] border-b-[#0143A7] border-b-[7px] px-[20px]  ">
            <div className="image-content">
              <div className="">
                <img src={Icon1} alt="flight icon" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <span className="name">Affiliate Programmes</span>
              <p className="discription !font-medium">
                Partner with us for better commissions, continuous support,
                industry insights, and tools to attract loyal clients and
                increase revenue.
              </p>

              <Link to="/affiliate-programme">
                <span className="arrow hover:!text-[#3580F1]">
                  Read more
                  <FaArrowRight className="fa-solid fa-arrow-right text-[#3580F1] hover:text-[#3580F1]" />
                </span>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card shadow-sm bg-[#E2F1FF] border-b-[#3580F1] border-b-[7px] px-[20px] pt-[40px] ">
            <div className="image-content">
              <div className="">
                <img src={Icon2} alt="flight icon" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <span className="name">
                Corporate Travel <br />
                Management
              </span>
              <p className="discription !font-medium">
                Why choose between quality and cost? Our seamless business
                travel solutions offer both, with seamless arrangements, flight
                and hotel bookings, travel policies, expense management, and
                dedicated support.
              </p>
              <Link to="/Corporate-travel-management">
                <span className="arrow hover:!text-[#3580F1]">
                  Read more
                  <FaArrowRight className="fa-solid fa-arrow-right text-[#3580F1] hover:text-[#3580F1]" />
                </span>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card shadow-sm bg-[#F0F4F8] border-b-[#8294A6] border-b-[7px] px-[20px] pt-[0px] ">
            <div className="image-content">
              <div className="">
                <img src={Icon3} alt="flight icon" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <span className="name">
                Customised Travel <br />
                Packages
              </span>
              <p className="discription !font-medium">
                Let our travel experts handle the planning, crafting
                personalised itineraries for leisure and business, ensuring
                stylish, comfortable travel that fits your budget and eases your
                busy schedule.
              </p>
              <Link to="/customised-travel-packages">
                <span className="arrow hover:!text-[#3580F1]">
                  Read more
                  <FaArrowRight className="fa-solid fa-arrow-right text-[#3580F1] hover:text-[#3580F1]" />
                </span>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="z-[4]">
          <div className="card shadow-2xl  bg-[#E6EFFD] border-b-[#B4BFC9] border-b-[7px] px-[20px] pt-[20px] ">
            <div className="image-content">
              <div className="">
                <img src={Icon4} alt="flight icon" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <span className="name">Ancillary Services</span>
              <p className="discription !font-medium">
                Enjoy personalised ancillary services, from airport transfers to
                travel insurance, expertly managed for a seamless trip and
                lasting memories.
              </p>

              <Link to="/ancillary-services">
                <span className="arrow hover:!text-[#3580F1]">
                  Read more
                  <FaArrowRight className="fa-solid fa-arrow-right text-[#3580F1] hover:text-[#3580F1]" />
                </span>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" md:right-[8px] ">
          <div className="card shadow-2xl  bg-[#F0F8FF] border-b-[#67A0F5] border-b-[7px] px-[20px] pt-[20px] ">
            <div className="image-content">
              <div className="">
                <img src={Icon5} alt="flight icon" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <span className="name">Visa and Immigration Services</span>
              <p className="discription !font-medium">
                Stress-free visas & immigration. Finchglow Travels: Your
                Nigerian visa experts. Personalized assistance for leisure,
                work, or study travel. (We handle Nigerian visas, CERPAC,
                quotas, VIP & more!)
              </p>

              <Link to="/visa-and-immigration-services">
                <span className="arrow hover:!text-[#3580F1]">
                  Read more
                  <FaArrowRight className="fa-solid fa-arrow-right text-[#3580F1] hover:text-[#3580F1]" />
                </span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="relative  flex  !justify-end !items-end w-full !gap-2 max-w-[1280px] px-[15px] pt-[30px] at500:px-[10px] my-0 mx-auto ">
        <div className="next !float-right p-2 ">
          <FaArrowLeft className="swiper-button-prev !relative !left-[-3px] !top-0 !text-[#05284C] hover:!text-[#05284C] !w-[20px]" />
        </div>
        <div className="prev float-right p-2">
          <FaArrowRight className="swiper-button-next !relative !text-[#05284C] !top-0 hover:!text-[#05284C] !w-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
