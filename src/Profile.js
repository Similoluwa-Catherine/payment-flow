import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from './Nav';

const Profile = () => {
    const [name, setName] = useState("Opara Linus Ahmed");
    const [email, setEmail] = useState("OparaLinusAhmed@devmail.com");
    const [address, setAddress] = useState({
        address1: "",
        address2: ""
    });
    const [localGovernment, setLocalGovernment] = useState("Surulere");
    const [state, setState] = useState("Lagos");


  return (
    <div className="container-fluid d-flex justify-content-center row">
        <div className="col-xl-8 col-md-8">
                <h4 className="pt-5">Complete your Purchase</h4>
                <Nav />            
                <form>
                    <div className="column col-sm">
                        <div className="col-md-12 form-group">
                            <label className="form-label fw-bold">Name</label>
                            <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                            className="form-control input"/>    
                        </div>
                        <div className="col-md-12 form-group mt-4">
                            <label className="form-label fw-bold">Email Address<span
                            className="text-danger ms-2">*</span></label>
                            <p className="email-note">The purchase receipt would be sent to this address</p>
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                className="form-control input"/>    
                        </div>
                        <div className="col-md-12 form-group mt-4">
                            <label className="form-label fw-bold">Address 1</label>
                            <input type="text"
                                value={address.address1}
                                placeholder="The address of the user goes here"
                                onChange={(e) => setAddress(e.target.value)}
                                name="address1"
                                className="form-control input"/>    
                        </div>
                        <div className="col-md-12 form-group mt-4">
                            <label className="form-label fw-bold">Address 2</label>
                            <input type="text"
                                value={address.address2}
                                placeholder="and here"
                                onChange={(e) => setAddress(e.target.value)}
                                name="address2"
                                className="form-control input"/>    
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6 form-group">
                                <label className="form-label fw-bold">Local Government</label>
                                <input type="text"
                                    value={localGovernment}
                                    onChange={(e) => setLocalGovernment(e.target.value)}
                                    name="localGovernment"
                                    className="form-control input"/>    
                            </div>
                            <div className="col-md-6 form-group">
                                <label className="form-label fw-bold">State</label>
                                <select 
                                    className="form-select select"
                                    onChange={(e) => setState(e.target.value)}>
                                    <option>
                                        {state}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            <div>
              <Link to={`/billing`}>
                <button className= "fw-bold me-5" type="button">Next</button>
              </Link>
              <a href="./#">Cancel Payment</a>
            </div>
        </div>
    </div>
  )
}   
export default Profile;
