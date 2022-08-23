import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav className="mt-4">
        <h4 className="pt-5">Complete your Purchase</h4>
        <ul className="d-flex justify-content-between list-unstyled mt-3 mb-5">
          <li>
            <NavLink className="nav-link fw-bold" to={`/`}
            style={({ isActive }) => ({ color: isActive ? 'hsl(28, 87%, 62%)' : 'hsl(0, 0%, 74%)' })}
            >
              Personal Info
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link fw-bold" to={`/billing`}
            style={({ isActive }) => ({ color: isActive ? 'hsl(28, 87%, 62%)' : 'hsl(0, 0%, 74%)' })}
            >
              Billing Info
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link fw-bold" to={`/payment-confirmation`}
            style={({ isActive }) => ({ color: isActive ? 'hsl(28, 87%, 62%)' : 'hsl(0, 0%, 74%)' })}
            >
              Confirm Payment
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
