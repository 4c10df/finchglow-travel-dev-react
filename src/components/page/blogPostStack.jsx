import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../navigation/nav"; // Correct import statement
import Footer from "../contents/footer";
import LatestBlogSection from "../API/latestBlog";
import OverlayForm from "../form/overlayForm";
import PostDetail from "../API/blogDetail";

function BlogPost() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <div>
        <Nav openOverlay={openOverlay} />
        <OverlayForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <section className="flex justify-center items-center w-full mt-[70px]">
          <PostDetail />
        </section>

        <LatestBlogSection />
        <Footer />
      </div>
    </>
  );
}

export default BlogPost;
