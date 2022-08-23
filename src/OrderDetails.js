import Nav from "./Nav";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  return (
    <div className="container-fluid d-flex justify-content-center row">
      <div className="col-xl-6 col-md-8">
        <Nav />
        <div className="main-content">
          <div className="card">
            <div className="card-header">
              <div className="table-head pe-4 fw-bold ps-4 d-flex justify-content-between">
                <p>Item Name</p>
                <p className="pe-5">&#8358; Price</p>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive pt-3 ps-4">
                <table className="table table-hover table-borderless">
                  <tbody>
                    <tr>
                      <td>Data Science and Usability</td>
                      <td className="fw-bold ps-3">50,000.00</td>
                    </tr>
                    <tr>
                      <td className="pt-3">Shipping</td>
                      <td className="text-black ps-5 pt-3">0.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pe-4 ps-4">
                <hr className="line" />
                <div className="total d-flex justify-content-between border mb-2 mt-4 me-4 ms-2">
                  <p className="ps-2 mt-3">Total</p>
                  <p className="mt-3 fw-bold">50,000.00</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link to={`/payment-confirmation`}>
              <button className="fw-bold me-5" type="button">
                Pay
              </button>
            </Link>
            <a href="./#">Cancel Payment</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;
