import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./navigation/nav"; // Correct import statement
import Title from "./contents/title"; // Correct import statement
import contents from "./props/contents"; // Ensure this is the correct path
import RoundText from "./contents/roundText";
import round from "./props/round";
import TestimonialSlider from "./testimonial/testimonial";
import TalkToUs from "./contents/talkToUs";
import talk from "./props/talk";
import Footer from "../components/contents/footer";
import background from "./contents/image/blue-background - Copy.webp";
import background2 from "./contents/image/c2cc3462de3a57be65f8b9e178067365.webp";
// import VideoSection from "./contents/sections/videoSection";
import OverlayForm from "./form/overlayForm";

function createTalkToUs(talk) {
  return (
    <TalkToUs
      key={talk.id}
      title={talk.title}
      details={talk.details}
      buttz={talk.buttz}
      links={talk.links}
      pageLink={talk.pageLink}
    />
  );
}

function createRoundText(content) {
  return (
    <RoundText
      key={content.id}
      title={content.title}
      subTitle={content.subTitle}
      description1={content.description1}
      description2={content.description2}
      description3={content.description3}
      // buttonText={content.buttonText}
      imgURL={content.imgURL}
    />
  );
}

function createTitle(content) {
  return (
    <Title
      key={content.id}
      title={content.title}
      subTitle={content.subTitle}
      riteContent={content.riteContent}
      imgURL={content.imgURL}
    />
  );
}

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full ">
        <Nav openOverlay={openOverlay} />
        <OverlayForm isOpen={isOpen} closeOverlay={closeOverlay} />

        <section className="flex justify-center items-center w-full mt-[70px]">
          {contents.filter((content) => content.id === 2).map(createTitle)}
        </section>

        <section
          className="relative flex flex-col justify-center items-center  bg-[#03182E]  bg-blend-soft-light bg-no-repeat bg-cover bg-center md:h-[429px] w-full h-auto overflow-hidden"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[30px] at500:px-[80px] my-0 mx-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-[70px] items-start w-full">
              <div className="relative flex flex-col justify-start items-start gap-[6px]  h-auto text-left">
                <h3
                  data-aos="fade-up"
                  className="text-[#B3CFFA] silver:w-[231px]"
                >
                  Why Finchglow Travels?
                </h3>
              </div>

              <div className="relative flex flex-col justify-center items-start gap-[40px] w-full h-auto text-left mb-[30px]">
                <div className="relative flex flex-col justify-center items-start gap-[20px] w-full h-auto text-left">
                  <span
                    data-aos="fade-up"
                    className="txt2 text-[#B3CFFA] xl:w-[739px]"
                  >
                    Finchglow Travels was founded on the principle of excellent
                    service, a determination to simplify travel complexities,
                    and upholding the highest standards of professionalism,
                    efficiency, and customer satisfaction. We are constantly
                    designing solutions that make the Nigerian travel industry
                    better.
                  </span>
                  <span
                    data-aos="fade-up"
                    className="txt3 !text-[#FFFFFF] xl:w-[739px]"
                  >
                    This commitment to continuous improvement ensures our
                    customers (whether travel agents or CorPorate, independent,
                    and VIP travellers) always have access to the best travel
                    standards. We are constantly evolving and adapting to the
                    opportunities that lie ahead.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center w-full ">
          {round.filter((content) => content.id === 2).map(createRoundText)}
        </section>

        <section
          className="relative flex flex-col justify-center items-center  bg-fixed   bg-no-repeat bg-cover bg-center md:h-[425px] w-full h-auto overflow-hidden"
          style={{ backgroundImage: `url(${background2})` }}
        ></section>

        <section className="relative flex flex-col justify-center items-center  bg-[#EEF5FF]   w-full h-auto overflow-hidden">
          <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[80px] my-0 mx-auto">
            <h3
              data-aos="fade-up"
              className="text-[#05284C]  text-left w-full mb-[30px]"
            >
              Your No. 1 Travel Consolidator
            </h3>
            <div className="flex flex-col lg:flex-row justify-between gap-[20px] items-start w-full">
              <div className="relative flex flex-col justify-start items-start gap-[6px] w-full h-auto text-left">
                <span
                  data-aos="fade-up"
                  className="txt2 !font-semibold !text-[20px] !leading-[30px] text-[#697E94] xl:w-[543px]"
                >
                  As Nigeria’s foremost travel consolidator, Finchglow Travels
                  has the scale to deliver maximum value and a team of seasoned
                  professionals that possess an unparalleled understanding of
                  the travel landscape. We offer unprecedented access to a vast
                  network of suppliers and partners, ensuring you have options
                  for the best rates and inventory available.
                </span>
              </div>

              <div className="relative flex flex-col justify-center items-start gap-[40px] w-full h-auto text-left mb-[30px]">
                <div className="relative flex flex-col justify-center items-center gap-[20px] w-full h-auto text-left">
                  <span
                    data-aos="fade-up"
                    className="txt2 !leading-[26px] text-[#506982] xl:w-[402px]"
                  >
                    As Nigeria’s foremost travel consolidator, Finchglow Travels
                    has the scale to deliver maximum value and a team of
                    seasoned professionals that possess an unparalleled
                    understanding of the travel landscape. We offer
                    unprecedented access to a vast network of suppliers and
                    partners, ensuring you have options for the best rates and
                    inventory available.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <VideoSection /> */}

        <section className="relative flex flex-col justify-center items-center bg-[#E6EAED] md:h-[384px] w-full h-auto overflow-hidden">
          <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[50px]  at500:px-[55px]  my-0 mx-auto overflow-hidden">
            <TestimonialSlider />
          </div>
        </section>

        <section className="flex justify-center items-center w-full ">
          {talk.filter((talk) => talk.id === 1).map(createTalkToUs)}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default About;
