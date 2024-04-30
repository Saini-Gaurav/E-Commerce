import React, { useState } from "react";

const Checkout = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "pincode") {
      setPincode(e.target.value);
    } else if (e.target.name == "city") {
      setCity(e.target.value);
    } else if (e.target.name == "state") {
      setState(e.target.value);
    }
  };
  return (
    <div>
      <div className="container">
        <h2 className="mx-auto mt-4" style={{ width: "200px" }}>
          Checkout
        </h2>
        <h4>Delivery Details</h4>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onChange={handleChange}
              value={name}
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={handleChange}
              value={email}
              type="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <textarea
              onChange={handleChange}
              value={address}
              type="textarea"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <textarea
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              onChange={handleChange}
              value={phone}
              type="phone"
              className="form-control"
              id="phone"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <input
              onChange={handleChange}
              value={state}
              type="text"
              className="form-control"
              id="inputCity"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              District
            </label>
            <input
              onChange={handleChange}
              value={city}
              type="text"
              id="inputCity"
              className="form-control"
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              onChange={handleChange}
              value={pincode}
              type="text"
              className="form-control"
              id="inputZip"
            />
          </div>
        </form>
        <div className="m-4">
          <span>Subtotal: </span>
        </div>
        <button type="button" className="btn btn-primary btn-lg btn-block mb-4">
          Pay ₹
        </button>
      </div>
    </div>
  );
};

export default Checkout;
