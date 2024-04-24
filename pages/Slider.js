import React from "react";

const Slider = () => {
  return (
    <div>
      <div
        id="template-mo-zay-hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="./assests/img/banner_img_01.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-success">
                      <b>Biz</b> eCommerce
                    </h1>
                    <h3 className="h2">E-Commerce Shop</h3>
                    <p>
                      Discover a world of style and savings with our exclusive
                      Spring Collection Sale! Shop now for unbeatable deals on
                      fashion, electronics, home essentials, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="./assests/img/banner_img_02.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                  <h1 className="h1 text-success">
                      <b>Biz</b> eCommerce
                    </h1>
                    <h3 className="h2">E-Commerce Shop</h3>
                    <p>
                      Discover a world of style and savings with our exclusive
                      Spring Collection Sale! Shop now for unbeatable deals on
                      fashion, electronics, home essentials, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="./assests/img/banner_img_03.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                  <h1 className="h1 text-success">
                      <b>Biz</b> eCommerce
                    </h1>
                    <h3 className="h2">E-Commerce Shop</h3>
                    <p>
                      Discover a world of style and savings with our exclusive
                      Spring Collection Sale! Shop now for unbeatable deals on
                      fashion, electronics, home essentials, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev text-decoration-none w-auto ps-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <i className="fas fa-chevron-left"></i>
        </a>
        <a
          className="carousel-control-next text-decoration-none w-auto pe-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Slider;
