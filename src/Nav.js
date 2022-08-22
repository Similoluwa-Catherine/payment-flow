import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="mt-4">
            <ul className="d-flex justify-content-between list-unstyled mt-3 mb-5">
              <li><Link className="nav-link" to={`/`}>Personal Info</Link></li>
              <li><Link className="nav-link" to={`/billing`}>Billing Info</Link></li>
              <li><Link className="nav-link" to={`/payment-confirmation`}>Confirm Payment</Link></li>
            </ul>
        </nav>
    );
  }
  
  export default Nav;