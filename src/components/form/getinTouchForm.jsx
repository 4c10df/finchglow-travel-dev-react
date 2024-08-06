import React from "react";
import "./_getinTouchForm.css";





const GetinTouchForm = () => {
  

  return (
    <section className="flex flex-col justify-center items-center w-full h-auto py-12 bg-white">
      <div className="max-w-[600px] text-center w-full px-4">
        <span
          data-aos="fade-up"
          className="text-center txt4 text-[#0260EE] mb-4"
        >
          Contact us
        </span>
        <h3
          data-aos="fade-up"
          className="text-center text-2xl font-bold text-[#05284C] mb-2"
        >
          Get in touch
        </h3>
        <p
          data-aos="fade-up"
          className="text-center txt2 !leading-[26px] text-[#697E94] mb-8"
        >
          We’d love to hear from you. Please fill out this form.
        </p>

        <form
          className="space-y-2 text-left"
          action="https://forms.zohopublic.com/finchglowholdings1/form/TravelsContactForm/formperma/bw9jn327NZwu5fqz4IEJWkWHiuBSAF9F14L8ELdqnFk/htmlRecords/submit"
          name="form"
          id="form"
          method="POST"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
        >
          <input type="hidden" name="zf_referrer_name" value="" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />

          <h2></h2>
          <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-[28.44px] w-full">
            <div className="w-full">
              <label>First name</label>
              <input
                type="text"
                maxLength="255"
                name="Name_First"
                placeholder="First Name"
              />
            </div>
            <div className="w-full">
              <label>Last name</label>
              <input
                type="text"
                maxLength="255"
                name="Name_Last"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              maxLength="255"
              name="Email"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label>Phone number</label>
            <input
              type="text"
              name="PhoneNumber_countrycode"
              maxLength="20"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label>
              Nature of Enquiry <em>*</em>
            </label>
            <select name="Dropdown">
              <option value="-Select-">-Select-</option>
              <option value="Partnerships & Collaboration">
                Partnerships & Collaboration
              </option>
              <option value="General Enquiries">General Enquiries</option>
              <option value="Trade Partner Enquiry">
                Trade Partner Enquiry
              </option>
              <option value="Request for Proposal">Request for Proposal</option>
            </select>
          </div>

          <div>
            <label>Message</label>
            <textarea
              className="h-[113.56px]"
              name="MultiLine"
              maxLength="65535"
              placeholder="Enter your message here"
            ></textarea>
          </div>

          <button type="submit" className="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetinTouchForm;
