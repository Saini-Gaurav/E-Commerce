import React from "react";

const FeatureProduct = () => {
  return (
    <div>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Featured Product</h1>
              <p>
                Discover our handpicked selection of standout products,
                showcasing the best of what our store has to offer. From premium
                quality to exceptional value, these featured items are sure to
                capture your interest and elevate your shopping experience.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img
                    src="./assests/img/feature_prod_01.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li className="text-muted text-right">Price: $240.00</li>
                  </ul>
                  <a
                    href="shop-single.html"
                    className="h2 text-decoration-none text-dark"
                  >
                    Gym Weight
                  </a>
                  <p className="card-text">
                    Unlock your strength potential with our Gym Weight -
                    meticulously crafted for durability and precision, elevating
                    every workout to new heights.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img
                    src="./assests/img/feature_prod_02.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li className="text-muted text-right">Price: $480.00</li>
                  </ul>
                  <a
                    href="shop-single.html"
                    className="h2 text-decoration-none text-dark"
                  >
                    Cloud Nike Shoes
                  </a>
                  <p className="card-text">
                    Step into the future with Cloud Nike Shoes, where innovation
                    meets comfort in every stride, ensuring you soar above the
                    rest with style and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img
                    src="./assests/img/feature_prod_03.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li className="text-muted text-right">Price: $360.00</li>
                  </ul>
                  <a
                    href="shop-single.html"
                    className="h2 text-decoration-none text-dark"
                  >
                    Summer Addidas Shoes
                  </a>
                  <p className="card-text">
                    Step into summer in style with the latest Adidas shoes,
                    designed to keep you cool and comfortable on any adventure.
                    Elevate your look with these sleek kicks, perfect for both
                    casual outings and active pursuits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureProduct;
