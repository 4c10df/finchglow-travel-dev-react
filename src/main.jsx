import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ErrorPage from "./components/errorMessage/errorPage";
import "./index.css";
import App from "./App";
import About from "./components/about_us";
import Services from "./components/service";
import Blog from "./components/blog";
import ContactUs from "./components/contact_us";
import OurStory from "./components/page/ourStory";
import CorPorate from "./components/page/corPorate";
import TravelPackages from "./components/page/travelPackages";
import AffiliatePrograms from "./components/page/affiliate";
import AncillaryServices from "./components/page/ancillary";
import OurVisaService from "./components/page/ourVisa";
import PartnerplusConnect from "./components/page/parterPlus";
import BlogPost from "./components/page/blogPostStack";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Helmet>
          <title>Nigeria’s Leading Travel Consolidator</title>
          <meta
            name="description"
            content="Experience the world with our trusted travel consolidator services. Over 18 years of expertise in connecting travelers with the best flights, hotels, and packages. Reliable, efficient, and customer-focused."
          />
        </Helmet>
        <App />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "about-finchglow-travels",
    element: (
      <>
        <Helmet>
          <title>The Powerhouse of Travel Consolidation</title>
          <meta
            name="description"
            content="Unlock top travel deals, net rates, and cutting-edge technology to boost your bookings and commissions. Leverage our expert consolidator services for unmatched support and industry expertise"
          />
        </Helmet>
        <About />
      </>
    ),
  },
  {
    path: "our-services",
    element: (
      <>
        <Helmet>
          <title>Expert Travel Services at Your Fingertips</title>
          <meta
            name="description"
            content="Find our comprehensive travel services, designed to cater to every need of travel agents and professionals."
          />
        </Helmet>
        <Services />
      </>
    ),
  },
  {
    path: "blog-home",
    element: (
      <>
        <Helmet>
          <title>Blog Home | Finchglow Travels</title>
          <meta
            name="description"
            content="This is the meta description for this page"
          />
        </Helmet>
        <Blog />
      </>
    ),
  },
  {
    path: "contact-us",
    element: (
      <>
        <Helmet>
          <title>Contact Us</title>
          <meta
            name="description"
            content="Need travel expertise? Contact your travel agent's agent! Get personalized support, expert advice, and tailored solutions for all your travel needs."
          />
        </Helmet>
        <ContactUs />
      </>
    ),
  },
  {
    path: "affiliate-programme",
    element: (
      <>
        <Helmet>
          <title>
            Travel Agent Partner Program | Join Our Travel Consolidator Network
            or Affiliate Program
          </title>
          <meta
            name="description"
            content="
              A. Boost your commissions as a travel agent with our travel consolidator partner
              program! Get exclusive deals, competitive pricing, and innovative tools to grow
              your business. Enjoy dedicated support, industry expertise, and a vast travel
              inventory to succeed.
              B. Travel agents, boost commissions with our consolidator partner program! Get
              exclusive deals, competitive pricing, and innovative tools from a trusted travel
              agent's agent. Enjoy dedicated support, industry expertise, and a vast travel
              inventory to grow your business and succeed in the travel industry.
              "
          />
        </Helmet>
        <AffiliatePrograms />
      </>
    ),
  },
  {
    path: "ancillary-services",
    element: (
      <>
        <Helmet>
          <title>Ancillary Services</title>
          <meta
            name="description"
            content="Expert protocol services, airport transfers, and travel insurance - book ancillary services with ease for a stress-free trip and unforgettable memories"
          />
        </Helmet>
        <AncillaryServices />
      </>
    ),
  },
  {
    path: "finchglow-travels-story",
    element: (
      <>
        <Helmet>
          <title>A Legacy of Strength: Our Story</title>
          <meta
            name="description"
            content=" Discover the story behind the leading travel consolidator in Nigeria. Learn how our expertise, innovative technology, and competitive pricing have empowered travel agents to succeed for over 18 years"
          />
        </Helmet>
        <OurStory />
      </>
    ),
  },
  {
    path: "Corporate-travel-management",
    element: (
      <>
        <Helmet>
          <title>Corporate Travel Management</title>
          <meta
            name="description"
            content="Make business travel easy. Book, manage, and report on travel plans in minutes."
          />
        </Helmet>
        <CorPorate />
      </>
    ),
  },
  {
    path: "customised-travel-packages",
    element: (
      <>
        <Helmet>
          <title> Customized Travel Packages</title>
          <meta
            name="description"
            content="Get your dream trip tailored to your style! Custom travel packages for unique experiences."
          />
        </Helmet>
        <TravelPackages />
      </>
    ),
  },
  {
    path: "visa-and-immigration-services",
    element: (
      <>
        <Helmet>
          <title>Visa and Immigration Services</title>
          <meta
            name="description"
            content="Simplify your travel plans! Get expert visa and immigration services, including application assistance, document processing, and travel permit solutions."
          />
        </Helmet>
        <OurVisaService />
      </>
    ),
  },
  {
    path: "partnerplus-connect",
    element: (
      <>
        <Helmet>
          <title> Partnerplus Connect</title>
          <meta
            name="description"
            content="Connect with the travel industry's best! Join our monthly webinar for exclusive insights, expert knowledge, and valuable connections with our community of travel professionals."
          />
        </Helmet>
        <PartnerplusConnect />
      </>
    ),
  },
  {
    path: "blog-read",
    element: (
      <>
        <Helmet>
          <title>Blog Read | Finchglow Travels</title>
          <meta
            name="description"
            content="This is the meta description for this page"
          />
        </Helmet>
        <BlogPost />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
