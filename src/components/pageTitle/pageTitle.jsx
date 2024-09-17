import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    // Update or create meta description tag
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = description || "";
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.name = "description";
      newMetaDescription.content = description || "";
      document.head.appendChild(newMetaDescription);
    }
  }, [location, title, description]);

  return null;
};

export default PageTitle;

{
  /* <PageTitle
  title="My Page Title"
  description="This is a description of the page."
  keywords="keyword1, keyword2, keyword3"
/>; */
}
