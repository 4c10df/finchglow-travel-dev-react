import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "../errorMessage/errorPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Icon from "./blog-img/arrow-up.png";
import Link from "../contents/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper/blog.css";
import "./swiper/pagination.css";
import "./swiper/navigation.css";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogSlide = () => {
  const [posts, setPosts] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [postLimit, setPostLimit] = useState();

  useEffect(() => {
    axios
      .get("https://absolutgaming.net/wp-json/wp/v2/posts?_embed&author")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setHasError(true);
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  if (hasError) {
    return <ErrorPage />;
  }

  return (
    <div className="blog-container w-full flex flex-col items-start overflow-hidden lg:overflow-visible">
      <Swiper
        className="relative flex flex-col sm:!py-[30px] !overflow-visible"
        style={{ width: "100%" }}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={25}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          520: { slidesPerView: 2 },
          950: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".swiper-button-next-blog",
          prevEl: ".swiper-button-prev-blog",
        }}
      >
        {posts.slice(0, postLimit).map((post) => (
          <SwiperSlide key={post.id} className="md:right-[-8px] z-[4]">
            <div className="flex flex-col  gap-[20px]  bg-[#E6EFFD] overflow-hidden rounded-b-[14px]">
              <div className="flex flex-col relative w-full overflow-hidden">
                {post._embedded["wp:featuredmedia"] && (
                  <img
                    src={
                      post._embedded["wp:featuredmedia"][0].media_details.sizes
                        .full.source_url
                    }
                    alt={
                      post._embedded["wp:featuredmedia"][0].alt_text ||
                      post.title.rendered
                    }
                    style={{
                      maxWidth: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="flex flex-col overflow-hidden gap-[20px] "
              >
                <div className="flex flex-col justify-center w-full p-[30px]">
                  <p
                    data-aos="fade-up"
                    className="txt4 text-[#0260EE] leading-[24px]"
                  >
                    {post._embedded.author[0].name} •{" "}
                    {new Date(post.date).toLocaleDateString()}
                  </p>

                  <div className="flex justify-between items-start w-full">
                    <h5
                      data-aos="fade-up"
                      className="text-[#101828] !leading-[25px] ip8:w-[268px]"
                    >
                      {post.title.rendered}
                    </h5>
                    <span data-aos="fade-up" className="arrow">
                      <img
                        className="relative group-hover:right-[-6px] h-auto object-cover"
                        src={Icon}
                        alt="arrow up"
                      />
                    </span>
                  </div>

                  <span
                    data-aos="fade-up"
                    className="txt5 !font-medium text-[#667085]"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  ></span>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative flex justify-end items-end w-full gap-2 max-w-[1280px] px-[15px] pt-[30px] at500:px-[10px] my-0 mx-auto">
        <div className="next p-2">
          <FaArrowLeft className="swiper-button-prev-blog relative left-[-3px] top-0 text-[#05284C] hover:text-[#05284C] w-[20px]" />
        </div>
        <div className="prev p-2">
          <FaArrowRight className="swiper-button-next-blog relative text-[#05284C] top-0 hover:text-[#05284C] w-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default BlogSlide;
