import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchProduct(slug);
    }
  }, [slug]);

  const { addItem } = useCart();

  const fetchProduct = async (slug) => {
    try {
      const response = await fetch(
        `https://loyalty.techamis.com/api/v2/get_products_list?slug=${slug}`
      );
      const json = await response.json();
      const matchedProduct = json?.data.find(
        (product) => product.slug === slug
      );
      setProduct(matchedProduct || null);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.start_price,
        image: product.thumb_image,
        description: product.short_description,
        sku: product.sku,
        slug: product.slug,
      };
      addItem(newItem);
      toast.success("Item Added to the cart successfully", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {product ? (
        <section className="bg-light">
          <div className="container pb-5">
            <div className="row">
              <div className="col-lg-5 mt-5">
                <div className="card mb-3">
                  {product.thumb_image ? (
                    <img
                      className="card-Image img-fluid"
                      src={product.thumb_image}
                      alt="Card image cap"
                      id="product-detail"
                    />
                  ) : (
                    <img
                      className="card-Image img-fluid"
                      src="/assests/img/product_single_10.jpg"
                      alt="Card image cap"
                      id="product-detail"
                    />
                  )}
                </div>
                <div className="row">
                  {/* Start Controls */}
                  <div className="col-1 align-self-center">
                    <a
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <i className="text-dark fas fa-chevron-left"></i>
                      <span className="sr-only">Previous</span>
                    </a>
                  </div>
                  {/* End Controls */}
                  {/* Start Carousel Wrapper */}
                  <div
                    id="multi-item-example"
                    className="col-10 carousel slide carousel-multi-item"
                    data-bs-ride="carousel"
                  >
                    {/* Start Slides */}
                    <div
                      className="carousel-inner product-links-wap"
                      role="listbox"
                    >
                      {/* First slide */}
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-4">
                            <a href="#">
                              <Image
                                className="card-Image img-fluid"
                                src="/assests/img/product_single_01.jpg"
                                alt="Product Image 1"
                                width={130}
                                height={50}
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <Image
                                className="card-Image img-fluid"
                                src="/assests/img/product_single_02.jpg"
                                alt="Product Image 2"
                                width={130}
                                height={50}
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <Image
                                className="card-Image img-fluid"
                                src="/assests/img/product_single_03.jpg"
                                alt="Product Image 3"
                                width={130}
                                height={50}
                              />
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
                              <Image
                                className="card-Image img-fluid"
                                src="/assests/img/product_single_04.jpg"
                                alt="Product Image 4"
                                width={130}
                                height={50}
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <Image
                                className="card-Image img-fluid"
                                src="/assests/img/product_single_05.jpg"
                                alt="Product Image 5"
                                width={130}
                                height={50}
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <Image
                                className="card-Image img-fluid"
                                src="/assests/img/product_single_06.jpg"
                                alt="Product Image 6"
                                width={130}
                                height={50}
                              />
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
                              <Image
                                className="card-Image img-fluid"
                                src="/assests/img/product_single_07.jpg"
                                alt="Product Image 7"
                                width={130}
                                height={50}
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <Image
                                className="card-Image img-fluid"
                                src="/assests/img/product_single_08.jpg"
                                alt="Product Image 8"
                                width={130}
                                height={50}
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <Image
                                className="card-Image img-fluid"
                                src="/assests/img/product_single_09.jpg"
                                alt="Product Image 9"
                                width={130}
                                height={50}
                              />
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
                    <a
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="next"
                    >
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
                    <h1 className="h2">Active Wear: {product.name}</h1>
                    <p className="h3 py-2">${product.start_price}</p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <h6>Brand:</h6>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted">
                          <strong>Easy Wear</strong>
                        </p>
                      </li>
                    </ul>

                    <h6>Description: {product.short_description}</h6>
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

                    <form onSubmit={(e)=>{ e.preventDefault()}}>
                      <input
                        type="hidden"
                        name="product-title"
                        value="Activewear"
                      />
                      <div className="row pb-3">
                        <div className="col d-grid">
                          {/* <button
                            type="submit"
                            className="btn btn-success btn-lg"
                            name="submit"
                            value="buy"
                          >
                            Buy
                          </button> */}
                        </div>
                        <div className="col d-grid">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg"
                            name="submit"
                            value="addtocard"
                            onClick={handleAddToCart}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
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
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {/* <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div> */}
        {/* Add more slides here */}
      </Slider>
    </div>
  );
};

export default Product;
