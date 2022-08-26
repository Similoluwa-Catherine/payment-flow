import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav className="mt-4">
        <h4>Complete your Purchase</h4>
        <ul className="nav-container d-flex justify-content-between list-unstyled mt-3">
          <li>
            <NavLink
              className="nav-link fw-bold"
              to={`/`}
              style={({ isActive }) => ({
                color: isActive ? "hsl(28, 87%, 62%)" : "hsl(0, 0%, 74%)",
              })}
            >
              Personal Info
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link fw-bold"
              to={`/billing`}
              style={({ isActive }) => ({
                color: isActive ? "hsl(28, 87%, 62%)" : "hsl(0, 0%, 74%)",
              })}
            >
              Billing Info
            </NavLink>
          </li>
          <li style={{color: "hsl(0, 0%, 74%)", fontWeight: 700}}>Confirm Payment</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
