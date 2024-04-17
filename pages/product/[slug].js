import { useRouter } from 'next/router'
import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Product = () => {
    const router = useRouter();
    const { slug } = router.query;
  return (
    <div>
      <section className="bg-light">
        <div className="container pb-5">
            <div className="row">
                <div className="col-lg-5 mt-5">
                    <div className="card mb-3">
                        <Image className="card-Image img-fluid" src="/assests/img/product_single_10.jpg" alt="Card image cap" id="product-detail" width={130} height={100} />
                    </div>
                    <div className="row">
                        {/* Start Controls */}
                        <div className="col-1 align-self-center">
                            <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                <i className="text-dark fas fa-chevron-left"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                        </div>
                        {/* End Controls */}
                        {/* Start Carousel Wrapper */}
                        <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                            {/* Start Slides */}
                            <div className="carousel-inner product-links-wap" role="listbox">

                                {/* First slide */}
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-4">
                                            <a href="#">
                                                <Image className="card-Image img-fluid" src="/assests/img/product_single_01.jpg" alt="Product Image 1" width={130} height={50}/>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a href="#">
                                                <Image className="card-Image img-fluid" src="/assests/img/product_single_02.jpg" alt="Product Image 2" width={130} height={50} />
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a href="#">
                                                <Image className="card-Image img-fluid" src="/assests/img/product_single_03.jpg" alt="Product Image 3" width={130} height={50}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* /.First slide */}

                                {/* Second slide */}
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-4">
                                            <a href="#">
                                                <Image className="card-Image img-fluid" src="/assests/img/product_single_04.jpg" alt="Product Image 4" width={130} height={50}/>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a href="#">
                                                <Image className="card-Image img-fluid" src="/assests/img/product_single_05.jpg" alt="Product Image 5" width={130} height={50} />
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a href="#">
                                                <Image className="card-Image img-fluid" src="/assests/img/product_single_06.jpg" alt="Product Image 6" width={130} height={50}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* /.Second slide */}

                                {/* Third slide */}
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-4">
                                            <a href="#">
                                                <Image className="card-Image img-fluid" src="/assests/img/product_single_07.jpg" alt="Product Image 7" width={130} height={50}/>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a href="#">
                                                <Image className="card-Image img-fluid" src="/assests/img/product_single_08.jpg" alt="Product Image 8" width={130} height={50}/>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a href="#">
                                                <Image className="card-Image img-fluid" src="/assests/img/product_single_09.jpg" alt="Product Image 9" width={130} height={50}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* /.Third slide */}
                            </div>
                            {/* End Slides */}
                        </div>
                        {/* End Carousel Wrapper */}
                        {/* Start Controls */}
                        <div className="col-1 align-self-center">
                            <a href="#multi-item-example" role="button" data-bs-slide="next">
                                <i className="text-dark fas fa-chevron-right"></i>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        {/* End Controls */}
                    </div>
                </div>
                 {/* col end  */}
                <div className="col-lg-7 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="h2">Active Wear</h1>
                            <p className="h3 py-2">$25.00</p>
                            <p className="py-2">
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                            </p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h6>Brand:</h6>
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted"><strong>Easy Wear</strong></p>
                                </li>
                            </ul>

                            <h6>Description:</h6>
                            <p>The slug is: {slug}</p>
                            {/* <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h6>Avaliable Color :</h6>
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted"><strong>White / Black</strong></p>
                                </li>
                            </ul> */}

                            <h6>Specification:</h6>
                            <ul className="list-unstyled pb-3">
                                <li>Lorem ipsum dolor sit</li>
                                <li>Amet, consectetur</li>
                                <li>Adipiscing elit,set</li>
                                <li>Duis aute irure</li>
                                <li>Ut enim ad minim</li>
                                <li>Dolore magna aliqua</li>
                                <li>Excepteur sint</li>
                            </ul>

                            <form action="" method="GET">
                                <input type="hidden" name="product-title" value="Activewear" /> 
                                {/* <div className="row">
                                    <div className="col-auto">
                                        <ul className="list-inline pb-3">
                                            <li className="list-inline-item">Size :
                                                <input type="hidden" name="product-size" id="product-size" value="S" />
                                            </li>
                                            <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                                            <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                                            <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                                            <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul className="list-inline pb-3">
                                            <li className="list-inline-item text-right">
                                                Quantity
                                                <input type="hidden" name="product-quanity" id="product-quanity" value="1" />
                                            </li>
                                            <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                            <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                                            <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                                        </ul>
                                    </div>
                                </div> */}
                                <div className="row pb-3">
                                    <div className="col d-grid">
                                        <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                    </div>
                                    <div className="col d-grid">
                                        <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Slider
                infinite={true}
                arrows={false}
                slidesToShow={4}
                slidesToScroll={3}
                dots={true}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]}
            >
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
                {/* Add more slides here */}
            </Slider>
    </div>
  )
}

export default Product
