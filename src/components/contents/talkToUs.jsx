import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Link from "./link";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
import OverlayForm from "../form/overlayForm";

function TalkToUs(props) {
  const location = useLocation();
  const ispartnerPage = location.pathname === "/partnerplus-connect";
  const isAffiliatePage = location.pathname === "/affiliate-programme";

  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  const handleClick = () => {
    window.open("https://partnerplus.finchglowtravels.com/", "_blank");
  };

  return (
    <section
      className={`relative  flex flex-col justify-center items-center w-full h-auto ${ispartnerPage | isAffiliatePage ? "bg-[#EEF5FF] " : "bg-[#05284C]"}`}
    >
      <div
        className={`static  w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] at500:px-[64px] my-0 mx-auto ${ispartnerPage ? " py-[60px] " : " pt-[70px] mb-[60px]"}`}
      >
        {/* <!-- start growing your business --> */}
        <div className="flex flex-col justify-center items-center text-center w-full">
          <h2
            data-aos="fade-up"
            className={` mb-[10px] text-[30px] sm:text-[48px] leading-[60px] tracking-[-2%] ${ispartnerPage | isAffiliatePage ? "text-[#05284C] text-[25px] sm:text-[30px] leading-[38px] " : "text-[#FFFFFF]"}`}
          >
            {props.title}
          </h2>
          <div className="relative w-full flex flex-col justify-center items-center ">
            <p
              data-aos="fade-up"
              className="text-[18px] sm:text-[20px] leading-[30px] text-[#CDD4DB] mb-[10px] lg:w-[605px] w-full"
            >
              {props.details}
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-col items-center justify-center  h-auto "
            >
              {/* < Link  to={props.pageLink} onClick={props.signUP}>
                <Button
                  size="cdn"
                  onClick={() => window.scrollTo({ bottom: 0, behavior: "smooth" })}
                  className={` ${isAffiliatePage ? "!hidden" : ""}`}
                >
                  {props.buttz}
                </Button>
              </ Link > */}
              <Link to="/contact-us?scrollTo=getinTouchSection">
                <Button
                  size="cdn"
                  className={` ${isAffiliatePage | ispartnerPage ? "!hidden" : ""}`}
                >
                  {props.buttz}
                </Button>
              </Link>

              <Button
                size="cdn"
                onClick={openOverlay}
                className={` ${isAffiliatePage ? "block" : "!hidden"}`}
              >
                {props.buttz}
              </Button>

              <Button
                size="cdn"
                onClick={handleClick}
                className={` ${ispartnerPage ? "block" : "!hidden"}`}
              >
                {props.buttz}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <OverlayForm isOpen={isOpen} closeOverlay={closeOverlay} />
    </section>
  );
}

export default TalkToUs;
