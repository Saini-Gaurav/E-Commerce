import { checkValidData } from "@/utils/validate";
import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useFirebase } from "@/utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@/utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const { auth } = useFirebase();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      name.current?.value,
      email.current?.value,
      password.current?.value,
      isSignInForm
    );
    setErrorMessage(message);
    if (message) {
      return;
    }
  
    // Sign Up and Sign In Logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Fetch updated user information from Firebase
              const updatedUser = auth.currentUser;
              const { uid, email, displayName } = updatedUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="p-4 bg-dark my-5 shadow rounded"
          >
            <h1 className="font-bold text-3xl py-4 text-white">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            <div className="mb-4">
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                />
              )}
            </div>
            <div className="mb-4">
              <input
                ref={email}
                type="email"
                placeholder="Email Address"
                className="form-control"
              />
            </div>
            <div className="mb-4">
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
            <p className="text-danger fw-bold fs-5 py-2">{errorMessage}</p>
            <button
              className="btn btn-danger btn-lg w-100 mb-4"
              onClick={handleButtonClick}
            >
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
