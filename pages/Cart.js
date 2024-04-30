import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const [cartLoaded, setCartLoaded] = useState(false);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems: cartTotalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(cartTotalItems);
  }, [cartTotalItems]);

  useEffect(() => {
    setCartLoaded(true);
  }, []);

  console.log(items);

  if (!cartLoaded) return null;

  if (isEmpty) return <h1 className="text-center pt-8 pb-8">Your cart is empty</h1>;
  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {totalItems} items</h5>
                </div>
                {items.map((item) => (
                  <div key={item.id} className="card-body">
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          {item.thumb_image ? (
                            <img
                              src={item.thumb_image}
                              className="w-100"
                              alt={item.name}
                            />
                          ) : (
                            <img
                              src="/assests/img/product_single_10.jpg"
                              className="w-100"
                              alt={item.name}
                            />
                          )}
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{item.name}</strong>
                        </p>
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-tooltip-init
                          title="Remove item"
                          onClick={() => removeItem(item.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary px-3 me-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <div data-mdb-input-init className="form-outline">
                            <label className="form-label" htmlFor="form1">
                              Quantity: {item.quantity}
                            </label>
                          </div>

                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary px-3 ms-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>

                        <p className="text-start text-md-center">
                          <strong>Price: ${item.start_price}</strong>
                        </p>
                      </div>
                    </div>

                    <hr className="my-4" />
                  </div>
                ))}
              </div>
              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-danger btn-sm mb-2"
                data-mdb-tooltip-init
                title="Move to the wish list"
                onClick={() => emptyCart()}
              >
                Clear Cart
              </button>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>${cartTotal}</strong>
                      </span>
                    </li>
                  </ul>
                  <Link href={"/Checkout"}>
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
