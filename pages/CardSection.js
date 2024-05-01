import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

const CardSection = () => {
  const router = useRouter();
  const { query, replace } = router;
  const [products, setProducts] = useState([]);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const data = await fetch(
      "https://loyalty.techamis.com/api/v2/get_products_list"
    );
    const json = await data.json();
    console.log(json);
    setProducts(json?.data || []);
  };

  useEffect(() => {
    if (query.category_id) {
      fetchProducts(query.category_id);
    }
  }, [query.category_id]);

  const fetchProducts = async (category_Id) => {
    try {
      // Ensure category_Id is provided before making the API call
      if (category_Id === undefined) {
        return;
      }

      const response = await fetch(
        `https://loyalty.techamis.com/api/v2/get_products_list?category_id=${category_Id}`
      );
      const json = await response.json();
      console.log(json);
      setProducts(json?.data || []);
      setFilteredList(json?.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle error
    }
  };

  const handleCategoryClick = (category_Id) => {
    replace({
      pathname: router.pathname,
      query: { ...query, category_id: category_Id }, // Merge with existing query parameters
    });
    // Check if category_Id is defined before calling fetchProducts
    if (category_Id !== undefined) {
      fetchProducts(category_Id);
    }
  };

  const [filteredList, setFilteredList] = useState(products.data);

  const searchHandler = useCallback(() => {
    const filteredData = products.filter((product) => {
      return product.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredList(filteredData);
  }, [inputValue, products]);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchHandler();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="h2 pb-4">Categories</h1>
          <ul className="list-unstyled templatemo-accordion">
            <li className="pb-3">
              <Link href={""} legacyBehavior>
                <a
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  onClick={() => handleCategoryClick(1)}
                >
                  Flora
                  <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                </a>
              </Link>
            </li>
            <li className="pb-3 cursor-pointer">
              <Link href={""} legacyBehavior>
                <a
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  onClick={() => handleCategoryClick(2)}
                >
                  Phenix
                  <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                </a>
              </Link>
            </li>
            <li className="pb-3">
              <Link href={""} legacyBehavior>
                <a
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  onClick={() => handleCategoryClick(3)}
                >
                  BigzT
                  <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-9">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-inline shop-top-menu pb-3 pt-1">
                <li className="list-inline-item">
                  <a
                    className="h3 text-dark text-decoration-none mr-3"
                    href="#"
                  >
                    All
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="h3 text-dark text-decoration-none mr-3"
                    href="#"
                  >
                    Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 pb-4">
              <div className="d-flex">
                <form
                  action=""
                  method="get"
                  className="modal-content modal-body border-0 p-0"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="inputModalSearch"
                      name="q"
                      placeholder="Search ..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="input-group-text bg-success text-light"
                    >
                      <i className="fa fa-fw fa-search text-white"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            {inputValue.length > 0
              ? filteredList.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    className="col-md-4 text-decoration-none"
                  >
                    <div>
                      <div className="card mb-4 product-wap rounded-0 h-95">
                        <div className="card rounded-0">
                          {product.thumb_image ? (
                            <img
                              className="card-img rounded-0 img-fluid"
                              src={product.thumb_image}
                              style={{ height: "200px", objectFit: "cover" }}
                            />
                          ) : (
                            <img
                              className="card-img rounded-0 img-fluid"
                              src="assests/img/product_single_10.jpg"
                              style={{ height: "200px", objectFit: "cover" }}
                            />
                          )}
                          <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul className="list-unstyled">
                              <li>
                                <button className="btn btn-success text-white">
                                  <i className="far fa-heart"></i>
                                </button>
                              </li>
                              <li>
                                <button className="btn btn-success text-white mt-2">
                                  <i className="far fa-eye"></i>
                                </button>
                              </li>
                              <li>
                                <Link href={"/Cart"}>
                                  <button className="btn btn-success text-white mt-2">
                                    <i className="fas fa-cart-plus"></i>
                                  </button>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body" style={{ height: "200px" }}>
                          <p className="h3">
                            Description: {product?.short_description}
                          </p>
                          <p className="mb-0">Price: ${product?.start_price}</p>
                          <p className="mb-0">Name: {product?.name}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              : products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    className="col-md-4 text-decoration-none"
                  >
                    <div>
                      <div className="card mb-4 product-wap rounded-0 h-95">
                        <div className="card rounded-0">
                          {product.thumb_image ? (
                            <img
                              className="card-img rounded-0 img-fluid"
                              src={product.thumb_image}
                              style={{ height: "200px", objectFit: "cover" }}
                            />
                          ) : (
                            <img
                              className="card-img rounded-0 img-fluid"
                              src="assests/img/product_single_10.jpg"
                              style={{ height: "200px", objectFit: "cover" }}
                            />
                          )}
                          <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul className="list-unstyled">
                              <li>
                                <button className="btn btn-success text-white">
                                  <i className="far fa-heart"></i>
                                </button>
                              </li>
                              <li>
                                <button className="btn btn-success text-white mt-2">
                                  <i className="far fa-eye"></i>
                                </button>
                              </li>
                              {/* <li>
                                <Link href={"/Cart"}>
                                  <button className="btn btn-success text-white mt-2">
                                    <i className="fas fa-cart-plus"></i>
                                  </button>
                                </Link>
                              </li> */}
                            </ul>
                          </div>
                        </div>
                        <div className="card-body" style={{ height: "200px" }}>
                          <p className="h3">
                            Description: {product?.short_description}
                          </p>
                          <p className="mb-0">Price: ${product?.start_price}</p>
                          <p className="mb-0">Name: {product?.name}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
