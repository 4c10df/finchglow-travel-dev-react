import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import copyLinkImg from "../contents/image/blog/icon/copy-min.png";
import twitterImg from "../contents/image/blog/icon/_Button base-min.png";
import facebookImg from "../contents/image/blog/icon/fb_Button base-min.png";
import linkedinImg from "../contents/image/blog/icon/linkedinButton-min.png";
import Sidebar from "../contents/sections/sideBar";
import PageTitle from "../pageTitle/pageTitle";
import Load from "../API/loading"

function PostDetail() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [copyMessage, setCopyMessage] = useState("");
    

    const handleCopyLink = () => {
      const link = window.location.href;
      navigator.clipboard.writeText(link).then(() => {
        setCopyMessage("Link copied");
        setTimeout(() => setCopyMessage(""), 2000);
      });
    };

    useEffect(() => {
      axios
        .get(
          `https://absolutgaming.net/wp-json/wp/v2/posts?slug=${slug}&_embed`
        )
        .then((response) => {
          if (response.data.length > 0) {
            setPost(response.data[0]);
          } else {
            setHasError(true);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
          setHasError(true);
          setLoading(false);
        });
    }, [slug]);

    if (loading) {
      return <Load />;
    }

    if (hasError || !post) {
      return <ErrorPage />;
    }


  return (
    <>
      <PageTitle
        title={post.title.rendered}
        description={post.excerpt.rendered}
      />
      {loading ? (
        <Load  />
      ) : (
        <div className=" relative bg-[#EEF5FF] flex flex-col justify-center items-center w-full overflow-hidden">
          <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[60px] at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
            <div className="flex flex-col xl:flex-row xl:justify-between justify-start items-start xl:items-center w-full gap-[30px] xl:gap-[168px]">
              <div className="relative flex flex-col justify-center items-start w-full silver:w-[513px] text-left gap-[17px]">
                <span className="txt2 capitalize text-[#0260EE]"></span>
                <h3 className="!text-[#101828] xl:!w-[595px] ">
                  {post.title.rendered}
                </h3>
                <span
                  className="blogDetail !text-[#697E94] txt2  !leading-[26px] xl:!w-[407px]"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </div>

              <div className="relative flex flex-col xl:justify-center justify-start items-start xl:items-end xl:px-[30px] py-0 w-full h-auto">
                <div className="flex flex-col justify-center items-center border-l-[#CCDFFC] border-l-[4px] px-[20px]">
                  <span className="txt2 py-0 text-[#697E94] text-left xl:w-[340px]"></span>
                </div>
              </div>
            </div>
          </div>

          {post._embedded["wp:featuredmedia"] &&
            post._embedded["wp:featuredmedia"][0] && (
              <div
                className="relative flex flex-col justify-center items-center at500:bg-fixed !bg-no-repeat !bg-cover !bg-top !h-[474px] !py-[90px] w-full overflow-hidden"
                style={{
                  backgroundImage: `url(${post._embedded["wp:featuredmedia"][0].source_url})`,
                }}
              ></div>
            )}

          <div className="relative bg-[#FFFFFF] flex flex-col justify-center items-center w-full  overflow-hidden">
            <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[50px] at500:px-[64px] my-0 mx-auto">
              <div className="flex flex-col gap-[50px] ipx:flex-row justify-start items-start silver:justify-between w-full">
                <div className="flex flex-col gap-[20px] lg:flex-row justify-start items-start sm:justify-between w-[300px]">
                  <div className="flex flex-col gap-[12px]">
                    <span
                      data-aos="fade-up"
                      className="txt4 leading-[28px] !text-[#0260EE]"
                    >
                      Written by
                    </span>
                    <span
                      data-aos="fade-up"
                      className="txt4 leading-[28px] text-[#667085]"
                    >
                      {post._embedded.author[0].name}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <span
                      data-aos="fade-up"
                      className="txt4 leading-[28px] text-[#0260EE]"
                    >
                      Published on
                    </span>
                    <span
                      data-aos="fade-up"
                      className="txt4 leading-[28px] text-[#667085]"
                    >
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="w-full xl:w-[279px] flex flex-col gap-[20px] silver:flex-row ipx:justify-end ipx:items-end">
                  <div
                    data-aos="fade-up"
                    className="flex flex-col gap-[15px] w-[129px] cursor-pointer px-[10px] py-[10px] border-[1px] h-[40px] border-solid border-[#667085] hover:rounded-[2px] rounded-[8px]"
                    onClick={handleCopyLink}
                  >
                    <span className="flex gap-[8px]">
                      <img
                        src={copyLinkImg}
                        className="w-[20px] h-[20px]"
                        alt="copy-link"
                      />
                      <span className="text-[#667085] font-medium leading-[20px] text-[14px] transition-all duration-300 ease-in-out">
                        Copy link
                      </span>
                    </span>
                    <span className="copy-message">{copyMessage}</span>
                  </div>
                  <ul className="flex gap-3">
                    <li data-aos="fade-up">
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          <img
                            src={twitterImg}
                            className="w-[40px] h-[40px]"
                            alt="twitter"
                          />
                        </span>
                      </a>
                    </li>
                    <li data-aos="fade-up">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          <img
                            src={facebookImg}
                            className="w-[40px] h-[40px]"
                            alt="facebook"
                          />
                        </span>
                      </a>
                    </li>
                    <li data-aos="fade-up">
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          <img
                            src={linkedinImg}
                            className="w-[40px] h-[40px]"
                            alt="linkedin"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-center items-center w-full  overflow-hidden">
              <div className="static w-full  flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[10px] at500:px-[64px] my-0 mx-auto">
                <div className="relative flex flex-col-reverse gap-[50px] xl:flex-row justify-between items-start w-full h-auto">
                  <div
                    data-aos="fade-up"
                    className="blogDetail relative flex flex-col justify-start w-full xl:w-[722px] !z-0 gap-[18px]"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />

                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostDetail;
