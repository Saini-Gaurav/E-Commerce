import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form className="p-4 bg-dark my-5 shadow rounded">
            <h1 className="font-bold text-3xl py-4 text-white">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            <div className="mb-4">
             {!isSignInForm && <input
                type="text"
                placeholder="Full Name"
                className="form-control"
              /> }
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
            <button className="btn btn-danger btn-lg w-100 mb-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="py-2 cursor-pointer text-white"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Shop? Sign Up Now"
                : "Already Registered? Sign In Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
