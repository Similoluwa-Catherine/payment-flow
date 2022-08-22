import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from './Nav';

const Billing = () => {
    // const Navigate = useNavigate();
    const [cardName, setCardName] = useState("Opara Linus Ahmed");
    const [cardType, setCardType] = useState("Visa");
    const [cardDetails, setcardDetails] = useState("44960 44960 44960 44960");
    const [expiryDate, setExpiryDate] = useState("04 / 23");
    const [cvv, setCvv] = useState("923");


  return (
    <div className="container-fluid d-flex justify-content-center row">
        <div className="col-xl-8 col-md-8">
                <h4 className="pt-5">Complete your Purchase</h4>
                <Nav />            
                <form>
                    <div className="column col-sm">
                      <div className="col-md-12 form-group">
                        <label className="form-label fw-bold">Name on Card<span
                        className="text-danger ms-2">*</span></label>
                        <input type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        name="name"
                        className="form-control"/>    
                      </div>
                      <div className="col-md-12 form-group mt-4">
                        <label className="form-label fw-bold">Card Type<span
                        className="text-danger ms-2">*</span></label>
                        <select 
                            className="form-select"
                            onChange={(e) => setCardType(e.target.value)}>
                            <option>
                                {cardType}
                            </option>
                        </select>   
                      </div>
                      <div className="row mt-5">
                        <div className="col-md-6 form-group">
                            <label className="form-label fw-bold">Card Details<span
                            className="text-danger ms-2">*</span></label>
                            <input type="text"
                            value={cardDetails}
                            onChange={(e) => setcardDetails(e.target.value)}
                            name="name"
                            className="form-control"/>    
                        </div>
                        <div className="col-md-4 form-group">
                            <label className="form-label fw-bold">Expiry Date<span
                            className="text-danger ms-2">*</span></label>
                            <input type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            name="name"
                            className="form-control"/>    
                        </div>
                        <div className="col-md-2 form-group">
                            <label className="form-label fw-bold">CVV<span
                            className="text-danger ms-2">*</span></label>
                            <input type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            name="name"
                            className="form-control"/>    
                        </div>
                      </div>
                        
                    </div>
                </form>
            <div>
              <Link to={`/billing/details`}>
                <button className= "fw-bold me-5" type="button">Next</button>
              </Link>
              <a href="./#">Cancel Payment</a>
            </div>
        </div>
    </div>
  )
}   
export default Billing;

// onClick={() => Navigate(/payment-confirmation)}