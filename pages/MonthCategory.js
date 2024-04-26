import Link from "next/link";
import React, { useEffect, useState } from "react";

const MonthCategory = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const data = await fetch(
      "https://loyalty.techamis.com/api/v2/get_categories_data"
    );
    const json = await data.json();
    console.log(json);
    setCategoryProducts(json?.data || []);
  };

  return (
    <div>
      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Categories of The Month</h1>
            <p>
              Explore our curated selection of trending categories for this
              month, featuring the latest in fashion, tech gadgets, home decor,
              and beyond. Discover top picks and must-haves to elevate your
              shopping experience.
            </p>
          </div>
        </div>
        <div className="row">
          {categoryProducts.map((catProduct) => (
            <div key={catProduct.id} className="col-12 col-md-4 p-5 mt-3">
              <Link href={`/product/${catProduct.slug}`} legacyBehavior>
                <a>
                  {catProduct.cat_image ? (
                    <img
                      src={catProduct.cat_image}
                      className="rounded-circle img-fluid border"
                      alt={catProduct.name}
                    />
                  ) : (
                    <img
                      src="/assests/img/category_img_01.jpg"
                      className="rounded-circle img-fluid border"
                      alt={catProduct.name}
                    />
                  )}
                </a>
              </Link>
              <h5 className="text-center mt-3 mb-3">{catProduct.name}</h5>
              <p className="text-center">
                <a className="btn btn-success">Go Shop</a>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MonthCategory;
