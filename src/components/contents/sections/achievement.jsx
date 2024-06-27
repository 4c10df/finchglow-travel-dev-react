import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import FadeLink from '../fadeLink';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/_count.css';
import background from '../images/blue-background.png';
import icon1 from '../images/icons/dollor.png';
import icon2 from '../images/icons/airoplane.png';
import icon3 from '../images/icons/inbox.png';
import icon4 from '../images/icons/customer.png';
import icon from "../images/arrow-up.png";




const AchievementsSection = () => {
  const { ref: nairaRef, inView: nairaInView } = useInView({ triggerOnce: true });
  const { ref: tripsRef, inView: tripsInView } = useInView({ triggerOnce: true });
  const { ref: consultantsRef, inView: consultantsInView } = useInView({ triggerOnce: true });
  const { ref: clientsRef, inView: clientsInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section
      className="relative flex flex-col justify-center items-center bg-[#03182E] bg-blend-soft-light bg-no-repeat bg-cover bg-center py-[70px] w-full h-auto overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[50px] at500:pl-[80px] at500:pr-[40px] my-0 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-[30px]">
          <div className="relative flex flex-col items-start gap-[17px] w-full">
            <span
              
              className="txt2 text-[#0260EE] capitalize mb-[10px]"
            >
              Key Achievements
            </span>
            <h3
              
              className="text-[#FFFFFF] !text-[30px] !leading-[1.1] lg:w-[452px] mb-[10px]"
            >
              We’ve mastered connecting our clients with the rest of the world
              and perfected providing exceptional service and travel
              experiences.
            </h3>
            <p
            
              className="leading-[24px] text-[16px] text-[#E6EFFD] lg:w-[452px] mb-[20px]"
            >
              Since we launched in June 2006, we have expanded from one branch
              to nine branches across Nigeria, won over 20 industry awards, and
              serviced over 20,000 clients. We are dedicated to offering the
              best possible service across all our touch points.
            </p>
            <FadeLink to="/ourstory">
              <span className="arrow !text-[#0260EE]">
                Learn more
                <img src={icon} alt="" />
              </span>
            </FadeLink>
          </div>

          <div className="grid at594:grid-cols-2 gap-y-[100px] items-start gap-x-[32px] w-full">
            <div className="flex flex-col justify-start items-start gap-[8px] w-full">
              <span>
                <img
                  src={icon1}
                  className="w-[46px] h-auto object-cover"
                  alt="dollor sign"
                />
              </span>
              <div  className="counter" ref={nairaRef}>
                {nairaInView && (
                  <CountUp end={30} suffix="+ Billion" duration={3} />
                )}
              </div>
              <span className="txt3 capitalize">
                Naira Annual Turnover
              </span>
            </div>

            <div className="flex flex-col justify-center gap-[8px] items-start w-full">
              <span >
                <img
                  src={icon2}
                  className="w-[46px] h-auto object-cover"
                  alt="dollor sign"
                />
              </span>
              <div  className="counter" ref={tripsRef}>
                {tripsInView && (
                  <CountUp end={100000} suffix="K+" duration={3} />
                )}
              </div>
              <span  className="txt3 capitalize">
                Trips booked
              </span>
            </div>

            <div className="flex flex-col justify-center gap-[8px] items-start w-full">
              <span>
                <img
                  src={icon3}
                  className="w-[46px] h-auto object-cover"
                  alt="dollor sign"
                />
              </span>
              <div  className="counter" ref={consultantsRef}>
                {consultantsInView && (
                  <CountUp end={200} suffix="+" duration={3} />
                )}
              </div>
              <span className="txt3 capitalize">
                Travel Consultants
              </span>
            </div>

            <div className="flex flex-col justify-center gap-[8px] items-start w-full">
              <span >
                <img
                  src={icon4}
                  className="w-[46px] h-auto object-cover"
                  alt="dollor sign"
                />
              </span>
              <div className="counter" ref={clientsRef}>
                {clientsInView && (
                  <CountUp end={20000} suffix="+" duration={3} />
                )}
              </div>
              <span className="txt3 capitalize">
                Happy clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;