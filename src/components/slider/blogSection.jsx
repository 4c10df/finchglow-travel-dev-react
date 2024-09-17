import React from 'react';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image1 from './blog-img/image1.jpeg'
import Image2 from './blog-img/image2.jpeg'
import Image3 from './blog-img/image3.jpeg'
import Image4 from './blog-img/image4.jpeg'
import Image5 from './blog-img/image5.jpeg'
import Image6 from './blog-img/image6.jpeg'
import Icon from "./blog-img/icon/Icon wrap.png"
import Link from '../contents/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper/blogSlider.css'
import './swiper/pagination.css';
import './swiper/navigation.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WordPressPosts from '../API/wordsApi';





const blogSection = () => {

  const swiper = useSwiper();

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);


    return (
      <section className="relative bg-[#EEF5FF] flex justify-center flex-col items-center w-full h-auto">
        <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[70px] at500:px-[70px] my-0 mx-auto">
          <div className=" blogSlider-container w-full flex flex-col items-start overflow-hidden ">
            <Swiper
              className=" relative flex flex-col sm:!py-[30px] !overflow-visible"
              style={{ width: "100%" }}
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={25}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-blogSlide",
                prevEl: ".swiper-button-prev-blogSlide",
              }}
              // pagination={{ clickable: true }}
            >
              <SwiperSlide className=" md:right-[-8px] z-[4]">
                <div className="flex flex-col md:flex-row justify-center items-start w-full gap-[20px] mb-[30px]">
                  <WordPressPosts />
                </div>
                {/* second content */}
                <div className="flex flex-col md:flex-row justify-center items-start w-full gap-[20px] mb-[30px]">
                  
                </div>
              </SwiperSlide>

              <SwiperSlide className=" md:right-[-8px] z-[4]">
                <div className="flex flex-col md:flex-row justify-center items-start w-full gap-[20px] mb-[30px]">
                  <div className="w-full flex flex-col overflow-hidden gap-[20px]">
                    <div className="h-[287px] w-full">
                      <img
                        src={Image1}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Business Day • 9/12/2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          Dubai Luxury Stores Miss Nigerians for Festive Sales
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty?
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex flex-col overflow-hidden gap-[20px]">
                    <div className="h-[287px] w-full">
                      <img
                        src={Image2}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Demi WIlkinson • 16 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          PM mental models
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Mental models are simple expressions of complex
                        processes or relationships.
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex-col overflow-hidden gap-[20px]  hidden lg:block">
                    <div className="h-[287px] w-full mb-[20px]">
                      <img
                        src={Image3}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Candice Wu • 15 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          What is Wireframing?
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Introduction to Wireframing and its Principles. Learn
                        from the best in the industry.
                      </span>
                    </div>
                  </div>
                </div>
                {/* second content */}
                <div className="flex flex-col md:flex-row justify-center items-start w-full gap-[20px] mb-[30px]">
                  <div className="w-full flex flex-col overflow-hidden gap-[20px]">
                    <div className="h-[287px] w-full">
                      <img
                        src={Image4}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Natali Craig • 14 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          How collaboration makes us better designers
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Collaboration can make our teams stronger, and our
                        individual designs better.
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex flex-col overflow-hidden gap-[20px]">
                    <div className="h-[287px] w-full">
                      <img
                        src={Image5}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Drew Cano • 13 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          Our top 10 Javascript frameworks to use
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        JavaScript frameworks make development easy with
                        extensive features and functionalities.
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex-col overflow-hidden gap-[20px]  hidden lg:block">
                    <div className="h-[287px] w-full mb-[20px]">
                      <img
                        src={Image6}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Orlando Diggs • 12 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          Podcast: Creating a better CX Community
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Starting a community doesn’t need to be complicated, but
                        how do you get started?
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" md:right-[-8px] z-[4]">
                <div className="flex flex-col md:flex-row justify-center items-start w-full gap-[20px] mb-[30px]">
                  <div className="w-full flex flex-col overflow-hidden gap-[20px]">
                    <div className="h-[287px] w-full">
                      <img
                        src={Image1}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Business Day • 9/12/2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          Dubai Luxury Stores Miss Nigerians for Festive Sales
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty?
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex flex-col overflow-hidden gap-[20px]">
                    <div className="h-[287px] w-full">
                      <img
                        src={Image2}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Demi WIlkinson • 16 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          PM mental models
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Mental models are simple expressions of complex
                        processes or relationships.
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex-col overflow-hidden gap-[20px]  hidden lg:block">
                    <div className="h-[287px] w-full mb-[20px]">
                      <img
                        src={Image3}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Candice Wu • 15 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          What is Wireframing?
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Introduction to Wireframing and its Principles. Learn
                        from the best in the industry.
                      </span>
                    </div>
                  </div>
                </div>
                {/* second content */}
                <div className="flex flex-col md:flex-row justify-center items-start w-full gap-[20px] mb-[30px]">
                  <div className="w-full flex flex-col overflow-hidden gap-[20px]">
                    <div className="h-[287px] w-full">
                      <img
                        src={Image4}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Natali Craig • 14 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          How collaboration makes us better designers
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Collaboration can make our teams stronger, and our
                        individual designs better.
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex flex-col overflow-hidden gap-[20px]">
                    <div className="h-[287px] w-full">
                      <img
                        src={Image5}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Drew Cano • 13 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          Our top 10 Javascript frameworks to use
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        JavaScript frameworks make development easy with
                        extensive features and functionalities.
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex-col overflow-hidden gap-[20px]  hidden lg:block">
                    <div className="h-[287px] w-full mb-[20px]">
                      <img
                        src={Image6}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Orlando Diggs • 12 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          Podcast: Creating a better CX Community
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Starting a community doesn’t need to be complicated, but
                        how do you get started?
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" md:right-[-8px] z-[4]">
                <div className="flex flex-col md:flex-row justify-center items-start w-full gap-[20px] mb-[30px]">
                  <div className="w-full flex flex-col overflow-hidden gap-[20px]">
                    <div className="h-[287px] w-full">
                      <img
                        src={Image1}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Business Day • 9/12/2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          Dubai Luxury Stores Miss Nigerians for Festive Sales
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty?
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex flex-col overflow-hidden gap-[20px]">
                    <div className="h-[287px] w-full">
                      <img
                        src={Image2}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Demi WIlkinson • 16 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          PM mental models
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Mental models are simple expressions of complex
                        processes or relationships.
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex-col overflow-hidden gap-[20px]  hidden lg:block">
                    <div className="h-[287px] w-full mb-[20px]">
                      <img
                        src={Image3}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Candice Wu • 15 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          What is Wireframing?
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Introduction to Wireframing and its Principles. Learn
                        from the best in the industry.
                      </span>
                    </div>
                  </div>
                </div>
                {/* second content */}
                <div className="flex flex-col md:flex-row justify-center items-start w-full gap-[20px] mb-[30px]">
                  <div className="w-full flex flex-col overflow-hidden gap-[20px]">
                    <div className="h-[287px] w-full">
                      <img
                        src={Image4}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Natali Craig • 14 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          How collaboration makes us better designers
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Collaboration can make our teams stronger, and our
                        individual designs better.
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex flex-col overflow-hidden gap-[20px]">
                    <div className="h-[287px] w-full">
                      <img
                        src={Image5}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Drew Cano • 13 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          Our top 10 Javascript frameworks to use
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        JavaScript frameworks make development easy with
                        extensive features and functionalities.
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex-col overflow-hidden gap-[20px]  hidden lg:block">
                    <div className="h-[287px] w-full mb-[20px]">
                      <img
                        src={Image6}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full gap-[20px]">
                      <span
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        Orlando Diggs • 12 Jan 2022
                      </span>
                      <div className="flex justify-between items-center w-full hover:gap-[12px]">
                        <h5
                          data-aos="fade-up"
                          className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                        >
                          Podcast: Creating a better CX Community
                        </h5>
                        <a href="#" data-aos="fade-up" className="arrow">
                          <img
                            className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                            src={Icon}
                            alt="arrow up"
                          />
                        </a>
                      </div>
                      <span data-aos="fade-up" className="txt5 text-[#667085]">
                        Starting a community doesn’t need to be complicated, but
                        how do you get started?
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="relative  flex  !justify-between !items-center w-full !gap-2 max-w-[1280px] px-[15px] pt-[30px] at500:px-[10px] my-0 mx-auto ">
              <div className="next !float-right p-2 ">
                <FaArrowLeft className="swiper-button-prev-blogSlide !relative !left-[-3px] !top-0 !text-[#05284C] hover:!text-[#05284C] !w-[20px]" />
              </div>
              <div className="prev float-right p-2">
                <FaArrowRight className="swiper-button-next-blogSlide !relative !text-[#05284C] !top-0 hover:!text-[#05284C] !w-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default blogSection;




