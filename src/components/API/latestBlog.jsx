import React from "react";
import Icon from "../contents/image/blog/icon/Icon wrap-min.png";
import Link from "../contents/link";
import Button from "../contents/Button";
import axios from "axios";
import ErrorPage from "../errorMessage/errorPage";
import { useEffect, useState } from "react";


const LatestBlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [hasError, setHasError] = useState(false); // State to track if an error occurred
  const [postLimit, setPostLimit] = useState(2); // Control the number of posts displayed

  useEffect(() => {
    axios
      .get("https://absolutgaming.net/wp-json/wp/v2/posts?_embed&author")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setHasError(true); // Set the error state to true
      });
  }, []);

  

  if (hasError) {
    return <ErrorPage />; // Render the ErrorPage component if an error occurred
  }

  return (
    <section className="relative bg-[#FFFFFF] flex flex-col justify-center items-center w-full overflow-hidden z-[20]">
      <div className="static w-full flex flex-col silver:flex-row justify-center items-start gap-[30px] 2xl:w-[1280px] px-[15px] py-[60px] at500:px-[40px] md:px-[70px] my-0 mx-auto">
        <div className="flex flex-col gap-[20px]  md:gap-[13px] w-full">
          <div className="flex flex-col ">
            <span className="txt4 leading-[24px] text-[#0260EE]">Latest</span>
            <h3 className="text-[rgb(5,40,76)]">From the blog</h3>
          </div>
          <span className="txt3 !text-[#375370] lg:w-[336.59px]">
            The latest industry news, interviews, technologies, and resources.
          </span>
          <Link to="/blog-home">
            <Button size="cdn" className="sm:!w-[168px]">
              View all posts
            </Button>
          </Link>
        </div>
        <div className="latestBlog flex flex-col md:flex-row justify-center items-start w-full h-auto md:w-[644px] gap-[20px] mb-[30px] ">
          {posts.slice(0, postLimit).map((post) => (
            <div
              key={post.id}
              className={post.class_list.join(
                "relative w-full flex flex-col overflow-hidden gap-[20px] group "
              )}
            >
              <div className="flex flex-col relative w-full !h-[220px] overflow-hidden">
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
                {/* <!--overlay-img--> */}
                {/* <div
                  class="absolute left-0 top-[-100%] w-full h-full  group-hover:top-0
                 text-white text-center bg-[#2727278a] transition-all border-[#667085] 
                 border-solid border-[3.5px] ease-in-out duration-500"
                >
                  <div class="flex items-center justify-center gap-[23px] absolute left-0 top-[50%] w-full mt-[-20px]">
                    <a
                      href={post.link}                     
                      onClick={() => setPostLimit(postLimit + 2)}
                      className="bg-white h-[46px] w-[46px] rounded-[50%] flex justify-center items-center"
                    >
                      <RiLinksFill size={16} className="text-[rgb(5,40,76)]" />
                    </a>
                  </div>
                </div> */}
                {/* <!--overlay-img--> */}
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="flex flex-col overflow-hidden gap-[20px] "
              >
                <p
                  data-aos="fade-up"
                  className="txt4 text-[#0260EE] leading-[24px]"
                >
                  {post._embedded.author[0].name} •{" "}
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <h2>{post.author.rendered}</h2>

                <div className="flex justify-between items-start gap-2 w-full">
                  <h5
                    data-aos="fade-up"
                    className="text-[#101828] !leading-[25px] ip8:w-[268px]"
                  >
                    {post.title.rendered}
                  </h5>
                  <span data-aos="fade-up" className="arrow">
                    <img
                      className="relative group-hover:right-[-6px] w-[24px] h-[24px] object-contain "
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;
