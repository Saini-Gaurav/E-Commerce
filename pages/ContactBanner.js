import React from "react";

const ContactBanner = () => {
  return (
    <div>
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Contact Us</h1>
          <p>
          Have a question or need assistance? Our dedicated support team is here to help. Reach out to us anytime for prompt and personalized assistance with your inquiries or feedback.
          </p>
        </div>
      </div>
      <div id="mapid" style={{ width: "100%", height: "300px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"
          width="100%"
          height="300"
          style={{ border: "0px" }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactBanner;
