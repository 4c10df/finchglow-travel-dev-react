import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../navigation/nav"; // Correct import statement
import Title from "../contents/title"; // Correct import statement
import contents from "../props/contents"; // Ensure this is the correct path
import TalkToUs from "../contents/talkToUs";
import talk from "../props/talk";
import TestimonialSlider from "../testimonial/testimonial";
import Footer from "../contents/footer";
import image1 from "../contents/image/medium-shot-woman-with-laptop-home.webp";
import image2 from "../contents/image/service/sub-pages/person-office-work-day.webp";
import background from "../contents/image/blue-background - Copy.webp";
import EpisodesSlide from "../slideEpisode/prevEpisodes";
import ZohoOptinForm from "../form/zohoOptinForm";
import OverlayForm from "../form/overlayForm";
import LoadBlurHashImage from "../lazy/loadBlurHash";

// go to props to input contents for the ones u can't input here


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

function PartnerPlusConnect() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full overflow-hidden">
        <Nav openOverlay={openOverlay} />
        <OverlayForm isOpen={isOpen} closeOverlay={closeOverlay} />

        <section className="flex justify-center items-center w-full mt-[70px]">
          {contents.filter((content) => content.id === 11).map(createTitle)}
        </section>

        {/* practical tips  */}
        <section
          className="relative flex flex-col justify-center items-center  bg-[#03182E]  bg-blend-soft-light bg-no-repeat bg-cover bg-center lg:h-[381px] w-full h-auto overflow-hidden"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[30px] at500:px-[70px] my-0 mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-[45px] w-full">
              <span
                data-aos="fade-up"
                className="txt8 text-[#E6EFFD] text-left lg:w-[595px]"
              >
                From practical tips for business development to in-depth
                analyses of market trends, PartnerPlus Connect equips
                participants with the knowledge and insights needed to stay
                ahead of the curve.
              </span>
              <span
                data-aos="fade-up"
                className="txt2 !leading-[26px] text-[#FFFFFF] text-left lg:w-[378px]"
              >
                Since the webinars began in 2023, hundreds of participants have
                benefitted from the discussions. Here are some of the feedback
                we’ve received:
              </span>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col justify-center items-center bg-[#FFFFFF] w-full h-auto overflow-hidden">
          <div className="static w-full flex flex-col justify-center gap-[30px] items-center 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[80px] my-0 mx-auto">
            <div className="flex flex-col gap-[30px] w-full md:w-[89%] sm:px-[20px]">
              <div className="flex flex-col justify-start gap-[20px] items-start w-full">
                <h3 className="text-[#05284C] text-left lg:w-[549px] ">
                  Why join every edition of PartnerPlus Connect?
                </h3>
                <span className="text-[#506982] txt8 text-left lg:w-[588px]">
                  The webinar is perfect for aspiring, emerging, and established
                  travel agents who want to:
                </span>
              </div>
              <div className="flex flex-col lg:flex-row justify-start items-start gap-[58px] w-full ">
                <ul className="flex flex-col justify-center items-start space-y-2 txt5 text-[#506982] list-disc w-full px-[15px] sm:w-[490.5px]">
                  <li>
                    Find inspiration or expert guidance on becoming a travel
                    agent or signing up as a Trade Partner.
                  </li>
                  <li>
                    Learn new techniques to improve their work efficiency.
                  </li>
                  <li>Brush up on past knowledge about the travel industry.</li>
                </ul>

                <ul className="flex flex-col justify-center items-start space-y-2 txt5 text-[#506982] list-disc w-full px-[15px] sm:w-[490.5px]">
                  <li>
                    Expand their horizons with invaluable insights and
                    strategies for success.
                  </li>
                  <li>
                    Find a community of like-minded travel agents to rub minds
                    with and learn from.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col justify-center items-center bg-[#EEF8FF]  w-full h-auto  overflow-hidden">
          <div className="static w-full at500:w-[90%] flex flex-col justify-center gap-[30px] items-center 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[40px] my-0 mx-auto overflow-hidden">
            <EpisodesSlide />
          </div>
        </section>

        <section className="relative flex flex-col justify-center items-center  w-full h-auto overflow-hidden">
          <div className="relative flex flex-col justify-center items-center bg-[#E6EAED]  w-full h-auto overflow-hidden">
            <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[50px]  at500:px-[55px]  my-0 mx-auto overflow-hidden">
              <TestimonialSlider />
            </div>
            <div className="relative flex flex-col justify-center items-center bg-[#EEF5FF] py-[70px]  w-full h-auto overflow-hidden"></div>
          </div>
        </section>

        {/* newsletter */}
        {/* <section className="relative bg-custom2-gradient flex flex-col justify-center items-center w-full h-auto lg:h-[430px] overflow-hidden z-[3] lg:overflow-visible">
          <div className="static w-full sm:w-[90%] flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[55px] at500:px-[40px]  md:px-[80px] my-0 mx-auto">
            <div className="relative lg:bottom-[60px] flex bg-[#05284C] flex-col-reverse lg:flex-row justify-center items-center w-full h-auto lg:h-[426.67px] rounded-[21.33px] p-[20px] at500:p-[30px] md:pt-[40px] md:pb-[10px] md:px-[60px] overflow-hidden">
              <div className="flex flex-col-reverse lg:flex-row justify-center items-start  w-full">
                <div className="relative flex justify-start items-start w-full h-auto text-left">
                  <div className="flex flex-col justify-center items-start gap-[17px] text-left w-full">
                    <div className="flex flex-col justify-center items-start gap-[12px] text-left lg:w-[426.67px]">
                      <h3 data-aos="fade-up" className="text-[#FFFFFF]">
                        Newsletter
                      </h3>
                      <span
                        data-aos="fade-up"
                        className="txt2 text-[#E6EAED] !font-normal text-left w-full"
                      >
                        Whether you are still considering going into the travel
                        business or you already have a career in the industry,
                        be the first to know about the next edition of
                        PartnerPlus Connect and other juicy training
                        opportunities.
                      </span>
                      <span data-aos="fade-up" className="txt3 text-[#E6EAED]">
                      You’ll definitely be better off for it
                    </span> 
                    </div>

                    <div className=" w-full md:w-[70%]">
                      <ZohoOptinForm />
                    </div>
                  </div>
                </div>

                <div className="relative flex justify-end items-end w-full h-auto  mb-[30px] lg:mb-0 lg:h-[347px] lg:w-[453px] overflow-hidden rounded-[8.89px]">
                  <img
                    src={image1}
                    className="w-full h-full object-cover"
                    alt="Duty calls"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="relative bg-[#EEF5FF] flex flex-col justify-center items-center w-full h-auto  overflow-hidden ">
          <div className="static w-full sm:w-[85%] flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] pt-[70px] pb-[10px] at500:px-[40px]  md:px-[80px] my-0 mx-auto">
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center  w-full h-auto lg:h-[561px]">
              <div className="relative flex justify-start items-start w-full h-auto text-left">
                <div className="flex flex-col justify-center items-start gap-[17.78px] text-left lg:w-[392px]">
                  <h3 data-aos="fade-up" className="text-[#05284C]">
                    Trade PartnerPlus Connect Program
                  </h3>
                  <p
                    data-aos="fade-up"
                    className=" text-[16px] leading-[24px] text-[#375370] text-left w-full"
                  >
                    Our PartnerPlus Connect webinar is open to all travel
                    industry stakeholders. However, to get the full experience
                    and enjoy access to our complete library or past episodes,
                    you’ll need to sign up for our affiliate program, Trade
                    PartnerPlus.
                  </p>
                  <p
                    data-aos="fade-up"
                    className=" text-[16px] leading-[24px] text-[#375370]"
                  >
                    You’ll also enjoy other benefits like access to our
                    extensive network of suppliers, marketing support and
                    resources, unbelievable discounts, ticket issuance on GDS
                    platforms,  and hardware and software assistance from our
                    world-class global support centre
                  </p>
                </div>
              </div>

              <div className="relative flex justify-end items-end w-full h-auto  mb-[30px] lg:mb-0 lg:h-[561px] ">
                <LoadBlurHashImage
                  src={image2}
                  blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                  className="w-full lg:w-[478px] h-full lg:h-[561px] object-cover"
                  alt="Duty calls"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center w-full">
          {talk.filter((talk) => talk.id === 7).map(createTalkToUs)}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default PartnerPlusConnect;
