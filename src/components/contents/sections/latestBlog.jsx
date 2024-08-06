import React from "react";
import Image1 from "../image/blog/image1-min.jpeg";
import Image2 from "../image/blog/image2-min.jpeg";
import Icon from "../image/blog/icon/Icon wrap-min.png";
import Link from "../link";
import Button from "../Button";
import LoadBlurHashImage from "../../lazy/loadBlurHash";

const LatestBlogSection = () => {
  return (
    <section className="relative bg-[#FFFFFF] flex flex-col justify-center items-center w-full overflow-hidden z-[20]">
      <div className="static w-full flex flex-col silver:flex-row justify-center items-start gap-[30px] 2xl:w-[1280px] px-[15px] py-[60px] at500:px-[40px] md:px-[70px] my-0 mx-auto">
        <div className="flex flex-col gap-[20px]  md:gap-[40px] w-full">
          <div className="flex flex-col gap-[17px]">
            <span className="txt4 leading-[24px] text-[#0260EE]">Latest</span>
            <h3 className="text-[#05284C]">From the blog</h3>
          </div>
          <span className="txt3 !text-[#375370] lg:w-[336.59px]">
            The latest industry news, interviews, technologies, and resources.
          </span>
          <Link to="/blog">
            <Button size="cdn" className="">
              View all posts
            </Button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start w-full gap-[20px] mb-[30px]">
          <div className="w-full flex flex-col overflow-hidden gap-[20px]">
            <div className="h-[287px] w-full">
              <LoadBlurHashImage
                src={Image1}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-full object-cover"
                alt="Affiliate Programs"
              />
            </div>

            <div className="flex flex-col justify-start items-start w-full gap-[20px]">
              <span
                data-aos="fade-up"
                className="txt4 text-[#0260EE] leading-[24px]"
              >
                Alec Whitten • 17 Jan 2022
              </span>
              <div className="flex justify-between items-center w-full hover:gap-[12px]">
                <h5
                  data-aos="fade-up"
                  className="text-[#101828] !leading-[30px] ip8:w-[268px]"
                >
                  Bill Walsh leadership lessons
                </h5>
                <Link to="/">
                  <span className="arrow">
                    <img
                      className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                      src={Icon}
                      alt="arrow up"
                    />
                  </span>
                </Link>
              </div>
              <span data-aos="fade-up" className="txt5 text-[#667085]">
                Like to know the secrets of transforming a 2-14 team into a 3x
                Super Bowl winning Dynasty?
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col overflow-hidden gap-[20px]">
            <div className="h-[287px] w-full">
              <LoadBlurHashImage
                src={Image2}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-full object-cover"
                alt="Affiliate Programs"
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
                <Link to="/">
                  <span className="arrow">
                    <img
                      className="relative hover:right-[-6px] w-[24px] h-[24px] object-contain "
                      src={Icon}
                      alt="arrow up"
                    />
                  </span>
                </Link>
              </div>
              <span data-aos="fade-up" className="txt5 text-[#667085]">
                Mental models are simple expressions of complex processes or
                relationships.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;
