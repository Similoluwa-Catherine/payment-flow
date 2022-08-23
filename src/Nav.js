import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="pt-5">
      <nav>
        <h4>Complete your Purchase</h4>
        <ul className="d-flex justify-content-between list-unstyled mb-4">
          <li>
            <NavLink className="nav-link fw-bold" to={`/`}
            style={({ isActive }) => ({ color: isActive ? 'hsl(28, 87%, 62%)' : 'hsl(0, 0%, 74%)'})}
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
