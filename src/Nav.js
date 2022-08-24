import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav className="mt-4">
        <h4>Complete your Purchase</h4>
        <div className="nav-container d-flex justify-content-between list-unstyled mt-3">
          <NavLink className="nav-link fw-bold" to={`/`}
            style={({ isActive }) => ({ color: isActive ? 'hsl(28, 87%, 62%)' : 'hsl(0, 0%, 74%)' })}
          >
            Personal Info
          </NavLink>
          <NavLink className="nav-link fw-bold" to={`/billing`}
            style={({ isActive }) => ({ color: isActive ? 'hsl(28, 87%, 62%)' : 'hsl(0, 0%, 74%)' })}
          >
            Billing Info
          </NavLink>
          <NavLink className="nav-link" to={`/payment-confirmation`}
            style={({ isActive }) => ({ color: isActive ? 'hsl(28, 87%, 62%)' : 'hsl(0, 0%, 74%)' })}
          >
            Confirm Payment
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
