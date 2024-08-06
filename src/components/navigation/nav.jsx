import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { SlArrowUp, SlArrowDown, SlArrowRight } from "react-icons/sl";
import Button from "../contents/Button"; // Ensure this is the correct import statement
import logo from "./logos/FT_logo_X5-01.png"; // Ensure this is the correct path
import Link from "../contents/link"
import { useLocation } from "react-router-dom";

const Nav = ({ openOverlay }) => {
  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState([false, false]); // Array to manage multiple dropdown states
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname.substring(1));

  const toggleDropdown = (index) => {
    setIsDropdownOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useEffect(() => {
    // Extract the active link from the pathname
    setActiveLink(pathname.substring(1));
  }, [pathname]);

  const handleHover = (index, state) => {
    setHovered((prev) => ({ ...prev, [index]: state }));
  };

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }
  const handleButtonClick = () => {
    window.open(
      "https://connectpro.finchglowtravels.com/Auth/Login ",
      "_blank"
    );
  };

  return (
    <nav className="flex justify-center items-center w-full fixed top-0 z-[88] bg-[#F1F5FC]">
      <div className="relative flex justify-center items-center w-full 2xl:w-[1280px] py-[20px] px-[15px] at500:px-[40px]">
        <div className="relative w-full mx-auto flex md:flex-row justify-between items-start md:items-center">
          <div className="relative flex justify-start items-start text-white text-2xl font-bold mb-2 md:mb-0">
            <Link to="/">
              <img src={logo} alt="logo" className="h-auto w-[130px]" />
            </Link>
          </div>

          <ul className="hidden silver:flex justify-end items-center space-x-4">
            <li className="relative flex flex-col gap-[10px] group">
              <span
                className={`relative flex gap-[10px] items-center text-[#05284C] py-[10px] pr-[10px] ${activeLink === "about-finchglow-travels" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
              >
                <span className="text-[#05284C]">About us</span>

                <span className="cursor-pointer z-40">
                  <SlArrowUp
                    size={13}
                    onClick={closeMenu}
                    className="text-[#05284C] group-hover:hidden"
                  />

                  <SlArrowDown
                    size={13}
                    onClick={openMenu}
                    className="text-[#05284C] hidden group-hover:inline"
                  />
                </span>
              </span>

              <div className="dropdown cursor-pointer absolute top-[38px] w-[230px] font-normal rounded-[2px] shadow bg-[#EEF8FF] hidden group-hover:block z-[9999]">
                <ul className="flex flex-col ">
                  <Link
                    className="flex w-full "
                    to="/about-finchglow-travels"
                    onClick={() =>
                      setActiveLink(
                        "about-finchglow-travels about-finchglow-travels"
                      )
                    }
                  >
                    <li
                      className={`flex justify-start items-start w-full py-[7px] px-[10px] border-soild  dark:hover:bg-[#E6EFFD] hover:border-l-[3px] hover:border-l-[#81B0F7]  text-change ${activeLink === "about-finchglow-travels" ? "border-soild border-l-[3px] border-l-[#81B0F7]" : ""}`}
                    >
                      <span className="text-[#05284C]">Who we are</span>
                    </li>
                  </Link>
                  <Link
                    to="/finchglow-travels-story"
                    onClick={() => setActiveLink("finchglow-travels-story")}
                  >
                    <li
                      className={`flex justify-start items-start w-full py-[7px] px-[10px] border-soild  dark:hover:bg-[#E6EFFD] hover:border-l-[3px] hover:border-l-[#81B0F7] 
                         text-change ${activeLink === "finchglow-travels-story" ? "border-soild border-l-[3px] border-l-[#81B0F7]" : ""}`}
                    >
                      <span className="text-[#05284C]">Our story</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
            <li className="relative flex flex-col gap-[10px] group">
              <span
                className={`relative flex gap-[10px] items-center text-[#05284C] py-[10px] pr-[10px] ${activeLink === "our-services" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
              >
                <Link to="/our-services">Services</Link>
                <span className="cursor-pointer z-40">
                  <SlArrowUp
                    size={13}
                    onClick={closeMenu}
                    className="text-[#05284C] group-hover:hidden"
                  />

                  <SlArrowDown
                    size={13}
                    onClick={openMenu}
                    className="text-[#05284C] hidden group-hover:inline"
                  />
                </span>
              </span>

              <div className="dropdown cursor-pointer absolute top-[38px] w-[230px] font-normal divide-gray-100 rounded-[2px] shadow dark:bg-[#EEF8FF] hidden group-hover:block z-[9999]">
                <ul className="flex flex-col ">
                  <Link
                    className="flex w-full"
                    to="/affiliate-programme"
                    onClick={() => setActiveLink("affiliate-programme")}
                  >
                    <li
                      className={`flex justify-star items-start w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7]  ${activeLink === "affiliate-programme" ? "border-soild border-l-[3px] border-l-[#81B0F7]" : ""}`}
                    >
                      <span className="text-[#05284C]">Affiliate Programs</span>
                    </li>
                  </Link>
                  <Link
                    className="flex w-full"
                    to="/Corporate-travel-management"
                    onClick={() => setActiveLink("Corporate-travel-management")}
                  >
                    <li
                      className={`flex justify-star items-start w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7] ${activeLink === "Corporate-travel-management" ? "border-soild border-l-[3px] border-l-[#81B0F7]" : ""}`}
                    >
                      <span className="text-[#05284C]">
                        Corporate Travel Management
                      </span>
                    </li>
                  </Link>
                  <Link
                    className="flex w-full"
                    to="/customised-travel-packages"
                    onClick={() => setActiveLink("customised-travel-packages")}
                  >
                    <li
                      className={`flex justify-star items-start w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7] ${activeLink === "customised-travel-packages" ? "border-soild border-l-[3px] border-l-[#81B0F7]" : ""}`}
                    >
                      <span className="text-[#05284C]">
                        Customised Travel Packages
                      </span>
                    </li>
                  </Link>
                  <Link
                    className="flex w-full"
                    to="/ancillary-services"
                    onClick={() => setActiveLink("ancillary-services")}
                  >
                    <li
                      className={`flex justify-star items-start w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7] ${activeLink === "ancillary-services" ? "border-soild border-l-[3px] border-l-[#81B0F7]" : ""}`}
                    >
                      <span className="text-[#05284C]">Ancillary Services</span>
                    </li>
                  </Link>
                  <Link
                    className="flex w-full"
                    to="/visa-and-immigration-services"
                    onClick={() =>
                      setActiveLink("visa-and-immigration-services")
                    }
                  >
                    <li
                      className={`flex justify-star items-start w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7] ${activeLink === "visa-and-immigration-services" ? "border-soild border-l-[3px] border-l-[#81B0F7]" : ""}`}
                    >
                      <span className="text-[#05284C]">
                        Visa and Immigration Services
                      </span>
                    </li>
                  </Link>
                  {/* <Link
                    className="flex w-full"
                    to="/partnerplus-connect"
                    onClick={() => setActiveLink("partnerplus-connect")}
                  >
                    <li
                      className={`flex justify-star items-start w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7] ${activeLink === "partnerplus-connect" ? "border-soild border-l-[3px] border-l-[#81B0F7]" : ""}`}
                    >
                      <span className="text-[#05284C]">
                        PartnerPlus Connect
                      </span>
                    </li>
                  </Link> */}
                </ul>
              </div>
            </li>
            {/* < Link  to="/"> 
            <li
              className={`py-[10px] px-[10px] hover:border-b-[5px] text-[#05284C] hover:border-b-[#81B0F7] ${activeLink === "blog" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
            >
             Blog
            </li>
            </ Link > */}
            <Link to="/contact-us">
              <li
                className={`py-[10px] px-[10px] hover:border-b-[5px] text-[#05284C] hover:border-b-[#81B0F7] ${activeLink === "contact-us" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
              >
                <span className="text-[#05284C]">Contact us</span>
              </li>
            </Link>
            <li className="py-[10px] w-[330px] pl-[18px]">
              <span className="flex  space-x-3">
                <Button
                  size="medium"
                  onClick={handleButtonClick}
                  className="border-[1px] border-solid capitalize border-[#F48487] text-[#05284C]"
                >
                  Log in
                </Button>
                <Button
                  size="medium"
                  onClick={openOverlay}
                  className="border-[1px] capitalize border-solid bg-[#05284C] border-[#0260EE] text-white "
                >
                  Partner Signup
                </Button>
              </span>
            </li>
          </ul>

          <div className="flex  gap-[10px] justify-center items-center silver:hidden cursor-pointer z-[999]">
            <div>
              {toggle ? (
                <AiOutlineClose
                  onClick={closeMenu}
                  size={20}
                  className="text-[#05284C]"
                />
              ) : (
                <HiMenuAlt3
                  onClick={openMenu}
                  size={30}
                  className="text-[#05284C]"
                />
              )}
            </div>
            <div className="w-full">
              <Button
                size="medium"
                onClick={handleButtonClick}
                className=" bg-[#05284C] text-white"
              >
                Log in
              </Button>
            </div>
          </div>
        </div>

        {toggle && (
          <div className="silver:hidden flex justify-center items-center absolute top-[73px] transition-all ease-in duration-300 w-full bg-[#F1F5FC] border-b-[3px] border-solid">
            <ul className="flex flex-col justify-start items-start w-full py-[20px] px-[15px] at500:px-[20px] md:px-[79px] space-y-2 z-[30]">
              <li className="relative flex  flex-col justify-start items-start gap-[10px] w-full">
                <span
                  className={`relative flex justify-between w-full gap-[10px] items-center hover:border-l-[3px] hover:border-l-[#81B0F7] hover:text-[#05284C] dark:hover:bg-[#E6EFFD] py-[7px] px-[10px] ${
                    activeLink === "about-finchglow-travels"
                      ? "border-l-[3px] border-l-[#81B0F7]"
                      : ""
                  }`}
                >
                  <span className="text-[#05284C]">About us</span>
                  <span
                    className="cursor-pointer z-40 border-solid border-[1px] border-[#000] rounded-sm p-[2px]"
                    onClick={() => toggleDropdown(0)}
                  >
                    {isDropdownOpen[0] ? (
                      <SlArrowDown size={13} className="text-[#05284C]" />
                    ) : (
                      <SlArrowRight size={13} className="text-[#05284C]" />
                    )}
                  </span>
                </span>

                <div
                  className={`dropdown cursor-pointer z-[9999] w-full font-normal  ${
                    isDropdownOpen[0] ? "block" : "hidden"
                  }`}
                >
                  <ul className="flex flex-col ">
                    <Link
                      className="flex w-full"
                      to="/about-finchglow-travels"
                      onClick={() => setActiveLink("about-finchglow-travels")}
                    >
                      <li
                        className={`flex justify-start items-start dark:hover:bg-[#CCDFFC]  w-full py-[7px] px-[10px] border-soild hover:border-l-[3px] hover:border-l-[#81B0F7] ${
                          activeLink === "about-finchglow-travels"
                            ? "border-soild border-l-[3px] border-l-[#81B0F7]"
                            : ""
                        }`}
                      >
                        <span className="!text-[#05284C]">Who we are</span>
                      </li>
                    </Link>
                    <Link
                      className="flex w-full"
                      to="/finchglow-travels-story"
                      onClick={() => setActiveLink("finchglow-travels-story")}
                    >
                      <li
                        className={`flex justify-start items-start dark:hover:bg-[#CCDFFC]  w-full py-[7px] px-[10px] border-soild hover:border-l-[3px] hover:border-l-[#81B0F7] ${
                          activeLink === "finchglow-travels-story"
                            ? "border-soild border-l-[3px] border-l-[#81B0F7]"
                            : ""
                        }`}
                      >
                        <span className="!text-[#05284C]">Our story</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              <li className="relative flex  flex-col w-full justify-start items-start gap-[10px]">
                <span
                  className={`relative flex justify-between w-full gap-[10px] items-center hover:border-l-[3px] hover:border-l-[#81B0F7] hover:text-[#05284C] dark:hover:bg-[#E6EFFD] py-[7px] px-[10px] ${
                    activeLink === "our-services"
                      ? "border-l-[3px] border-l-[#81B0F7]"
                      : ""
                  }`}
                >
                  <Link to="/our-services">Services</Link>
                  <span
                    className="cursor-pointer z-40 border-solid border-[1px] border-[#000] rounded-sm p-[2px]"
                    onClick={() => toggleDropdown(1)}
                  >
                    {isDropdownOpen[1] ? (
                      <SlArrowDown size={13} className="text-[#05284C]" />
                    ) : (
                      <SlArrowRight size={13} className="text-[#05284C]" />
                    )}
                  </span>
                </span>

                <div
                  className={`dropdown cursor-pointer z-[9999] w-full font-normal ${
                    isDropdownOpen[1] ? "block" : "hidden"
                  }`}
                >
                  <ul className="flex flex-col">
                    <Link
                      className="flex w-full"
                      to="/affiliate-programme"
                      onClick={() => setActiveLink("affiliate-programme")}
                    >
                      <li
                        className={`flex justify-start items-start w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC]  border-soild  hover:border-l-[3px] hover:border-l-[#81B0F7]  text-change ${
                          activeLink === "affiliate-programme"
                            ? "border-soild border-l-[3px] border-l-[#81B0F7]"
                            : ""
                        }`}
                      >
                        <span className="!text-[#05284C]">
                          Affiliate Programs
                        </span>
                      </li>
                    </Link>

                    <Link
                      className="flex w-full"
                      to="/Corporate-travel-management"
                      onClick={() =>
                        setActiveLink("Corporate-travel-management")
                      }
                    >
                      <li
                        className={`flex justify-start items-start w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC]  border-soild  hover:border-l-[3px] hover:border-l-[#81B0F7]  text-change ${
                          activeLink === "Corporate-travel-management"
                            ? "border-soild border-l-[3px] border-l-[#81B0F7]"
                            : ""
                        }`}
                      >
                        <span className="!text-[#05284C]">
                          Corporate Travel Management
                        </span>
                      </li>
                    </Link>

                    <Link
                      className="flex w-full"
                      to="/customised-travel-packages"
                      onClick={() =>
                        setActiveLink("customised-travel-packages")
                      }
                    >
                      <li
                        className={`flex justify-start items-start w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC]  border-soild hover:border-l-[3px] hover:border-l-[#81B0F7]  text-change ${
                          activeLink === "customised-travel-packages"
                            ? "border-soild border-l-[3px] border-l-[#81B0F7]"
                            : ""
                        }`}
                      >
                        <span className="!text-[#05284C]">
                          Customised Travel Packages
                        </span>
                      </li>
                    </Link>
                    <Link
                      className="flex w-full"
                      to="/ancillary-services"
                      onClick={() => setActiveLink("ancillary-services")}
                    >
                      <li
                        className={`flex justify-start items-start w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC]  border-soild hover:border-l-[3px] hover:border-l-[#81B0F7]  text-change ${
                          activeLink === "ancillary-services"
                            ? "border-soild border-l-[3px] border-l-[#81B0F7]"
                            : ""
                        }`}
                      >
                        <span className="!text-[#05284C]">
                          Ancillary Services
                        </span>
                      </li>
                    </Link>
                    <Link
                      className="flex w-full"
                      to="/visa-and-immigration-services"
                      onClick={() =>
                        setActiveLink("visa-and-immigration-services")
                      }
                    >
                      <li
                        className={`flex justify-start items-start w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC]  border-soild hover:border-l-[3px] hover:border-l-[#81B0F7]  text-change ${
                          activeLink === "visa-and-immigration-services"
                            ? "border-soild border-l-[3px] border-l-[#81B0F7]"
                            : ""
                        }`}
                      >
                        <span className="!text-[#05284C]">
                          Visa and Immigration Services
                        </span>
                      </li>
                    </Link>
                    {/* <Link
                      className="flex w-full"
                      to="/partnerplus-connect"
                      onClick={() => setActiveLink("partnerplus-connect")}
                    >
                      <li
                        className={`flex justify-start items-start w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC]  border-soild  hover:border-l-[3px] hover:border-l-[#81B0F7]  text-change ${
                          activeLink === "partnerplus-connect"
                            ? "border-soild border-l-[3px] border-l-[#81B0F7]"
                            : ""
                        }`}
                      >
                        <span className="!text-[#05284C]">
                          PartnerPlus Connect
                        </span>
                      </li>
                    </Link> */}
                  </ul>
                </div>
              </li>

              {/*< Link  to="/">
               <li
                className={`relative flex dark:hover:bg-[#CCDFFC]  justify-between w-full gap-[10px] items-center hover:border-l-[3px] hover:border-l-[#81B0F7] hover:text-[#05284C] py-[7px] px-[10px] ${activeLink === "blog" ? "border-l-[3px] border-l-[#81B0F7]" : ""}`}
              >
                
                  <span className="text-[#05284C]">Blog</span>
               
              </li>
               </ Link > */}
              <Link className="flex w-full" to="/contact-us">
                <li
                  className={` relative flex dark:hover:bg-[#CCDFFC]  justify-between w-full gap-[10px] items-center hover:border-l-[3px] hover:border-l-[#81B0F7] hover:text-[#05284C] py-[7px] px-[10px] ${activeLink === "contact-us" ? "border-l-[3px] border-l-[#81B0F7]" : ""}`}
                >
                  <span className="text-[#05284C]"> Contact us</span>
                </li>
              </Link>

              <li className="py-[10px] w-full ">
                <span className="flex space-x-3">
                  <Button
                    size="medium"
                    onClick={handleButtonClick}
                    className="border-[1px] border-solid capitalize border-[#F48487] text-[#05284C]"
                  >
                    Log in
                  </Button>
                  <Button
                    size="medium"
                    onClick={openOverlay}
                    className="border-[1px] border-solid capitalize bg-[#05284C] border-[#0260EE] text-white "
                  >
                    Partner Signup
                  </Button>
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

