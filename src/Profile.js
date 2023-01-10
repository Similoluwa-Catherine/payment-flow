import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    address1: "",
    address2: "",
  });
  const [localGovernment, setLocalGovernment] = useState("");
  const [state, setState] = useState("");

  return (
    <div className="container-fluid d-flex justify-content-center row">
      <div className="col-xl-8 col-md-8">
        <Nav />
        <div className="main-content mt-5">
          <form>
            <div className="column col-sm">
              <div className="col-md-12 form-group">
                <label className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  className="form-control input"
                />
              </div>
              <div className="col-md-12 form-group mt-4">
                <label className="form-label fw-bold">
                  Email Address<span className="text-danger ms-2">*</span>
                </label>
                <p className="email-note">
                  The purchase receipt would be sent to this address
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className="form-control input"
                />
              </div>
              <div className="col-md-12 form-group mt-4">
                <label className="form-label fw-bold">Address 1</label>
                <input
                  type="text"
                  value={address.address1}
                  onChange={(e) => setAddress(e.target.value)}
                  name="address1"
                  className="form-control input"
                />
              </div>
              <div className="col-md-12 form-group mt-4">
                <label className="form-label fw-bold">Address 2</label>
                <input
                  type="text"
                  value={address.address2}
                  onChange={(e) => setAddress(e.target.value)}
                  name="address2"
                  className="form-control input"
                />
              </div>
              <div className="row mt-5">
                <div className="col-md-6 form-group">
                  <label className="form-label fw-bold">Local Government</label>
                  <input
                    type="text"
                    value={localGovernment}
                    onChange={(e) => setLocalGovernment(e.target.value)}
                    name="localGovernment"
                    className="form-control input"
                  />
                </div>
                <div className="col-md-6 form-group mt-4 mt-lg-0 mt-md-0">
                  <label className="form-label fw-bold">State</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    name="state"
                    className="form-control input"
                  />
                </div>
              </div>
            </div>
          </form>
          <div>
            <Link to={`/billing`}>
              <button className="fw-bold me-lg-5 me-md-5 me-3" type="button">
                Next
              </button>
            </Link>
            <a href="./#">Cancel Payment</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
