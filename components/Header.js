"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { useFirebase } from "@/utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "@/utils/userSlice";
import { useRouter } from "next/router";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { totalItems: cartTotalItems } = useCart();
  const [totalItems, setTotalItems] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { auth } = useFirebase();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // setIsLoggedIn(false); // Update isLoggedIn state to false when user signs out
        // router.push("/Login");
      })
      .catch((error) => {
        router.push("/error");
        // redirect("/error")
      });
  };

  useEffect(() => {
    setTotalItems(cartTotalItems);
  }, [cartTotalItems]);

  useEffect(() => {
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName } = user;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          setIsLoggedIn(true);
        } else {
          dispatch(removeUser());
          setIsLoggedIn(false);
        }
      });

      return () => {
        // Clean up the subscription when component unmounts
        unsubscribe();
      };
    }
  }, [auth]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <Link href={"/"} legacyBehavior>
            <a className="navbar-brand text-success logo h1 align-self-center">
              <Image
                width={130}
                height={50}
                src="/assests/img/logo.png"
                alt="logo"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-center mx-lg-auto">
                <li className="nav-item">
                  <Link href={"/"} legacyBehavior>
                    <a className="nav-link px-3">Home</a>
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link href={"/Shop"} legacyBehavior>
                    <a className="nav-link">Shop</a>
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link href={"/Contact"} legacyBehavior>
                    <a className="nav-link">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <Link href={"/Cart"} legacyBehavior>
                <a className="nav-icon position-relative text-decoration-none">
                  <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                    {totalItems}
                  </span>
                </a>
              </Link>
              <Link href={"/Login"} legacyBehavior>
                <a
                  className="nav-icon position-relative text-decoration-none"
                  onMouseEnter={() => isLoggedIn && setIsHovering(true)}
                  onMouseLeave={() => isLoggedIn && setIsHovering(false)}
                >
                  <i className="fa fa-fw fa-user text-dark mr-3"></i>
                  {isLoggedIn && isHovering && (
                    <span
                      className="position-absolute top-100 start-50 translate-middle badge rounded-pill bg-light text-dark mt-2"
                      style={{ zIndex: "1" }}
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </span>
                  )}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="modal fade bg-white"
        id="templatemo_search"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            action=""
            method="get"
            className="modal-content modal-body border-0 p-0"
          >
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
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
  );
};

export default Header;
