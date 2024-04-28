import React from 'react';

const OurBrands = () => {
  return (
    <div>
      <section className="bg-light py-5">
        <div className="container my-4">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Our Brands</h1>
                    <p>
                    Our Brands presents a curated selection of trusted names and beloved labels, offering quality and reliability across a diverse range of products. Explore our handpicked assortment, tailored to meet your preferences and elevate your shopping experience.
                    </p>
                </div>
                <div className="col-lg-9 m-auto tempaltemo-carousel">
                    <div className="row d-flex flex-row">
                        <div className="col-1 align-self-center">
                            <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                                <i className="text-light fas fa-chevron-left"></i>
                            </a>
                        </div>

                        {/* Carousel Wrapper */}
                        <div className="col">
                            <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
                                <div className="carousel-inner product-links-wap" role="listbox">

                                    {/* First slide */}
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src="assests/img/brand_01.png" alt="Brand Logo" /></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src="assests/img/brand_02.png" alt="Brand Logo" /></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src="assests/img/brand_03.png" alt="Brand Logo" /></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src="assests/img/brand_04.png" alt="Brand Logo" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End First slide */}

                                    {/* Second slide */}
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src="assests/img/brand_01.png" alt="Brand Logo" /></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src="assests/img/brand_02.png" alt="Brand Logo" /></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src="assests/img/brand_03.png" alt="Brand Logo" /></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src="assests/img/brand_04.png" alt="Brand Logo" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Second slide */}

                                    {/* Third slide */}
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src="assests/img/brand_01.png" alt="Brand Logo" /></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src="assests/img/brand_02.png" alt="Brand Logo" /></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src="assests/img/brand_03.png" alt="Brand Logo" /></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src="assests/img/brand_04.png" alt="Brand Logo" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Third slide */}

                                </div>
                                {/* End Slides */}
                            </div>
                        </div>
                        {/* End Carousel Wrapper */}

                        <div className="col-1 align-self-center">
                            <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                                <i className="text-light fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default OurBrands;
