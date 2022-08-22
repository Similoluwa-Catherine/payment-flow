import confirmed from "./images/confirmed.png";
import { Link } from "react-router-dom";

const PaymentConfirmation = () => {


    return (
      <div className="confirmation container-fluid d-flex justify-content-center row">
          <div className="col-xl-8 col-md-8">
            <div className="card confirmation-card">
              <div className="card-body p-4">
                <div className="d-flex justify-content-center pb-1">
                    <div className="confirmed shadow-sm">
                    <div className="pt-2 d-flex justify-content-center">
                    <img className="confirmed-icon" src={confirmed} alt="confirmed"/>
                    </div>
                    </div>
                </div>
                <h4 className="fs-2 mb-3">Purchase Completed</h4>
                <p>Please check your email for details concerning this transaction</p>
                <Link className="return fw-normal text-decoration-underline" to={`/`}>
                  Return Home
                </Link>
              </div>
            </div>
          </div>
      </div>
    )
  }   
  export default PaymentConfirmation;