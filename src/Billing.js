import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Billing = () => {
  const [cardName, setCardName] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <div className="container-fluid d-flex justify-content-center row">
      <div className="col-xl-8 col-md-8">
        <Nav />
        <div className="main-content mt-4">
          <form>
            <div className="column col-sm">
              <div className="col-md-12 form-group">
                <label className="form-label fw-bold">
                  Name on Card<span className="text-danger ms-2">*</span>
                </label>
                <input
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  name="name"
                  className="form-control input"
                />
              </div>
              <div className="col-md-12 form-group mt-4">
                <label className="form-label fw-bold">
                  Card Type<span className="text-danger ms-2">*</span>
                </label>
                <select
                  className="form-select select"
                  value={cardType}
                  onChange={(e) => setCardType(e.target.value)}
                >
                  <option defaultValue={cardType}>Select card type</option>
                  <option>Visa</option>
                  <option>Master Card</option>
                  <option>Verve</option>
                </select>
              </div>
              <div className="row mt-5">
                <div className="col-md-6 form-group">
                  <label className="form-label fw-bold">
                    Card Details<span className="text-danger ms-2">*</span>
                  </label>
                  <input
                    type="text"
                    value={cardDetails}
                    onChange={(e) => setCardDetails(e.target.value)}
                    name="name"
                    className="form-control input"
                  />
                </div>
                <div className="col-md-4 form-group mt-4 mt-lg-0 mt-md-0">
                  <label className="form-label fw-bold">
                    Expiry Date<span className="text-danger ms-2">*</span>
                  </label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    name="name"
                    className="form-control input"
                  />
                </div>
                <div className="col-md-2 form-group mt-4 mt-lg-0 mt-md-0">
                  <label className="form-label fw-bold">
                    CVV<span className="text-danger ms-2">*</span>
                  </label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    name="name"
                    className="form-control input"
                  />
                </div>
              </div>
            </div>
          </form>
          <div>
            <Link to={`/billing/details`}>
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
export default Billing;

